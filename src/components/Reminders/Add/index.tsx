import React from 'react'
import addicon from "../../../assets/reminders/Group.svg"
import { useNavigate } from "react-router-dom"
const AddRemider: React.FC = () => {
    const naviagte = useNavigate()
    return (
        <div className='w-[90vw] flex justify-end' onClick={() => naviagte("/add")}>
            <div className='addRemider-backgroud  rounded-md flex justify-center p-3'>
                <img src={addicon} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />
            </div>
        </div>
    )
}

export default AddRemider