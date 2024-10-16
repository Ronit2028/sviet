import React from 'react'

import success from "@/assets/LandingPage/success.jpg"

import Link from 'next/link';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

const ChartYourPath = () => {
  const chartYourPathContent = [
    {
      title: "Fostering Innovation and Exploration",
      description: " With state-of-the-art facilities and dedicated faculty mentors, students have the opportunity to engage in meaningful research projects, tackle real-world challenges, and contribute to groundbreaking discoveries."
    },
    {
      title: "Forge Partnerships with Industry Leaders",
      description: "Unlock unparalleled opportunities for collaboration and growth through our strong partnerships with industry leaders. At SVIET, students benefit from hands-on experiences, internships, and mentorship programs offered by leading companies across various sectors. "
    },
    {
      title: "A Dynamic Learning Environment",
      description: " Our innovative approach to education integrates cutting-edge technology, experiential learning opportunities, and personalized instruction to empower students to become lifelong learners and adaptable problem-solvers."
    },
    {
      title: "Join Our Community of Trailblazers",
      description: "Join a vibrant community of trailblazers, dreamers, and achievers at SVIET. Here, you'll find a supportive network of peers, faculty, and alumni who are committed to helping you reach your fullest potential. "
    }
  ];
  return (
    <div style={{backgroundImage:`url(${success.src})`, backgroundSize:"cover", backgroundPosition:"center center", backgroundAttachment:"fixed"}}>
      <div className='bg-[#00112ded] h-auto lg:h-[100vh] text-white py-10 lg:mt-[-160px] md:mt-auto flex items-center'>
        <div className="w-10/12 mx-auto ">
          {/* <p className='text-4xl font-semibold'>
            Be <span className='text-[#fea700]'>Future Ready</span>
          </p> */}
          <div className='flex flex-wrap justify-between'>
            <p className='text-4xl mt-2 font-semibold'>

              Chart Your Path To Success To SVIET

            </p>
            <div className='flex gap-3'>
            <Link href="https://admission.sviet.ac.in/"> 
            <button className='bg-[#fea700] text-white text-xl px-2 py-1 rounded-md'>Apply Now</button>
            </Link>
              
              <Link href="/placement"><button className=' text-white text-xl px-2 py-1 rounded-md'>Placements <i className='fa fa-arrow'></i></button></Link>
            </div>

          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 py-5 gap-6'>
            {chartYourPathContent.map((data, index)=> (
              <div key={index}  className='pr-3'>
                <p className='text-2xl mb-5'>
                  {data.title}
                </p>
                <p className='text-sm mb-5 text-justify'>
                  {data.description}
                </p>
                
              </div>
            ))}
            <div>
            <button className='bg-[#fea700] text-white text-xl px-2 ml-12  py-1 rounded-md h-[40%] w-[73%] '>Apply Now</button>
            <p className='text-2xl font-semibold ml-12 mt-4 flex'>
            Why choose <span className='text-[#fea700] pl-2'>SVGOI </span>
            <ChevronDoubleRightIcon className='h-6 w-6 font-bold mt-1 ml-2 text-[#fea700]' />
          </p>
          
            </div>
            <Link href="/advantages">
            <button className=' bg-gray-100 text-[#fea700]  text-xl px-2 ml-12 py-1  rounded-md h-[40%] w-[77%] hover:bg-white hover:font-medium transition duration-400 ease-in-out'>Explore More</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartYourPath