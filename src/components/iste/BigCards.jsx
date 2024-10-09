import React from 'react';
import AnimatedBG from './AnimatedBG';
import Image from 'next/image';

const BigCards = () => {
  const cardData = [
    {
      title: 'Inauguration Ceremony',
      imageSrc: "https://utfs.io/f/4e6ea4f6-7eb8-4c00-af72-4b34097df548-26ylxr.jpg",
      category: 'Ceremony',
      description: 'Kickstart ISTE SVIET 2024 with our grand inauguration, welcoming students and professionals to a world of innovation and learning.',
    },
    {
      title: 'AI/ML Bootcamp',
      imageSrc: "https://utfs.io/f/nsz3ps3WUZRL7PEPn5yZPFew0cpClJ4f9O3RUWHjaDvbq6AN",
      category: 'Workshops',
      description: 'A hands-on bootcamp to dive deep into the world of Artificial Intelligence and Machine Learning, led by industry experts.',
    },
    {
      title: 'SVIET Innovation Summit',
      imageSrc: "https://utfs.io/f/b0059674-8b27-4d09-89ac-d3de018959bc-m5n17e.jpg",
      category: 'Conferences',
      description: 'Explore the latest trends in technology and innovation with global industry leaders at SVIET’s annual innovation summit.',
    },
    {
      title: 'ISTE Ideathon 2024',
      imageSrc: "https://utfs.io/f/nsz3ps3WUZRLNLRuHm9rk45hJIB6UAVERY1S0Po7cOimTtlD",
      category: 'Hackathons',
      description: 'Challenge yourself to bring new ideas to life in this high-energy ideathon focused on solving real-world problems.',
    },
    {
      title: 'Tech Quiz Challenge',
      imageSrc: "https://utfs.io/f/a2b3518f-f8ab-4a5b-b5b5-93125c1f5509-dyxwz9.jpg",
      category: 'Competitions',
      description: 'Test your knowledge and quick thinking in this fast-paced quiz covering all aspects of technology and innovation.',
    },
    {
      title: 'Web Development Workshop',
      imageSrc: "https://utfs.io/f/7a2f4a16-c53a-4a38-bd1a-69316339f047-771zuo.jpg",
      category: 'Workshops',
      description: 'Learn the latest web development technologies and best practices in this hands-on workshop led by industry experts.',
    },
  ];


  return (
    <>
      <section className="text-white body-font bg-black">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full py-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl lg:text-6xl text-2xl title-font leading-10 mb-5 ml-5">ISTE Events</h1>
              <div className="h-1 w-20 bg-[#fea700] rounded ml-5"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed"></p>
          </div>
          <div className="flex flex-wrap">
            {cardData.map((card, index) => (
              <div className={`md:p-2 p-1 w-full ${((index+1) % 3 === 0 && (index+1) !=6) || ((index+1) % 4 === 0 && index!=0) ? 'lg:w-1/2' : 'lg:w-1/4'}`} key={index}>
              <div className="h-full border-2 border-gray-200/50 hover:border-[#fea700] border-opacity-40 rounded-lg overflow-hidden">
                <img className="lg:h-60 md:h-36 w-full object-cover object-center" src={card.imageSrc} alt={card.title} />
                <div className="p-6">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#fea700] mb-1">{card.category}</h2>
                  <h1 className="title-font text-md font-medium text-white mb-3">{card.title}</h1>
                  <p className="leading-relaxed text-sm mb-3 text-justify">{card.description}</p>
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
