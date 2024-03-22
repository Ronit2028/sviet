import React from 'react'
import img from '../../assets/CampusLife/27.jpg'
import Form from "@/components/Contact/Form"
import Link from 'next/link'


const page = () => {
  return (
    <div>
        <div className='w-full p-10 bg-black bg-blend-luminosity h-[60vh] lg:h-[80vh] md:h-[70vh] realtive sm:h-[60vh] flex flex-col gap-2 lg:justify-center md:justify-center sm:justify-center justify-center' style={{backgroundImage:`url(${img.src})`, backgroundSize: 'cover',backgroundPositionX: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className='text-white pt-10 '>
                <h2 className='lg:text-[38px] text-[28px] md:test-[38px] sm:text-[36px] font-medium text-white text-center'>Call on Toll Free No. 1800-120-1200</h2>
                <p className='text-white text-[14px] lg:text-[24px] md:text-[20px] font-medium text-center'>You Have a Question or a Comment – We know that sometimes its tough to find the infomation you need. SO, ASK!</p>
            </div>
        </div>
        <div className='pb-5 p-5 pt-5 grid place-items-center gap-2 grid-cols-12 max-h-[max-content]'>
            <div className='col-span-12 lg:col-span-4 md:col-span-12 sm:col-span-12'>
                <h3 className='text-[26px] text-center lg:text-start md:text-center sm:text-center'><span className='font-medium'>Contact - SVIET</span> <br/>Swami Vivekanand Institute of Engineering & Technology</h3>
                <div className='ps-4 mt-4'>
                    <Link href="" className=''>
                        <div className='flex gap-1 items-center my-1'>
                            <div className='w-[8px] h-[8px] me-3 bg-[#fea700] rounded-full'></div><p className='hover:text-[#fea700] duration-150'>About SVIET</p>
                        </div>
                    </Link>
                    <Link href="" className=''>
                        <div className='flex gap-1 items-center my-1'>
                            <div className='w-[8px] h-[8px] me-3 bg-[#fea700] rounded-full'></div><p className='hover:text-[#fea700] duration-150'>General Enquiry</p>
                        </div>
                    </Link>
                    <Link href="" className=''>
                        <div className='flex gap-1 items-center my-1'>
                            <div className='w-[8px] h-[8px] me-3 bg-[#fea700] rounded-full'></div><p className='hover:text-[#fea700] duration-150'>Maps & Direction</p>
                        </div>
                    </Link>
                    <Link href="" className=''>
                        <div className='flex gap-1 items-center my-1'>
                            <div className='w-[8px] h-[8px] me-3 bg-[#fea700] rounded-full'></div><p className='hover:text-[#fea700] duration-150'>Feedback Form</p>
                        </div>
                    </Link>
                    
                </div>
                <div className='bg-black text-white p-2 mt-3 mb-3'>
                    <p className='text-[20px] font-medium' >ADMISSION QUICK LINKS</p>
                </div>
                <div className='ps-4'>
                    <Link href="" className=''>
                        <div className='flex gap-1 items-center my-1'>
                            <div className='w-[8px] h-[8px] me-3 bg-[#fea700] rounded-full'></div><p className='hover:text-[#fea700] duration-150'>Course Fee</p>
                        </div>
                    </Link>
                    <Link href="" className=''>
                        <div className='flex gap-1 items-center my-1'>
                            <div className='w-[8px] h-[8px] me-3 bg-[#fea700] rounded-full'></div><p className='hover:text-[#fea700] duration-150'>How To Apply?</p>
                        </div>
                    </Link>
                    <Link href="" className=''>
                        <div className='flex gap-1 items-center my-1'>
                            <div className='w-[8px] h-[8px] me-3 bg-[#fea700] rounded-full'></div><p className='hover:text-[#fea700] duration-150'>Online Registration Form</p>
                        </div>
                    </Link>
                    <Link href="" className=''>
                        <div className='flex gap-1 items-center my-1'>
                            <div className='w-[8px] h-[8px] me-3 bg-[#fea700] rounded-full'></div><p className='hover:text-[#fea700] duration-150'>Visit The Campus</p>
                        </div>
                    </Link>
                    <Link href="" className=''>
                        <div className='flex gap-1 items-center my-1'>
                            <div className='w-[8px] h-[8px] me-3 bg-[#fea700] rounded-full'></div><p className='hover:text-[#fea700] duration-150'>SVIETEE Scholarship</p>
                        </div>
                    </Link>
                    <Link href="" className=''>
                        <div className='flex gap-1 items-center my-1'>
                            <div className='w-[8px] h-[8px] bg-[#fea700] me-3 rounded-full'></div><p className='hover:text-[#fea700] duration-150'>International Admission Form</p>
                        </div>
                    </Link>
                </div>
                
                </div>
            <div className='mx-auto col-span-12 lg:col-span-8 md:col-span-12 sm:col-span-12'>
                <Form/>
            </div>
            
        </div>
        <div className='bg-white/75 p-5 text-center'>
            <h3></h3>
        </div>
    </div>
  )
}

export default page