import React from 'react'
import bg from '@/assets/LandingPage/bannerImage.jpg'
import img from '@/assets/LandingPage/success.jpg'
import AnimatedBG from './AnimatedBG'
import logo from '@/assets/Brand/Untiwhite.png'
import Image from 'next/image'

import './style.css'    
const HeroSection = () => {
  return (
    <div className='w-full overflow-hidden text-justify'>
      <section className="bg-gradient-to-t from-slate-900 to-slate-50 " style={{ backgroundImage: `url(https://utfs.io/f/nsz3ps3WUZRLNLRuHm9rk45hJIB6UAVERY1S0Po7cOimTtlD)`, backgroundSize: 'cover', backgroundPosition: "center bottom", backgroundAttachment: "" }}>

        <div className=" inset-0 opacity-100 bg-gradient-to-t from-black via-gray-800/25 ">

          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-9 lg:px-12">
            <div className="h-44 w-[2px]  relative mx-auto overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-white w-1/2 animate-line-forward"></div>
            </div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12 ">

              <h1 className="mb-2 text-2xl font-bold tracking-tight leading-none text-white md:text-3xl lg:text-4xl ">
                WELCOME TO <span className='text-[#ff9602]'>ISTE SVIET</span>
              </h1>
              <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
                Uniting students, educators, and professionals to advance technical education and create future leaders.
              </p>

            </div>

            <div className="h-44 w-[2px]  relative mx-auto overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-white w-1/2 animate-line-backward"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="text-white pb-24 body-font bg-black">
        <div className="w-10/12 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl lg:text-6xl text-2xl title-font leading-10 mb-5 text-white">
                OUR MISSION
              </h1>
              <div className="h-1 w-20 bg-[#ff9602] rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-white">
              At ISTE SVIET, we aim to bridge the gap between education and industry, offering workshops, seminars, and hands-on projects to prepare students for the professional world.
            </p>
          </div>
        </div>

        <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full">
            <h1 className="sm:text-3xl lg:text-4xl text-2xl title-font leading-10 mb-5 text-white">
              Who We Are
            </h1>
            <p>
              ISTE SVIET is the newest chapter of the Indian Society for Technical Education at SVIET. We are committed to advancing technical knowledge and enhancing students' career prospects through collaborative efforts and innovative programs.
            </p>
          </div>
          <div className="w-full">
            <div className='object-cover h-64 w-full '>
              <Image src={logo} alt="ISTE SVIET Logo" className='w-10/12 lg:w-1/2 mx-auto mt-[-59px]' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
