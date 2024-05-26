"use client"
import React from 'react'
import MulCharts from './MulCharts'
// import {SimpleSlider} from './MulCharts'

const MulitipleCharts = () => {
  return (
    <>
      <div className="flex container px-5 md:px-auto md:w-4/5 m-auto py-10 md:py-20">
        <h1 className='md:text-4xl text-2xl font-semibold md:w-1/2 border-l-2 pl-4 border-[#ff9602]' >Our Impeccabale Placement
          Record Over The Years</h1>
      </div>
      <div className=" pb-20">
        <MulCharts /></div>
    </>
  )
}

export default MulitipleCharts