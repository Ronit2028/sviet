import React from 'react'
import Header from '@/components/contact-us/Header'
import ContactForm from '@/components/contact-us/ContactForm'
import Contacts from '@/components/contact-us/Contacts'
import Map from '@/components/contact-us/Map'
import OtherContacts from '@/components/contact-us/OtherContacts'
import data from '@/data/data'
const page = () => {
    return (
        <div>
            <Header />
            <div className='rounded-md flex flex-col-reverse w-11/12 mt-[-50px] lg:flex-row flex-wrap  lg:w-10/12 mx-auto shadow-md lg:mt-[-125px]'>
                <div className='w-full lg:w-1/4'>
                    <Contacts  />
                </div>
                <div className='w-full bg-white lg:w-3/4'>
                    <ContactForm/>
                    <Map />
                </div>
            </div>

            <div className='bg-gray-100'>

                <OtherContacts />

            </div>
        </div>
    )
}

export default page