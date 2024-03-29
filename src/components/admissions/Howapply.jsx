"use client"

import React from 'react'
import { FaCheck } from "react-icons/fa6";
import {useState} from 'react'
import img from '@/assets/admissions/DSC_6814.jpg'
import imgg from '@/assets/admissions/DSC_6833.jpg'
import imggg from '@/assets/admissions/DSC_6871.jpg'
import imgggg from '@/assets/admissions/DSC_6913.jpg'
import Image from 'next/image';


const Howapply = () => {
    const [index ,setIndex] = useState(0)

    const data = [
        {
            title : "Step 1: Choose",
            descr : "Choose the course that suits you best. We have a wide range of courses to choose from.",
        },
        {
            title : "Step 2: Apply",
            descr : "Fill out the application form with your personal information and academic background."
        },
        {
            title : "step 3 : Submit",
            descr :"Upload or submit the necessary documents, such as educational certificates, identity proof, and any other documents specified by SVIET."
        }
    ]
    
  return (
    <div className='w-full h-[max-content] md:flex justify-center items-center py-10'>
        <div className='md:w-[40%] p-4'>
            <div className='w-[90%] flex relative justify-between items-center'>
                <div className='absolute top-[20px] w-[90%] left-5 z-[-1] bg-gray-500 h-[2px]'></div>
                <div className=''>
                    <button onClick={()=>{setIndex(0)}} className=" flex cursor-pointer focus:bg-[#fea700] focus:text-white justify-center items-center rounded-[50%] w-[44px] h-[44px] text-[#999999] bg-[#d5d5d5]" ><FaCheck /></button>
                    <p className='mt-3'>Step-1</p>
                </div>
                <div className=''>
                    <button onClick={()=>{setIndex(1)}} className=" flex justify-center cursor-pointer  focus:bg-[#fea700] focus:text-white items-center rounded-[50%] w-[44px] h-[44px] text-[#999999] bg-[#d5d5d5]"><FaCheck /></button>
                    <p className='mt-3'>Step-2</p>
                </div>
                <div className=''>
                    <button onClick={()=>{setIndex(2)}} className=" flex justify-center cursor-pointer  focus:bg-[#fea700] focus:text-white items-center rounded-[50%] w-[44px] h-[44px] text-[#999999] bg-[#d5d5d5]"><FaCheck /></button>
                    <p className='mt-3'>Step-3</p>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='font-semibold text-2xl'>{data[index].title}</h2>
                <p className='mt-2'>{data[index].descr}</p>
                <button className='bg-[#fea700]  cursor-pointer text-white p-2 rounded-md text-lg mt-8'>Apply Now</button>
            </div>
        </div>
        <div className='md:w-[45%] flex flex-wrap justify-center gap-[30px] items-center'>
            <div className='shadow-md w-[200px] h-[300px]' style={{backgroundImage:`url(${img.src})`, backgroundSize:'cover' , backgroundPosition:'center center'}}></div>
            <div className='shadow-md w-[200px] h-[300px]' style={{backgroundImage:`url(${imgg.src})`, backgroundSize:'cover' , backgroundPosition:'center center'}}></div>
            <div className='shadow-md w-[200px] h-[300px]' style={{backgroundImage:`url(${imggg.src})`, backgroundSize:'cover' , backgroundPosition:'center center'}}></div>
            <div className='shadow-md w-[200px] h-[300px]' style={{backgroundImage:`url(${imgggg.src})`, backgroundSize:'cover' , backgroundPosition:'center center'}}></div>
        </div>
    </div>
  )
}

export default Howapply