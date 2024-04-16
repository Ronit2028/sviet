import React from 'react'

import image from '@/assets/sviet-web/tseg.webp'

const Overview = () => {
    return (
        <div className='py-12 my-10 w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className="py-12 w-full flex flex-col justify-center">
                <p className="text-4xl pb-3 mb-3 font-semibold">
                    <span className="text-[#fea700]">
                        Discover  </span> the
                    <br />

                    SVIET Advantage
                </p>

                <p className='text-md text-gray-800 mt-3'>
                    SVIET offers a diverse range of academic programs designed to empower students with the skills and knowledge needed to excel in their chosen fields. Our holistic approach to education focuses on fostering creativity, critical thinking, and leadership qualities among students. Discover the opportunities awaiting you at SVIET and embark on a journey of academic excellence and personal growth.
                </p>
                <button className='text-lg text-white rounded-md bg-[#fea700] w-fit p-2 mt-5'>Apply Now</button>
            </div>
            <div className="w-full ">
                <div className="event-card rounded-md shadow-md">
                    <div className="image-section h-[30vh]" style={{ backgroundImage: `url(${image.src})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>

                    </div>
                    <div className="text-section p-6">
                        <div>
                            <p className="text-xl font-semibold ">
                                Be a part of SVIET
                            </p>
                            <p className='text-md pb-6'>
                                Be a part of our mission to make world
                                a better place with Quality Education
                            </p>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview