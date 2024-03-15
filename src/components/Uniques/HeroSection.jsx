import React from 'react'
import bg from '@/assets/LandingPage/bannerImage.jpg'
import img from '@/assets/LandingPage/success.jpg'
import AnimatedBG from './AnimatedBG'

import './style.css'
const HeroSection = () => {
  return (
    <>
    <section class="bg-gradient-to-t from-slate-900 to-slate-50 " style={{backgroundImage: `url(${bg.src})`,  backgroundSize:'cover'}}>
    
   
    <div className=" inset-0 opacity-100 bg-gradient-to-t from-black via-gray-800 to-transparent ">

  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-9 lg:px-12">
  <div class="h-44 w-[2px]  relative mx-auto overflow-hidden">
  <div class="absolute inset-y-0 left-0 bg-white w-1/2 animate-line-forward"></div>
</div>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12 ">
       
        <h1 class="mb-4 text-2xl font-bold tracking-tight leading-none text-white md:text-3xl lg:text-4xl ">World can lie under you But <span className='text-red-800'> The </span> Uniques can't!!</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    
        
    </div>
    
    <div class="h-44 w-[2px]  relative mx-auto overflow-hidden">
  <div class="absolute inset-y-0 left-0 bg-white w-1/2 animate-line-backward"></div>
</div>
</div>
    </div>
</section>
<div className=" ">
<AnimatedBG/></div>
<section class="text-white pb-24   body-font ">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl lg:text-6xl text-2xl  title-font leading-10  mb-5 text-white">Pitchfork Kickstarter Taxidermy</h1>
        <div class="h-1 w-20 bg-red-700 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
  
  </div>

    <div class=" mx-auto   flex my-20 container px-5 ">

        <div className="w-1/2">
        <h1 class="sm:text-3xl lg:text-4xl text-2xl  title-font leading-10  mb-5 text-white">Pitchfork Kickstarter Taxidermy</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iste sunt beatae, ipsum iusto incidunt molestias cupiditate rerum ipsa enim?</p>
        </div>
        <div className="w-1/2">
        <div className='object-cover h-64  w-full bg-red-800 ' >hey</div>
        </div>
</div>

  
</section>



    </>
  )
}

export default HeroSection