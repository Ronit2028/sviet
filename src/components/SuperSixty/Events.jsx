"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Events = () => {
  const collegeInformation = [
    {
      date: "31 Feb 2025",
      category: "Research",
      img: "https://sviet.ac.in/wp-content/uploads/2021/05/2ss-700x400.png",
      description: "Students leading the search for knowledge with highly equipped research facilities at the campus. More than 100 research articles published at national and international stages."
    },
    {
      date: "31 Feb 2025",
      category: "Project Based Learning",
      img: "https://sviet.ac.in/wp-content/uploads/2021/05/5s-700x400.png",
      description: "Investigate and respond to authentic & complex challenges and go beyond learning with project-based learning while experiencing enriching experiences."
    },
    {
      date: "31 Feb 2025",
      category: "Sporting Excellence",
      img: "https://sviet.ac.in/wp-content/uploads/2021/05/6s-700x400.png",
      description: "Compete and achieve excellence with passion under the excellent sporting environment. More than 30 sports tournament participations happening over the Year."
    },
    {
      date: "31 Feb 2025",
      category: "Startups",
      img: "https://sviet.ac.in/wp-content/uploads/2022/07/fsfssfsf.jpg",
      description: "Incubation environment for innovative student entrepreneurship, more than 15 successful companies have started their journey at SVGOI."
    },
    {
      date: "31 Feb 2025",
      category: "Global Exposure",
      img: "https://sviet.ac.in/wp-content/uploads/2022/07/fsdsdds.jpg",
      description: "International tie-ups with more than 25 colleges from 7 countries with students from more than 10 countries studying on campus."
    },
    {
      date: "31 Feb 2025",
      category: "Super 60 Batch",
      img: "https://sviet.ac.in/wp-content/uploads/2022/04/sgfddf.jpg",
      description: "There is a special batch of 30 to 60 Students in each branch which is called SUPER-60 in CSE, ALLIED-30 group in Civil, and so on. These Students assured 100% placement in the campus placement drive."
    }
  ];
  const placementDriveInformation = [
    {
      company: "IDS INFOTECH LTD",
      date: "Feb 4, 2024",
      details: "This is the information for B.Pharmacy 2024 passing out students that IDS INFOTECH LTD is conducting a Placement Drive. All the eligible students can register themselves up to 29.01.2024. Date of placement drive is 7th Feb. 2024 at SVIET Campus."
    },
    {
      company: "Aimil Ayouthveda ltd",
      date: "Feb 4, 2024",
      details: "This is the information for B.Pharmacy 2024 passing out students that Aimil Ayouthveda ltd is conducting a Placement Drive. Date of placement drive is 8th Feb. 2024 at SVIET Campus."
    }
  ];


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
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <div className='w-10/12 mx-auto h-auto  py-12'>
      <div className='flex justify-between'>
        <p className='text-3xl font-medium pb-6'>
          Latest Events
        </p>
        <div className='flex gap-2'>
          <button className='bg-[#fea700] rounded-md text-white h-7 w-7'>
            <i className='fa fa-arrow-left'></i>
          </button>
          <button className='bg-[#fea700] rounded-md text-white h-7 w-7'>
            <i className='fa fa-arrow-right'></i>
          </button>
        </div>
      </div>
      <div className='py-6 mb-6'>
        <Slider {...settings}>
          {collegeInformation.map((info, index) => (
            <div key={index} className='p-1 h-full'>
              <div className="border rounded-md h-[40vh] " style={{ backgroundImage: `url(${info.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                <div className="w-full h-full bg-[#00000085] flex flex-col justify-between text-white p-5 ">
                  <div>
                    <p className='text-3xl pl-2 border-l-4 border-[#fea700]'>
                      {info.date}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{info.category}</h2>
                    <p className="mt-2 text-sm">{info.description}</p>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <div>
          <p className="text-3xl py-6 mb-3 font-medium">
              Coming Soon
          </p>
        </div>
        <Slider {...settings2}>
          {placementDriveInformation.map((info, index) => (
            <div key={index} className='px-2 h-full py-4'>
              <div className="h-full md:h-[40vh] lg:h-[30vh] p-5 my-3 rounded-md shadow-md flex flex-col justify-between bg-white">
                <div className='h-full'>
                  <h2 className="text-xl lg:text-2xl py-2 font-semibold">{info.company}</h2>
                  <p className='text-sm md:text-lg font-medium'>{info.date}</p>
                  <p className="mt-2 md:text-md py-3">{info.details}</p>
                </div>
                <div className='mt-3'>
                  <button className=' bg-[#fea700] text-white p-1 rounded-md'>Know More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Events