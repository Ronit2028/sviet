"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VisionMission = () => {
    const reasons = [
        {
            title: "Professional Skill Development",
            description: "To equip the students with relevant professional skills in order to guide them towards the bright career with the core values of sincerity, honesty and hard work.",
            iconClass: "fas fa-star"
        },
        {
            title: "Maximum Opportunities",
            description: "To create maximum opportunities for the students for their bright future.",
            iconClass: "fas fa-graduation-cap"
        },
        {
            title: "Employable Graduates",
            description: "To develop employable and market ready graduates who can be an asset for the industry and can play a pivotal role in the nation building.",
            iconClass: "fas fa-money-bill-alt"
        },
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
            <div className="w-full h-full bg-[#00112d]">
                <div className="w-10/12 mx-auto py-12">
                    <p className='text-3xl font-medium pb-3'>
                        Our Vision
                    </p>
                    <p className='text-xl pl-2 border-l-4 border-[#fea700]'>
                        Best Campus Experience, Best Placements and Best Culture
                    </p>

                    {/* React Slick Carousel */}
                    <Slider {...settings}>
                        {reasons.map((reason, index) => (
                            <div key={index} className='mt-6 h-[45vh] lg:h-[50vh] flex items-center p-3'>
                                <div className="bg-white flex flex-col justify-center h-full rounded-md text-[#00112d] p-6">
                                    <div className='flex items-center justify-center p-5 w-20 h-20 rounded-full text-3xl bg-[#00112d] text-white'>
                                        <i className={reason.iconClass}></i>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className='text-2xl font-meium py-4'>{reason.title}</h3>
                                        <p>{reason.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='flex justify-end gap-2'>
                        <button className='bg-[#fea700] h-7 w-7 rounded-md'><i className='fa fa-arrow-left'></i></button>
                        <button className='bg-[#fea700] h-7 w-7 rounded-md'><i className='fa fa-arrow-right'></i></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-full h-full text-black">
                <div className='h-auto lg:h-[75vh] w-full lg:w-1/2 py-12 flex flex-col justify-center'>
                    <div className="w-10/12 mx-auto py-12">
                        <p className='text-3xl font-medium pb-3'>
                            Our Mission
                        </p>
                        <p className='text-xl pl-2 border-l-4 border-[#fea700]'>
                            Best Campus Experience, Best Placements and Best Culture
                        </p>

                        {/* React Slick Carousel */}

                        <p className='text-justify pt-6'>
                            The organization aims to fortify its bonds with industries through robust campus connections, fostering mutually beneficial relationships. It seeks to cultivate enduring partnerships with businesses, facilitating meaningful student placements. Additionally, the organization is committed to offering comprehensive guidance for the holistic development of students and job seekers, ensuring their preparedness for professional endeavors.





                        </p>
                    </div>
                </div>
                <div className='h-[75vh] w-full lg:w-1/2' style={{backgroundImage:"url(https://sviet.org.in/wp-content/uploads/2023/04/Screenshot-153-e1680936110906.png)", backgroundSize:"cover", backgroundPosition:"center center"}}>
                    <div className='h-full w-full bg-[#00000050]'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisionMission