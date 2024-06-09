"use client"

import React from 'react'
import { Typography } from '@material-tailwind/react';
const Contacts = () => {
    const contactDetails = [
        {
            icon: 'phone',
            text: '1800-120-1200, 01762-507 888/222, +91-94652 33333'
        },
        {
            icon: 'email',
            text: 'info@sviet.ac.in, Admission@sviet.ac.in'
        },
        {
            icon: 'fax',
            text: 'Fax: 01762-507333'
        },
        {
            icon: 'location',
            text: 'Village- Ramnagar Near Banur, Tehsil- Rajpura, District- Patiala'
        }
    ];

    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'phone':
                return <div className='bg-white flex-shrink-0 h-8 w-8 text-xl text-[#fea700] flex items-center justify-center rounded-md'><i className="fas fa-phone-alt "></i></div>;
            case 'email':
                return <div className='bg-white flex-shrink-0 h-8 w-8 text-xl text-[#fea700] flex items-center justify-center rounded-md'><i className="fas fa-envelope"></i></div>;
            case 'fax':
                return <div className='bg-white flex-shrink-0 h-8 w-8 text-xl text-[#fea700] flex items-center justify-center rounded-md'><i className="fas fa-fax"></i></div>;
            case 'location':
                return <div className='bg-white flex-shrink-0 h-8 w-8 text-xl text-[#fea700] flex items-center justify-center rounded-md'><i className="fas fa-map-marker-alt"></i></div>;
            default:
                return null;
        }
    };

    return (
        <div className='bg-[#00112d] py-12 h-full'>
            <ul className='w-10/12 mx-auto'>
                <Typography color="blue-gray" className="mb-4 !text-2xl font-bold lg:!text-3xl text-white">
                    Our Contacts
                </Typography>
                {contactDetails.map((detail, index) => (
                    <li key={index} className='flex gap-3 items-center text-md py-5  text-white mb-4 rounded-md h-full'>
                        {renderIcon(detail.icon)} {detail.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Contacts