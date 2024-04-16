"use client"

import React from 'react'

import loader from '../assets/loader.gif'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className='w-full h-full bg-white/50 flex justify-center items-center'>
      <Image src={loader} alt='loader' className='w-full'/>
    </div>
  )
}

export default Loading