import React from 'react'
import Image from 'next/image';
import img1 from '../../assets/LandingPage/bannerImage.jpg';


const AboutUs = () => {
  return (

    <section className="bg-white ">
      <div className="gap-16   items-center py-8 px-5 mx-auto container md:w-4/5  lg:grid lg:grid-cols-2 lg:py-28 lg:px-6">
        <div className="font-light  text-gray-900 sm:text-lg ">
          <p className="text-4xl pb-3 mb-3 font-semibold">
            <span className="text-[#fea700]">
             About  </span>
            <br />
          The SVGOI
          </p>

         <p className="mb-4 text-sm md:text-lg text-justify">A state-of-the-art campus situated 30 km from Chandigarh on the NH-1 Chandigarh-Patiala National Highway. The sprawling campus of the SVGOI is equidistant from Chandigarh, Mohali, Panchkula, Ambala, and Patiala. SVGOI has a mission to build leaders through holistic, transformative, and innovative education. </p>
          <p className=" text-sm md:text-lg text-justify">For this purpose, a healthy number of international and national students from diverse regions like Egypt, Nepal, Assam, Nagaland, Jharkhand, Delhi-NCR, Himachal Area (Upper and Lower), Uttrakhand, Chandigarh, Panchkula, Mohali, U.P., and other localities are regularly studying at the campus, adding to the cultural diversity found on campus.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8">
          <Image className="w-full   rounded-lg" src={img1} alt="office content 1" />
          {/* <Image className="mt-4 w-20  h-20 lg:-mt-40 rounded-lg" src={img2} alt="office content 2"/> */}
        </div>
      </div>
    </section>

  )
}

export default AboutUs