"use client"
import React from 'react'
import img1 from '../../assets/LandingPage/recruit.jpg'
// import { url } from 'inspector'

const Cards = () => {
  return (
   <>
   <section class="container mx-auto p-10 md:py-20 px-0 md:p-20 text-gray-900  md:px-0 antialiased">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl lg:text-6xl text-2xl  title-font leading-10  mb-5 ">Pitchfork Kickstarter Taxidermy</h1>
        <div class="h-1 w-20 bg-red-700 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed ">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
  


        <section class="grid grid-cols-3  gap-20 ">
            <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-60 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{backgroundImage: `url(${img1.src})`}}>
                <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                    <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        On A Day Like Today
                    </h1>
                    <div class="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                    </p>
                </div>
            </article>

            <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-60 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{backgroundImage: "url(https://images.pexels.com/photos/3325720/pexels-photo-3325720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);"}}>
                <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                    <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        The Illusionist
                    </h1>
                    <div class="w-16 h-2 bg-orange-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                    </p>
                </div>
            </article>

            <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-60 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{backgroundImage:" url(https://images.pexels.com/photos/3304855/pexels-photo-3304855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);"}}>
                <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                    <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        Loneliness Within
                    </h1>
                    <div class="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                    </p>
                </div>
            </article>
        </section>
      
    </section>
   </>
  )
}

export default Cards