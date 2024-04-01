"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Usps = () => {
  const super60Batch = [
    {
      title: "Tailored Enrichment Modules",
      desc: "The Super 60 Batch offers specially curated learning modules designed to unleash the potential of each student. From advanced technical skills to soft skills development, every aspect is meticulously crafted to enhance their capabilities."
    },
    {
      title: "Rigorous Academic and Extracurricular Activities",
      desc: "Beyond the conventional curriculum, students in the Super 60 Batch engage in rigorous academic challenges and a wide array of extracurricular activities. This holistic approach ensures a well-rounded development."
    },
    {
      title: "Focused Skill Enhancement",
      desc: "Students undergo intensive training in reasoning, quantitative skills, communication skills, and personality development. These focused sessions equip them with the essential skills required to thrive in today's competitive world."
    },
    {
      title: "Exposure to Latest Technologies",
      desc: "The Super 60 Batch stays ahead of the curve by immersing students in the latest software and manufacturing techniques. This exposure prepares them to adapt to the evolving technological landscape with ease."
    },
  ]
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto gap-8 h-auto py-12'>
      <div className='pb-6 flex flex-col justify-center '>
        <p className="text-3xl font-medium pb-3 mb-3">
          Overview
        </p>
        <p className='text-lg border-l-4 border-[#fea700] pl-2 mb-6'>
          What is Super60?
        </p>

        <p className='text-sm md:text-lg text-justify'>
          Super60 is a special batch of 30 to 60 students, chosen every year from the first year students of CSE Branch, in order to make them ready to face challenges beyond their prescribed curriculum. They are provided with enriched learning modules based on their potential and put through rigorous academic as well as co and extra curricular activities included reasoning, Quantative skills, Communication Skills, Personality developmnent and over & above latest softwares and manufacturing techniques as latest trend, so that these students can make the best version of themselves and assure 100% placement in the campus placement drive.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6'>

        {super60Batch.map((key, usp, index) => (
          <div className={`rounded-md shadow-md my-3 p-4 lg:p-8 transition hover:shadow-lg py-12 ${((index) === 1) || ((index===2)) ? 'bg-[#fea700] text-white' : ''} ${console.log(key)} `} >
              <p className="text-xl font-semibold mb-4">
                {usp.title}
              </p>
              <p className='text-sm text-justify'>
                {usp.desc}
              </p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Usps