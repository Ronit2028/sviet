"use client"

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SVIETinMedia = () => {

    const mediaUpdates = [
        {
            "imageUrl": "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumDAfu8Cc3imC02hJzTjuAPrdk64eXYnEVlBgZ",
            "name": "Spontania 2025",
            "type": "Cultural Fest",
            "desc": "Spontania 2025, the 3-day vibrant cultural fest at SVIET, witnessed participation from over 600 students across various departments. The event featured energetic dance and singing performances, engaging competitions, and guest appearances, creating an atmosphere of joy, unity, and celebration.",
            "date": "April 15-17, 2025"
          },
          
        {
            "imageUrl": "https://utfs.io/f/1V3V2P4kpAumPXozXKdZ89C4GnNKHTXFvruVyAOm6ZwU2Sib",
            "name": "Elevate 2024: Launching Future",
            "type": "Induction Program",
            "desc": "Elevate 2024, the 3-day induction program at SVIET, welcomed new students with opportunities for growth and inspiration. The event featured cultural programs, panel discussions with startup and industry leaders, and interactive sessions designed to guide students on their journey towards success.",
            "date": "September 11-13, 2024"
          },
          
        {
            imageUrl: "https://utfs.io/f/f265baa5-de33-44b9-a5f3-73cbdff7e0cc-mbjn4f.png",
            name: "Spontania 2K24",
            type: "Annual Cultural Fest",
            desc: "Trending Now: Spontania 2024 Grabs Media Spotlight!Keep your eyes peeled for ongoing media reports from the Spontania 2024! There's always something new on the horizon. Join SVIET and be part of the change!",
            date: "April 13-14, 2024"
        },
        {
            imageUrl: "https://utfs.io/f/ac77c3d6-12fc-4a14-9808-a8e99f92e291-mbjn2n.png",
            name: "Global Future Summit 2024",
            type: "Industrialist & HR Panel Discssion and Ideathon",
            desc: "Global Futures Summit 2024 Grabs Media Spotlight!Keep your eyes peeled for ongoing media reports from the Global Futures Summit 2024! There's always something new on the horizon. Join SVIET and be part of the change!      </p>",
            date: "March 28, 2024"
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
    };

    return (
        <div className='py-12 my-7 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className="py-10 w-full flex flex-col justify-start">
                <p className="text-4xl pb-3 mb-3 font-semibold">
                    <span className="text-[#fea700]">
                        Discover  </span> the
                    <br />
                    Latest News and Insights
                </p>

                <p className='text-md text-gray-800 mt-4 text-justify max-w-lg'>
                Immerse yourself in the vibrant world of SVIET, where every day brings new milestones and stories of inspiration. From dynamic campus events to groundbreaking research and impactful student achievements, we showcase the essence of our thriving academic community.


                </p>
                <p className='text-md text-gray-800 mt-4 text-justify max-w-lg'>Explore our collaborations with industry leaders, celebrate academic breakthroughs, and witness the success stories that define SVIET’s journey towards excellence. Stay updated and be part of our ever-evolving narrative!</p>
                <button className='text-lg text-white rounded-md bg-[#fea700] w-fit p-2 mt-10'>Know More</button>
            </div>
            <div className="w-full ">
                <Slider {...settings}>
                    {
                        mediaUpdates.map((update, index) => (
                            <div className="event-card rounded-md shadow-md" key={index}>
                                <div className="image-section h-[40vh]" style={{ backgroundImage: `url(${update.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat" }}>

                                </div>
                                <div className="text-section p-6">
                                    <div>
                                        <p className="text-xl font-semibold ">
                                            {update.name}
                                        </p>
                                        <p className='text-md pb-6'>
                                            {update.type}
                                        </p>
                                        <p className='text-sm pb-6'>
                                            {
                                                update.desc
                                            }
                                        </p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className="text-sm font-semibold text-[#fea700]">
                                            {update.date}
                                        </p>
                                        {/* <button className='rounded-md bg-[#fea700] text-white p-2 h-7 w-7 flex justify-center items-center'><i className='fa fa-arrow-right'></i></button> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default SVIETinMedia