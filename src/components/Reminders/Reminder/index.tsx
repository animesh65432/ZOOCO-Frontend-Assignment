import React from 'react'
import dogicon from "../../../assets/reminders/sharp.svg"
import alarmclock from "../../../assets/reminders/alarm-clock-check.svg"
import dayicon from "../../../assets/reminders/repeat-02.svg"
import { formatTo12HourDot } from "../../../utils"
type Props = {
    _id: string,
    pet: string,
    title: string,
    frequency: string,
    ReminderTime: string
}

const Remider: React.FC<Props> = ({ pet, title, frequency, ReminderTime }) => {
    return (
        <div className='w-[90vw] bg-white rounded-md lg:p-8 md:p-5 p-3 flex flex-col lg:gap-7 md:gap-4 gap-2' >
            <div className='md:text-2xl text-xl font-bold '>{title}</div>
            <div className='flex md:text-xl text-sm  lg:gap-14 md:gap-5 gap-4 remider-text-color font-bold'>
                <div className='flex items-center gap-2 md:gap-4 ' >
                    <img src={dogicon} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />{pet}</div>
                <div className='flex items-center gap-2 md:gap-4'>
                    <img src={alarmclock} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />{formatTo12HourDot(new Date(ReminderTime))}</div>
                <div className='flex items-center gap-2 md:gap-4'>
                    <img src={dayicon} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />
                    {frequency}
                </div>
            </div>
        </div>
    )
}

export default Remider