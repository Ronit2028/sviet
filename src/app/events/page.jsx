import React from 'react'
import Header from '@/components/Events/Header'
import Details from '@/components/Events/Details'
import Regsiter from '@/components/Events/Regsiter'
import Overview from '@/components/Events/Overview'
import Eligibility from '@/components/Events/Eligibility'
import Guests from '@/components/Events/Guests'
import { RiGalleryFill } from 'react-icons/ri'
import { CgYoutube } from 'react-icons/cg'


const page = () => {

    return (
        <div className='bg-gray-100 pb-12'>
            <Header />
            <Details />
            <Regsiter />
            <div className='w-10/12 my-6  mx-auto flex flex-row-reverse flex-wrap'>
                <div className='w-full lg:w-1/3 '>

                    <Eligibility />
                </div>
                <div className='w-full lg:w-2/3 pr-0 lg:pr-6'>
                    <Overview />
                </div>
                <div className="w-full">
                    <p className="text-xl md:text-3xl font-bold pt-12">
                        Chief Guests
                    </p>
                    <Guests />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
                        <div className="w-full bg-[#fea700] p-6 text-white rounded-md flex flex-wrap items-center gap-4">
                            <RiGalleryFill className='h-5 w-5' />
                            <p className='text-lg font-semibold'>
                                Event Photo Gallery
                            </p>
                        </div>
                        <div className="w-full bg-[#fea700] p-6 text-white rounded-md flex flex-wrap items-center gap-4">
                            <CgYoutube className='h-5 w-5' />
                            <p className='text-lg font-semibold'>
                                Event Video
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page