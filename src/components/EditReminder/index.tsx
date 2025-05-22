import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import { useUpdateReminder } from "../../actions/reminder";
import { LoaderCircle } from "lucide-react"

type EditReminderProps = {
    isOpen: boolean;
    onClose: () => void;
    _id: string;
    title: string;
    pet: string;
    frequency: string;
    ReminderTime: string;
};

const EditReminder: React.FC<EditReminderProps> = ({
    isOpen,
    onClose,
    _id,
    title,
    pet,
    frequency,
    ReminderTime,
}) => {
    if (!isOpen) return null;

    const initialTime = useMemo(() => {
        if (!ReminderTime) return "";
        const date = new Date(ReminderTime);
        return date.toTimeString().slice(0, 5); // HH:MM
    }, [ReminderTime]);

    const [titleState, setTitleState] = useState(title);
    const [petState, setPetState] = useState(pet);
    const [frequencyState, setFrequencyState] = useState(frequency);
    const [timeState, setTimeState] = useState(initialTime);

    const { mutateAsync, isPending } = useUpdateReminder();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const originalDate = new Date(ReminderTime);
        const [hours, minutes] = timeState.split(":").map(Number);
        originalDate.setHours(hours);
        originalDate.setMinutes(minutes);
        originalDate.setSeconds(0);
        originalDate.setMilliseconds(0);

        try {
            await mutateAsync({
                id: _id,
                data: {
                    title: titleState,
                    pet: petState,
                    frequency: frequencyState,
                    ReminderTime: originalDate.toISOString(),
                },
            });
            onClose();
        } catch (err) {
            console.error("Failed to update reminder", err);
        }
    };

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-transparent bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90vw] max-w-lg relative shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-500 text-3xl font-bold w-10 h-10 flex items-center justify-center hover:text-red-500 transition"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-semibold mb-4 text-center">Edit Reminder</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        className="p-2 border rounded"
                        type="text"
                        value={titleState}
                        onChange={(e) => setTitleState(e.target.value)}
                        placeholder="Title"
                        required
                    />
                    <select
                        className="p-2 border rounded"
                        value={petState}
                        onChange={(e) => setPetState(e.target.value)}
                        required
                    >
                        <option value="Browny">Browny</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                        <option value="Other">Other</option>
                    </select>
                    <select
                        className="p-2 border rounded"
                        value={frequencyState}
                        onChange={(e) => setFrequencyState(e.target.value)}
                        required
                    >
                        <option value="Once">Once</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                    <input
                        className="p-2 border rounded"
                        type="time"
                        value={timeState}
                        onChange={(e) => setTimeState(e.target.value)}
                        required
                    />
                    <button
                        className=" text-white py-2 px-4 rounded addRemider-backgroud transition"
                        type="submit"
                        disabled={isPending}
                    >
                        {isPending ? <LoaderCircle className="h-5 w-5 animate-spin " aria-label="edit" /> : "Save Changes"}
                    </button>
                </form>
            </div>
        </div>,
        document.getElementById("overlay")!
    );
};

export default EditReminder;
