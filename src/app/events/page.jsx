import React from 'react'
import Header from '@/components/Events/Header'
import Details from '@/components/Events/Details'
import Regsiter from '@/components/Events/Regsiter'
import Overview from '@/components/Events/Overview'
import Eligibility from '@/components/Events/Eligibility'



const page = () => {

    return (
        <div className='bg-gray-100 pb-12'>
            <Header/>
            <Details />
            <Regsiter />
            <div className='w-10/12 my-6  mx-auto flex flex-row-reverse flex-wrap'>
                <div className='w-full lg:w-1/3 '>
                    
                    <Eligibility />
                </div>
                <div className='w-full lg:w-2/3 pr-0 lg:pr-6'>
                    <Overview />
                </div>
            </div>
        </div>
    )
}

export default page