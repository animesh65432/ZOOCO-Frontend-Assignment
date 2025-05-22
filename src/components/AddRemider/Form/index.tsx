import { useState, forwardRef } from 'react'
import PetSelect from './PetSelect'
import CategorySelect from './CategorySelect'
import RemiderInfo from './RemiderInfo'
import RemiderSettings from './RemiderSettings'
import { CateGory, pets } from "../../../utils/data"
import { reminderSchema } from "../../../schema/RemiderSchema"
import type { ReminderFormData } from "../../../schema/RemiderSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateReminder } from "../../../actions/reminder"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Form = forwardRef<HTMLFormElement>((props, ref) => {
    const [selected, setSelected] = useState(pets[0])
    const [CateGorySelected, SetCateGorySelected] = useState(CateGory[0])
    const [isCateGoryClicked, SetCaterGoryClicked] = useState<boolean>(false)
    const [isPetClicked, setPetClicked] = useState<boolean>(false)
    const navigate = useNavigate()
    const { mutateAsync } = useCreateReminder();


    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        watch,
        getValues
    } = useForm<ReminderFormData>({
        resolver: zodResolver(reminderSchema),
        defaultValues: {
            pet: pets[0].value,
            category: CateGory[0].name,
            title: '',
            note: '',
            startDate: new Date(),
            endDate: null,
            time: new Date(),
            frequency: 'Once'
        }
    })

    const onClickpet = (pet: { name: string, value: string, img: string }) => {
        setSelected(pet)
        setPetClicked(false)
        setValue('pet', pet.value)
    }

    const OnclickSelect = (cateGory: { name: string, icon: string }) => {
        SetCateGorySelected(cateGory)
        SetCaterGoryClicked(false)
        setValue('category', cateGory.name)
    }

    const onSubmit = async (data: ReminderFormData) => {
        await mutateAsync({
            pet: data.pet,
            category: data.category,
            title: data.title,
            startDateTime: data.startDate,
            endDateTime: data.endDate!,
            frequency: data.frequency,
            ReminderTime: data.time,
            notes: data.note,
        });
        console.log(props)
        toast.success("successfully create it")
        navigate("/")

    }

    return (
        <form ref={ref} onSubmit={handleSubmit(onSubmit)} className='mt-3 flex flex-col gap-7'>
            <div className="flex gap-2">
                <PetSelect
                    setPetClicked={setPetClicked}
                    isPetClicked={isPetClicked}
                    onClickpet={onClickpet}
                    selected={selected}
                    error={errors.pet?.message}
                />
                <CategorySelect
                    CateGorySelected={CateGorySelected}
                    isCateGoryClicked={isCateGoryClicked}
                    OnclickSelect={OnclickSelect}
                    SetCaterGoryClicked={SetCaterGoryClicked}
                    error={errors.category?.message}
                />
            </div>
            <RemiderInfo
                register={register}
                errors={errors}
            />
            <RemiderSettings
                control={control}
                errors={errors}
                setValue={setValue}
                watch={watch}
                getValues={getValues}
            />
        </form>
    )
})

Form.displayName = 'Form'

export default Form