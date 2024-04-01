import React from 'react';

import sport from '@/assets/About/sports.jpg'
import research from '@/assets/About/research.jpg'
import lab from '@/assets/About/labs.jpg'
import libraary from '@/assets/About/library.jpg'
import Image from 'next/image';


const infraData = [
  {
      image: research,
      title: 'Research Centres',
      description: 'Our state-of-the-art research centers provide the perfect environment for students to explore and innovate. From cutting-edge laboratories to collaborative workspaces, our research facilities empower students to push the boundaries of knowledge.'
  },
  {
      image: libraary,
      title: 'Library',
      description: 'Our extensive library is a treasure trove of knowledge, offering students access to a vast collection of books, journals, and online resources. It provides a quiet and conducive environment for study and research.'
  },
  {
      image: lab,
      title: 'Labs',
      description: 'Our well-equipped laboratories provide students with hands-on experience and practical skills in their chosen fields. From computer labs to engineering labs, our facilities support experiential learning and innovation.'
  },
  {
      image: sport,
      title: 'Play-Grounds',
      description: 'Our sprawling playgrounds offer students the opportunity to stay active and healthy. From sports fields to recreational areas, our campus provides a vibrant and dynamic environment for physical activity and leisure.'
  }
];

const Infra = () => {
    return (
        <section className="text-gray-600 body-font h-full">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <div className="flex mb-5 items-center">
                            <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
                            <h1 className="text-lg font-bold">INFRASTRUCTURE</h1>
                        </div>
                        <h1 className="text-3xl font-semibold mb-8">A perfect blend of <span className='text-[#ff9602] text-4xl py-3 block'>Nature and Architecture</span></h1>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Makes the SVIET Campus one of the most edifying and enriching cosmopolitan of knowledge. It is a home to over 50,000+ students from the most unique diversities of the world, coming together to experience the vibrancy of Parul University's academic journey. Take Your First Step towards this journey and experience the vibrancy.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {infraData.map((item, index) => (
                        <div key={index} className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="p-6 rounded-lg">
                                <Image className="h-60 rounded w-full object-cover object-center mb-6" src={item.image} alt="content" />
                                <h3 className="tracking-widest text-[#016db6] text-xs font-medium title-font">{item.title}</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                                <p className="leading-relaxed text-base">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Infra;
