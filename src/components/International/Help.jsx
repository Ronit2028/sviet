'use client'

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

// images
import img1 from "../../assets/International/hostel.webp"
import img2 from "../../assets/International/work.webp"
import img3 from "../../assets/International/language.webp"
import img4 from "../../assets/International/visa.webp"
import img5 from "../../assets/International/pickup.webp"
import img6 from "../../assets/International/arrival.webp"

const Carousel = () => {
    useEffect(() => {
        // This prevents SSR issues with Slick Carousel
        const slickScript = document.createElement('script');
        slickScript.src = '/path/to/slick.min.js';
        document.body.appendChild(slickScript);

        return () => {
            document.body.removeChild(slickScript);
        };
    }, []);

    const contentData = [
        {
            image: img1.src,
            title: "Hostel & Ammenties",
            description: "This includes AC room accommodation as well in the hostels. The hostels are provided with all basic facilities including water coolers with water purifiers, common TV room, common reading room, common gym, etc. Adequate dining facilities are available for all hostellers."
        },
        {
            image: img2.src,
            title: "Finding Work",
            description: "We help our students to get best jobs that allow them to focus on their studies while providing them with sufficient pay to cover their daily expenses. Having a job while pursuing education can make students' lives more comfortable by giving them more financial freedom and empowering them to take decisions. It also helps students to learn how to maintain a work-life balance at an early age and offer scope for skill development."
        },
        {
            image: img3.src,
            title: "Language Assistance ",
            description: "For students whose first language is not English, SVGOI offers full-time English programs in the evening or on the weekend to you improve your language skills to meet the academic requirements of your program. We strongly recommend all the international students to join these programs to enhance your English skill’s level.You can discuss your specific language needs with the Academic Advisor."
        },
        {
            image: img4.src,
            title: "Document/ Visa Assistance",
            description: "The documents play the key role while travelling from one county to another. Here at SVGOI, we make a healthy relationship with our students and taking care of them by providing necessery guidance about their documentation. If the documents are in order then it gets easier for you to get travelled from another countly to India."
        },
        {
            image: img5.src,
            title: "Pick up facility:",
            description: "SVIET provides complimentary pick up to its new international students, interested students can avail this complimentary pickup facility by sending an email on this Id dia@sviet.ac along with your arrival details at least one week before the date of arrival in India."
        },
        {
            image: img6.src,
            title: "Support on Arrival",
            description: "There is a lot of support available to help you settle into your studies including from your College, Faculty / Department, the Department of International Affairs. We provide the information and support you need to settle into campus and while departing from campus to your country."
        }
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-11/12 mx-auto pb-10 overflow-hidden m-20">
            <div className="w-11/12 mx-auto flex flex-col align-middle justify-start pb-16">
                <div className="flex mb-5 items-center ">
                    <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
                    <h1 className="text-lg md:text-2xl font-semibold">How we help you</h1>
                </div>
                <h1 className="text-md md:2xl text-justify">We are here to help you make your endless dreams into a living reality. Through our effective networks and expertise, we align you with the best learning oppertunities in the various fields of Medical Sciences, Engineering Technology, Business Management, Social Sciences, and Fine Arts Amongst Others.
                </h1>
            </div>
            <Slider {...settings} className="mx-auto w-11/12">
                {contentData.map((slide, index) => (
                    <div key={index} className="px-4 flex items-center justify-center h-full">
                        <div className="rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                            <img src={slide.image} alt={`Image ${index + 1}`} className="w-full h-1/2 object-cover rounded-lg md:w-1/2" />
                            <div className="p-4 flex flex-col justify-center md:w-1/2">
                                <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">{slide.title}</h2>
                                <p className="text-center md:text-left">{slide.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* <div className="w-11/12 mx-auto">
            <h2 className="text-2xl mt-10 font-semibold mb-4">Contact Us :</h2>
            <div className="w-full  flex gap-3 items-center">
                <div className="flex items-center mb-2">
                    <FaPhone className="mr-2 text-[#ff9602]" />
                    <a href="tel:+918847488524" className="text-md md:text-lg">+91 88474 88524</a>
                </div>
                <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-[#ff9602]" />
                    <a href="mailto:Dia@sviet.ac.in" className="text-md md:text-lg">Dia@sviet.ac.in</a>
                </div>
            </div>
            </div> */}
        </div>
    );
};

export default Carousel;
