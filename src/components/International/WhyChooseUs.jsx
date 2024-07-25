"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Impeccable Placements",
            description: "We are dedicated to your career success, boasting an impressive track record of placements with top companies.",
            iconClass: "fas fa-star"
        },
        {
            title: "50+ Diverse Programs Offered",
            description: "Explore your academic interests with a wide range of undergraduate and postgraduate programs to choose from.",
            iconClass: "fas fa-graduation-cap"
        },
        {
            title: "Scholarship Programs Available",
            description: "We offer financial aid opportunities to deserving students, making a quality education accessible.",
            iconClass: "fas fa-money-bill-alt"
        },
        {
            title: "Awards & Renowned Rankings",
            description: "Recognized for our excellence, we consistently receive prestigious awards and rank highly in national/regional college rankings.",
            iconClass: "fas fa-award"
        }
    ];

    // Settings for React Slick Carousel
    const settings = {
        infinite: true,
        dots: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3.5, // Show 2.5 slides on desktop
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Tablet breakpoint
                settings: {
                    slidesToShow: 1.5, // Show 1.5 slides on tablet
                }
            },
            {
                breakpoint: 600, // Phone breakpoint
                settings: {
                    slidesToShow: 1, // Show 1 slide on phone
                }
            }
        ]
    };

    return (
        <div className='text-white'>
            <div className="w-full h-full bg-[#00112d] py-12">
                <div className="w-10/12 mx-auto py-12 flex flex-col  ">
                    <p className='text-3xl font-medium pb-3'>
                        Why Choose Us
                    </p>
                    <p className='text-xl pl-2 border-l-4 border-[#fea700]'>
                        Best Campus Experience, Best Placements and Best Culture
                    </p>

                    {/* React Slick Carousel */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-12 ">
                        {reasons.map((reason, index) => (
                            <div key={index} className='w-full flex p-3'>
                                <div className="bg-white flex items-center h-full rounded-md text-[#00112d] p-8 w-full">
                                    <div className='flex flex-shrink-0 bg-gray-100 text-[#fea700] items-center justify-center p-5 w-20 h-20 rounded-md text-3xl'>
                                        <i className={reason.iconClass}></i>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className='text-2xl font-medium pb-2'>{reason.title}</h3>
                                        <p className='text-sm'>{reason.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className='flex justify-end gap-2'>
                        <button className='bg-[#fea700] h-7 w-7 rounded-md'><i className='fa fa-arrow-left'></i></button>
                        <button className='bg-[#fea700] h-7 w-7 rounded-md'><i className='fa fa-arrow-right'></i></button>

                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
