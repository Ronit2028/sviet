"use client"

import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from './Alumini/10.png'
import img2 from './Alumini/11.png'
import img4 from './Alumini/2 (2).jpeg'
import img3 from './Alumini/12.jpeg'
import img5 from './Alumini/13.jpeg'
import img6 from './Alumini/3 (2).jpeg'
import img7 from './Alumini/4 (2).jpeg'
import img8 from './Alumini/5.png'
import img9 from './Alumini/6.jpg'
import Image from 'next/image';


const Alumini = () => {

    const alumini = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
    ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <div className='w-10/12 mx-auto py-12'>
            <div className='pb-6 flex flex-col justify-center '>
                <p className="text-3xl font-medium pb-3 mb-3">
                    Our Proud Alumini
                </p>
                <p className='text-lg border-l-4 border-[#fea700] pl-2 mb-6'>
                    Know What They Have To Say ABout SVIET
                </p>
            </div>
            <Slider {...settings}>
                {alumini.map((info, index) => (
                    <div key={index} className='p-3'>
                        <Image src={info} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Alumini