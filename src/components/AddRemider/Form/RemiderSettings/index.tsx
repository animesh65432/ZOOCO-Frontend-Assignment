import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReminderSettings: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isClickedEndDate, SetClickedEndDate] = useState<boolean>(false)
    const [reminderTime, setReminderTime] = useState<Date | null>(new Date());

    return (
        <div className="background-color rounded-md shadow-md overflow-hidden">
            <div className="bg-black text-white p-3 font-semibold rounded-t-md">
                Reminder Settings
            </div>

            <div className="p-4 border-b flex flex-col gap-2">
                <label className="block text-sm font-bold">Start Date</label>
                <div className="mt-1 flex items-center gap-2">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd.MM.yyyy"
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
                <div className='text-neutral-500 font-bold' onClick={() => SetClickedEndDate((prev) => !prev)}>+ Add End Date</div>
            </div>
            {isClickedEndDate &&

                <div className="p-4 border-b">
                    <label className="block text-sm font-bold">End Date</label>
                    <div className="mt-1 flex items-center gap-2">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            minDate={startDate || undefined}
                            dateFormat="dd.MM.yyyy"
                            placeholderText="Select end date"
                            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                </div>
            }

            <div className="p-4 border-b">
                <label className="block text-sm font-bold">Reminder Time</label>
                <div className="mt-1 flex items-center gap-2">
                    <DatePicker
                        selected={reminderTime}
                        onChange={(date) => setReminderTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
            </div>

            <div className="p-4">
                <label className="block text-sm font-bold">Reminder Frequency</label>
                <p className="text-xs text-gray-500">How often should this reminder repeat?</p>
                <select className="border border-gray-300 rounded-md p-2 w-full mt-2">
                    <option>Once</option>
                    <option>Everyday</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                </select>
            </div>
        </div>
    );
};

export default ReminderSettings;
