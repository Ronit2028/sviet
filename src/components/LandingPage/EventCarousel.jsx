"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    const events = [
        {
            index: 0,
            imageSrc: 'https://media.licdn.com/dms/image/D5622AQHcanHbP2KB9g/feedshare-shrink_800/0/1711099064119?e=1714608000&v=beta&t=l6KvJY4fBX1dFXzY2LMLd-KOUEtOQ337kYEnLHipJGM',
            description: 'Relive the colorful moments from JASHN-E-RANG - our vibrant Holi celebration organized by the Department of Hotel Management! Swipe through to see the festive delights and joyful faces that made the event unforgettable. Thank you to everyone who joined us in spreading the joy of Holi at SVGOI!',
        },
        {
            index: 1,
            imageSrc: 'https://media.licdn.com/dms/image/D4E22AQG8-RIu1LB52Q/feedshare-shrink_800/0/1710845353418?e=1714608000&v=beta&t=JVgnV_wcQYiirWKvpd1EJdKItS2G1NzMGawQOz8qrvs',
            description: 'The Department of Applied Science recently organized a special Felicitation Ceremony to honor the exceptional achievements of their top-performing students across various fields. Recognizing the excellence of UPSE toppers,',
        },
        {
            index: 2,
            imageSrc: 'https://media.licdn.com/dms/image/D5622AQGDmDAquYy1lA/feedshare-shrink_800/0/1710488220817?e=1714608000&v=beta&t=8LD3aTIvslUVp2Hynwnom_TNP4oK_ahf0cVI41bhAeQ',
            description: 'Recap of an enlightening event! The expert lecture on AI methodologies with Mr. Vishal Gahrotra from PRIMUS SOFTWARE CORPORATION was a game-changer. Participants from Super 60.',
        },
        {
            index: 3,
            imageSrc: 'https://media.licdn.com/dms/image/D5622AQHn8Lxbjqr94Q/feedshare-shrink_800/0/1709547273825?e=1714608000&v=beta&t=eZ9I8KgKWakEkx0LA-DxHEPJQ1PJzebzs9iBZ4NxmOw',
            description: 'Massive congratulations to Naveen and Anam, shining stars from the Uniques Batch, for their remarkable achievement in securing the prestigious 1st position and bagging the Rs. 10,000 cash prize at the Hack&Win Hackathon hosted at CGC, Jhanjheri Campus. ',
        },
        // Add more events here
    ];

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
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

    return (
        <div className="w-full h-auto md:h-[80vh] flex justify-center items-center bg-[#00112d] text-white py-10 overflow-hidden">
            <div className="w-10/12 py-6 flex flex-col md:flex-row">
                <div className="w-full md:w-2/3">
                    <Slider {...settings} className="w-full py-8 md:py-12]">
                        {events.map((event, index) => (
                            <div className="w-[95%] mx-auto px-2 h-full">
                                <div className="event-card rounded-md shadow-md bg-white text-[#00112d] h-[53vh]">
                                    <div className="image-section h-[35vh]" style={{ backgroundImage: `url(${event.imageSrc})`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat" }}>

                                    </div>
                                    <div className="text-section my-auto p-6 h-full">
                                        <div>
                                            {/* <p className="text-xl font-semibold ">
                                                SVIET Event News Heading
                                            </p> */}
                                            <p className='text-sm md:text-md pb-6'>
                                                {event.description}
                                            </p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className="text-sm font-semibold text-[#fea700]">
                                                March 28, 2024
                                            </p>
                                            <button className='rounded-md bg-[#fea700] text-white p-2 h-7 w-7 flex justify-center items-center'><i className='fa fa-arrow-right'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="text-start w-full md:w-1/3 flex flex-col  lg:pl-16 justify-center  md:p-6">
                    <h1 className="lg:text-5xl  text-3xl font-normal mb-4">Events & Happenings</h1>
                    <p className="text-xl pb-4 font-semibold">
                        Immerse Yourself in a Vibrant Tapestry of Campus Life, Where Every Moment Counts!
                    </p>
                    <p className="mb-4">
                        Our events showcase the spirit of innovation, collaboration, and excellence, nurturing talents
                        and fostering growth in a dynamic learning environment.
                    </p>
                    <button className='bg-[#fea700] text-white font-lg p-2 w-fit mt-3 rounded-md'>Know More</button>
                </div>
            </div>
        </div>
    );
};

export default EventCarousel;
