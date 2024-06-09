"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Updates = () => {
    const reasons = [
        {
            title: "Orientation Program",
            description: "Explore your academic interests with a wide range of undergraduate and postgraduate programs to choose from",
            img: "https://sviet.org.in/wp-content/uploads/IMG_1197-scaled-1.jpg"
        },
        {
            title: "Academic Accomplishment",
            description: "Explore your academic interests with a wide range of undergraduate and postgraduate programs to choose from.",
            img: "https://sviet.org.in/wp-content/uploads/IMG_1545-scaled-1.jpg"
        },
        {
            title: "Scholarship Programs Available",
            description: "We offer financial aid opportunities to deserving students, making a quality education accessible.",
            img: "https://sviet.org.in/wp-content/uploads/IMG_1074-scaled-1.jpg"
        },
        {
            title: "Awards & Renowned Rankings",
            description: "Recognized for our excellence, we consistently receive prestigious awards and rank highly in national/regional college rankings.",
            img: "https://sviet.org.in/wp-content/uploads/IMG_1197-scaled-1.jpg"
        }
    ];

    // Settings for React Slick Carousel
    const settings = {
        infinite: false,
        dots: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2.5, // Show 2.5 slides on desktop
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
        <div className='text-white py-12'>
            <div className="w-full h-full bg-[#00112d] py-12">
                <div className="w-10/12 mx-auto py-12">
                    <p className='text-3xl font-medium pb-3'>
                        Global Partnerships
                    </p>
                    <p className='text-xl pl-2 border-l-4 border-[#fea700]'>
                        Parterning With The World For a Better World
                    </p>

                    {/* React Slick Carousel */}
                    <Slider {...settings}>
                        {reasons.map((reason, index) => (
                            <div key={index} className='mt-6 h-[45vh] lg:h-[40vh] flex items-center p-3'>
                                <div className="bg-white h-full  rounded-md text-[#00112d]" style={{ backgroundImage: `url(${reason.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                                    <div className='bg-[#00000099]  p-6 text-white flex flex-col justify-end h-full'>
                                        <div className="">
                                            <h3 className='text-2xl font-meium py-4'>{reason.title}</h3>
                                            <p>{reason.description}</p>
                                        </div>
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
        </div>
    );
}

export default Updates