import React, { useState } from 'react'

const RemiderInfo: React.FC = () => {
    const [isOptionalNoteClicked, setOptionalClicked] = useState<boolean>(false)
    return (
        <div className='flex flex-col bg-white rounded-md'>
            <div className='bg-black text-white rounded-md p-3 font-bold'>Reminder Info</div>
            <div className='p-4 flex flex-col gap-4'>
                <div className='font-semibold' >Set a reminder for…</div>
                <input placeholder='Type here...' className='everyday-color w-[100%] p-2 rounded-md m-auto'></input>
            </div>
            <div onClick={() => setOptionalClicked((prev) => !prev)} className='flex p-2 justify-between border-t-1 border-black font-bold'>
                Add Notes (Optional)
                <span className='textCustomGreenColor everyday-color p-1 rounded-lg'>Add</span>
            </div>
            {isOptionalNoteClicked &&
                <div className='flex flex-col gap-4 mb-2'>
                    <input placeholder='Type here...' className='everyday-color w-[90%] p-2 rounded-md m-auto'></input>
                </div>}
        </div>

    )
}

export default RemiderInfo