import Image from 'next/image'
import React from 'react'

import img from './Ach.jpeg'

const Achievement = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-10/12 py-12 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 flex items-center pr-20'>
          <div className="flex flex-col justify-center">
            <p className="text-3xl font-medium mb-3">
              Guaranteed Success:
            </p>
            <p className="mb-6 pl-2 border-l-4 border-[#fea700] text-lg">
              Empowering the Next Generation: The Super 60 Batch
            </p>
            <p className='text-justify text-lg'>
              Dedicated to ensuring the success of every student, the Super 60 Batch receives personalized attention, mentorship, and support from faculty members and industry experts. With a focus on holistic growth and skill development, students in this elite group are groomed to excel in both academic and professional endeavors.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image src={img} alt="Achievement Image" className='rounded-md w-full' />
        </div>
      </div>
    </div>
  )
}

export default Achievement
