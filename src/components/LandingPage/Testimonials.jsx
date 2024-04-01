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

function TestimonialCard({
    img,
    client,
    title,
    clientInfo,
    studentImage,
}) {
    return (
        <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6 w-[95%] h-[50vh] lg:h-[30vh]">
            <CardHeader color="transparent" floated={false} shadow={false}>
                <Typography
                    color="blue-gray"
                    className="lg:mb-20 mb-4 text-2xl font-bold"
                >
                    &quot;{title}&quot;
                </Typography>
            </CardHeader>
            <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between">
                <div>
                    <div className="flex gap-3">
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
                <img src={img} className="max-h-[4rem] max-w-[8rem]" alt={client} />
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
        studentImage: "https://sviet.ac.in/wp-content/uploads/2021/04/pexels-rahul-shah-888956-scaled.jpg"
    },
    {
        title:
            "It have broadened my horizons and helped me advance my career. The college and management is incredibly supportive towards their students and also providing great learning experience for all",
        client: "Yash Khandelwal",
        clientInfo: "System Engineer",
        img: "https://sviet.ac.in/wp-content/uploads/2022/01/info.png",
        studentImage:'https://sviet.ac.in/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-02-at-12.21.29-AM-1.jpeg',
    },
    {
        title:
            "The program provided me with the skills and knowledge needed to excel in the field of software development. Highly recommended!",
        client: "Adarsh Kumar",
        clientInfo: "Software Engineer",
        img: "https://sviet.ac.in/wp-content/uploads/2020/07/First-Lady.jpg",
        studentImage: "https://sviet.ac.in/wp-content/uploads/2021/04/dsdsd-6.png",
    },
    {
        title:
            "The instructors are top-notch and the curriculum is well-structured. I feel well-prepared for my career in data science.",
        client: "Admit Gautam",
        clientInfo: "Software Developer",
        img: "https://sviet.ac.in/wp-content/uploads/2022/01/uu.png",
        studentImage: "https://sviet.ac.in/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-20-at-5.51.29-AM.jpeg"
    },
];
export function TestimonialSectionCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <section className="px-8 py-10 lg:py-28">
            <div className="w-10/12 mx-auto">
                <Typography
                    variant="h2"
                    color="blue-gray"
                    className="mb-4 !text-2xl lg:!text-4xl"
                >
                    Our Students Speak
                </Typography>
                <Typography
                    variant="lead"
                    className="max-w-3xl !text-gray-500 mb-10 lg:mb-20"
                >
                    Our Reviews Speak for Us
                </Typography>
                <Slider {...settings}>
                    {testimonials.map((props, key) => (
                        <TestimonialCard key={key} {...props} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default TestimonialSectionCarousel;
