import React from 'react'
import backicon from "../../../assets/addRemider/BackButtonContainer.svg"
import { useNavigate } from "react-router-dom"

type Props = {
    onSave: () => void
}

const Title: React.FC<Props> = ({ onSave }) => {
    const navigate = useNavigate()

    return (
        <div className='flex w-[80vw] justify-around items-center'>
            <div
                className="relative lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => navigate("/")}
            >
                <img src={backicon} className='w-full object-contain' alt="Back" />
            </div>
            <div className='font-semibold text-lg'>Add Reminder</div>
            <button
                type="button"
                onClick={onSave}
                className='textCustomGreenColor font-semibold hover:opacity-80 transition-opacity cursor-pointer px-2 py-1 rounded'
            >
                Save
            </button>
        </div>
    )
}

export default Title