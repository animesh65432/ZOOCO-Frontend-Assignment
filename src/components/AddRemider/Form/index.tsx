import React, { useState } from 'react'
import PetSelect from './PetSelect'
import CategorySelect from './CategorySelect'
import RemiderInfo from './RemiderInfo'
import RemiderSettings from './RemiderSettings'
import { CateGory, pets } from "../../../utils/data"

const Form: React.FC = () => {
    const [selected, setSelected] = useState(pets[0])
    const [CateGorySelected, SetCateGorySelected] = useState(CateGory[0])
    const [isCateGoryClicked, SetCaterGoryClicked] = useState<boolean>(false)
    const [isPetClicked, setPetClicked] = useState<boolean>(false)

    const onClickpet = (pet: { name: string, value: string, img: string }) => {
        setSelected(pet)
        setPetClicked(false)
    }

    const OnclickSelect = (cateGory: { name: string, icon: string }) => {
        SetCateGorySelected(cateGory)
        SetCaterGoryClicked(false)
    }

    return (
        <div className='mt-3 flex flex-col gap-7'>
            <div className="flex gap-2">
                <PetSelect setPetClicked={setPetClicked} isPetClicked={isPetClicked} onClickpet={onClickpet} selected={selected} />
                <CategorySelect
                    CateGorySelected={CateGorySelected}
                    isCateGoryClicked={isCateGoryClicked}
                    OnclickSelect={OnclickSelect}
                    SetCaterGoryClicked={SetCaterGoryClicked}
                />
            </div>
            <RemiderInfo />
            <RemiderSettings />
        </div>
    )
}

export default Form
