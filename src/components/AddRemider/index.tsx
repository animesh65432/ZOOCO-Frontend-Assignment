import React, { useRef } from 'react'
import Title from './Title'
import Form from './Form'

const AddReminder: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null)

    const handleSave = () => {
        if (formRef.current) {
            formRef.current.dispatchEvent(
                new Event('submit', { bubbles: true, cancelable: true })
            )
        }
    }

    return (
        <>
            <Title onSave={handleSave} />
            <Form ref={formRef} />
        </>
    )
}

export default AddReminder