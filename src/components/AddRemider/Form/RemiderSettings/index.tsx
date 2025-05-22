import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller } from 'react-hook-form'
import type { Control, FieldErrors, UseFormSetValue, UseFormWatch, UseFormGetValues } from "react-hook-form"
import type { ReminderFormData } from "../../../../schema/RemiderSchema"

type Props = {
    control: Control<ReminderFormData>,
    errors: FieldErrors<ReminderFormData>,
    setValue: UseFormSetValue<ReminderFormData>,
    watch: UseFormWatch<ReminderFormData>,
    getValues: UseFormGetValues<ReminderFormData>
}

const ReminderSettings: React.FC<Props> = ({ control, errors, setValue, watch, getValues }) => {
    const [isClickedEndDate, SetClickedEndDate] = useState<boolean>(false)
    const startDate = watch('startDate')

    return (
        <div className="background-color rounded-md shadow-md overflow-hidden border border-gray-200">
            <div className="bg-black text-white p-3 font-semibold rounded-t-md">
                Reminder Settings
            </div>


            <div className="p-4 border-b border-gray-200 flex flex-col gap-2">
                <label className="block text-sm font-bold">
                    Start Date <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex flex-col">
                    <Controller
                        name="startDate"
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                selected={field.value}
                                onChange={(date: Date | null) => {
                                    field.onChange(date)
                                    // Reset end date if it's before the new start date
                                    const currentEndDate = getValues('endDate')
                                    if (currentEndDate && date && currentEndDate < date) {
                                        setValue('endDate', null)
                                    }
                                }}
                                dateFormat="dd.MM.yyyy"
                                minDate={new Date()}
                                className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black ${errors.startDate ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholderText="Select start date"
                            />
                        )}
                    />
                    {errors.startDate && (
                        <span className="text-red-500 text-sm mt-1 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.startDate.message}
                        </span>
                    )}
                </div>

                <div
                    className='text-neutral-500 font-bold cursor-pointer hover:text-neutral-700 transition-colors duration-150'
                    onClick={() => SetClickedEndDate((prev) => !prev)}
                >
                    {isClickedEndDate ? '- Remove End Date' : '+ Add End Date'}
                </div>
            </div>


            {isClickedEndDate && (
                <div className="p-4 border-b border-gray-200">
                    <label className="block text-sm font-bold mb-2">End Date</label>
                    <div className="flex flex-col">
                        <Controller
                            name="endDate"
                            control={control}
                            render={({ field }) => (
                                <DatePicker
                                    selected={field.value}
                                    onChange={(date: Date | null) => field.onChange(date)}
                                    minDate={startDate || new Date()}
                                    dateFormat="dd.MM.yyyy"
                                    placeholderText="Select end date"
                                    className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black ${errors.endDate ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    isClearable
                                />
                            )}
                        />
                        {errors.endDate && (
                            <span className="text-red-500 text-sm mt-1 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.endDate.message}
                            </span>
                        )}
                    </div>
                </div>
            )}


            <div className="p-4 border-b border-gray-200">
                <label className="block text-sm font-bold mb-2">
                    Reminder Time <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col">
                    <Controller
                        name="time"
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                selected={field.value}
                                onChange={(date: Date | null) => field.onChange(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black ${errors.time ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholderText="Select time"
                            />
                        )}
                    />
                    {errors.time && (
                        <span className="text-red-500 text-sm mt-1 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.time.message}
                        </span>
                    )}
                </div>
            </div>


            <div className="p-4">
                <label className="block text-sm font-bold mb-1">
                    Reminder Frequency <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-2">How often should this reminder repeat?</p>
                <div className="flex flex-col">
                    <Controller
                        name="frequency"
                        control={control}
                        render={({ field }) => (
                            <select
                                {...field}
                                className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black ${errors.frequency ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            >
                                <option value="">Select frequency</option>
                                <option value="Once">Once</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                            </select>
                        )}
                    />
                    {errors.frequency && (
                        <span className="text-red-500 text-sm mt-1 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.frequency.message}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReminderSettings