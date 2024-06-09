"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Tracker = () => {

    const reasons = [
        {
            title: "https://sviet.ac.in/wp-content/uploads/2024/02/company-visited.png",
            desc:"Highest Package (last 5 years trends)"
        },
        {
            title: "https://sviet.ac.in/wp-content/uploads/2024/02/Average-Package.png",
            desc:"Average Package (Last 5 Years Trend)"
        },
        {
            title: "https://sviet.ac.in/wp-content/uploads/2024/02/students-selected.png",
            desc:"Students Selected (Last 5 Years Trend)"
        },
        {
            title: "https://sviet.ac.in/wp-content/uploads/2024/02/company-visited.png",
            desc:"Companies Visited (Last 5 Years Trend)"
        },
    ];


    const settings = {
        infinite: true,
        dots: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3, // Show 2.5 slides on desktop
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
        <div className='w-10/12 py-12 mx-auto'>
            <p className="text-4xl pb-3 font-medium">
                Our Milestone Placements
            </p>
            <p className="text-lg pl-2 border-l-4 border-[#fea700]">
                A Journey Full of Achievements
            </p>
            <div className='flex justify-end gap-2'>
                <button className='h-7 w-7 bg-[#fea700] text-white rounded-md'><i className='fa fa-arrow-left'></i></button>
                <button className='h-7 w-7 bg-[#fea700] text-white rounded-md'><i className='fa fa-arrow-right'></i></button>
            </div>
            <Slider {...settings}>
                        {reasons.map((reason, index) => (
                            <div key={index} className='mt-6 h-[45vh] lg:h-[50vh] flex items-center p-3'>
                                <div className="bg-white flex flex-col justify-center h-full rounded-md text-[#00112d] p-6">
                                    <img src={reason.title} alt="" srcSet="" width={"100%"}/>
                                    <p className="text-lg text-center">
                                        {reason.desc}
                                        </p>  
                                </div>
                            </div>
                        ))}
                    </Slider>
        </div>
    )
}

export default Tracker