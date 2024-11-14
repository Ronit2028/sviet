"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SixtyAdv = () => {
  const reasons = [
    {
      title: "Specialized Curriculum",
      description: "The Super 60 Batch offers a specialized curriculum tailored to nurture and develop the talents of high-performing students.",
      img: "https://utfs.io/f/nsz3ps3WUZRLzyYF026w5nBJDbr081ZY6IPvhC2OLgpSAqyo"
    },
    {
      title: "Exclusive Mentorship",
      description: "Students in the Super 60 Batch receive exclusive mentorship from top faculty members and industry experts, providing personalized guidance and support.",
      img: "https://utfs.io/f/nsz3ps3WUZRLPhjwLml9grXehIqHVNuKBUE0LskYT2MDi3Zv"
    },
    {
      title: "Internship Opportunities",
      description: "Super 60 students gain priority access to coveted internship opportunities with leading companies, enhancing their practical skills and industry experience.",
      img: "https://utfs.io/f/0c57147f-d3a4-417c-bb71-280b3ced13b9-ks8lvh.00.11_af922b7e.jpg",
    },
    {
      title: "Career Development Programs",
      description: "The Super 60 Batch offers specialized career development programs designed to equip students with the skills and knowledge needed to excel in their chosen fields.",
      img: "https://utfs.io/f/9a08b157-a1bd-4310-b37e-b1582b2a156c-inzo76.jpg"
    }
];

  // Settings for React Slick Carousel
  const settings = {
    infinite: true,
    dots: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2.5, // Show 2.5 slides on desktop
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
    <div className='text-white py-12'>
      <div className="w-full h-full bg-[#00112d] py-12">
        <div className="w-10/12 mx-auto py-12">
          <p className='text-3xl font-medium pb-3'>
            The Super 60 Advantage
          </p>
          <p className='text-xl pl-2 border-l-4 border-[#fea700]'>
            Why Us?
          </p>

          {/* React Slick Carousel */}
          <Slider {...settings}>
            {reasons.map((reason, index) => (
              <div key={index} className='mt-6 h-[45vh] lg:h-[40vh] flex items-center p-3'>
                <div className="bg-white h-full  rounded-md text-[#00112d]" style={{ backgroundImage: `url(${reason.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                  <div className='bg-[#00000099]  p-6 text-white flex flex-col justify-end h-full'>
                    <div className="">
                      <h3 className='text-2xl font-meium py-4 '>{reason.title}</h3>
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



export default SixtyAdv