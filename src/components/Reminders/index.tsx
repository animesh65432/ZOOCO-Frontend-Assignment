import React from 'react'
import Title from './Title'
import Calendar from './Calendar'
import Remider from './Reminder'
import AddRemider from './Add'
import Footer from './Footer'
import { LoaderCircle } from 'lucide-react';
import { useGetReminders } from "../../actions/reminder"


const Reminders: React.FC = () => {
    const { data: reminders, isLoading } = useGetReminders()

    return (
        <>
            <Title />
            <Calendar />
            {
                isLoading &&
                <div className='h-[20vh] flex justify-center items-center'>
                    <LoaderCircle className='h--8 w-8 animate-spin text-center' />
                </div>
            }
            {
                reminders?.map((reminder) =>
                    <Remider
                        key={reminder._id}
                        _id={reminder._id}
                        pet={reminder.pet}
                        title={reminder.title}
                        frequency={reminder.frequency}
                        ReminderTime={reminder.ReminderTime}
                    />)

            }
            <AddRemider />
            <Footer />
        </>
    )
}

export default Reminders