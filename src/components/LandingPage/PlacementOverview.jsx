import React from 'react'
import Link from 'next/link';
import placementBackdrop from '@/assets/LandingPage/placementBackdrop.jpg'
import img1 from "../../assets/LandingPage/placements/Moon.png"
import img2 from "../../assets/LandingPage/placements/yash.jpeg"
import img3 from "../../assets/LandingPage/placements/prince.jpeg"
import img4 from "../../assets/LandingPage/placements/Arjun.jpg"
import logo1 from "../../assets/LandingPage/placements/jio.png"
import logo2 from "../../assets/LandingPage/placements/info.png"
import logo3 from "../../assets/LandingPage/placements/wipro.webp"
import logo4 from "../../assets/LandingPage/placements/cronj.webp"

const PlacementOverview = () => {

    const placements = [
        {
            backgroundImage: img1.src,
            name: 'Moon Mandal',
            role: 'Graduate Engineer Trainee',
            companyLogo: logo1.src,
        },
        {
            backgroundImage: img2.src,
            name: 'Yash Khandalwal',
            role: 'System Engineer',
            companyLogo: logo2.src
        },
        {
            backgroundImage: img3.src,
            name: 'Prince Kumar',
            role: 'Project Engineer',
            companyLogo: logo3.src
        },
        {
            backgroundImage: img4.src,
            name: 'Amit Gautam',
            role: 'Software Developer',
            companyLogo: logo4.src
        }
    ];


    return (
        <div className='w-full mx-auto flex flex-wrap'>
            <div className='w-full lg:w-1/2 text-white ' style={{ backgroundImage: `url(${placementBackdrop.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center left", backgroundAttachment: "fixed" }}>
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
                        <Link href="https://admission.sviet.ac.in/"> 
            <button className='bg-[#fea700] text-white text-xl px-2 py-1 rounded-md'>Apply Now</button>
            </Link>
                    </div>
                </div>

            </div>
            <div className='w-full lg:w-1/2 bg-[#00112d] text-white grid grid-cols-1 md:grid-cols-2'>

                {placements.map((placement, index) => (
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