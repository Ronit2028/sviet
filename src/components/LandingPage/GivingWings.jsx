"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';



import project from '@/assets/LandingPage/Chandigarh/GivingWings/ProjectBased.jpg'
import research from '@/assets/LandingPage/Chandigarh/GivingWings/Research.jpg'
import startup from '@/assets/LandingPage/Chandigarh/GivingWings/startup.jpg'
import initiative from '@/assets/LandingPage/Chandigarh/GivingWings/init.jpg'
import sporting from '@/assets/LandingPage/sports.webp'
import international from '@/assets/LandingPage/Chandigarh/GivingWings/international.webp'
import bannerImage from '@/assets/LandingPage/Chandigarh/GivingWings/banner.jpg'

const GivingWings = () => {
    const collegeInformation = [
        {
            category: "Research",
            img: research.src,
            description: "Students lead research with state-of-the-art facilities. Over 100 articles published nationally and internationally."
        },
        {
            category: "Project-Based Learning",
            img: project.src,
            description: "Engage in authentic challenges with project-based learning, fostering practical skills."
        },
        {
            category: "Sporting Excellence",
            img: sporting.src,
            description: "Excel in sports with over 30 tournament participations annually, fostering passion and skill."
        },
        {
            category: "Startups",
            img: startup.src,
            description: "Incubate innovative entrepreneurship with more than 15 successful startups launched at SVGOI."
        },
        {
            category: "Global Exposure",
            img: international.src,
            description: "Expand horizons with international tie-ups, hosting students from over 10 countries."
        },
        {
            category: "Special Initiatives",
            img: initiative.src,
            description: "Special batches like TheUniques, SUPER-60 and ALLIED-30 assure 100% placement for students."
        }
    ];

    const placementDriveInformation = [
        {
            "company": "IDS INFOTECH LTD",
            "date": "Feb 4, 2024",
            "details": "This is the information for B.Pharmacy 2024 passing out students that IDS INFOTECH LTD is conducting a Placement Drive.  "
            //Date of placement drive is 7th Feb. 2024 at SVIET Campus. All the eligible students can register themselves up to 29.01.2024.
        },
        {
            "company": "Aimil Ayouthveda ltd",
            "date": "Feb 4, 2024",
            "details": "This is the information for B.Pharmacy 2024 passing out students that Aimil Ayouthveda ltd is conducting a Placement Drive."
            // Date of placement drive is 8th Feb. 2024 at SVIET Campus.
        },
        {
            "company": "Ultratech",
            "date": "Confirm after registrations",
            "details": "Ultratech is hiring BBA, MBA 2024 & 2025 students for Vendor management and Purchase positions in Rajpura. Interview: PI Round, HR Round."
            // Salary: 20k/month. Register by 6th May 2024. Offline mode.
        },
        {
            "company": "McKinley Rice",
            "date": "Confirm after registrations",
            "details": "McKinley Rice is hiring for Sales Intern, Business Development Executive, MERN Developer, and Social Media Executive roles in Noida. "
            //Interview: Preliminary Assessment, Core Assessment, HR Round. Salary: 6 LPA. Register by 31st May 2024. Online mode.
        },
        {
            "company": "Shinedezign Infonet Pvt Ltd",
            "date": "Confirm after registration",
            "details": "Shinedezign Infonet is hiring for Content Writer, SEO, QA Fresher’s in Mohali. Interview: Online test, Personal Interview, HR Round. "
            //Salary: Stipend 6 months: 10k/month, then up to 20-35k gross. Register by 3rd June 2024. Online mode.
        },
        {
            "company": "Penthara Technologies",
            "date": "Confirm after registrations",
            "details": "Penthara Technologies is hiring for Cloud Administrator Intern, Project Management Intern, Graphic Designer Intern roles in Mohali. "
            //Interview: Online test, PI Round. Salary: 15k to 25k/month during internship, then 4 LPA to 6.6 LPA. Register by 4th June 2024. Online mode.
        },
        {
            "company": "Ellocent Labs IT Solutions Pvt. Ltd.",
            "date": "Confirm after registrations",
            "details": "Ellocent Labs is conducting a Placement Drive for B. Tech CSE 2024 and B. Tech CSE (Super 60) 2025 students. Job location: Mohali. "
            //Positions: Web Developer, Business Development Executive, Content Writers. Interview: Written Test, One to One Interview. Salary: Up to 15k/month during 3-month training, then up to 3 LPA. Register by 5th May 2024. Offline mode. 18-month bond required.
        },
        {
            "company": "rtCamp",
            "date": "20th May 2024 onwards",
            "details": "rtCamp is conducting a Placement Drive for B. Tech CSE, MCA, BCA, MBA (2024 & 2025). Positions: Software Engineer (Trainee), Business Development Executive, Technical Project Coordinator. "
            //Job: Work from home. Salary: 50k/month for 6 months, then 12-18 LPA. Register by 4th May 2024. Perks: MacBook, health insurance, work from anywhere. Selection: Quiz, Assignment, Interview.
        }
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Add this line
        autoplaySpeed: 3000, // Add this line (speed in milliseconds)
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
        autoplay: true, // Add this line
        autoplaySpeed: 3000, // Add this line (speed in milliseconds)
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
        <div className='py-8 lg:py-8 h-auto lg:h-[120vh] flex items-center bg-gray-100'>
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
                        Giving Wings To Your Career
                    </Typography>
                    <Typography
                        variant="lead"
                        className=" !text-gray-500"

                    >
                        A Place Where We Nuture, Grow, Explore & Learn from The Best
                    </Typography>
                </div>
                <div className='flex flex-wrap my-6 py-6 '>
                    <div className="w-full md:w-1/2 lg:w-2/3 md:pr-5">
                        <Slider {...settings}>
                            {collegeInformation.map((info, index) => (
                                <div key={index} className='h-full'>
                                    <div className="border rounded-md h-[50vh] " style={{ backgroundImage: `url(${info.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                                        <div className="w-full h-full bg-[#00000048] flex flex-col justify-between text-white p-5 ">
                                            <h2 className="text-xl font-semibold">{info.category}</h2>
                                            <p className="mt-2 text-lg font-semibold ">{info.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
                        <div className="w-full grid grid-cols-2 gap-5 lg:pt-0 pt-12">
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
                                    50 LPA
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
                </div>
                <div className="flex flex-wrap py-6">
                    <div className="w-full md:w-1/2 text-white" style={{ backgroundImage: `url(${bannerImage.src})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                        <div className=' p-6 py-10 rounded-md flex flex-col justify-center w-full h-full bg-[#00112d91]'>
                            <p className='text-lg lg:text-2xl font-semibold mb-3'>
                                Bringing the World to SVGOI

                            </p>
                            <p className='text-sm lg:text-lg'>
                            Discover the latest career opportunities with our insightful guidance, propelling you towards success in today's dynamic job market.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Slider {...settings2}>
                            {placementDriveInformation.map((info, index) => (
                                <div key={index} className='lg:px-2 lg:mt-0 mt-6 h-full'>
                                    <div className="p-5 rounded-md flex flex-col h-[25vh] justify-between bg-white">
                                        <div className=''>
                                            <h2 className="text-xl font-semibold">{info.company}</h2>
                                            <p className='text-sm font-medium pt-3'>{info.date}</p>
                                            <p className="mt-2 text-xs text-justify " >{info.details}</p>
                                        </div>
                                        <div>
                                            <button className=' text-[#fea700] font-medium rounded-sm flex items-center gap-1'>Know More <ChevronDoubleRightIcon className='h-4 w-4 font-bold' /></button>
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

export default GivingWings;
