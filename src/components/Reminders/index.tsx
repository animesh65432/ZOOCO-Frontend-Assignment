import React from 'react'
import Title from './Title'
import Calendar from './Calendar'
import Remider from './Reminder'
import AddRemider from './Add'
import Footer from './Footer'
import { data } from "../../utils/data"

const Reminders: React.FC = () => {
    return (
        <>

            <Title />
            <Calendar />

            {
                data.map((remider) =>
                    <Remider
                        key={remider.id}
                        name={remider.name}
                        petname={remider.petname}
                        timnig={remider.timnig}
                        id={remider.id}
                        day={remider.day}
                    />)
            }
            <AddRemider />
            <Footer />
        </>
    )
}

export default Reminders