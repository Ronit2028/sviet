"use client";

import React from "react";
import { MdEngineering } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { BsFillGearFill } from 'react-icons/bs'; // For M.Tech
import { FaCapsules } from 'react-icons/fa'; // For Pharmacy
import { FaUtensils } from 'react-icons/fa'; // For Hospitality & Catering
import { FaChalkboardTeacher } from 'react-icons/fa'; // For Education
import { FaDesktop } from 'react-icons/fa'; // For Computer Applications
import { FaBusinessTime } from 'react-icons/fa'; // For Business Studies
import { FaClinicMedical } from 'react-icons/fa'; // For Paramedical
import { FaFlask } from 'react-icons/fa'; // For Basic Science
import { FaBalanceScale } from 'react-icons/fa'; // For Law
import { FaTools } from 'react-icons/fa'; // For Polytechnic/Diploma
import { FaHammer } from 'react-icons/fa'; // For ITI

const Apply = () => {
  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 622,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        },
      },
    ],
  };

  const programe = [
    {
      id: 1,
      name: "B.Tech",
      desc: "Chart the course of our B.Tech",
      courses: [
        "Computer Science & Engineering",
        "Electronics & Communication Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering"
      ],
      icon: <MdEngineering className="text-[70px] text-[#fea700]" />
    },
    {
      id: 2,
      name: "M.Tech",
      desc: "Navigate the depths of our M.Tech program",
      courses: [
        "Computer Science & Engineering",
        "Electronics & Communication Engineering",
        "Mechanical Engineering"
      ],
      icon: <BsFillGearFill className="text-[60px] text-[#fea700]" />
    },
    {
      id: 3,
      name: "Pharmacy",
      desc: "Explore the world of Pharmacy",
      courses: [
        "Bachelor in Pharmacy",
        "Master in Pharmacy",
        "Doctor of Pharmacy",
        "Diploma in Pharmacy"
      ],
      icon: <FaCapsules className="text-[60px] text-[#fea700]" />
    },
    {
      id: 4,
      name: "Hospitality & Catering",
      desc: "Embark on a culinary journey",
      courses: [
        "Bachelor of Hotel Management & Catering Technology",
        "Dietetics and Nutrition",
        "Master of Hotel Management & Catering Technology",
        "Bachelor of Vocational Hotel Management"
      ],
      icon: <FaUtensils className="text-[70px] text-[#fea700]" />
    },
    {
      id: 5,
      name: "Education",
      desc: "Pave the way for future generations",
      courses: [
        "Bachelor of Education",
        "Bachelor of Arts",
        "Master of Education",
        "Master of Arts in Education"
      ],
      icon: <FaChalkboardTeacher className="text-[70px] text-[#fea700]" />
    },
    {
      id: 6,
      name: "Computer Applications",
      desc: "Dive into the world of computing",
      courses: [
        "Bachelor of Computer Application",
        "Master of Computer Application",
        "Post Graduation Diploma in Computer Application"
      ],
      icon: <FaDesktop className="text-[70px] text-[#fea700]" />
    },
    {
      id: 7,
      name: "Business Studies",
      desc: "Master the art of business",
      courses: [
        "Bachelor in Business Administration",
        "Bachelor of Commerce",
        "Master of Commerce",
        "Master in Business Administration"
      ],
      icon: <FaBusinessTime className="text-[70px] text-[#fea700]" />
    },
    {
      id: 8,
      name: "Paramedical",
      desc: "Enter the world of healthcare",
      courses: [
        "B.Sc Radio Medical Imaging Technology",
        "B.Sc Operation Theater Technology",
        "B.Sc Optometry",
        "B.Sc Anesthesia and Operation Technology",
        "B.Sc Medical Lab Science",
        "M.Sc Medical Lab Science Biochemistry",
        "M.Sc Anesthesia and Operation Technology",
        "Diploma in Medical Lab Technology"
      ],
      icon: <FaClinicMedical className="text-[70px] text-[#fea700]" />
    },
    {
      id: 9,
      name: "Basic Science",
      desc: "Explore the fundamentals of science",
      courses: [
        "B.Sc Non Medical",
        "BM.Sc Maths",
        "M.Sc Physics",
        "M.Sc Chemistry"
      ],
      icon: <FaFlask className="text-[70px] text-[#fea700]" />
    },
    {
      id: 10,
      name: "Law",
      desc: "Pursue justice and knowledge",
      courses: ["LL. B", "BA. LLB"],
      icon: <FaBalanceScale className="text-[70px] text-[#fea700]" />
    },
    {
      id: 11,
      name: "Polytechnic/ Diploma",
      desc: "Build a solid foundation in engineering",
      courses: [
        "Computer Science and Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering"
      ],
      icon: <FaTools className="text-[70px] text-[#fea700]" />
    },
    {
      id: 12,
      name: "ITI",
      desc: "Master a skilled trade",
      courses: ["Welder", "Plumber", "COPA"],
      icon: <FaHammer className="text-[70px] text-[#fea700]" />
    },
  ];

  return (
    <div className="w-full h-[max-content] pb-16 ">
      <div className="lg:ms-[100px] lg:mt-[50px] md:ms-[20px] md:mt-[20px]  p-4">
        <h2>SVIET Admission</h2>
        <h2 className="p-2 bg-[#fea700] text-wrap w-[max-content] lg:text-4xl md:text-3xl  text-2xl font-semibold text-white">
          Industry Specializations
        </h2>
        <h3 className="mt-2 bg-gray-200 md:w-[max-content] p-1 px-2">
          Our Industry Centric Programs Specializations
        </h3>
        <p className=" mt-2 ms-1 lg:w-[500px] md:w-[400px] text-sm">
          <span className="font-bold">
            Become the leader You want to be with our Industry Centric Programs.
          </span>
          <br></br>
          Sviet offers a unique opportunity to specialize in the Programs -
          B.Tech , M.Tech , Pharmacy , Hospitality & Catering , Education ,
          Computer Applications , Business Studies , Paramedical , Basic Science
          , Law , Polytechnic/ Diploma and ITI.
        </p>
      </div>
      <div className=" mt-2 pt-16 m-1 ">
        <Slider {...settings} className="w-[92%] h-[340px]">
          
         {
          programe.map((program) =>{
            return(
              <div key={program.id} className="md:ms-[50px]  h-[320px]">
            <div className="w-[280px] slid relative h-[320px] mx-auto flex justify-center items-center border overflow-hidden border-[#fea700]">
              <div className="w-[280px] slide absolute h-[320px] translate-x-[-270px] hover:translate-x-[-10px] transition-all ease-in flex justify-center items-center bg-[#fea700]">
                  <div className="flex flex-col flex-wrap  ">
                  {
                    program.courses.map((item,index) => {
                      return (
                        <p key={index} className="text-white ms-5 text-[14px] mt-2 ">{item}</p>
                      )
                      })
                  }

                  </div>
              </div>  
              <div className="text-center">
              <div className="mx-auto w-[70px]">{program.icon}</div>
              <h2 className="text-xl font-semibold  mt-2">
              {program.name}
              </h2>
              <p className="text-sm text-center font-medium ms-2 mt-2">
             {program.desc}
              </p>
              </div>
            </div>
          </div>
            )
          })
         }
          
          
        </Slider>
      </div>
    </div>
  );
};

export default Apply;
