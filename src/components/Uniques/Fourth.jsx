import React from 'react'
import img from '../../assets/LandingPage/success.jpg'
import Image from 'next/image'

import imageCover from './imageCover.jpeg'

const Fourth = () => {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <Image className="xl:max-w-6xl" src={imageCover} alt='' />
        <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
          <div className="flex justify-between font-bold text-sm">
            <p>Entrepreneurship Insights</p>
            <p className="text-gray-400">#WE_ARE_THE_FUTURE</p>
          </div>
          <h2 className="text-3xl font-semibold mt-4 md:mt-10">Empowering Entrepreneurs to Succeed</h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">Entrepreneurship is about taking risks, pursuing passions, and turning ideas into reality. In today's fast-paced world, entrepreneurship is not just about starting a business; it's about creating value, solving problems, and making a difference. Whether you're a seasoned entrepreneur or just starting out, the journey is filled with challenges and opportunities. From crafting a compelling vision to building a strong team, entrepreneurship requires resilience, creativity, and dedication. Join us as we explore the exciting world of entrepreneurship and uncover the secrets to success.</p>
          <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Know
            More</button>
        </div>
      </section>
    </section>
  )
}

export default Fourth