import React from 'react';
import img1 from '../../assets/LandingPage/recruit.jpg';

const cardData = [
    {
        title: 'Transitioning from College to Corporate',
        imageSrc: 'https://media.licdn.com/dms/image/D5622AQHyv5oujQDP_Q/feedshare-shrink_1280/0/1709547270513?e=1714608000&v=beta&t=nN8Ns4VFxu16cryrR4jimV4ZlgraKPTIblqJJ-j-EG4',
        description: 'Embark on your journey from college to the corporate world with confidence. Learn essential skills such as professional communication, time management, and workplace etiquette to excel in your new role.'
    },
    {
        title: 'Navigating the Corporate Environment',
        imageSrc: 'https://sviet.org.in/wp-content/uploads/2023/12/375595912_284787137636233_2250309187867823883_n-650x650.jpg',
        description: 'Discover the ins and outs of the corporate environment and how to thrive in it. From understanding company culture to building professional relationships, equip yourself with the knowledge and tools needed for success.'
    },
    {
        title: 'Building a Successful Career Path',
        imageSrc: 'https://media.licdn.com/dms/image/D5622AQH93lO1CHTlzA/feedshare-shrink_2048_1536/0/1708337109316?e=1714608000&v=beta&t=LwehUr1A0dAJWORJiQCTP5KUONN7qGXE7hLKR7OMTso',
        description: 'Chart your course for a successful career by setting goals, honing your skills, and seizing opportunities for growth. With dedication and perseverance, you can turn your aspirations into achievements in the corporate world.'
    }
];




const Cards = () => {
    return (
        <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 text-gray-900  md:px-0 antialiased">
            <div className="flex flex-wrap w-full mb-20 text-white mt-[-50px]">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl lg:text-6xl text-2xl  title-font leading-10  mb-5 ">NURTURING TALENT, FOSTERING CREATIVITY</h1>
                    <div className="h-1 w-20 bg-red-700 rounded"></div>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed py-12">Know What Makes Us Set Apart from Regular College Students and What Makes Us A Cut Above for Industrial World</p>
            </div>

            <section className="grid lg:grid-cols-3 grid-cols-1 gap-5 ">
                {cardData.map((card, index) => (
                    <article key={index} className="mx-auto mt-12 w-full shadow-xl bg-cover bg-center min-h-60 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: `url(${card.imageSrc})` , backgroundPosition:"center center"}}>
                        <div className="py-4 bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                            <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                {card.title}
                            </h1>
                            <div className="w-16 h-2 bg-rose-800 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                            <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                                {card.description}
                            </p>
                        </div>
                    </article>
                ))}
            </section>

        </section>
    );
};

export default Cards;
