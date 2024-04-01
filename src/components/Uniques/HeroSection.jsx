import React from 'react'
import bg from '@/assets/LandingPage/bannerImage.jpg'
import img from '@/assets/LandingPage/success.jpg'
import AnimatedBG from './AnimatedBG'
import logo from '@/assets/Brand/uniWhite.png'
import Image from 'next/image'

import './style.css'
const HeroSection = () => {
  return (
    <>
      <section class="bg-gradient-to-t from-slate-900 to-slate-50 " style={{ backgroundImage: `url(https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-goog/event_wrapup/DSC05771.JPG)`, backgroundSize: 'cover', backgroundPosition: "center bottom", backgroundAttachment: "" }}>


        <div className=" inset-0 opacity-100 bg-gradient-to-t from-black via-gray-800/25 to-transparent ">

          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-9 lg:px-12">
            <div class="h-44 w-[2px]  relative mx-auto overflow-hidden">
              <div class="absolute inset-y-0 left-0 bg-white w-1/2 animate-line-forward"></div>
            </div>
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12 ">

              <h1 class="mb-4 text-2xl font-bold tracking-tight leading-none text-white md:text-3xl lg:text-4xl ">CREATING A DIFFERENCE<span className='text-red-800'> FROM </span>  COLLEGE TO CORPORATE</h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Transforming Remarkable Business Concepts Into Tangible Reality
              </p>


            </div>

            <div class="h-44 w-[2px]  relative mx-auto overflow-hidden">
              <div class="absolute inset-y-0 left-0 bg-white w-1/2 animate-line-backward"></div>
            </div>
          </div>
        </div>
      </section>
      <div className=" ">
        <AnimatedBG /></div>
      <section class="text-white pb-24   body-font ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl lg:text-6xl text-2xl  title-font leading-10  mb-5 text-white">OUR CAPABILITIES</h1>
              <div class="h-1 w-20 bg-red-700 rounded">

              </div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-white">The Uniques Batch offers an exceptional development course aimed at transforming you into a skilled business consultant and entrepreneur. Founded in 2022 with 14 initial students, this program imparts various valuable skills that empower you to confidently navigate today's competitive landscape</p>
          </div>

        </div>

        <div class=" mx-auto   grid grid-cols-1 lg:grid-cols-2 container gap-8">
          <div className="w-full">
            <h1 class="sm:text-3xl lg:text-4xl text-2xl  title-font leading-10  mb-5 text-white">Who We Are</h1>
            <p>TheUniques is an educational platform which is available to everyone, everywhere. We wish to uplift the educational standards of not only our city or country but globally. Join us in this noble to cause to make education reach to those in need of it.</p>
          </div>
          <div className="w-full">
            <div className='object-cover h-64  w-full '>
              {/* <Image src={"https://media.licdn.com/dms/image/D5622AQE7KzQRgxcOvA/feedshare-shrink_1280/0/1710743265409?e=1714608000&v=beta&t=D55te23vSRpY1QSEWoMtUyhiUIf9uiG4-NGHjcWaoYI"} width={"100%"}></Image> */}
              {/* <img src="https://media.licdn.com/dms/image/D560BAQHwiKTm5zUDvg/company-logo_200_200/0/1706952273698?e=1720051200&v=beta&t=ArpeBXZYTtjN5L3CfmsmTXNlTTBMMQGatHWmDqxiJMQ" alt="" srcSet="" className='object-contain'/> 
               style={{backgroundImage:`url(https://media.licdn.com/dms/image/D563DAQElVKylzXuAyw/image-scale_191_1128/0/1707037425814/theuniquesofflicial_cover?e=1712566800&v=beta&t=SabV3l6AyHf2juagVk_8xmMzgs1x6ttO6y1N_HlhCAk)`, backgroundSize:"cover", backgroundPosition:"center center"}}
              */}
              <img src={logo.src} alt="" srcSet="" className='w-8/12 lg:w-1/2 mx-auto' />
            </div>
          </div>


        </div>


      </section>



    </>
  )
}

export default HeroSection