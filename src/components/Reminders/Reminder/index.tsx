import React from 'react'
import dogicon from "../../../assets/reminders/sharp.svg"
import alarmclock from "../../../assets/reminders/alarm-clock-check.svg"
import dayicon from "../../../assets/reminders/repeat-02.svg"
import { formatTo12HourDot } from "../../../utils"
type Props = {
    id: number,
    name: string,
    petname: string,
    timnig: Date,
    day: string
}

const Remider: React.FC<Props> = ({ name, petname, timnig, day }) => {
    return (
        <div className='w-[90vw] bg-white rounded-md lg:p-8 md:p-5 p-3 flex flex-col lg:gap-7 md:gap-4 gap-2' >
            <div className='md:text-2xl text-xl font-bold '>{name}</div>
            <div className='flex md:text-xl text-sm  lg:gap-14 md:gap-5 gap-4 remider-text-color font-bold'>
                <div className='flex items-center gap-2 md:gap-4 ' >
                    <img src={dogicon} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />{petname}</div>
                <div className='flex items-center gap-2 md:gap-4'>
                    <img src={alarmclock} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />{formatTo12HourDot(timnig)}</div>
                <div className='flex items-center gap-2 md:gap-4'>
                    <img src={dayicon} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />
                    {day}
                </div>
            </div>
        </div>
    )
}

export default Remider