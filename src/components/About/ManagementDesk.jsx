
"use client"
import React, { useState, useEffect } from 'react';

const  ManagementDesk = () => {
  
    const [selectedMember, setSelectedMember] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 2000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleMemberClick = (index) => {
        setSelectedMember(desk[index]);
        setActiveIndex(index);
    };

    const handleNext = () => {
        const newIndex = (activeIndex + 1) % desk.length;
        setSelectedMember(desk[newIndex]);
        setActiveIndex(newIndex);
    };

    const handlePrev = () => {
        const newIndex = (activeIndex - 1 + desk.length) % desk.length;
        setSelectedMember(desk[newIndex]);
        setActiveIndex(newIndex);
    };

    return (
        <section className="bg-gray-900 p-8 justify-center">
            <div className="container mx-auto max-w-screen-lg">
                <div className="text-white">
                    <div className="text-lg font-extralight mb-4">-From the desk of Management</div>
                    <h2 className="text-2xl font-medium  mb-8">Meet our Founders & Leaders</h2>
                </div>
            </div>

            <div className="container mx-auto mt-8 flex items-center justify-center">
                <div className="bg-slate-800 lg:flex lg:w-11/12 lg:mx-auto lg:max-w-6xl rounded-lg flex flex-col lg:flex-row mb-8 transition-opacity duration-500 ease-in">
                    <img
                        src={selectedMember ? selectedMember.image : desk[0].image}
                        alt={selectedMember ? selectedMember.name : desk[0].name}
                        className="lg:w-2/5 h-auto lg:h-[400px] lg:mr-6 object-cover"
                    />
                    <div className="lg:w-3/5">
                        <h3 className="text-xl text-white font-bold mt-4 mb-4">{selectedMember ? selectedMember.name : desk[0].name}</h3>
                        <h4 className="text-lg text-gray-100 font-light mb-2">{selectedMember ? selectedMember.position : desk[0].position}</h4>
                        <p className="text-white text-normal text-justify mt-6 lg:pr-6">{selectedMember ? selectedMember.description : desk[0].description}</p>
                        <div className="text-white mt-4">

                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-8 w-full">
                <div className="flex justify-center flex-wrap">
                    {desk.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-36 h-38 m-2 object-cover cursor-pointer transition-opacity duration-1000 ease-in"
                                onClick={() => handleMemberClick(index)}
                            />
                            <p className="text-white font-light text-sm mt-2 pr-6">{member.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


 

export default ManagementDesk