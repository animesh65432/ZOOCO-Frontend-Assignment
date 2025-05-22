import React, { useState } from 'react'
import { motion } from 'framer-motion'
import dogicon from "../../../assets/reminders/sharp.svg"
import alarmclock from "../../../assets/reminders/alarm-clock-check.svg"
import dayicon from "../../../assets/reminders/repeat-02.svg"
import { Trash2, LoaderCircle, CheckCircle2, Pencil } from "lucide-react"
import { formatTo12HourDot } from "../../../utils"
import { useDeleteReminder, useMakeItCompleted } from "../../../actions/reminder"
import EditReminder from '../../EditReminder'


type Props = {
    _id: string,
    pet: string,
    title: string,
    frequency: string,
    ReminderTime: string,
    status: "pending" | "completed"
}

const Remider: React.FC<Props> = ({ _id, pet, title, frequency, ReminderTime, status }) => {
    const { mutateAsync: deleteReminder, isPending: isDeleting } = useDeleteReminder()
    const { mutateAsync: completeReminder, isPending: isCompleting } = useMakeItCompleted()
    const [isEditing, setIsEditing] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='w-[90vw] mb-2 bg-white rounded-md lg:p-8 md:p-5 p-3 flex flex-col lg:gap-7 md:gap-4 gap-2'
        >
            <div className='flex justify-between items-center'>
                <div className={`md:text-2xl text-xl font-bold ${status === "completed" ? "line-through text-neutral-500" : null}`}>{title}</div>


                <div className="flex gap-3">
                    {isDeleting ? (
                        <LoaderCircle className="h-5 w-5 animate-spin text-red-500" aria-label="Deleting..." />
                    ) : (
                        <Trash2
                            className="h-5 w-5 cursor-pointer text-red-500 hover:scale-110 transition-transform"
                            onClick={() => deleteReminder(_id)}
                            aria-label="Delete reminder"
                        />
                    )}

                    {status === "pending" && (
                        isCompleting ? (
                            <motion.div
                                className="h-5 w-5"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            >
                                <LoaderCircle className="h-5 w-5 text-green-500" aria-label="Marking as complete..." />
                            </motion.div>
                        ) : (
                            <CheckCircle2
                                className="h-5 w-5 cursor-pointer text-green-600 hover:scale-110 transition-transform"
                                onClick={() => completeReminder(_id)}
                                aria-label="Mark as completed"
                            />
                        )
                    )}
                    <Pencil className='h-5 w-5 cursor-pointer text-green-600' onClick={() => setIsEditing(true)} />
                </div>

            </div>
            {status === "pending" &&
                < div className='flex md:text-xl text-sm lg:gap-14 md:gap-5 gap-4 remider-text-color font-bold'>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <img src={dogicon} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />
                        {pet}
                    </div>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <img src={alarmclock} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />
                        {formatTo12HourDot(new Date(ReminderTime))}
                    </div>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <img src={dayicon} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />
                        {frequency}
                    </div>
                </div>
            }
            <EditReminder
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}
                title={title}
                pet={pet}
                frequency={frequency}
                ReminderTime={ReminderTime}
                _id={_id}
            />
        </motion.div >
    )
}

export default Remider
