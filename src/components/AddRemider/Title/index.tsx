import React from 'react'
import backicon from "../../../assets/addRemider/BackButtonContainer.svg"
import { useNavigate } from "react-router-dom"

const Title: React.FC = () => {
    const naviagte = useNavigate()
    return (
        <div className='flex w-[80vw] justify-around'>
            <div className="relative lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4" onClick={() => naviagte("/")}>
                <img src={backicon} className='w-full object-contain' />
            </div>
            <div className='font-semibold'>Add Reminder</div>
            <div className='textCustomGreenColor font-semibold'>Save</div>
        </div>
    )
}

export default Title