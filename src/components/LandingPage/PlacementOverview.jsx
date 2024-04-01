import React from 'react'

import placementBackdrop from '@/assets/LandingPage/placementBackdrop.jpg'

const PlacementOverview = () => {

    const placements = [
        {
            backgroundImage: 'https://sviet.ac.in/wp-content/uploads/2024/02/Moon.png',
            name: 'Moon Mandal',
            role: 'Graduate Engineer Trainee',
            companyLogo: 'https://sviet.ac.in/wp-content/uploads/2024/02/jio-white-removebg-preview.png'
        },
        {
            backgroundImage:'https://sviet.ac.in/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-02-at-12.21.29-AM-1.jpeg',
            name: 'Yash Khandalwal',
            role: 'System Engineer',
            companyLogo: 'https://sviet.ac.in/wp-content/uploads/2022/01/info.png'
        },
        {
            backgroundImage: 'https://sviet.ac.in/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-20-at-5.50.14-AM.jpeg',
            name: 'Prince Kumar',
            role: 'Project Engineer',
            companyLogo: 'https://sviet.ac.in/wp-content/uploads/2024/01/image-removebg-preview-17.png'
        },
        {
            backgroundImage: 'https://sviet.ac.in/wp-content/uploads/2023/12/Arjun-katoch-scaled-e1703863008510.jpg',
            name: 'Amit Gautam',
            role: 'Software Developer',
            companyLogo: 'https://sviet.ac.in/wp-content/uploads/2022/01/uu.png'
        }
    ];


    return (
        <div className='w-full mx-auto flex flex-wrap'>
            <div className='w-full lg:w-1/2 text-white ' style={{ backgroundImage: `url(${placementBackdrop.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                <div className="bg-[#00112df2] w-full h-full py-10">
                    <div className="w-10/12 mx-auto p-6">
                        <div>
                            <p className="text-4xl mb-6 font-semibold">
                                Placement Overview
                            </p>
                            <p className="text-sm my-6">
                                Under the guidance of our trained faculty and with the support of our alumni network from different parts of the globe, we have been supplementing the careers of students. Be it preparation for government & defense services, getting a dream job at MNC’s, or starting up your own venture, SVGOI gives you the right direction towards a successful career track.
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl font-semibold py-6">
                                Key Takeaways from the 2022-23 PLacement Session</p>


                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='pr-5 py-5 my-2'>
                                <p className='text-3xl mb-3'>
                                    #Ranked1
                                </p>
                                <p className='text-xl mb-3 '>
                                    Placement College
                                </p>
                            </div>
                            <div className='pr-5 py-5 my-2'>
                                <p className='text-3xl mb-3'>
                                    45LPA
                                </p>
                                <p className='text-xl mb-3 '>
                                    Engineering Highest Package
                                </p>
                            </div>
                            <div className=' pr-5 py-5 my-2'>
                                <p className='text-3xl mb-3'>
                                    360+
                                </p>
                                <p className='text-xl mb-3 '>
                                    Companies Visited
                                </p>
                            </div>
                            <div className='pr-5 py-5 my-2'>
                                <p className='text-3xl mb-3'>
                                    7LPA
                                </p>
                                <p className='text-xl mb-3 '>
                                    Average Package
                                </p>
                            </div>
                            <div className='pr-5 py-5 my-2'>
                                <p className='text-3xl mb-3'>
                                    10 LPA
                                </p>
                                <p className='text-xl mb-3 '>
                                    MBA Highest Package
                                </p>
                            </div>
                            <div className='pr-5 py-5 my-2'>
                                <p className='text-3xl mb-3'>
                                    90%
                                </p>
                                <p className='text-xl mb-3 '>
                                    Students Placed
                                </p>
                            </div>
                        </div>
                        <button className='bg-[#fea700] text-white text-lg py-1 px-2 rounded-sm my-6'>Apply Now</button>
                    </div>
                </div>

            </div>
            <div className='w-full lg:w-1/2 bg-[#00112d] text-white grid grid-cols-1 md:grid-cols-2'>
                
                {placements.map((placement, index)=>(
                <div key={index} className='bg-[#fea700] h-[50vh] md:h-[auto]' style={{ backgroundImage: `url(${placement.backgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                    <div className='flex items-end h-[50vh] lg:h-full w-full bg-gradient-to-t' style={{ background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))' }}>
                        <div className='w-2/3 text-white flex flex-col justify-end p-5'>
                            <p className='text-3xl font-medium'>
                                {placement.name}
                            </p>
                            <p className='text-xl'>
                                {placement.role}
                            </p>
                        </div>
                        <div className='w-1/3'>
                            <img src={placement.companyLogo} alt="" className='p-5' srcSet="" width="100%" />
                        </div>
                    </div>
                </div>  
                ))}
            </div>
        </div>
    )
}

export default PlacementOverview