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
}) {
    return (
        <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6 w-[95%]">
            <CardHeader color="transparent" floated={false} shadow={false}>
                <Typography
                    color="blue-gray"
                    className="lg:mb-20 mb-4 text-2xl font-bold"
                >
                    &quot;{title}&quot;
                </Typography>
            </CardHeader>
            <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
                <div>
                    <div className="flex gap-3">
                        <Avatar src={img} className="h-12 w-12 rounded-full"/>
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
                <img src={img} className="max-w-[8rem]" alt={client} />
            </CardBody>
        </Card>
    );
}

const testimonials = [
    {
        title:
            "The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!",
        client: "Jessica Devis",
        clientInfo: "Full Stack Developer @Netflix",
        img: "https://sviet.ac.in/wp-content/uploads/2020/07/Tata.jpg",
    },
    {
        title:
            "It have broadened my horizons and helped me advance my career. The community is incredibly supportive.",
        client: "Marcell Glock",
        clientInfo: "Graphic Designer, @Coinbase",
        img: "https://sviet.ac.in/wp-content/uploads/2020/07/Hero.jpg",
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
