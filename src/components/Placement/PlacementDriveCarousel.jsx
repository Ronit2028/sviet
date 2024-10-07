"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// images
// import img1 from "../../assets/LandingPage/Events/summit.png"
// import img2 from "../../assets/LandingPage/Events/ge.png"
// import img3 from "../../assets/LandingPage/Events/pharma.png"
import img1 from "../../assets/placement/placements/aamil.png"
import img2 from "../../assets/placement/placements/ocean.png"
import img8 from "../../assets/placement/placements/Clicklabs.webp"
import img4 from "../../assets/placement/placements/value.png"
import img3 from "../../assets/placement/placements/placementday.jpg"
import img5 from "../../assets/placement/placements/summit.webp"
import img6 from "../../assets/placement/placements/Fair.jpg"

import event from '@/assets/LandingPage/event.jpg'


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
const PlacementDriveCarousel = () => {

    const events =[
        {
            "id": 1,
            "headerImage": "https://utfs.io/f/1V3V2P4kpAumJrwVw8xviyu6xWXKJ2tVo5vgeS7mwpHlNsha",
            "name": "24x7 Software, Pune - On-Campus Placement Drive",
            "date": "28 September 2024",
            "venue": "SVIET Campus",
            "overview": "Training & Placement Cells, SVIET successfully organized an on-campus placement drive for B.Tech CSE Batch 2025, in collaboration with 24x7 Software, Pune. With over 70 students participating.",
            instagramUrl: "https://www.instagram.com/p/DAdWqXYyDox/?igsh=MTRhNWJuNmpueDlydA=="
          },
          {
            "id": 2,
            "headerImage": "https://utfs.io/f/1V3V2P4kpAum9f113voJQ5AcTPoua6UY3sS7XMiGqmnIVwtL",
            "name": "Skillkart Placement Drive - SVIET",
            "date": "04st October 2024",
            "venue": "SVIET Campus",
            "overview": "The Skillkart Placement Drive at SVIET was a huge success! With over 60+ enthusiastic students from B.Tech (CSE), BCA, MCA, BBA, B.Com, and MBA (Batch 2025) participating, the day was filled with excitement and opportunities.",
            instagramUrl: "https://www.instagram.com/p/DAqREI4yUDv/?igsh=MnR0NXp5ZHp0eTdj"
          },
        {
            id: 3,
            headerImage: img1.src,
            name: "Aimil Ayouthveda Ltd",
            date: "08th February 2024",
            venue: "SVIET Campus",
            overview: "Aimil Ayouthveda Ltd. conducted a dynamic campus placement drive today at SVGOI for the B.Pharm 2024 batch, with 30 enthusiastic participants.The event showcased a fusion of talent and ambition, setting the stage for promising opportunities in the pharmaceutical industry.",
            instagramUrl: "https://www.instagram.com/p/C3FbcjYLm6Z/?igsh=aW5samthendqOXcy"
        },
        {
            id: 4,
            headerImage: img2.src,
            name: "Ocean Technologies Pvt. Ltd.",
            date: "01st December 2023",
            venue: "SVIET Campus",
            overview: "Ocean Technologies Pvt. Ltd. makes waves at SVIET campus recruitment drive!Exciting opportunities unfolded for B.Tech and diploma students in EE, ME, CSE, ECE, Civil, and MBA (2024) batches. ",
            instagramUrl: "https://www.instagram.com/p/C1KYpX5yTIE/?igsh=MmFmNTN0bmtsYjNh"
             
        },
        {
            id: 5,
            headerImage: img8.src,
            name: "Click Labs",
            date: "22nd March 2024",
            venue: "SVIET Campus",
            overview: "SVGOI organized a successful placement drive today for the students of MBA and Super60 | Batch 2025 passing out by reputed company Click Labs!",
            instagramUrl: "https://www.instagram.com/p/C40vGTJycu5/?igsh=MXF1bGh5ZnRmOTllYQ== "
        },
        {
            id: 6,
            headerImage: img4.src,
            name: "Value Prospect Consulting",
            date: "04th April 2024",
            venue: "SVIET Campus",
            overview: "Value Prospect Consulting's Campus Drive at SVIET: 15 Students Land Dream Jobs! Mr. Pratik guides candidates through a rigorous 4-phase selection process. A big opportunity for the 2023, 2024, and 2025 batches.",
            instagramUrl: "https://www.instagram.com/value_prospect_consulting"
        },
        {
            id: 7,
            headerImage: img3.src,
            name: "Placement Day",
            date: "16th May 2024",
            venue: "SVIET Campus",
            overview: "After an incredible Placement Day event at SVIET, we're thrilled to have hosted over 200 students from various colleges and universities across different states, including Govt polytechnic colleges in Khuni Majra, Meham, and Kaithal, as well as esteemed institutions like Punjabi University Patiala and Shaheed Bhagat Singh State University Ferozpur. The energy was contagious as graduates and diploma holders explored exciting job prospects with top companies like #Eclerx, #JustDial, Motherson, Dixon, and more. HR representatives were highly impressed by the quality education provided by our institute. SVGOI, Banur extends heartfelt congratulations to all the selected students! Here's to the beginning of promising career journeys for our future leaders.",
            instagramUrl: "https://www.instagram.com/p/C7BshZDyrv2/?igsh=a2JzOGNqcG01YXlv "
        },
        {
            id: 8,
            headerImage: img5.src,
            name: "Global Futures Summit 2024",
            date: "23rd March 2024",
            venue: "SVIET Campus",
            overview: "Dive into our industry panel session covering market trends and cutting-edge technology! These snapshots capture the dynamic exchange between industry and academia, shaping tomorrow's tech leaders. Join the fusion of insights from both sectors! ",
            instagramUrl: "https://www.instagram.com/p/C42iClgrE8_/?igsh=bGFiN3NudWZjYW4x "
        },
        {
            id: 9,
            headerImage: img6.src,
            name: "Pharma Career Fair 2024",
            date: "09th February 2024",
            venue: "SVIET Campus",
            overview: "Today was an incredible day at SVGOI's Pharma Career Fair 2024! Students had the chance to explore various job opportunities, network with industry leaders, and learn valuable insights about the pharmaceutical industry. The event was buzzing with excitement as students engaged in enlightening conversations during the interview rounds, guided by the lamp of opportunity. It was a day filled with hope, connections, and the promise of a bright future in pharmaceutical careers. Stay tuned for more exciting events and opportunities from SVGOI. Your journey to success starts here! ",
            instagramUrl: "https://www.instagram.com/p/C3ITPrnL7el/?igsh=eXFncXM0cXZydDRq"
        },
       

        

    ];

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
                        <Slider {...settings} className="w-full py-8 md:py-12">
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
                                                <p className='text-sm md:text-md pb-6 line-clamp-4 text-justify'>
                                                    {event.overview}
                                                </p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p className="text-sm font-semibold text-[#fea700]">
                                                    {event.date}
                                                </p>
                                                <Link href={event.instagramUrl} target="_blank">
                                                <button className='rounded-md bg-[#fea700] text-white p-2 h-7 w-7 flex justify-center items-center'><i className='fa fa-arrow-right'></i></button></Link>
                                                    
                                                  </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="text-start w-full lg:w-1/3 flex flex-col  lg:pl-16 justify-center  md:p-6">
                        <h1 className="lg:text-5xl  text-3xl font-normal mb-4">Latest Placement Drives</h1>
                        <p className="text-xl pb-4 font-semibold">
                        Stepping into Your Future with Confidence!
                        </p>
                        <p className="mb-4 text-justify">
                        Our placement drives open doors to top-tier companies, providing students with invaluable opportunities to kickstart their careers and achieve professional success.
                        </p>
                        {/* <button className='bg-[#fea700] text-white font-lg p-2 w-fit mt-3 rounded-md'>Know More</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlacementDriveCarousel;
