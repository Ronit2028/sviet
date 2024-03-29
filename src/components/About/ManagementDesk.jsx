"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
const desk = [
    {
        "name": "Mr. Ashwani Garg",
        "position": "Chairman",
        "description": "I welcome every aspiring achiever to the Swami Vivekanand Group of Institutions. Today SVGOI has become a dream place to provide valuable educational experience to students, from different cultures and backgrounds. I am delighted to see the contributions, the students, faculty, and management of SVGOI have been making towards the overall success of students across the world. We have an interactive curriculum made to provide definite learning solutions in the field of Scientific studies, Medical studies, Arts, Business & Engineering. In this world known as a global village, all boundaries and the national borders are gradually becoming more transparent. Our international collaborations have helped students to form unlimited opportunities of global exposure for our students, to excel in their careers. So join your hands with SVGOI and be future-ready.",
        "image": "https://sviet.ac.in/wp-content/uploads/2023/02/chairman-sir-copy-550x500.jpg"
    },
    {
        "name": "Mr. Ashok Garg",
        "position": "President",
        "description": "SVGOI has experienced remarkable growth in recent years, earning widespread acclaim for its rapid advancement. Our journey from inception to our current standing is a testament to our unwavering dedication, exceptional faculty, and enriching learning environment. With a focus on quality education, we offer diverse programs affiliated with both national and international universities. We celebrate the achievements of our faculty, staff, and partners, employing modern teaching methods that empower students to realize their full potential. Emphasizing hands-on experience over mere theoretical knowledge, SVGOI is dedicated to providing practical solutions and fostering intellectual brilliance through research and development. Let's collaborate in building a skilled society together.",
        "image": "https://sviet.ac.in/wp-content/uploads/2023/02/ashok-sir--550x500.jpg"
    },
    {
        "name": "Mr. Vishal Garg",
        "position": "Director Secretarial and Administration",
        "description": "At SVGOI, we prioritize global standards in academia, fostering active engagement among teachers, students, and industry. Our focus is on holistic education, preparing students for the challenges of a globalized world. With dedicated faculty and staff, we aim to excel in shaping individuals' futures and elevate SVGOI's standing in the academic realm. Our commitment to excellence is reflected in the diverse student body, including foreign exchange students, enriching our campus culture. Join us in experiencing exceptional intellectual and academic opportunities, shaping the future of learning together.",
        "image": "https://sviet.ac.in/wp-content/uploads/2023/02/vishal-garg-550x500.jpg"
    },
    {
        "name": "Mr. Ankur Gupta",
        "position": "Director Corporate Affairs",
        "description": "Students from around the country are getting attracted to SVGOI because of our commitment to teaching excellence, focus on research, tailored courses that make our education relevant to changing career dynamics and formidable industry partnerships. The Curriculum is delivered in spacious, amphitheatre-style classrooms—fitted with modern Information and Communication Technology (ICT) equipment to participate in co-curricular and extra-curricular activities through various clubs and societies in the campus. SVGOI provides several opportunities for local students, to visit foreign universities and institutions on such exchange programs, thereby helping them receive invaluable international exposure.",
        "image": "https://sviet.ac.in/wp-content/uploads/2023/02/ankur-gupta-copy-1-550x500.jpg"
    },
    {
        "name": "Mr. Sahil Garg",
        "position": "Project Director",
        "description": "SVGOI epitomizes quality, dedication, values, and commitment, evident through our accomplished alumni. To cement our position as a premier institute in Technical Higher Education in India, we offer diverse, industry-relevant programs. With a student-centric approach, SVGOI is esteemed as one of the top private colleges in North India. From computer science to mechanical engineering, business management to nursing, SVGOI provides a wide array of educational services. Our strength lies in nurturing globally competitive graduates prepared for success in various professional domains. Join us in shaping a brighter future together.",
        "image": "https://sviet.ac.in/wp-content/uploads/2023/02/sahil-sir-550x500.jpg"
    },
    {
        "name": "Mr. Shubham Garg",
        "position": "Director Placements",
        "description": "Our aim is to provide Placements & Corporate Interface for the students and to make the students aware about the job opportunities and help them get placed. In the last fifteen years, Training & Placement Office (General) has been successfully able to place students of different courses & has invited reputed MNCs from, Social Sector, Information Technology, Manufacturing, ITES, Media, Services, Banking & Finance, etc. The Training & Placement Office (General) looks after the Campus Placements of the Engineering & Non-Engineering Courses of the College & Coordinates with the respective departmental TPO's regarding the Placement & related activities.",
        "image": "https://sviet.ac.in/wp-content/uploads/2023/02/shubham-gargnew-550x500.jpg"
    }
];


export default function MulCharts() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <div className=" py-12 bg-gradient-to-r from-white to-gray-100">
                <div className=" flex flex-col align-middle  justify-start pl-48 ">
                    <div className="flex mb-5 items-center">
                        <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
                        <h1 className="text-sm md:text-lg font-bold">OUR FLAG BEARERS</h1>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-semibold ">From the 
                        <h1 className='text-[#ff9602] text-2xl md:text-5xl md:py-2 '> Desk of Management</h1></h1>
                </div>

    <div className="slider-container md:w-4/5 container m-auto">
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} >
        {desk.map((member, index) => (


<div  key={index} class="p-4  py-24 w-full">
<div class="h-full w-3/4 m-auto flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
  <img  class="flex-shrink-0 rounded-lg w-96 h-96 object-cover object-center sm:mb-0 mb-4" src={member.image} alt={member.name}/>
  <div class="flex-grow sm:pl-8">
    <h2 class="title-font font-medium text-lg text-gray-900">{member.name}</h2>
    <h3 class="text-gray-500 mb-3">{member.position}</h3>
    <p class="mb-4">{member.description}</p>
    <span class="inline-flex">
      <a class="text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-2 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-2 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
        </svg>
      </a>
    </span>
  </div>
</div>
</div>









          
        ))}
      </Slider>
      <Slider
        className=""
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {desk.map((member, index) => (
          <div  key={index} class="p-4 w-full border-l-2 border-[#016db6]">
          <div class="h-full w-3/4 m-auto flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img  class="flex-shrink-0 rounded-xl w-24 h-24 object-cover object-center sm:mb-0 mb-4" style={{borderRadius:"200px"}} src={member.image} alt={member.name}/>
            <div class="flex-grow sm:pl-8">
              <h2 class="title-font font-medium text-lg text-gray-900">{member.name}</h2>
              <h3 class="text-gray-500 mb-3">{member.position}</h3>
      
              <span class="inline-flex">
                <a class="text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}
