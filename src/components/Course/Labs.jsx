"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for computer science engineering labs
const labsData = [
    {
        title: "Networking Lab",
        description: "Explore networking concepts and protocols in a hands-on environment.",
        image: "https://img.freepik.com/free-photo/young-network-engineers-with-laptop-medium-shot_23-2148323445.jpg?t=st=1709908001~exp=1709911601~hmac=c3d4450ba5e76647c7841ce135b6fbdb86aed47eb4b18651e453b02b19ab2492&w=996"
    },
    {
        title: "Database Management Lab",
        description: "Practice database design, implementation, and management techniques.",
        image: "https://img.freepik.com/free-photo/woman-crouching-near-special-equipment-smiling-camera_259150-60337.jpg?t=st=1709908169~exp=1709911769~hmac=6c8239fe2d3b141575ca7e84fe52830cd11903713222d9c5df9e9c50142a0d2d&w=996"
    },
    {
        title: "Software Development Lab",
        description: "Develop and test software applications using industry-standard tools and methodologies.",
        image: "https://img.freepik.com/free-photo/people-studying-peacefully-library_23-2148844711.jpg?t=st=1709908245~exp=1709911845~hmac=fb0cdcf87b36b97400930ea70a82927b208aadfd5d43e825a170d09fe86ae0d7&w=996"
    }
    // Add more labs as needed
];

const Labs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Autoplay enabled
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='w-10/12 mx-auto py-12'>
            <p className="text-3xl font-medium pb-3">
                Laboratories
            </p>
            <div className='flex flex-wrap justify-between'>
                <p className='text-xl pb-6'>
                    Where Theories Meet Fun
                </p>
                <div className='flex gap-2'>
                    <button className='bg-[#fea700] text-white w-7 h-7 rounded-md'><i className='fa fa-arrow-left'></i></button>
                    <button className='bg-[#fea700] text-white w-7 h-7 rounded-md'><i className='fa fa-arrow-right'></i></button>
                </div>
            </div>
            <Slider {...settings}>
                {labsData.map((lab, index) => (
                    <div key={index} className='p-3 h-[50vh] md:h-[35vh]' >
                        <div className='h-full w-full rounded-md' style={{ backgroundImage: `url(${lab.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>

                            <div className='h-full w-full bg-[#00000069] text-white flex flex-col justify-end p-6'>
                                <h3 className='text-2xl font-medium border-[#fea700] border-l-4 pl-2 mb-3'>{lab.title}</h3>
                                <p className='text-lg'>{lab.description}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Labs;
