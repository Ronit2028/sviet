import React from 'react';
import img from '../../assets/LandingPage/success.jpg';
import img1 from '../../assets/LandingPage/placement.jpg';
import img2 from '../../assets/LandingPage/achievement.jpg';
import AnimatedBG from './AnimatedBG';

const BigCards = () => {
  const cardData = [
    {
      title: 'Holi Celebration',
      imageSrc: img.src,
      category: 'Festivals',
      description: 'Celebrate the vibrant festival of colors with music, dance, and joy.',
    },
    {
      title: 'Global Summit 2024',
      imageSrc: img.src,
      category: 'Conferences',
      description: 'Join thought leaders and innovators from around the world to discuss global challenges and solutions.',
    },
    {
      title: 'G Ideate Ideathon',
      imageSrc: img1.src,
      category: 'Hackathons',
      description: 'Bring your ideas to life and compete with fellow innovators in this intense ideathon.',
    },
    {
      title: 'Bharat TechXperience Hackathon',
      imageSrc: img2.src,
      category: 'Hackathons',
      description: 'Experience the cutting edge of technology and innovation in this hackathon.',
    },
    {
      title: 'Coding Competition',
      imageSrc: img2.src,
      category: 'Competitions',
      description: 'Showcase your coding skills and compete for exciting prizes in this thrilling competition.',
    },
    {
      title: 'Front End Test',
      imageSrc: img.src,
      category: 'Tests',
      description: 'Put your front-end development skills to the test in this challenging examination.',
    },
  ];

  return (
    <>
      <section className="text-white body-font bg-black">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full py-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl lg:text-6xl text-2xl title-font leading-10 mb-5 ">Uniques' Events</h1>
              <div className="h-1 w-20 bg-red-700 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed"></p>
          </div>
          <div className="flex flex-wrap">
            {cardData.map((card, index) => (
              <div className="md:p-2 p-1 w-full md:w-1/2 lg:w-1/3 " key={index}>
                <div className="h-full border-2 border-gray-200/50 hover:border-red-800/50 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-60 md:h-36 w-full object-cover object-center" src={card.imageSrc} alt={card.title} />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{card.category}</h2>
                    <h1 className="title-font text-md font-medium text-white mb-3">{card.title}</h1>
                    <p className="leading-relaxed text-sm mb-3">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BigCards;
