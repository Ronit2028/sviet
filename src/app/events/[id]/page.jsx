import React from 'react'
import Header from '../../../components/Globals/events/Header'
import Register from '../../../components/Globals/events/Register'
import Eligibility from '../../../components/Globals/events/Eligibility'
import Overview from '../../../components/Globals/events/Overview'
import Details from '../../../components/Globals/events/Details'
import Mentors from '../../../components/Globals/events/Mentors'
import { RiGalleryFill } from 'react-icons/ri'
import { CgYoutube } from 'react-icons/cg'
import events from '../../../data/event'

const page = ({ params }) => {
    const id  = params.id
    const event = events.find(singleEvent => singleEvent.id === parseInt(id))
    console.log(event)
    // if (!event) {
    //     return (
    //         <div className="min-h-screen flex items-center justify-center">
    //             <div className="text-center">
    //                 <h1 className="text-4xl font-bold text-black mb-4">Event Not Found</h1>
    //                 <p className="text-gray-600">The event you're looking for doesn't exist.</p>
    //             </div>
    //         </div>
    //     )
    // }
    return (
        <div key={event.id} className='bg-gray-100 pb-12'>
            <Header header={event.headerImage} />
            <Details logo={event.logo} name={event.name} chapter={event.chapter} venue={event.venue} />
            <Register date={event.date} venue={event.venue} />
            <div className='w-10/12 my-6  mx-auto flex flex-row-reverse flex-wrap'>
                <div className='w-full lg:w-1/3 '>

                    <Eligibility eventType={event.photogallery} />
                </div>
                <div className='w-full lg:w-2/3 pr-0 lg:pr-6'>
                    <Overview overview={event.overview} name={event.name} />

                </div>
            </div>
            <div className="w-10/12 mx-auto">
                <Mentors speakers={event.speakers} type={event.guest_type} />
                {/* <Partners partners={event.partners} /> */}
            </div>
        </div>
    )
}

export default page