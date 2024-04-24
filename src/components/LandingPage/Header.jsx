"use client"

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import backdrop from '@/assets/LandingPage/backdrop.jpg'
import backdrop2 from '@/assets/LandingPage/backdrop-2.jpg'
import backdrop3 from '@/assets/LandingPage/banner-3.jpg'



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
                        <button className='bg-[#fea700] text-white p-2 rounded-md text-lg mt-3'>Apply Now</button>
                    </div>
                    <div className='w-full md:w-1/2 hidden lg:flex items-center justify-center py-4'>
                        <div class="npf_wgts" data-height="400px" data-w="135f884902b93f3745b198105f33a948"></div>
                        <script type="text/javascript"> var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.in5.nopaperforms.com/emwgts.js"; document.body.appendChild(s);</script>
                        <script type="text/javascript">
                            var npf_d='https://admission.sviet.ac.in';
                            var npf_c='5151';
                            var npf_m='1';
                            var s=document.createElement("script");
                            s.type="text/javascript";
                            s.async=true;
                            s.src="https://track.nopaperforms.com/js/track.js";
                            document.body.appendChild(s);
                        </script>
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
                        <button className='bg-[#fea700] text-white p-2 rounded-md text-lg mt-3'>Apply Now</button>
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


                        <button className='bg-[#fea700] text-white p-2 rounded-md text-lg mt-3'>Apply Now</button>
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
