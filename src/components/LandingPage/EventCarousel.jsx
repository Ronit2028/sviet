"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// images
import img1 from "../../assets/LandingPage/Events/summit.png"
import img2 from "../../assets/LandingPage/Events/ge.png"
import img3 from "../../assets/LandingPage/Events/pharma.png"

import event from '@/assets/LandingPage/event.jpg'

import events from '@/data/event'

import Link from 'next/link';

const EventCard = ({ index, imageSrc, description }) => (
    <div className={`event-card  w-full rounded-lg md:py-8 flex flex-wrap ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        <img src={imageSrc} alt="Event" className=" w-full md:w-1/2 rounded-lg" />
        <div className="w-full py-3 md:w-1/2 flex items-center md:p-4">
            <p className="text-white text-sm md:text-lg border-l-4 pl-4 border-[#fea700]">{description}</p>
        </div>
    </div>
);

// 3
const EventCarousel = () => {

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 720, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                },
            },
        ],
    };

    const bgs = {
        backgroundImage: `url(${events.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }


    return (
        <div style={{
            backgroundImage: `url(${event.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed"
        }}>
            <div className="w-full h-auto md:h-[100vh] flex justify-center items-center bg-[#00112deb] text-white py-10 overflow-hidden">
                <div className="w-10/12 py-6 flex flex-col flex-wrap-reverse md:flex-row">
                    <div className="w-full lg:w-2/3">
                        <Slider {...settings} className="w-full py-8 md:py-12]">
                            {events.map((event, index) => (
                                <div key={index} className="w-[95%] mx-auto px-2 h-full ">
                                    <div className="event-card rounded-md shadow-md bg-white text-[#00112d] h-[60vh]  flex flex-col justify-between">
                                        <div className="image-section h-1/2" style={{ backgroundImage: `url(${event.headerImage})`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat" }}>

                                        </div>
                                        <div className="text-section my-auto p-6 h-1/2 flex flex-col justify-between">
                                            <div>
                                                <p className="text-lg md:text-xl font-semibold mb-3">
                                                    {event.name}
                                                </p>
                                                <p className='text-sm md:text-md pb-6 line-clamp-4'>
                                                    {event.overview}
                                                </p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p className="text-sm font-semibold text-[#fea700]">
                                                    {event.date}
                                                </p>
                                                <Link href={`/events/${event.id}`}>
                                                    <button className='rounded-md bg-[#fea700] text-white p-2 h-7 w-7 flex justify-center items-center'><i className='fa fa-arrow-right'></i></button>
                                                </Link>  </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="text-start w-full lg:w-1/3 flex flex-col  lg:pl-16 justify-center  md:p-6">
                        <h1 className="lg:text-5xl  text-3xl font-normal mb-4">Events & Happenings</h1>
                        <p className="text-xl pb-4 font-semibold">
                            Immerse Yourself in a Vibrant Tapestry of Campus Life, Where Every Moment Counts!
                        </p>
                        <p className="mb-4">
                            Our events showcase the spirit of innovation, collaboration, and excellence, nurturing talents
                            and fostering growth in a dynamic learning environment.
                        </p>
                        <button className='bg-[#fea700] text-white font-lg p-2 w-fit mt-3 rounded-md'>Know More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCarousel;
