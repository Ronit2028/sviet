"use client"

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import placement from '@/assets/LandingPage/recruit.jpg'
import placement2 from '@/assets/LandingPage/placement.jpg'
import placement3 from '@/assets/LandingPage/achievement.jpg'


const Unlock = () => {
    const sectionData = [
        {
            heading: "Placements",
            subheading: "We at SVIET feel extremely privileged to have been able to provide manpower resources to our students, enabling them to embark on successful career journeys. Through our comprehensive placement programs, we connect our students with leading companies across various industries, offering them exciting job opportunities and internships.",
            description: "READ MORE",
            img: placement
        },
        {
            heading: "Our Leading Recruiters",
            subheading: "Our leading recruiters represent a diverse range of industries, from technology to healthcare to finance. These companies recognize the talent and potential of SVIET students and regularly visit our campus to hire top graduates for various positions.",
            description: "READ MORE",
            img: placement2
        },
        {
            heading: "Students Achievements",
            subheading: "At SVIET, we celebrate the achievements of our students in academics, sports, research, and extracurricular activities. From winning prestigious awards to presenting groundbreaking research projects, our students continually demonstrate their exceptional skills and dedication. ",
            description: "READ MORE",
            img: placement3
        },
        {
            heading: "Super 60 Batch",
            subheading: "The Super 60 Batch represents the best and brightest students at SVIET. Comprising 30 to 60 students in each branch, the Super 60 Batch is known for its academic excellence, leadership qualities, and innovation. Members of this elite group receive special mentoring and support to enhance their skills and prepare them for successful careers in their chosen fields.",
            description: "READ MORE",
            img: "https://sviet.ac.in/wp-content/uploads/2022/04/sgfddf.jpg"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='w-10/12 mx-auto py-10 my-5'>
            <p className="text-4xl text-medium w-full md:w-1/2 mx-auto text-start md:text-center pb-3 mb-3 pt-5">
                Unlocking Opportunities at SVIET, <br /> Empowering Students, Building Futures
            </p>
            <p className='text-lg text-medium w-full md:w-1/2 mx-auto text-start md:text-center pb-3 mb-3'>
                Our colourful campus has a rich culturally cooperative learning atmosphere that attracts students from all over the country and from all over the world.
            </p>


            <div className='mt-5'>
                <Slider {...settings}>

                    {sectionData.map((section, index) => (
                        <div key={index} className="w-10/12 mx-auto rounded-md shadow-md text-white">
                            <div  className='rounded-md mx-auto md:h-[50vh] h-auto' style={{ backgroundImage: `url(${section.img.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                                <div className='bg-[#00000050] w-full h-full flex flex-col justify-end p-6'>
                                <h2 className='text-4xl mb-4'>{section.heading}</h2>
                                <p className='text-md w-1/2 mb-2'>{section.subheading}</p>
                                </div>

                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    );
}

export default Unlock;
