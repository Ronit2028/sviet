import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutDepartment = () => {
    return (
        <div className='py-12 w-10/12 mx-auto'>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-3'>
                <div className='my-auto'>
                    <div className='flex flex-col justify-center'>
                        <p className="text-3xl font-medium">About Department of
                            International Affairs​</p>
                        <p className='text-lg pl-2 border-l-4 border-[#fea700] mt-3'>Fostering a Global Culture for a Better Future</p>
                        <p className='text-justify pt-6'>
                            The Department of International Affairs at SVGOI is established with the motive to provide assistance to the international students studying at the SVGOI campus.Each year more than 800 international students study academic at the SVGOI. Most of these students are coming to India for the first time and they may face many difficulties here including finding a place to stay or finding work etc.​   </p>
                        <p className="text-justify pt-6">
                            The Department of Interantional Affairs at SVGOI ensures that all the problems of these students will be sorted. Students seeking help can reach out to this department and can get help in terms of hostel and amenities, finding work, assistance in documentation, activities. We promise to sort all of the problems of the international students in a quick time, so that they have a comfortable stay in India.
                        </p>
                        <Link href='/Int Fee structure.pdf'>
           <button className='bg-[#fea700] text-white rounded-md px-2 py-1 mt-10'>
                Download Fee Structure
            </button>
           </Link>

                    </div>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/M5nNS8EQ9OA?si=7d-ZCNhwV_XdgAx_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                            className='rounded-md shadow-md'
                        ></iframe>
                    </div>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/kyT7r_qu5ds?si=iS9_mTohCV0B7VzO" title="YouTube video player" frameborder="0"
                            className='rounded-md shadow-md' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap  mt-10 mb-auto  w-full  content-start sm:pr-10">

                <div className="px-4 py-auto sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-bold text-4xl py-5   text-gray-900">1000+</h2>
                    <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">International Students</p>
                </div>
                <div className="px-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-bold text-4xl py-5  text-gray-900">20+</h2>
                    <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">Countries</p>
                </div>
                <div className="px-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-bold text-4xl py-5  text-gray-900">30+</h2>
                    <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">Nationalities</p>
                </div>
                <div className="px-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-bold text-4xl py-5 text-gray-900">50+</h2>
                    <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">Cultures</p>
                </div>
            </div>

           
        </div>
    )
}

export default AboutDepartment