"use client"

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import placement from '@/assets/LandingPage/Unlock/DSC00510.jpg'
import placement2 from '@/assets/LandingPage/Unlock/DSC00544.jpg'
import placement3 from '@/assets/LandingPage/Unlock/DSC00769.jpg'
import placement4 from '@/assets/LandingPage/Unlock/DSC00913.jpg'

import { Typography } from '@material-tailwind/react';


const Unlock = () => {
    const sectionData = [
        {
            heading: "Cutting-Edge Laboratories: ",
            subheading: "Explore our state-of-the-art laboratories equipped with the latest technology and equipment, providing hands-on learning experiences for students to excel in their fields.",
            description: "READ MORE",
            img: placement
        },
        {
            heading: "Central Library:",
            subheading: " Immerse yourself in a world of knowledge at our central library, boasting a vast collection of resources and a conducive learning environment to support your academic journey.",
            description: "READ MORE",
            img: placement2
        },
        {
            heading: "Industrial Collaboration:",
            subheading: "Fulfill your academic aspirations with our range of scholarship programs, designed to recognize and support exceptional talent across various disciplines",
            description: "READ MORE",
            img: placement3
        },
        {
            heading: "Scholarship Opportunities: ",
            subheading: "Fulfill your academic aspirations with our range of scholarship programs, designed to recognize and support exceptional talent across various disciplines",
            description: "READ MORE",
            img: placement4
        },
        {
            heading: "Sports Facilities",
            subheading: "Unleash your potential and stay fit at our world - class sports facilities, promoting holistic development and a healthy lifestyle for all students.",
            description: "READ MORE",
            img: placement4
        }
    ];

    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

    return (
        <div className='w-10/12 mx-auto py-10 my-5'>
            <p className="text-4xl text-medium w-full md:w-1/2 mx-auto text-start md:text-center pb-3 mb-3 pt-5">

            </p>
            <p className='text-lg text-medium w-full md:w-1/2 mx-auto text-start md:text-center pb-3 mb-3'>
            </p>


            <Typography
                color="blue-gray"
                className="text-center mb-4 !text-2xl font-bold lg:!text-4xl"
            >
                Unlocking Opportunities at <span className="text-[#fea700]">SVGOI</span> <br /> Empowering Students, Building Futures
            </Typography>
            <Typography
                variant="lead"
                className="text-center !text-gray-500 w-full md:w-1/2 mx-auto mb-5 pb-5"
            >
               Join us at SVIET to unlock endless possibilities and embark on a journey of academic excellence and personal growth.  </Typography>


            <div className='mt-5'>
                <Slider {...settings}>

                    {sectionData.map((section, index) => (
                        <div key={index} className=" w-10/12 mx-auto rounded-md shadow-md text-white">
                            <div className='rounded-md mx-auto md:h-[50vh] h-auto' style={{ backgroundImage: `url(${section.img.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                                <div className='bg-[#00000077] w-full h-full flex flex-col justify-end p-6 py-12'>
                                    <h2 className='text-4xl mb-4'>{section.heading}</h2>
                                    <p className='text-sm lg:text-md w-full lg:w-1/2 mb-2'>{section.subheading}</p>
                                </div>

                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    );
}

export default Unlock;
