"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Events = () => {
  const collegeInformation = [
    
    {
      date: "22 October 2024",
      category: "Alumtalks",
      img: "https://utfs.io/f/nsz3ps3WUZRLhJ8eQgViMNPcDnvSxoLIg9Ctks7ERfauWpJX",
      description: " Welcome to the Super 60 Batch of 2023! 🚀 Congratulations on embarking on this incredible journey with us. Get ready to explore, learn, and grow together. Your dedication and enthusiasm inspire us all."
    },
    {
      date: "09 October 2024",
      category: "Industrial Visit",
      img: "https://utfs.io/f/nsz3ps3WUZRLQmKFLCHc7ILkp3Shaeo8Ds0FjqiG5UAfE41R",
      description: " Welcome to the Super 60 Batch of 2023! 🚀 Congratulations on embarking on this incredible journey with us. Get ready to explore, learn, and grow together. Your dedication and enthusiasm inspire us all."
    },
    {
      date: "07 October 2024",
      category: "Skill Up Workshop",
      img: "https://utfs.io/f/nsz3ps3WUZRLwfcCxM7s8P3Soye5hZQfLnF621dxGajIOvWK",
      description: " Welcome to the Super 60 Batch of 2023! 🚀 Congratulations on embarking on this incredible journey with us. Get ready to explore, learn, and grow together. Your dedication and enthusiasm inspire us all."
    },
    
    {
      date: "25 March 2024",
      category: "Induction Program",
      img: "https://utfs.io/f/nsz3ps3WUZRLPhjwLml9grXehIqHVNuKBUE0LskYT2MDi3Zv",
      description: " Welcome to the Super 60 Batch of 2023! 🚀 Congratulations on embarking on this incredible journey with us. Get ready to explore, learn, and grow together. Your dedication and enthusiasm inspire us all."
    },
    {
      date: "28 March 2024",
      category: "Industrail Visit",
      img: "https://utfs.io/f/nsz3ps3WUZRLzyYF026w5nBJDbr081ZY6IPvhC2OLgpSAqyo",
      description: "Delighted to share the remarkable industrial visit of our Super 60 students to Grazitti Interactive. Witness their journey of discovery and enlightenment as they delve into contemporary industry practices! "
    },
    {
      date: "19 March 2024",
      category: "Seminar",
      img: "https://utfs.io/f/nsz3ps3WUZRLptlisRo8FWwmJahnvZYIlGUsCob6fS1e3LHq",
      description: "The expert lecture on AI methodologies with Mr. Vishal Gahrotra from PRIMUS SOFTWARE CORPORATION was a game-changer. Participants from Super 60, TheUniques, MCA, and BCA | Batch 2021-23 gained valuable insights into the latest AI techniques, ensuring they stay at the forefront of the tech landscape."
    },
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
    infinite: true,
    dots: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3, // Show 2.5 slides on desktop
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
    autoplay: true,
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
      <div className='flex justify-between mt-28'>
        <p className='text-3xl font-medium pb-6 '>
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
                    <p className="mt-2 text-sm text-justify">{info.description}</p>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <div>
          <p className="text-3xl  mb-3 pl-2 font-medium border-l-4 border-[#fea700] mt-28">
          Bringing the World to SVGOI
          </p>
        </div>
        <Slider {...settings2}>
          {placementDriveInformation.map((info, index) => (
            <div key={index} className='px-2 h-full py-4'>
              <div className="h-full md:h-[40vh] lg:h-[40vh] p-5 my-3 rounded-md shadow-md flex flex-col justify-between bg-white">
                <div className='h-full'>
                  <h2 className="text-xl lg:text-2xl py-2 font-semibold">{info.company}</h2>
                  <p className='text-sm md:text-lg font-medium'>{info.date}</p>
                  <p className="mt-2 md:text-md py-3 text-justify">{info.details}</p>
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