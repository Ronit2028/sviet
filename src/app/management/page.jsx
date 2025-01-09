"use client";

import React from "react";
import Header from "../../components/About/AboutHeader";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Keep your existing imports
import img1 from "../../assets/About/Managemwnt/ashwani-sir.jpg";
import img2 from "../../assets/About/Managemwnt/ashok-sir.jpg";
import img3 from "../../assets/About/Managemwnt/vishal-sir.jpg";
import img4 from "../../assets/About/Managemwnt/ankurgupta.jpg";
import img5 from "../../assets/About/Managemwnt/sahil-sir.jpg";
import img6 from "../../assets/About/Managemwnt/shubham-sir.jpg";
import img7 from "../../assets/About/Managemwnt/ankur-sir.jpg";

// Top Management Data
const topManagement = [
  // {
  //   name: "Dr. Rajinder Rai",
  //   designation: "Chairman",
  //   image: img1.src,
  //   content: "Dr. Rajinder Rai, as the Chairman of SVGOI, brings decades of experience in education and leadership. His vision has been instrumental in shaping SVGOI into a center of excellence in higher education. Under his guidance, SVGOI has emerged as a leading institution committed to delivering quality education and fostering innovation. His leadership continues to inspire and drive our institution towards new heights of academic excellence.",
  // },
  // {
  //   name: "Dr. Amit Rai",
  //   designation: "Vice Chairman",
  //   image: img2.src,
  //   content: "Dr. Amit Rai, serving as the Vice Chairman, has been pivotal in implementing innovative educational practices and fostering industry collaborations, enhancing the institute's academic and research capabilities. His strategic vision and dedication to excellence have been instrumental in establishing SVGOI as a premier educational institution. Through his leadership, we continue to expand our horizons and create new opportunities for our students.",
  // },
  {
    "name": "Mr. Ashwani Garg",
    "designation": "Chairman",
    "content": "I welcome every aspiring achiever to the Swami Vivekanand Group of Institutions. Today SVGOI has become a dream place to provide valuable educational experience to students, from different cultures and backgrounds. I am delighted to see the contributions, the students, faculty, and management of SVGOI have been making towards the overall success of students across the world. We have an interactive curriculum made to provide definite learning solutions in the field of Scientific studies, Medical studies, Arts, Business & Engineering. In this world known as a global village, all boundaries and the national borders are gradually becoming more transparent. Our international collaborations have helped students to form unlimited opportunities of global exposure for our students, to excel in their careers. So join your hands with SVGOI and be future-ready.",
    "image": img1.src,
    
  },
  {
    "name": "Mr. Ashok Garg",
    "designation": "President",
    "content": "SVGOI has experienced remarkable growth in recent years, earning widespread acclaim for its rapid advancement. Our journey from inception to our current standing is a testament to our unwavering dedication, exceptional faculty, and enriching learning environment. With a focus on quality education, we offer diverse programs affiliated with both national and international universities. We celebrate the achievements of our faculty, staff, and partners, employing modern teaching methods that empower students to realize their full potential. Emphasizing hands-on experience over mere theoretical knowledge, SVGOI is dedicated to providing practical solutions and fostering intellectual brilliance through research and development. Let's collaborate in building a skilled society together.",
    "image": img2.src,
   
  },
];

