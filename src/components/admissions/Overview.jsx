import React from 'react'

import image from '@/assets/sviet-web/tseg.webp'
import Link from 'next/link'
const Overview = () => {
    return (
        <div className='py-12 my-10 w-10/12 mx-auto flex'>
            <div className="py-12 w-full lg:w-1/3 flex flex-col justify-center">
                <p className="text-4xl pb-3 mb-3 font-semibold">

                    <span className="text-[#fea700]">
                        SVGOI</span>
                    <br />

                    Experience
                </p>

                <p className="text-justify">
                Experience a world of opportunities at SVGOI, where we boast a vibrant campus spanning over 25 acres and house a diverse faculty of over 250 professionals. With a global alumni network exceeding 25,000 and over 1,000 international students, we've garnered recognition through 25+ national and international awards.
                </p>
                <Link href="https://admission.sviet.ac.in/">
                <button className='text-lg text-white rounded-md bg-[#fea700] w-fit p-2 mt-5'>Apply Now</button>
                </Link>
                
            </div>
            <div className="w-full lg:w-2/3 pl-16">
                <div className="gap-4 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className='bg-gray-100/20 rounded-md shadow-md'></div>
                    <div className='bg-gray-100 rounded-md shadow-md'></div>

                    <div className='bg-white rounded-md p-5 shadow-md flex flex-col justify-center'>

                        <p className=" text-4xl mb-3 font-semibold">
                            250+
                        </p>

                        <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                            Faculties Available
                        </p>
                        <p className="font-medium mb-3 text-sm">
                            Every Year
                        </p>
                    </div>
                    <div className='bg-[#fea700] text-white rounded-md p-5 shadow-md flex flex-col justify-center'>

                        <p className=" text-4xl mb-3 font-semibold">
                            25+
                        </p>

                        <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                            Acres
                        </p>
                        <p className="font-medium mb-3 text-sm">
                            Campus
                        </p>
                    </div>
                </div>
                <div className="gap-4 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className='bg-gray-100 rounded-md shadow-md'></div>
                    <div className='bg-white rounded-md p-5 shadow-md flex flex-col justify-center'>

                        <p className=" text-4xl mb-3 font-semibold">
                            25000+
                        </p>

                        <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                            Global Alumini
                        </p>
                        <p className="font-medium mb-3 text-sm">
                            Reach
                        </p>
                    </div>
                    <div className='bg-[#fea700] text-white rounded-md p-5 shadow-md flex flex-col justify-center'>

                        <p className=" text-4xl mb-3 font-semibold">
                            1000+
                        </p>

                        <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                            International Students
                        </p>
                        <p className="font-medium mb-3 text-sm">
                            Present
                        </p>
                    </div>
                    <div className='bg-gray-100 rounded-md p-5 shadow-md flex flex-col justify-center'>

                        <p className=" text-4xl mb-3 font-semibold">
                            25+
                        </p>

                        <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                            National & International
                        </p>
                        <p className="font-medium mb-3 text-sm">
                            Awards Ranking
                        </p>
                    </div>
                </div>
                <div className="gap-4 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className='bg-white rounded-md p-5 shadow-md flex flex-col justify-center'>

                        <p className=" text-4xl mb-3 font-semibold">
                           350+
                        </p>

                        <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                            Companies Visit
                        </p>
                        <p className="font-medium mb-3 text-sm">
                           Per Year
                        </p>
                    </div>
                    <div className='bg-[#fea700] text-white rounded-md p-5 shadow-md flex flex-col justify-center'>

                        <p className=" text-4xl mb-3 font-semibold">
                            5000+
                        </p>

                        <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                            Placed Students
                        </p>
                        <p className="font-medium mb-3 text-sm">
                            In 250+ Companies
                        </p>
                    </div>
                    <div className='bg-gray-100 rounded-md p-5 shadow-md flex flex-col justify-center'>

                        <p className=" text-4xl mb-3 font-semibold">
                            100%
                        </p>

                        <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                            Scholarship
                        </p>
                        <p className="font-medium mb-3 text-sm">
                            Programs
                        </p>
                    </div>
                    <div className='bg-white rounded-md p-5 shadow-md flex flex-col justify-center'>

                        <p className=" text-4xl mb-3 font-semibold">
                            45 Lacs+
                        </p>

                        <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                            Entrepreneurship
                        </p>
                        <p className="font-medium mb-3 text-sm">
                            Funding
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview