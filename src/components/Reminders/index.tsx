import React, { useState } from 'react'
import Title from './Title'
import Calendar from './Calendar'
import Remider from './Reminder'
import AddRemider from './Add'
import Footer from './Footer'
import { LoaderCircle } from 'lucide-react';
import { useGetReminders } from "../../actions/reminder"

const Reminders: React.FC = () => {
    const { data: reminders, isLoading } = useGetReminders()
    const [petFilter, setPetFilter] = useState<string>('All')
    const [categoryFilter, setCategoryFilter] = useState<string>('All')


    const pets = ['All', ...Array.from(new Set(reminders?.map(r => r.pet) || []))]
    const categories = ['All', ...Array.from(new Set(reminders?.map(r => r.category) || []))]


    const filteredReminders = reminders?.filter(r =>
        (petFilter === 'All' || r.pet === petFilter) &&
        (categoryFilter === 'All' || r.category === categoryFilter)
    ) || []

    const groupedByStatus = filteredReminders.reduce((acc, reminder) => {
        const status = reminder.status || 'pending'
        if (!acc[status]) acc[status] = []
        acc[status].push(reminder)
        return acc
    }, {} as Record<string, typeof reminders>)

    return (
        <>
            <Title />
            <Calendar />


            <div className="flex gap-4 my-4 items-center">
                <div className="flex flex-col">
                    <label className="mb-1 text-sm text-neutral-500" htmlFor="pet-filter">Select Pet</label>
                    <select
                        id="pet-filter"
                        value={petFilter}
                        onChange={e => setPetFilter(e.target.value)}
                        className="border p-2 rounded"
                    >
                        {pets.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 text-sm text-neutral-500" htmlFor="category-filter">Select Category</label>
                    <select
                        id="category-filter"
                        value={categoryFilter}
                        onChange={e => setCategoryFilter(e.target.value)}
                        className="border p-2 rounded"
                    >
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
            </div>


            {
                isLoading &&
                <div className='h-[30vh] flex justify-center items-center'>
                    <LoaderCircle className='h-8 w-8 animate-spin text-center' />
                </div>

            }

            {(groupedByStatus['pending']?.length ?? 0) > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold capitalize mb-4">Pending Reminders</h2>
                    {(groupedByStatus['pending'] ?? []).map(reminder => (
                        <Remider
                            key={reminder._id}
                            _id={reminder._id}
                            pet={reminder.pet}
                            title={reminder.title}
                            frequency={reminder.frequency}
                            ReminderTime={reminder.ReminderTime}
                            status={reminder.status}
                        />
                    ))}
                </div>
            )}

            {(groupedByStatus['completed']?.length ?? 0) > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold capitalize mb-4">Completed Reminders</h2>
                    {groupedByStatus['completed']?.map(reminder => (
                        <Remider
                            key={reminder._id}
                            _id={reminder._id}
                            pet={reminder.pet}
                            title={reminder.title}
                            frequency={reminder.frequency}
                            ReminderTime={reminder.ReminderTime}
                            status={reminder.status}
                        />
                    ))}
                </div>
            )}


            <AddRemider />
            <Footer />
        </>
    )
}

export default Reminders