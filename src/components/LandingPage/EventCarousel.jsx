"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventCard = ({ index, imageSrc, description }) => (
    <div className={`event-card rounded-lg py-3 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        <img src={imageSrc} alt="Event" className="w-1/2 mr-4 rounded-lg" />
        <div className="w-1/2 flex items-center p-4">

            <p className="text-white text-lg border-l-4 pl-4 border-[#fea700]">{description}</p>
        </div>
    </div>
);


const EventCarousel = () => {
    const events = [
        {
            index: 0,
            imageSrc: 'https://www.lpu.in/lpu-assets/images/latest-news/Tech-Fluence.jpg',
            description: 'Exciting tech talks and workshops await! Join us for a day filled with innovation and collaboration.',
        },
        {
            index: 1,
            imageSrc: 'https://www.lpu.in/lpu-assets/images/latest-news/Tech-Fluence.jpg',
            description: 'Discover the latest trends and advancements in technology. Network with industry experts and enthusiasts.',
        },
        {
            index: 2,
            imageSrc: 'https://www.lpu.in/lpu-assets/images/latest-news/convocation-2024.jpg',
            description: 'A celebration of achievements and aspirations. Witness the commencement of a new journey filled with possibilities.',
        },
        {
            index: 3,
            imageSrc: 'https://www.lpu.in/lpu-assets/images/latest-news/convocation-2024.jpg',
            description: 'Join us in honoring the dedication and hard work of our graduates. Embrace the spirit of success and excellence.',
        },
        // Add more events here
    ];

    const settings = {
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
    };

    return (
        <div className="w-full h-auto md:h-[80vh] flex justify-center items-center bg-[#00112d] text-white py-10">
            <div className="w-10/12 py-6 flex">
                <div className="w-full md:w-2/3">
                    <Slider {...settings} className="w-full py-6">
                        {events.map((event, index) => (
                            <EventCard key={index} index={index} imageSrc={event.imageSrc} description={event.description} />
                        ))}
                    </Slider>
                </div>
                <div className="text-start w-full md:w-1/3 flex flex-col justify-center p-6">
                    <h1 className="text-4xl font-normal mb-4">Events & Happenings</h1>
                    <p className="text-xl pb-4  font-semibold">
                        Immerse Yourself in a Vibrant Tapestry of Campus Life, Where Every Moment Counts!
                    </p>
                    <p className=" mb-4">
                        Our events showcase the spirit of innovation, collaboration, and excellence, nurturing talents
                        and fostering growth in a dynamic learning environment.
                    </p>
                    <button className='bg-[#fea700] text-white font-lg p-2 w-fit mt-3 rounded-md'>Know More</button>
                </div>
            </div>
        </div>
    );
};

export default EventCarousel;
