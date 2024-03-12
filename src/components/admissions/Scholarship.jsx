"use client"

import React from "react";
import category from "@/assets/admissions/category.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Scholarship = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    infinite: true,
    className: "center",
    centerMode: true,
    speed: 500,
    rows: 2,
    
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          rows: 2,
          
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          rows: 2,
          
        },
      },
      {
        breakpoint: 622,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          rows: 2,
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          rows: 2,
          
        },
      },
    ],
  };

  const scholarships = [
    {
      type: "Academic merit based scholarship",
      eligibility_criteria: "10+2 pass with min. 50% marks",
      selection_process: "Entrance Exam followed by Personal Interview",
      image: "category"
    },
    {
      type: "Sports scholarship",
      eligibility_criteria: "10+2 pass with min. 50% marks",
      selection_process: "Entrance Exam followed by Personal Interview",
      image: "category"
    },
    {
      type: "Defence scholarship",
      eligibility_criteria: "10+2 pass with min. 50% marks",
      selection_process: "Entrance Exam followed by Personal Interview",
      image: "category"
    },
    {
      type: "Economically Weaker Section Scholarship",
      eligibility_criteria: "10+2 pass with min. 60% marks, family income less than INR 6LPA",
      selection_process: "Personal Interview",
      image: "category"
    },
    {
      type: "Represented at State Level Scholarship",
      eligibility_criteria: "10+2 pass with min. 50% marks, represented at state level",
      selection_process: "Personal Interview",
      image: "category"
    },
    {
      type: "Child of Defence Personnel Scholarship",
      eligibility_criteria: "10+2 pass with min. 60% marks",
      selection_process: "Personal Interview",
      image: "category"
    },
    {
      type: "Defence scholarship",
      eligibility_criteria: "10+2 pass with min. 60% marks, child of Defence Personnel",
      selection_process: "Personal Interview",
      image: "category"
    },
    {
      type: "Single Girl Child Scholarship",
      eligibility_criteria: "10+2 pass with min. 60% marks, child of Defence Personnel, Single Girl Child Certificate",
      selection_process: "Personal Interview",
      image: "category"
    }
  ];
  return (
    <div className="w-full xl:h-screen h-[max-content] mt-2 relative xl:flex xl:flex-wrap gap-3 ">
      <div
        className=" xl:w-4/12 z-[-12] xl:h-[100%] h-[300px]"
        style={{
          backgroundImage: `url(${category.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div
          className="xl:w-4/12 w-full xl:z-[-1] z-0 absolute top-0  xl:h-full  h-[300px] text-white"
          style={{
            backgroundColor: "rgb(254 , 167 , 0 )",
            mixBlendMode: "multiply",
          }}
        ></div>
        <div className=" w-full h-full flex items-center justify-center my-2 ">
          <div className="mx-auto  z-[2]">
            <h2 className="md:text-5xl text-xl w-[300px] text-wrap font-semibold text-white">
              SVGOI Scholarships
            </h2>
            <p className="w-[300px] text-gray-200 mt-2">
              ESSENTIAL FINANCIAL SUPPORT FOR SECURING YOUR ACADEMIC FUTURE
            </p>
            <button className="bg-white text-black p-2 rounded-md text-lg mt-3 cursor-pointer hover:bg-gray-200">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div className="xl:w-7/12 flex flex-wrap gap-[20px] justify-center items-center mt-2 mx-1">
        <Slider {...settings} className="w-[90%]">
        {
          scholarships.map((scholarship,index)=>{
            return (
            <div  key={index} >
               <div className="w-[200px] mx-auto h-[300px] rounded-md">
              <div className="bg-[#fea700] h-[70px] rounded-md">
                <p className="text-white font-semibold text-md pt-2 ps-3">
                {scholarship.type}
                </p>
              </div>
              <div
                className="w-full h-[50px] rounded-t-md mt-[-5px]"
                style={{
                  backgroundImage: `url(${category.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  filter: "saturate(0%)",
                }}
              ></div>
              <div className="mt-2">
                  <h2 className="text-[#fea700]  font-bold">ELIGIBILITY CRITERIA</h2>
                  <p className=" text-sm font-semibold">{scholarship.eligibility_criteria}</p>
                  <h2 className="text-[#fea700]  font-bold">SELECTION PROCESS</h2>
                  <p className=" text-sm  font-semibold">{scholarship.selection_process}</p>
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

export default Scholarship;
