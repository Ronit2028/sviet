"use client"

import React from "react";
import category from "@/assets/admissions/category.jpg";
import merit from "@/assets/admissions/meritscholarship.png";
import defence from "@/assets/admissions/indian-flag1.jpg";
import sport from "@/assets/admissions/Sports-Scholarship-in-India-2022-23-min.jpg";
import weak from "@/assets/admissions/weak.jpg";
import single from "@/assets/admissions/single.jpg";
import defencePerson from "@/assets/admissions/dee.jpg";
import state from "@/assets/admissions/national-scholarships-portal.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Typography } from "@material-tailwind/react";
const Scholarship = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const scholarships = [
    {
      type: "Academic merit based scholarship",
      eligibility_criteria: "10+2 pass with min. 50% marks",
      selection_process: "Entrance Exam followed by Personal Interview",
      image: merit
    },
    {
      type: "Sports scholarship",
      eligibility_criteria: "10+2 pass with min. 50% marks",
      selection_process: "Entrance Exam followed by Personal Interview",
      image: sport
    },
    {
      type: "Defence scholarship",
      eligibility_criteria: "10+2 pass with min. 50% marks",
      selection_process: "Entrance Exam followed by Personal Interview",
      image: defence
    },
    {
      type: "Economically Weaker Section Scholarship",
      eligibility_criteria: "10+2 pass with min. 60% marks, family income less than INR 6LPA",
      selection_process: "Personal Interview",
      image: weak
    },
    {
      type: "Represented at State Level Scholarship",
      eligibility_criteria: "10+2 pass with min. 50% marks, represented at state level",
      selection_process: "Personal Interview",
      image: state
    },
    {
      type: "Child of Defence Personnel Scholarship",
      eligibility_criteria: "10+2 pass with min. 60% marks",
      selection_process: "Personal Interview",
      image: defencePerson
    },
    {
      type: "Defence scholarship",
      eligibility_criteria: "10+2 pass with min. 60% marks, child of Defence Personnel",
      selection_process: "Personal Interview",
      image: defence
    },
    {
      type: "Single Girl Child Scholarship",
      eligibility_criteria: "10+2 pass with min. 60% marks, child of Defence Personnel, Single Girl Child Certificate",
      selection_process: "Personal Interview",
      image: single
    }
  ];
  return (
    <div className="bg-gray-100 py-12">
      <div className="w-10/12 mx-auto py-12">
        <div className='mt-7 pb-6'>
          <Typography
            color="blue-gray"
            className="mb-2 font-bold uppercase"

          >

          </Typography>
          <Typography
            color="blue-gray"
            className="mb-4 !text-2xl font-bold lg:!text-4xl"

          >
            SVGOI Scholarships
          </Typography>
          <Typography
            variant="lead"
            className=" !text-gray-500"

          >
            Essential Financial Support Securing Your Academic Future
          </Typography>
        </div>
        <Slider {...settings}>
          {scholarships.map((info, index) => (
            <div key={index} className='h-full'>
              <div className="border rounded-md h-[40vh] " style={{ backgroundImage: `url(${info.image.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                <div className="w-full h-full bg-[#00000090] flex flex-col justify-center text-white p-8 rounded-md">
                  <h2 className="lg:text-2xl text-lg font-semibold pb-2">{info.type}</h2>
                  <p className="mt-2 lg:text-xl text-md"><span className="text-[#fea700] font-semibold">Eligibility :</span> {info.eligibility_criteria}</p>
                  <p className="mt-2 lg:text-lg text-md"><span className="text-[#fea700] font-semibold">Selection Process :</span> {info.selection_process}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Scholarship;