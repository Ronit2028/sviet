import React from 'react';
import img from '../../assets/LandingPage/success.jpg';
import img1 from '../../assets/LandingPage/placement.jpg';
import img2 from '../../assets/LandingPage/achievement.jpg';
import AnimatedBG from './AnimatedBG';

const BigCards = () => {
  const cardData = [
    {
      title: 'Holi Celebration',
      imageSrc: "https://media.licdn.com/dms/image/D5622AQEsskpX2TFmxg/feedshare-shrink_1280/0/1711622737076?e=1714608000&v=beta&t=YCXyp1phkK0uZYlikzFiks2tOEkMpq6VC8w9FCigKK0",
      category: 'Festivals',
      description: 'Celebrate the vibrant festival of colors with music, dance, and joy.',
    },
    {
      title: 'Global Summit 2024',
      imageSrc: "https://media.licdn.com/dms/image/D5622AQFlGaGfXyLA1g/feedshare-shrink_1280/0/1711447949975?e=1714608000&v=beta&t=H4yxyCxkeTptgk0tCBaTmcWj5z30d0BMd1YOmNUcheQ",
      category: 'Conferences',
      description: 'Join thought leaders and innovators from around the world to discuss global challenges and solutions.',
    },
    {
      title: 'G Ideate Ideathon',
      imageSrc: "https://media.licdn.com/dms/image/D5622AQEOxr_fsnjuiA/feedshare-shrink_800/0/1708319254839?e=1714608000&v=beta&t=AzUzoO4LVJCqnSTj3ggVGedS7kX8VseT4kvQYAWqYtE",
      category: 'Hackathons',
      description: 'Bring your ideas to life and compete with fellow innovators in this intense ideathon.',
    },
    {
      title: 'Bharat TechXperience Hackathon',
      imageSrc: "https://media.licdn.com/dms/image/D4D22AQHW5sCcdhU2Ww/feedshare-shrink_1280/0/1698651331182?e=1714608000&v=beta&t=DjFTFhm0bfMYcS0bwCZM55nD4eBjlkgsBsSlk5m2Cv0",
      category: 'Hackathons',
      description: 'Experience the cutting edge of technology and innovation in this hackathon.',
    },
    {
      title: 'Coding Competition',
      imageSrc: "https://media.licdn.com/dms/image/D5622AQHAUHpcYn_7sQ/feedshare-shrink_800/0/1708752557397?e=1714608000&v=beta&t=bUpETlSpuqyQini5eGtM_LJ-mXAAT5ycQUOZ1V3pkzk",
      category: 'Competitions',
      description: 'Showcase your coding skills and compete for exciting prizes in this thrilling competition.',
    },
    {
      title: 'Front End Test',
      imageSrc: "https://media.licdn.com/dms/image/D5622AQFUKfeaXX9QNA/feedshare-shrink_800/0/1707114731421?e=1714608000&v=beta&t=RA5OZT9LCJjNz7e1ty6uQM1BzfYZG5fF4CbgveLdAY0",
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
              <div className={`md:p-2 p-1 w-full ${((index+1) % 3 === 0 && (index+1) !=6) || ((index+1) % 4 === 0 && index!=0) ? 'lg:w-1/2' : 'lg:w-1/4'}`} key={index}>
              <div className="h-full border-2 border-gray-200/50 hover:border-red-800/50 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-60 md:h-36 w-full object-cover object-center" src={card.imageSrc} alt={card.title} />
                <div className="p-6">
                  <h2 className="tracking-widest text-sm title-font font-bold text-rose-800 mb-1">{card.category}</h2>
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
