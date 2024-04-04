import React from 'react'
import bg from '@/assets/LandingPage/bannerImage.jpg'
import img from '@/assets/LandingPage/success.jpg'
import AnimatedBG from './AnimatedBG'
import logo from '@/assets/Brand/uniWhite.png'
import Image from 'next/image'

import './style.css'
const HeroSection = () => {
  return (
    <div className='w-full overflow-hidden text-justify'>
      <section className="bg-gradient-to-t from-slate-900 to-slate-50 " style={{ backgroundImage: `url(https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-goog/event_wrapup/DSC05771.JPG)`, backgroundSize: 'cover', backgroundPosition: "center bottom", backgroundAttachment: "" }}>


        <div className=" inset-0 opacity-100 bg-gradient-to-t from-black via-gray-800/25 ">

          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-9 lg:px-12">
            <div className="h-44 w-[2px]  relative mx-auto overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-white w-1/2 animate-line-forward"></div>
            </div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12 ">

              <h1 className="mb-4 text-2xl font-bold tracking-tight leading-none text-white md:text-3xl lg:text-4xl ">CREATING A DIFFERENCE<span className='text-red-800'> FROM </span>  COLLEGE TO CORPORATE</h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Transforming Remarkable Business Concepts Into Tangible Reality
              </p>


            </div>

            <div className="h-44 w-[2px]  relative mx-auto overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-white w-1/2 animate-line-backward"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white pb-24  body-font bg-black">
        <div className="w-10/12 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl lg:text-6xl text-2xl  title-font leading-10  mb-5 text-white">OUR CAPABILITIES</h1>
              <div className="h-1 w-20 bg-red-700 rounded">

              </div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-white">The Uniques Batch offers an exceptional development course aimed at transforming you into a skilled business consultant and entrepreneur. Founded in 2022 with 14 initial students, this program imparts various valuable skills that empower you to confidently navigate today's competitive landscape</p>
          </div>

        </div>

        <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full">
            <h1 className="sm:text-3xl lg:text-4xl text-2xl  title-font leading-10  mb-5 text-white">Who We Are</h1>
            <p>TheUniques is an educational platform which is available to everyone, everywhere. We wish to uplift the educational standards of not only our city or country but globally. Join us in this noble to cause to make education reach to those in need of it.</p>
          </div>
          <div className="w-full">
            <div className='object-cover h-64  w-full '>
              <Image src={logo} alt="" srcSet="" className='w-10/12 lg:w-1/2 mx-auto mt-24' />
            </div>
          </div>


        </div>


      </section>



    </div>
  )
}

export default HeroSection