"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Card,
    CardBody,
    Typography,
    CardHeader,
    Avatar,
} from "@material-tailwind/react";

// images
import img1 from "../../assets/LandingPage/placements/rahul.webp"
import img2 from "../../assets/LandingPage/placements/yash.jpeg"
import img3 from "../../assets/LandingPage/placements/adarsh.webp"
import img4 from "../../assets/LandingPage/placements/amit.webp"

function TestimonialCard({
    img,
    client,
    title,
    clientInfo,
    studentImage,
}) {
    return (
        <Card shadow={false} className="bg-gray-100 shadow-lg rounded-2xl p-6 py-6 w-[95%] h-[40vh] lg:h-[40vh] flex flex-col justify-between">
            <CardHeader color="transparent" floated={false} shadow={false} className='flex items-center'>
                <Typography
                    color="blue-gray"
                    className="lg:mb-20 mb-4 text-md lg:text-xl font-bold my-auto text-justify"
                >
                    &quot;{title}&quot;
                </Typography>
            </CardHeader>
            <CardBody className="px-2 lg:px-4 py-0 flex flex-wrap gap-x-6 justify-between">
                <div>
                    <div className="flex flex-wrap gap-3">
                        <Avatar src={studentImage} className="h-12 w-12 rounded-full" />
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                {client}
                            </Typography>

                            <Typography
                                variant="paragraph"
                                className="font-normal !text-gray-500"
                            >
                                {clientInfo}
                            </Typography>
                        </div>
                    </div>
                </div>
                {/* <img src={img} className="max-h-[4rem] max-w-[8rem]" alt={client} /> */}
            </CardBody>
        </Card>
    );
}

const testimonials = [
    {
        title:
            "Great learning experience and the college provided me with the opportunities needed. Truly outstanding! and really really thankful for the support",
        client: "Gaurav Sharma",
        clientInfo: "SDE",
        img: "https://sviet.ac.in/wp-content/uploads/2020/07/Tata.jpg",
        studentImage: img1.src
    },
    {
        title:
            "It have broadened my horizons and helped me advance my career. The college and management is incredibly supportive towards their students and also providing great learning experience for all",
        client: "Yash Khandelwal",
        clientInfo: "System Engineer",
        img: "https://sviet.ac.in/wp-content/uploads/2022/01/info.png",
        studentImage: img2.src,
    },
    {
        title:
            "The program provided me with the skills and knowledge needed to excel in the field of software development. Highly recommended!",
        client: "Adarsh Kumar",
        clientInfo: "Software Engineer",
        img: "https://sviet.ac.in/wp-content/uploads/2020/07/First-Lady.jpg",
        studentImage: img3.src
    },
    {
        title:
            "The instructors are top-notch and the curriculum is well-structured. I feel well-prepared for my career in data science.",
        client: "Admit Gautam",
        clientInfo: "Software Developer",
        img: "https://sviet.ac.in/wp-content/uploads/2022/01/uu.png",
        studentImage: img4.src
    },
];
export function TestimonialSectionCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
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

    return (
        <section className="px-8 py-8 lg:py-10">
            <div className="w-10/12 mx-auto">
                <Typography
                    variant="h2"
                    color="blue-gray"
                    className=" mt-8 mb-4 !text-2xl lg:!text-4xl"
                >
                    Our Students Speak
                </Typography>
                <Typography
                    variant="lead"
                    className="max-w-3xl !text-gray-500 mb-4 lg:mb-4"
                >
                    Our Reviews Speak for Us
                </Typography>
                <Slider {...settings} className="py-8">
                    {testimonials.map((props, key) => (
                        <TestimonialCard key={key} {...props} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default TestimonialSectionCarousel;
