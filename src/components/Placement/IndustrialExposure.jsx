"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../assets/placement/placements/aamil.png"
import img2 from "../../assets/placement/placements/ocean.png"
import img3 from "../../assets/placement/placements/uc.png"
import img4 from "../../assets/placement/placements/value.png"
import img5 from "../../assets/placement/placements/jp.png"
import img6 from "../../assets/placement/placements/decathlon.png"
import img7 from "../../assets/placement/placements/altruist.png"
import img8 from "../../assets/placement/placements/Clicklabs.webp"
import img9 from "../../assets/placement/placements/MBA.webp"
import img10 from "../../assets/placement/placements/RMC.webp"
import img11 from "../../assets/placement/placements/park.webp"
import img12 from "../../assets/placement/placements/manali.webp"
import img13 from "../../assets/placement/placements/jio.jpg"
import img14 from "../../assets/placement/placements/pharma.jpg"
const IndustrialExposure = () => {
    const reasons = [
        // {
        //     title: "Aimil Ayouthveda Ltd",
        //     description: "Aimil Ayouthveda Ltd. conducted a dynamic campus placement drive today at SVGOI for the B.Pharm 2024 batch, with 30 enthusiastic participants.The event showcased a fusion of talent and ambition, setting the stage for promising opportunities in the pharmaceutical industry. ",
        //     img: img1.src
        // },
        // {
        //     title: "Ocean Technologies Pvt. Ltd. ",
        //     description: "Ocean Technologies Pvt. Ltd. makes waves at SVIET campus recruitment drive!Exciting opportunities unfolded for B.Tech and diploma students in EE, ME, CSE, ECE, Civil, and MBA (2024) batches. ",
        //     img: img2.src
        // },
        // {
        //     title: "Utility Contractors",
        //     description: "SVIET's academic prowess shines as 5 bright minds from the B.Tech EE, ME batch of 2023-2024 secure coveted positions at the Utility Contractors Campus Recruitment Drive.",
        //     img: img3.src
        // },
        // {
        //     title: "Value Prospect Consulting",
        //     description: "Value Prospect Consulting's Campus Drive at SVIET: 15 Students Land Dream Jobs! Mr. Pratik guides candidates through a rigorous 4-phase selection process. A big opportunity for the 2023, 2024, and 2025 batches.",
        //     img: img4.src
        // },
        // {
        //     title: "J.P Hospital",
        //     description: "A campus recruitment drive was conducted by J.P Hospital at SVIET for Operation Theatre and DMLT(2024 and 2025 passing out Batch Students only).",
        //     img: img5.src
        // },
        // {
        //     title: "Decathlon",
        //     description: "A campus recruitment drive was conducted by Decathlon held at SVIET for For B. Tech CSE, ECE, EE, Civil, ME, BCA, MCA, BBA, B.com, MBA students.",
        //     img: img6.src
        // },
        // {
        //     title: "Altruist Technologies Pvt Ltd",
        //     description: "Altruist Technologies Pvt Ltd recently conducted a campus recruitment drive at SVIET, targeting B.Tech - CSE students (Super 60, 5th sem).",
        //     img: img7.src
        // },
        //New DATA
        // {
        //     title: "Click Labs",
        //     description: "SVGOI organized a successful placement drive today for the students of MBA and Super60 | Batch 2025 passing out by reputed company Click Labs!",
        //     img: img8.src
        // },
        {
            title: "Survey camp in Manali",
            description: "Students of B.Tech Civil Engineering | Batch 2022 enjoyed an educational survey camp in Manali, applying classroom knowledge in real-world settings. Here's a glimpse of their journey and efforts!  ",
            img: img12.src
        },
        {
            title: "Reliance Mall, Bestech Square, Mohali",
            description: "Students visited Reliance Mall, Mohali, to explore market dynamics. Guided by Mr. Amandeep, they learned about segmentation, targeting, and positioning, gaining insights into consumer behavior and retail tactics. ",
            img: img13.src
        },
        {
            title: "Guru Nanak Hospital, Rajpura",
            description: "On Feb 2, 2024, students underwent hospital training at Guru Nanak Hospital, Rajpura, gaining real-world skills and bridging classroom learning with hands-on application.  ",
            img: img14.src
        },
        {
            title: "Dasmesh Agricultural Industries Pvt Ltd",
            description: "45 commerce and management students visited Dasmesh Agricultural Industries in Malerkotla, witnessing manufacturing processes firsthand. ",
            img: img9.src
        },
        {
            title: "Green Concrete R.M.C Plant",
            description: "TThe Civil Engineering Department arranged a visit to the Green Concrete R.M.C Plant in Tangori, Mohali, for firsthand experience in concrete production and sustainability.",
            img: img10.src
        },
        
        {
            title: "Park Hospital, Patiala",
            description: "On March 18, 2024, the Training and Placement Department coordinated a visit to Park Hospital, Patiala, for Paramedical students in Operation Theatre and Anesthesia Technology. ",
            img: img11.src
        },
    ];

    // Settings for React Slick Carousel
    const settings = {
        infinite: false,
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
        <div className='text-white py-4'>
            <div className="w-full h-full bg-[#00112d] py-12">
                <div className="w-10/12 mx-auto py-12">
                    <p className='text-3xl font-medium pb-3'>
                        Industrial Exposure
                    </p>
                    <p className='text-xl pl-2 border-l-4 border-[#fea700]'>
                        Visits, Traning, Guidance and a lot more
                    </p>

                    {/* React Slick Carousel */}
                    <Slider {...settings}>
                        {reasons.map((reason, index) => (
                            <div key={index} className='mt-6 h-[50vh] lg:h-[50vh] flex items-center p-3'>
                                <div className="bg-white h-full  rounded-md text-[#00112d]" style={{ backgroundImage: `url(${reason.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                                    <div className='bg-[#00000099]  p-6 text-white flex flex-col justify-end h-full'>
                                        <div className="">
                                            <h3 className='text-2xl font-meium py-4'>{reason.title}</h3>
                                            <p className='text-justify'>{reason.description}</p>
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

export default IndustrialExposure