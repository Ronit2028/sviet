import React from 'react'
import Image from 'next/image';
import successImage from '../../assets/LandingPage/success.jpg';


import nexus from '@/assets/About/Nexus.webp'

const CulturalDiversity = () => {
  return (
    <div>

      <div className="w-10/12 py-10 md:py-24 mx-auto px-5 flex flex-wrap">
        <div className="flex flex-wrap  mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className=" flex flex-col align-middle  justify-center">
            <div className="flex md:mb-5 items-center">
              <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
              <h1 className="md:text-lg  text-sm font-bold">CULTURE</h1>
            </div>
            <div className="md:text-5xl text-2xl font-semibold mb-8  "><h1 classNameName='text-[#ff9602] text-4xl md:text-7xl d:py-3 '> Cultural</h1> Nexus Institute</div>
            <p>   We at SVGOI understand all these difficulties and to make the journey of our International students’ memorable one, we do all our efforts to provide them best experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-5  mt-10 mb-auto  w-full  content-start sm:pr-10">

            <div className="px-4 py-auto ">
              <h2 className="title-font font-bold text-4xl py-5   text-gray-900">28</h2>
              <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">States</p>
            </div>
            <div className="px-4">
              <h2 className="title-font font-bold text-4xl py-5  text-gray-900">75+</h2>
              <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">Nationalities</p>
            </div>
            <div className="px-4 ">
              <h2 className="title-font font-bold text-4xl py-5  text-gray-900">35000+</h2>
              <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">International Students</p>
            </div>
            <div className="px-4 ">
              <h2 className="title-font font-bold text-4xl py-5 text-gray-900">50000+</h2>
              <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">Full time students</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 px-4 sm:mt-0">
          <Image src={nexus} alt="Success" className="object-cover object-center w-full h-full" />
        </div>


      </div>
    </div>
  )
}

export default CulturalDiversity