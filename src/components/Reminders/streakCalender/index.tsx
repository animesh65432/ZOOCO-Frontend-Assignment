import { format, startOfWeek, addDays } from 'date-fns';
import bellowarrowicon from "../../../assets/reminders/Vector.svg"
import React from 'react';

const StreamlinedCalendar: React.FC = () => {
    const today = new Date();
    const weekStart = startOfWeek(today, { weekStartsOn: 1 });
    const dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const currentDay = parseInt(format(today, 'd'));
    return (
        <div className="rounded-xl lg:text-2xl sm:text-xl text-sm flex flex-col items-center lg:gap-8 md:gap-5 gap-4  p-4 streamlinedCalendar-Color  text-white shadow-md">
            <div className="text-center   text-black font-bold">
                {format(today, 'MMMM yyyy').toLowerCase()}
            </div>
            <div className='w-[80vw]'>
                <div className="flex justify-between items-center mb-2">
                    {dayNames.map((day, index) => (
                        <div key={index} className="w-8 text-center  text-black font-bold">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    {[...Array(7)].map((_, index) => {
                        const day = addDays(weekStart, index);
                        const dayNum = parseInt(format(day, 'd'));
                        const isSelected = dayNum === currentDay;
                        return (
                            <div key={index} className="w-8 h-8 flex items-center justify-center">
                                <div
                                    className={`
                  w-8 h-8 rounded-full flex items-center font-bold  justify-center text-sm 
                  ${isSelected ? "steakday-color text-black" : 'everyday-color everyday-text-color'}
                `}
                                >
                                    {dayNum}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={bellowarrowicon} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />
            </div>
        </div >
    );
};

export default StreamlinedCalendar;