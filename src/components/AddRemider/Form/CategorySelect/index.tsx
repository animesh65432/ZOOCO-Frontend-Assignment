import React from 'react'
import downArrowIcon from "../../../../assets/addRemider/PetChevron.svg"
import { CateGory } from "../../../../utils/data"

type Props = {
    CateGorySelected: { name: string, icon: string },
    isCateGoryClicked: boolean,
    OnclickSelect: (pet: { name: string, icon: string }) => void,
    SetCaterGoryClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const CategorySelect: React.FC<Props> = ({ CateGorySelected, isCateGoryClicked, OnclickSelect, SetCaterGoryClicked }) => {
    return (
        <div className='flex flex-col w-[50%] relative'>
            <label htmlFor='pet' className='remider-text-color mb-1'>Select Category</label>
            <div className=' p-2 rounded-md bg-white flex justify-between items-center cursor-pointer' onClick={() => SetCaterGoryClicked((prev) => !prev)}>
                <div className='flex items-center space-x-2'>
                    {CateGorySelected.icon && <img src={CateGorySelected.icon} className='w-8 h-8' />}
                    <span>{CateGorySelected.name}</span>
                </div>
                <div className='w-5 h-5'>
                    <img src={downArrowIcon} className='w-full object-contain' />
                </div>
            </div>
            {isCateGoryClicked &&
                <ul className='absolute top-full left-0 bg-white border mt-1 w-full z-10'>
                    {CateGory.map((cateGory, idx) => (
                        <li key={idx} onClick={() => OnclickSelect(cateGory)} className='p-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer'>
                            {cateGory.icon && <img src={cateGory.icon} className='w-5 h-5' />}
                            <span>{cateGory.name}</span>
                        </li>
                    ))}
                </ul>}
        </div>
    )
}

export default CategorySelect