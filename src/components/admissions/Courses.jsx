"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

import bannerImage from '@/assets/LandingPage/bannerImage.jpg'

const Courses = () => {
    const collegeInformation = [
        {
            category: "Undergraduate Programs",
            img: "https://sviet.ac.in/wp-content/uploads/2021/05/2ss-700x400.png",
            // description: "Students leading the search for knowledge with highly equipped research facilities at the campus. More than 100 research articles published at national and international stages."
        },
        {
            category: "Postgraduate Programs",
            img: "https://sviet.ac.in/wp-content/uploads/2021/05/5s-700x400.png",
            // description: "Investigate and respond to authentic & complex challenges and go beyond learning with project-based learning while experiencing enriching experiences."
        },
        {
            category: "Diploma Programs",
            img: "https://sviet.ac.in/wp-content/uploads/2021/05/6s-700x400.png",
            // description: "Compete and achieve excellence with passion under the excellent sporting environment. More than 30 sports tournament participations happening over the Year."
        },
    ];

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
        slidesToShow: 2,
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
                <div className='mt-7'>
                    <Typography
                        color="blue-gray"
                        className="mb-2 font-bold uppercase"

                    >

                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="mb-4 !text-2xl font-bold lg:!text-4xl"

                    >
                        Our Programs
                    </Typography>
                    <Typography
                        variant="lead"
                        className=" !text-gray-500"

                    >
                        A Place Where We Nuture, Grow, Explore & Learn from The Best
                    </Typography>
                </div>
                <div className='flex flex-wrap my-6 py-6 '>
                    <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
                        <div className="w-full grid grid-cols-2 gap-5 md:pr-5">
                            <div className='bg-white rounded-md p-5 shadow-md flex flex-col justify-center'>

                                <p className=" text-4xl mb-3 font-semibold">
                                    3,000
                                </p>

                                <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                                    Offer Letters
                                </p>
                                <p className="font-medium mb-3 text-sm">
                                    Every Year
                                </p>
                            </div>
                            <div className='bg-[#fea700] text-white rounded-md p-5 shadow-md flex flex-col justify-center'>
                                <p className=" text-4xl mb-3 font-semibold">
                                    45 LPA
                                </p>
                                <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                                    Highest Package
                                </p>
                                <p className="font-medium mb-3 text-sm">
                                    Offered
                                </p>
                            </div>
                            <div className=' bg-[#fea700] text-white rounded-md p-5 shadow-md flex flex-col justify-center'>
                                <p className=" text-4xl mb-3 font-semibold">
                                    350
                                </p>
                                <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                                    Companies
                                </p>
                                <p className="font-medium mb-3 text-sm">
                                    Visit Per year
                                </p>
                            </div>
                            <div className='bg-white rounded-md p-5  shadow-md flex flex-col justify-center'>
                                <p className=" text-4xl mb-3 font-semibold">
                                    12000
                                </p>
                                <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                                    Dreams
                                </p>
                                <p className="font-medium mb-3 text-sm">
                                    Fulfilled
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/3 ">
                        <Slider {...settings}>
                            {collegeInformation.map((info, index) => (
                                <div key={index} className='h-full'>
                                    <div className="border rounded-md h-[40vh] " style={{ backgroundImage: `url(${info.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                                        <div className="w-full h-full bg-[#00000050] flex flex-col justify-end text-white p-5 ">
                                            <h2 className="text-xl font-semibold">{info.category}</h2>
                                            <p className="mt-2 text-sm">{info.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Courses