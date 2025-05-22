import React, { useState } from 'react'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { ReminderFormData } from "../../../../schema/RemiderSchema"

type Props = {
    register: UseFormRegister<ReminderFormData>,
    errors: FieldErrors<ReminderFormData>
}

const RemiderInfo: React.FC<Props> = ({ register, errors }) => {
    const [isOptionalNoteClicked, setOptionalClicked] = useState<boolean>(false)

    return (
        <div className='flex flex-col bg-white rounded-md shadow-sm border border-gray-200'>
            <div className='bg-black text-white rounded-t-md p-3 font-bold'>Reminder Info</div>
            <div className='p-4 flex flex-col gap-4'>
                <div className='font-semibold'>
                    Set a reminder for… <span className="text-red-500">*</span>
                </div>
                <div className="flex flex-col">
                    <input
                        {...register('title')}
                        placeholder='Type here...'
                        className={`everyday-color w-full p-2 rounded-md border ${errors.title ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-black`}
                    />
                    {errors.title && (
                        <span className="text-red-500 text-sm mt-1 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.title.message}
                        </span>
                    )}
                </div>
            </div>

            <div
                onClick={() => setOptionalClicked((prev) => !prev)}
                className='flex p-4 justify-between border-t border-gray-200 font-bold cursor-pointer hover:bg-gray-50 transition-colors duration-150'
            >
                Add Notes (Optional)
                <span className={`textCustomGreenColor everyday-color p-1 rounded-lg transition-colors duration-150 ${isOptionalNoteClicked ? 'bg-green-100' : ''
                    }`}>
                    {isOptionalNoteClicked ? 'Hide' : 'Add'}
                </span>
            </div>

            {isOptionalNoteClicked && (
                <div className='flex flex-col gap-4 p-4 pt-0'>
                    <div className="flex flex-col">
                        <input
                            {...register('note')}
                            placeholder='Add any additional notes here...'
                            className={`everyday-color w-full p-2 rounded-md border ${errors.note ? 'border-red-500' : 'border-gray-300'
                                } focus:outline-none focus:ring-2 focus:ring-black`}
                        />
                        {errors.note && (
                            <span className="text-red-500 text-sm mt-1 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.note.message}
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default RemiderInfo