"use client"
import React from 'react'
import img  from'../../assets/LandingPage/bannerImage.jpg'

const Gdsc = () => {
  return (
    <>
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-5/6 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="w-full lg:h-auto h-64 object-contain object-right rounded" src={"https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.0_mul_h_sub_0.0_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-dsc/chapter_banners/gdsc%25201.0%2520copy.jpg"}/>
      <div class="w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">About</h2>
        <h1 class="text-gray-900 text-5xl title-font mb-5 font-medium "><span className='text-rose-800'>Go</span><span className='text-[#fea700]'>og</span><span className='text-green-900'>le</span> Developer's Student  Club </h1>
       
        <p class="leading-relaxed mb-4">We at GDSC-SVIET are a passionate group of people who work towards bringing a change in the ecosystem of development around the campus. We want to create a healthy environment for the budding developers to exploring solutions to real life problems and promote the developer culture.</p>
        <p class="leading-relaxed">Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.

</p>

        <a class="text-red-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
      </div>
    </div>
  </div>
</section>
  
 

  


    </>

  )
}

export default Gdsc