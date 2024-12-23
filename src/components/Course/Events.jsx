"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialSectionCarousel from '../LandingPage/Testimonials';

import events from '@/data/event';

const Events = ({event_type, activities}) => {

    const filteredActivities = activities.filter(activity=>activity.program_type==event_type)
    console.log(filteredActivities)

    const placementDriveInformation = [
        {
            company: "IDS INFOTECH LTD",
            date: "Feb 4, 2024",
            details: "This is the information for B.Pharmacy 2024 passing out students that IDS INFOTECH LTD is conducting a Placement Drive. All the eligible students can register themselves up to 29.01.2024. Date of placement drive is 7th Feb. 2024 at SVIET Campus."
        },
        {
            company: "Aimil Ayouthveda ltd",
            date: "Feb 4, 2024",
            details: "This is the information for B.Pharmacy 2024 passing out students that Aimil Ayouthveda ltd is conducting a Placement Drive. Date of placement drive is 8th Feb. 2024 at SVIET Campus."
        }
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    const settings2 = {
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className='py-6 h-auto items-center'>
            <div className='w-10/12 mx-auto'>
                <div>
                    <p className="text-4xl pt-6 font-medium">
                        Activities and Events
                    </p>
                </div>
                <div className='flex flex-wrap my-6 py-6'>
                    <div className="w-full md:w-1/2 lg:w-2/3">
                        <Slider {...settings}>
                            {filteredActivities.map((info, index) => (
                                <div key={index} className='px-1 h-full'>
                                    <div className="border rounded-md h-[40vh] " style={{ backgroundImage: `url(${info.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                                        <div className="w-full h-full bg-[#00000050] flex flex-col justify-end text-white p-5 ">
                                            <h2 className="text-xl font-semibold">{info.name}</h2>
                                            <p className="mt-2 text-sm line-clamp-3">{info.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="w-full h-full md:w-1/2 lg:w-1/3 px-2">
                        <Slider {...settings2}>
                            {placementDriveInformation.map((info, index) => (
                                <div key={index} className='px-2 h-[40vh]  bg-white rounded'>
                                    <div className="p-5 rounded-md flex flex-col h-full justify-between ">
                                        <div>
                                            <h2 className="text-xl font-semibold">{info.company}</h2>
                                            <p className='text-sm font-medium'>{info.date}</p>
                                            <p className="mt-2 text-xs">{info.details}</p>
                                        </div>
                                        <div>
                                            <button className='bg-[#fea700] text-white p-1 rounded-sm'>Know More</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

            </div>
            <TestimonialSectionCarousel />
        </div>
    );
}

export default Events