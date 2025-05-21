import React from 'react'
import StreakCalendar from '../streakCalender'
import steaksvg from "../../../assets/reminders/zap.svg"

const Calendar: React.FC = () => {
    return (
        <div className='w-[90vw] flex flex-col gap-3'>
            <div className='flex gap-2 items-center'>
                <div>
                    <img src={steaksvg} className='lg:h-8 lg:w-8 md:h-5 md:w-5 h-5 w-5' />
                </div>
                <div className='text-neutral-500 font-semibold lg:text-2xl sm:text-xl text-sm '>
                    your streaks
                </div>
            </div>
            <div className='w-[90vw]'>
                <StreakCalendar />
            </div>
        </div>
    )
}

export default Calendar