import React from 'react'
import Title from './Title'
import Calendar from './Calendar'
// import Remider from './Reminder'
import AddRemider from './Add'
import Footer from './Footer'
import { LoaderCircle } from 'lucide-react';
import { useGetReminders } from "../../actions/reminder"

const Reminders: React.FC = () => {
    const { data, isLoading } = useGetReminders()
    console.log(data, isLoading)
    return (
        <>
            <Title />
            <Calendar />
            {
                isLoading &&
                <div className='h-[20vh] flex justify-center items-center'>
                    <LoaderCircle className='h-4 w-4 animate-spin text-center' />
                </div>
            }
            {/* {
                data.map((remider) =>
                    <Remider
                        key={remider.id}
                        name={remider.name}
                        petname={remider.petname}
                        timnig={remider.timnig}
                        id={remider.id}
                        day={remider.day}
                    />)
            } */}
            <AddRemider />
            <Footer />
        </>
    )
}

export default Reminders