// Other Management Data
const otherMembers = [
  {
    "name": "Mr. Vishal Garg",
    "designation": "Director Secretarial and Administration",
    "description": "At SVGOI, we prioritize global standards in academia, fostering active engagement among teachers, students, and industry. Our focus is on holistic education, preparing students for the challenges of a globalized world. With dedicated faculty and staff, we aim to excel in shaping individuals' futures and elevate SVGOI's standing in the academic realm. Our commitment to excellence is reflected in the diverse student body, including foreign exchange students, enriching our campus culture.",
    "image": img3.src,
    facebook: "https://www.facebook.com/vishal.garg.7921975",
    linkedin: "https://www.linkedin.com/in/vishal-garg-2134aa142/"
  },
  {
    "name": "Mr. Ankur Gupta",
    "designation": "Director Corporate Affairs",
    "description": "Students from around the country are getting attracted to SVGOI because of our commitment to teaching excellence, focus on research, tailored courses that make our education relevant to changing career dynamics and formidable industry partnerships. The Curriculum is delivered in spacious, amphitheatre-style classrooms—fitted with modern Information and Communication Technology (ICT) equipment to participate in co-curricular and extra-curricular activities through various clubs and societies in the campus.",
    "image": img4.src,
    linkedin: "https://www.linkedin.com/in/ankur-gupta-14278730/",
  },
  {
    "name": "Mr. Sahil Garg",
    "designation": "Project Director",
    "description": "SVGOI epitomizes quality, dedication, values, and commitment, evident through our accomplished alumni. To cement our designation as a premier institute in Technical Higher Education in India, we offer diverse, industry-relevant programs. With a student-centric approach, SVGOI is esteemed as one of the top private colleges in North India. From computer science to mechanical engineering, business management to nursing, SVGOI provides a wide array of educational services. Our strength lies in nurturing globally competitive graduates prepared for success in various professional domains.",
    "image": img5.src,
    linkedin: "https://www.linkedin.com/in/sahil-garg-034226130/",
    facebook: "https://www.facebook.com/sahil.garg.58910"

  },
  {
    "name": "Mr. Shubham Garg",
    "designation": "Director Placements",
    "description": "Our aim is to provide Placements & Corporate Interface for the students and to make the students aware about the job opportunities and help them get placed. In the last fifteen years, Training & Placement Office (General) has been successfully able to place students of different courses & has invited reputed MNCs from, Social Sector, Information Technology, Manufacturing, ITES, Media, Services, Banking & Finance, etc. ",
    "image": img6.src,
    linkedin: "https://www.linkedin.com/in/shubham-garg-670537170/",
    facebook: "https://www.facebook.com/profile.php?id=100052235821482",
  },
  {
    "name": "Mr. Ankur Gill",
    "designation": "Director Operations",
    "description": "As the Director of Operations at Swami Vivekanand Institute of Engineering and Technology, I am deeply committed to fostering an environment of excellence, innovation, and growth within our institution. With a focus on providing top-notch education and opportunities for our students, I am honored to collaborate with such dedicated professionals like yourselves who share a passion for academic advancement and student success.Our mission at Swami Vivekanand Institute of Engineering and Technology is to empower our students with knowledge, skills, and values that will enable them to thrive in an ever-evolving world. ",
    "image": img7.src,
    facebook: "https://www.facebook.com/ankurgillofficial",
    linkedin: "https://www.linkedin.com/in/ankurgillofficial/"
  }
];

// const CustomArrow = ({ className, onClick, icon }) => (
//   <button
//     className={`absolute z-10 top-1/2 transform -translate-y-1/2 ${className} bg-[#fea700] p-2 rounded-full hover:bg-[#e69600] transition-colors`}
//     onClick={onClick}
//   >
//     {icon}
//   </button>
// );

const ManagementPage = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    
  };

  return (
    <div className="bg-gray-50">
      <Header />
      
      {/* Top Management Section with Dark Background */}
      <section className="bg-black py-16">
        <div className="container w-10/12 mx-auto px-4">
          <Slider {...sliderSettings}>
            {topManagement.map((member, index) => (
              <div key={index} className="outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="text-white space-y-6">
                    <h2 className="text-4xl font-semibold mb-6">
                      Guiding Excellence: Leadership Behind the Scenes
                    </h2>
                    <div className="border-l-4 border-[#fea700] pl-4">
                      <h3 className="text-2xl font-bold text-[#fea700]">{member.name}</h3>
                      <p className="text-xl text-gray-400">{member.designation}</p>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-justify">{member.content}</p>
                  </div>
                  <div className="relative">
                    <div className="relative h-[650px] rounded-tr-3xl rounded-bl-3xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#fea700] rounded-tl-full -z-10 transform translate-x-16 translate-y-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Other Management Members */}
      <section className="container w-10/12 mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold border-l-4 border-[#fea700] pl-4 mb-12 text-black">Our Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-[520px] ">
                <Image
                  src={member.image}
                  alt={member.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-[#fea700] font-semibold mb-2">{member.designation}</p>
                  <p className="text-gray-200 text-sm text-justify">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ManagementPage;
