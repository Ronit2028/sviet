"use client"

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';


import backdrop from '@/assets/LandingPage/backdrop.jpg'
import backdrop2 from '@/assets/LandingPage/backdrop-2.jpg'
import backdrop3 from '@/assets/LandingPage/banner-3.jpg'
import backdrop4 from '@/assets/LandingPage/rdg.jpg'



const Header = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        controls: false,
        dots: false,
        speed: 500,
        autoplay: true,
        arrows: false,
    };
    console.log("Hello")
    const sectionData = [
//         <div key={0} className="h-auto md:h-[100vh] text-white flex items-center" style={{ backgroundImage: `url(${backdrop4.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
//   <div className="w-full h-full flex items-center py-12 bg-[#00000095]">
//     <div className="w-10/12 mx-auto flex flex-wrap items-center">
//       <div className="w-full md:w-1/2 py-12">
//         <p className="text-2xl lg:text-3xl font-bold w-4/5 mb-3 pb-3">
//           BharatTechXperience 2.0: Igniting the Future of Innovation and Technology
//         </p>
//         <p className="text-md lg:text-lg font-medium mt-3 mb-3 pb-3">
//           Join us in an immersive journey of tech exploration and groundbreaking solutions at BharatTechXperience 2.0, where minds meet to innovate for a sustainable tomorrow
//         </p>
//         <div className="flex gap-3 flex-wrap">
//           <Link href="https://bharat-tech-xperience.theuniques.in/">
//             <button className="bg-[#fea700] text-white text-xl px-2 py-1 rounded-md">Register Now</button>
//           </Link>
//           <Link href="/bharattechxperience-brochure.pdf">
//             <button className="bg-[#fea700] text-white text-xl px-2 py-1 rounded-md">Download Brochure</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>,
        <div key={0} className='h-auto md:h-[100vh] text-white flex items-center' style={{ backgroundImage: `url(${backdrop.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className='w-full h-full  flex items-center py-12 bg-[#00000095]'>
                <div className='w-10/12 mx-auto flex flex-wrap items-center'>
                    <div className='w-full md:w-1/2 py-12'>
                        <p className='text-2xl lg:text-4xl font-bold w-4/5 mb-3 pb-3'>
                            Nurturing Excellence Since 2004: A Legacy of Quality Education.
                        </p>
                        <p className='text-md lg:text-lg font-semibold mt-3 mb-3 pb-3'>
                            SVGOI, a beacon of academic distinction, proudly stands tall as it secures the honorable rank of 104 in NIRF 2021, a testament to its commitment to excellence.
                        </p>
                        <div className='flex gap-3 flex-wrap'>
                            <Link href="https://admission.sviet.ac.in/">
                                <button className='bg-[#fea700] text-white text-xl px-2 py-1 rounded-md'>Apply Now</button>
                            </Link>
                            <Link href="/svgoi-brochure.pdf">
                                <button className='bg-[#fea700] text-white text-xl px-2 py-1 rounded-md'>Download Brochure</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>,
        <div key={1} className='h-auto md:h-[100vh] text-white flex items-center' style={{ backgroundImage: `url(${backdrop2.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className='w-full h-full  flex items-center py-12 bg-[#00000095]'>
                <div className='w-10/12 mx-auto flex flex-wrap items-center'>
                    <div className='w-full md:w-1/2 py-12'>
                        <p className='text-2xl lg:text-4xl w-4/5 mb-3 pb-3 font-bold'>Where passion meets purpose, and dreams become reality.

                        </p>
                        <p className='text-md lg:text-xl font-semibold mt-3 mb-3 pb-3'>

                            SVGOI's belief in the importance of aligning passion with purpose in education and career pursuits.
                        </p>
                        <Link href="https://admission.sviet.ac.in/">
                            <button className='bg-[#fea700] text-white text-xl px-2 py-1 rounded-md'>Apply Now</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>,
        <div key={2} className='h-auto md:h-[100vh] text-white flex items-center' style={{ backgroundImage: `url(${backdrop3.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className='w-full h-full py-12 flex items-center bg-[#00000095]'>
                <div className='w-10/12 mx-auto flex flex-wrap items-center'>
                    <div className='w-full md:w-1/2 py-12'>
                        <p className='text-2xl lg:text-4xl w-4/5 mb-3 pb-3 font-bold'>
                            A Culture of Inquiry, Innovation, and Impact.

                        </p>
                        <p className='text-md lg:text-xl font-semibold mt-3 mb-3 pb-3'>



                            At SVGOI, we believe in fostering a culture where research thrives, innovations flourish, and knowledge leads to transformative solutions</p>


                        <Link href="https://admission.sviet.ac.in/">
                            <button className='bg-[#fea700] text-white text-xl px-2 py-1 rounded-md'>Apply Now</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    ]

    return (

        <Slider {...settings}>

            {sectionData.map((section, index) => (
                <div key={index}>{section}
                </div>
            ))}

        </Slider>
    )
}

export default Header
