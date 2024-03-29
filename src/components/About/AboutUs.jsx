import React from 'react'
import Image from 'next/image';
import img1 from '../../assets/LandingPage/bannerImage.jpg';


const AboutUs = () => {
  return (
    <>

    <section class="bg-white ">
    <div class="gap-16   items-center py-8 px-5 mx-auto container md:w-4/5  lg:grid lg:grid-cols-2 lg:py-28 lg:px-6">
        <div class="font-light  text-gray-900 sm:text-lg dark:text-gray-400">
        <div class="flex md:mb-5 items-center md:justify-start justify-center">
                    <span class="md:border-l-2 border-[#ff9602] h-6 mr-3"></span>
                    <h1 class="text-sm md:text-lg font-bold">ABOUT</h1>
                </div>
                <h1 class="md:text-7xl text-4xl text-center md:text-start font-semibold mb-12  text-[#ff9602]">SVGOI </h1>
            <p class="mb-4 text-sm md:text-md">A state-of-the-art campus situated 30 km from Chandigarh on the NH-1 Chandigarh-Patiala National Highway. The sprawling campus of the SVGOI is equidistant from Chandigarh, Mohali, Panchkula, Ambala, and Patiala. SVGOI has a mission to build leaders through holistic, transformative, and innovative education. </p>
            <p class=" text-sm md:text-md">For this purpose, a healthy number of international and national students from diverse regions like Egypt, Nepal, Assam, Nagaland, Jharkhand, Delhi-NCR, Himachal Area (Upper and Lower), Uttrakhand, Chandigarh, Panchkula, Mohali, U.P., and other localities are regularly studying at the campus, adding to the cultural diversity found on campus.</p>
        </div>
        <div class="grid grid-cols-1 gap-4 mt-8">
            <Image class="w-full   rounded-lg" src= {img1} alt="office content 1"/>
            {/* <Image class="mt-4 w-20  h-20 lg:-mt-40 rounded-lg" src={img2} alt="office content 2"/> */}
        </div>
    </div>
</section>
    </>
  )
}

export default AboutUs