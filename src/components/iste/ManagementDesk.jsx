
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Slider from "react-slick";

// Team leads data
const leads = [
  {
    name: "Mr. Niraj Gupta",
    position: "Tech Lead",
    description: "As the Tech Lead of the ISTE SVIET Chapter, I am responsible for driving our technological initiatives forward. I lead the development of innovative digital solutions that streamline processes, enhance the member experience, and ensure the seamless integration of emerging technologies into our projects. By fostering a culture of curiosity and problem-solving, I ensure our team remains at the forefront of cutting-edge technological advancements, setting new benchmarks in the industry. Through collaboration and mentorship, my focus is on building resilient systems that not only meet the current needs but also anticipate future challenges.",
    image: "https://utfs.io/f/nsz3ps3WUZRL7XTsVbyZPFew0cpClJ4f9O3RUWHjaDvbq6AN",
    linkedin: "https://www.linkedin.com/in/niraj-gupta-04b3ba255/",
    facebook: "https://www.instagram.com/nirajgupta851/",
    github: "https://github.com/nirajn45"
  },
  {
    name: "Mr. Nishant Singh",
    position: "Event Lead",
    description: "As the Event Lead for ISTE SVIET Chapter, I am dedicated to creating meaningful and impactful events that foster learning, collaboration, and growth within our community. From ideation to execution, I oversee every detail to ensure that each event is not only well-organized but also memorable for our participants. My passion for planning and meticulous attention to detail allow me to curate experiences that bring together academia and industry leaders, inspire innovation, and strengthen the bonds within our chapter. I believe that well-executed events have the power to ignite passion and cultivate the leaders of tomorrow.",
    image: "https://utfs.io/f/nsz3ps3WUZRLtQODp5h4ehlZSDgBxM8kyvKLcXf74OIbNJuo",
    linkedin: "https://www.linkedin.com/in/nishant-singh-14769a208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    facebook: "https://www.instagram.com/nishant.singh_gulu?utm_source=qr&igsh=MTB0ZmNibGlubHV1cA== ",
    github: "https://github.com/Nishock"
  },
  {
    name: "Ms. Shreya Mishra",
    position: "Management Lead",
    description: "In my role as the Management Lead for the ISTE SVIET Chapter, I coordinate across teams to ensure that our initiatives are executed with precision and efficiency. I focus on optimizing workflows, streamlining communication, and driving operational excellence. My responsibility is to create a balanced and productive environment where every team member is empowered to contribute their best. With a keen eye on deadlines and quality, I ensure that our chapter's goals are met, while also promoting a collaborative and supportive atmosphere. My approach to management is grounded in proactive leadership, fostering growth, and encouraging innovation at every turn.",
    image: "https://utfs.io/f/nsz3ps3WUZRL2b7TjIhnayJRkBrloK41heXxTmAVwY3qPIHE",
    linkedin: "https://www.linkedin.com/in/shreya-mishra-471464216/",
    facebook: " https://www.instagram.com/shree_9032/",
    github: "https://github.com/nirajgupta1999"
  },
  {
    name: "Ms. Shakshi",
    position: "Graphic Lead",
    description: "As the Graphic Lead of the ISTE SVIET Chapter, I take pride in crafting the visual narrative of our chapter. My role is to design creative assets that not only reflect the values of ISTE but also engage our audience through compelling visuals. Whether it's for events, social media, or internal communications, I ensure that our designs are both innovative and aligned with the latest trends. I believe that strong visual storytelling is key to creating a lasting impression, and my goal is to ensure that every design leaves a positive impact while effectively communicating our chapter's message and identity.",
    image: "https://utfs.io/f/nsz3ps3WUZRLI8lQxQRcsoLQdRKhpP3Bl8TN9mqkDrUGjaZH",
    linkedin: "https://www.linkedin.com/in/sakshi-sharma-621871252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    facebook: "https://www.instagram.com/sakszieee__/profilecard/?igsh=MXZrcXZwMDB2a3lvMw==",
    github: "https://github.com/saku2342"
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
    <div className="py-12 bg-gradient-to-r from-white to-gray-100">
      <div className="w-10/12 mx-auto flex flex-col align-middle justify-start">
        <div className="flex mb-5 items-center">
          <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
          <h1 className="text-sm md:text-lg font-bold">OUR TEAM LEADS</h1>
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold">Meet the
          <span className='text-[#ff9602] text-2xl md:text-5xl md:py-2 block'> Leadership Team</span></h1>
      </div>

      <div className="slider-container w-10/12 mx-auto flex flex-wrap items-center">
        <div className="w-full lg:w-3/4 lg:pr-8">
          <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
            {leads.map((lead, index) => (
              <div key={index} className="py-24 w-full">
                <div className="h-full m-auto flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left gap-8">
                  <img className="flex-shrink-0 rounded-lg w-96 h-96 object-cover object-top sm:mb-0 mb-4" src={lead.image} alt={lead.name} />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">{lead.name}</h2>
                    <h3 className="text-[#ff9602] mb-3">{lead.position}</h3>
                    <p className="mb-4 text-justify">{lead.description}</p>
                    <span className="inline-flex">
                      {lead.linkedin && 
                        <a href={lead.linkedin} className="text-gray-500">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      }
                      {lead.facebook && 
                        <a href={lead.facebook} className="ml-2 text-gray-500">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      }
                      {lead.github && 
                        <a href={lead.github} className="ml-2 text-gray-500">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      }
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden lg:block lg:w-1/4">
          <Slider
            asNavFor={nav1}
            ref={slider => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
            arrows={false}
          >
            {leads.map((lead, index) => (
              <div key={index} className="px-4 py-2 w-full h-full">
                <div className="h-full m-auto flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img className="flex-shrink-0 rounded-xl w-24 h-24 object-cover object-center sm:mb-0 mb-4" src={lead.image} alt={lead.name} />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-md text-gray-900">{lead.name}</h2>
                    <h3 className="text-gray-500 mb-3 text-sm">{lead.position}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
