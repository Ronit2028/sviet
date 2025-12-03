"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// images
import img1 from "../../assets/LandingPage/Events/summit.png"
import img2 from "../../assets/LandingPage/Events/ge.png"
import img3 from "../../assets/LandingPage/Events/pharma.png"

import event from '@/assets/LandingPage/event.jpg'

import events from '@/data/event'

import Link from 'next/link';

const InstagramCard = ({ imageSrc, caption, date, likes }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
            <img src={imageSrc} alt="Instagram Post" className="w-full h-48 object-cover" />
            <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                <i className="fab fa-instagram mr-1"></i>
            </div>
        </div>
        <div className="p-4">
            <p className="text-gray-800 text-sm line-clamp-3 mb-2">{caption}</p>
            <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{date}</span>
                <span className="flex items-center">
                    <i className="far fa-heart mr-1"></i>
                    {likes}
                </span>
            </div>
        </div>
    </div>
);

const EventCard = ({ index, imageSrc, description }) => (
    <div className={`event-card  w-full rounded-lg md:py-8 flex flex-wrap ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        <img src={imageSrc} alt="Event" className=" w-full md:w-1/2 rounded-lg" />
        <div className="w-full py-3 md:w-1/2 flex items-center md:p-4">
            <p className="text-white text-sm md:text-lg border-l-4 pl-4 border-[#fea700]">{description}</p>
        </div>
    </div>
);

// 3
const EventCarousel = () => {

    // Sample Instagram data - replace with real Instagram API data
    const instagramPosts = [
        {
            id: 1,
            imageSrc: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop",
            caption: "Amazing tech fest at SVIET! Students showcasing their innovative projects and creative solutions. #SVIETTechFest #Innovation",
            date: "2 days ago",
            likes: "156"
        },
        {
            id: 2,
            imageSrc: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop",
            caption: "Cultural night celebrations bringing together talent from across departments. What an incredible evening! #SVIETCultural #Talent",
            date: "4 days ago",
            likes: "243"
        },
        {
            id: 3,
            imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
            caption: "Industry experts sharing insights with our students. Learning beyond classrooms! #SVIETIndustryTalk #Learning",
            date: "1 week ago",
            likes: "189"
        },
        {
            id: 4,
            imageSrc: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
            caption: "Sports day filled with energy, competition, and team spirit. Go SVIET! #SVIETSports #TeamSpirit",
            date: "1 week ago",
            likes: "198"
        }
    ];

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 720, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                },
            },
        ],
    };

    const bgs = {
        backgroundImage: `url(${events.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }


    return (
        <>
            {/* YouTube Video & Instagram Section */}
            <div style={{
                backgroundImage: `url(${event.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundAttachment: "fixed"
            }}>
                <div className="w-full h-auto flex justify-center items-center bg-[#00112deb] text-white py-8 overflow-hidden">
                    <div className="w-10/12 py-6 flex flex-col md:flex-row gap-8">
                        {/* YouTube Video Content */}
                        <div className="w-full lg:w-2/3 h-40 ">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#fea700]">
                                    DevFest Chandigarh 2025 — A Day of Innovation, Learning & Community!
                                </h2>
                                <p className="text-sm mb-6 text-gray-300">
                                    Presenting A celebration of vision, innovation, and inspiration that brought together leaders, dreamers, and changemakers under one roof.
                                </p>
                                <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-2xl">
                                    <iframe
                                        src="https://www.youtube.com/embed/edELEHK4SVE?si=9qvJ2m6vXZP5YmTb"
                                        title="DevFest Chandigarh 2025 brought together 500+ developers from 30+ colleges, making it one of the region’s most energetic tech gatherings!"
                                        className="w-full h-full object-contain"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        
                        {/* Instagram/What's Buzzing Content */}
                        <div className="text-start w-full lg:w-1/3 flex flex-col lg:pl-8 justify-center">
                            <h1 className="lg:text-4xl text-3xl font-bold mb-4 text-[#fea700]">
                                What's Buzzing at SVIET?
                            </h1>
                            <p className="text-lg pb-4 font-semibold text-justify">
                                Stay updated with real-time glimpses of our vibrant campus life. Events, achievements & beyond — all on Insta!
                            </p>
                            <p className="mb-6 text-justify text-gray-300">
                                From tech innovations to cultural celebrations, from academic achievements to sports victories - catch all the exciting moments that make SVIET a dynamic learning community.
                            </p>
                            
                          
                            {/* <div className="grid grid-cols-2 gap-3 mb-6">
                                {instagramPosts.slice(0, 4).map((post) => (
                                    <div key={post.id} className="relative group cursor-pointer">
                                        <img 
                                            src={post.imageSrc} 
                                            alt="Instagram Post" 
                                            className="w-full h-20 object-cover rounded-lg transition-transform group-hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                            <i className="fab fa-instagram text-white text-xl"></i>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                            
                            <a 
                                href="https://www.instagram.com/svietofficial/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full w-fit transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                            >
                                <i className="fab fa-instagram text-xl"></i>
                                Check Out Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Events Section - Carousel Only */}
            <div style={{
                backgroundImage: `url(${event.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundAttachment: "fixed"
            }}>
                <div className="w-full h-auto flex justify-center items-center bg-[#00112deb] text-white py-10 overflow-hidden">
                    <div className="w-full py-6">
                        <div className="w-10/12 mx-auto">
                            {/* <div className="text-center mb-8">
                                <h1 className="lg:text-5xl text-3xl font-normal mb-4">Events and Happenings</h1>
                                <p className="text-xl pb-4 font-semibold">
                                    Immerse Yourself in a Vibrant Tapestry of Campus Life, Where Every Moment Counts!
                                </p>
                            </div> */}
                            <Slider {...settings} className="w-full py-8">
                                {events.map((event, index) => (
                                    <div key={index} className="w-[95%] mx-auto px-2 h-full">
                                        <div className="event-card rounded-md shadow-md bg-white text-[#00112d] h-[60vh] flex flex-col justify-between">
                                            <div className="image-section h-4/5" style={{ backgroundImage: `url(${event.headerImage})`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat" }}>
                                            </div>
                                            <div className="text-section my-auto p-4 h-1/2 flex flex-col justify-between">
                                                <div>
                                                    <p className="text-lg md:text-xl font-semibold mb-3">
                                                        {event.name}
                                                    </p>
                                                    <p className='text-sm md:text-md pb-6 line-clamp-4 text-justify'>
                                                        {event.overview.slice(0, 230)}...
                                                    </p>
                                                </div>
                                                <div className='flex justify-between'>
                                                    <p className="text-sm font-semibold text-[#fea700]">
                                                        {event.date}
                                                    </p>
                                                    <Link href={`/events/${event.id}`}>
                                                        <button className='rounded-md bg-[#fea700] text-white p-2 h-7 w-7 flex justify-center items-center'>
                                                            <i className='fa fa-arrow-right'></i>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventCarousel;
