"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Import images (assuming they are correctly imported or paths provided)
import hodImage from '../../assets/iste/Picsart_24-10-07_16-17-04-984.jpg'; // Replace with actual path
import img3 from "../../assets/About/Managemwnt/vishal-sir2.jpg"
import img7 from "../../assets/About/Managemwnt/ankur-sir2.jpg" // Replace with actual path

// Your cards data
const cards = [
    {
        title: "Leadership and Vision from the Desk of the Faculty Adviser",
        name: "Er. Ankur Gill",
        description: `As the Director of Operations at ISTE Swami Vivekanand Institute of Engineering and Technology, I am passionately committed to cultivating an environment of excellence, innovation, and growth within our institution. My focus is on delivering exceptional educational experiences and creating opportunities for our students to excel in their academic and professional pursuits. I am privileged to collaborate with a dedicated team of professionals who share a profound passion for academic advancement and student success. Our mission at ISTE SVIET is to empower students with the knowledge, skills, and values necessary to thrive in an ever-changing world. Together, we aspire to establish a dynamic ecosystem where creativity flourishes, ideas are nurtured, and aspirations are transformed into reality. I firmly believe that, with your unwavering support and commitment, ISTE Swami Vivekanand Institute of Engineering and Technology will continue to achieve remarkable milestones and uphold its reputation for excellence and distinction.`,
        image: img7
    },
    {
        title: "Leadership and Strategy from the Desk of the Faculty Adviser",
        name: "Er. Vishal Garg",
        description: `As the Director of Administration at ISTE Swami Vivekanand Institute of Engineering and Technology, I oversee the operational framework that enables our institute to run efficiently and effectively. My role is to ensure that our students and faculty have access to the best resources, facilities, and support systems, enabling them to thrive in an environment conducive to learning and innovation. Together, we are building an institution that stands at the forefront of educational excellence, with a focus on leadership, sustainability, and continuous improvement.`,
        image: img3
    },
    {
        title: "Leadership and Insight from the Desk of the Faculty Adviser",
        name: "Dr. Shivani Guleria",
        description: `As the Head of the Civil Engineering Department, I am committed to fostering an environment that promotes innovation, creativity, and excellence in our students. Our mission is to equip students with the technical skills and practical knowledge required for successful careers in civil engineering, while also preparing them to contribute to the infrastructure and development of society. We aim to build future leaders who are not only proficient in their field but also conscious of the role civil engineers play in sustainable development.`,
        image: hodImage
    },
];


// Department card component
const DepartmentCard = ({ title, name, description, image }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-3 py-12">
        <div className="flex flex-col justify-center">
            <p className="text-3xl font-medium text-white">{title}</p>
            <p className="text-lg pl-2 border-l-4 border-[#fea700] mt-3 text-white">{name}</p>
            <p className="text-justify pt-6 text-white">
                {description}
            </p>
        </div>
        <div className="flex items-center justify-center">
            <Image
                src={image}
                className="h-[460px] w-4/5 object-cover shadow-md rounded-[10%_0%_10%_0%] border-b-8 border-[#fea700]"
                alt={name}
            />
        </div>
    </div>
);

// Department carousel component
const DepartmentCarousel = () => {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one slide at a time due to the grid layout
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div
            className="mt-16"
            style={{
                backgroundImage: `url(https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-goog/event_wrapup/DSC05771.JPG)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundColor: 'rgba(0, 0, 0, 0.9)', // to add some transparency overlay
                backgroundBlendMode: 'overlay' // ensures the transparency is applied over the background image
            }}
        >
            <div className="py-12 w-10/12 mx-auto lg:mt-[-120px]">
                <Slider {...settings} className="w-full">
                    {cards.map((card, index) => (
                        <div key={index} className="w-[95%] mx-auto px-2">
                            <DepartmentCard
                                title={card.title}
                                name={card.name}
                                description={card.description}
                                image={card.image}
                            />
                        </div>
                    ))}
                </Slider>
                
            </div>
        </div>
    );
};

export default DepartmentCarousel;
