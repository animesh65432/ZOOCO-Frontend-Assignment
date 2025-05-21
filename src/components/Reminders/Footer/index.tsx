import React from 'react'
import icon from "../../../assets/reminders/NavIcon.svg"
import icon1 from "../../../assets/reminders/NavItem.svg"
import icon2 from "../../../assets/reminders/packnavbaricon.svg"
import icon3 from "../../../assets/reminders/NavItem(1).svg"

const Footer: React.FC = () => {
    return (
        <div className='w-[100vw] bg-white flex items-center justify-around p-2 md:p-4 lg:p-6'>
            <div>
                <img src={icon} className='md:h-12 md:w-12 h-10 w-10' />
            </div>
            <div>
                <img src={icon1} className='md:h-12 md:w-12 h-10 w-10 ' />
            </div>
            <div className='bg-black rounded-lg text-white flex justify-center items-center p-1'>
                <img src={icon2} className='md:h-12 md:w-12 h-8 w-8' />
                <span>reminders</span>
            </div>
            <div>
                <img src={icon3} className='md:h-12 md:w-12 h-10 w-10' />
            </div>
        </div>
    )
}

export default Footer