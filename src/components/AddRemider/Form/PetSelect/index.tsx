import React from 'react'
import downArrowIcon from "../../../../assets/addRemider/PetChevron.svg"
import { pets } from "../../../../utils/data"

type Props = {
    selected: { name: string, value: string, img?: string },
    isPetClicked: boolean,
    onClickpet: (pet: { name: string, value: string, img: string }) => void,
    setPetClicked: React.Dispatch<React.SetStateAction<boolean>>
}
const PetSelect: React.FC<Props> = ({ selected, isPetClicked, onClickpet, setPetClicked }) => {
    return (
        <div className='flex flex-col w-[50%] relative'>
            <label htmlFor='pet' className='remider-text-color mb-1'>Select Pet</label>
            <div className=' p-2 rounded-md bg-white flex justify-between items-center cursor-pointer' onClick={() => setPetClicked((prev) => !prev)}>
                <div className='flex items-center space-x-2'>
                    {selected.img && <img src={selected.img} className='w-8 h-8' />}
                    <span>{selected.name}</span>
                </div>
                <div className='w-5 h-5'>
                    <img src={downArrowIcon} className='w-full object-contain' />
                </div>
            </div>
            {isPetClicked &&
                <ul className='absolute top-full left-0 bg-white border mt-1 w-full z-10'>
                    {pets.map((pet, idx) => (
                        <li key={idx} onClick={() => onClickpet(pet)} className='p-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer'>
                            {pet.img && <img src={pet.img} className='w-5 h-5' />}
                            <span>{pet.name}</span>
                        </li>
                    ))}
                </ul>}
        </div>
    )
}

export default PetSelect