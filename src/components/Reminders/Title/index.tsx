import React from 'react'

const Title: React.FC = () => {
    return (
        <div className='flex  justify-between w-[90vw] lg:text-3xl md:text-2xl text-xl '>
            <div className=' font-bold'>daily reminders</div>
            <div className='text-neutral-500 font-semibold'>view all</div>
        </div>
    )
}

export default Title