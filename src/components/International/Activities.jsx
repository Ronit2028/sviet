"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Activities = () => {
    const reasons = [
        {
            title: "Earn While Learn Program",
            description: "Explore a transformative educational journey with SVGOI's Earn While Learn program. Crafted to equip students with practical expertise, this innovative initiative guides participants through every aspect of professional development, from crafting compelling resumes to securing lucrative job opportunities. By seamlessly integrating flexible shifts with ongoing academic pursuits, students not only earn a steady income but also gain invaluable hands-on experience in fields like banking, pharmaceuticals, IT, marketing, and more. What sets this program apart is its international appeal, as the experiences gained here in India serve as valuable additions to resumes, paving the way for paid internship in foreign countries. Join us today and elevate your educational experience into a global pathway to success.",
            img: "https://sviet.org.in/wp-content/uploads/IMG_1545-scaled-1.jpg"
        },
        {
            title: "Global Seed Program",
            description: "SVGOI's Global Seed initiative nurtures entrepreneurial dreams by providing a platform for students to cultivate their startup ideas. Under this program, we offer startup facilities to students, allowing them to bring their ideas to life. Our dedicated entrepreneurship team trains them on the life cycle of entrepreneurship and the startup journey. With support from SVGOI management, including funding and space, students can start their own companies while continuing their studies. By fostering innovation and entrepreneurship, SVGOI empowers students to launch successful careers and make a lasting impact on the global stage.",
            img: " https://sviet.org.in/wp-content/uploads/IMG_1197-scaled-1.jpg"
        },
        {
            title: "Faculty Exchange Program",
            description: "Our International Faculty Exchange Program brings experienced educators from around the world to SVGOI, enriching our academic environment with diverse perspectives and global expertise. This initiative not only enhances the quality of education but also provides students and faculty with unique opportunities for cross-cultural learning and collaboration. Participants in the program benefit from engaging with cutting-edge research, innovative teaching methodologies, and a broad network of international peers.",
            img: "https://utfs.io/f/de690804-6f23-4d08-bb2b-d5504f8d7071-bsrrb6.jpg"
        }
    ];

    // Settings for React Slick Carousel
    const settings = {
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 500,
        slidesToShow: 2, // Show 2 slides on desktop
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Tablet breakpoint
                settings: {
                    slidesToShow: 1.5, // Show 1.5 slides on tablet
                }
            },
            {
                breakpoint: 600, // Phone breakpoint
                settings: {
                    slidesToShow: 1, // Show 1 slide on phone
                }
            }
        ]
    };

    return (
        <div className='text-white py-12'>
            <div className="w-full h-full bg-[#00112d] py-12">
                <div className="w-10/12 mx-auto py-12">
                    <p className='text-3xl font-medium pb-3'>
                        Empower Your Future
                    </p>
                    <p className='text-xl pl-2 border-l-4 border-[#fea700]'>
                        With SVGOI limitless opportunities
                    </p>

                    {/* React Slick Carousel */}
                    <Slider {...settings}>
                        {reasons.map((reason, index) => (
                            <div key={index} className='mt-6 flex items-center p-3'>
                                <div className="bg-white h-[45vh] lg:h-[40vh] rounded-md text-[#00112d]" style={{ backgroundImage: `url(${reason.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                                </div>
                                <div className='p-2 text-white flex flex-col justify-end h-full'>
                                    <div className="">
                                        <h3 className='text-2xl font-medium py-4'>{reason.title}</h3>
                                        <p className='text-justify'>{reason.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='flex justify-end gap-2'>
                        <button className='bg-[#fea700] h-7 w-7 rounded-md'><i className='fa fa-arrow-left'></i></button>
                        <button className='bg-[#fea700] h-7 w-7 rounded-md'><i className='fa fa-arrow-right'></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;
