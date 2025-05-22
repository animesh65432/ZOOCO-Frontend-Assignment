import React from 'react'
import downArrowIcon from "../../../../assets/addRemider/PetChevron.svg"
import { CateGory } from "../../../../utils/data"

type Props = {
    CateGorySelected: { name: string, icon: string },
    isCateGoryClicked: boolean,
    OnclickSelect: (pet: { name: string, icon: string }) => void,
    SetCaterGoryClicked: React.Dispatch<React.SetStateAction<boolean>>,
    error?: string
}

const CategorySelect: React.FC<Props> = ({
    CateGorySelected,
    isCateGoryClicked,
    OnclickSelect,
    SetCaterGoryClicked,
    error
}) => {
    return (
        <div className='flex flex-col w-[50%] relative'>
            <label htmlFor='category' className='remider-text-color mb-1'>
                Select Category
            </label>
            <div
                className={`p-2 rounded-md bg-white flex justify-between items-center cursor-pointer border ${error ? 'border-red-500' : 'border-gray-300'
                    } focus-within:ring-2 focus-within:ring-black`}
                onClick={() => SetCaterGoryClicked((prev) => !prev)}
            >
                <div className='flex items-center space-x-2'>
                    {CateGorySelected.icon && (
                        <img src={CateGorySelected.icon} className='w-8 h-8' alt={CateGorySelected.name} />
                    )}
                    <span>{CateGorySelected.name}</span>
                </div>
                <div className='w-5 h-5'>
                    <img src={downArrowIcon} className='w-full object-contain' alt="dropdown arrow" />
                </div>
            </div>

            {error && (
                <span className="text-red-500 text-sm mt-1 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                </span>
            )}

            {isCateGoryClicked &&
                <ul className='absolute top-full left-0 bg-white border border-gray-300 mt-1 w-full z-10 rounded-md shadow-lg max-h-40 overflow-y-auto'>
                    {CateGory.map((cateGory, idx) => (
                        <li
                            key={idx}
                            onClick={() => OnclickSelect(cateGory)}
                            className='p-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer transition-colors duration-150 first:rounded-t-md last:rounded-b-md'
                        >
                            {cateGory.icon && <img src={cateGory.icon} className='w-5 h-5' alt={cateGory.name} />}
                            <span>{cateGory.name}</span>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default CategorySelect