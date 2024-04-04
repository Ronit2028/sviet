import React from 'react';
import img from '../../assets/LandingPage/achievement.jpg';
import Image from 'next/image';

const sectionData = [
  {
    category: 'Enterpreneurship',
    // date: '12 Jun 2019',
    title: 'Innovative Business Strategies',
    description: 'Explore the latest trends and strategies in entrepreneurship. Learn how to build successful startups, attract investors, and navigate the challenges of the business world.'
  },
  {
    category: 'Client Satisfaction',
    // date: '12 Jun 2019',
    title: 'Delivering Exceptional Customer Experience',
    description: 'Discover proven techniques for improving client satisfaction and loyalty. From personalized services to efficient communication, ensure your clients receive top-notch experiences.'
  },
  {
    category: 'Creativity',
    // date: '12 Jun 2019',
    title: 'Unlocking Your Creative Potential',
    description: 'Unleash your creativity with innovative ideas and inspirational techniques. Learn how to think outside the box, overcome creative blocks, and turn your imagination into reality.'
  }
]

import imageCover from './imageCover2.jpeg'

const Fifth = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 px-5 py-24 mx-auto">
          <Image alt="ecommerce" className="w-full mx-auto flex flex-wrap object-cover object-center h-full rounded" src={imageCover} />
          <div className="w-full  lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="divide-y-2 divide-gray-100">
              {sectionData.map((section, index) => (
                <div key={index} className="flex flex-col py-8 flex-wrap md:flex-nowrap">
                  <div className="md:mb-0 mb-6 pb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">{section.category}</span>
                    <span className="mt-1 text-gray-500 text-sm">{section.date}</span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{section.title}</h2>
                    <p className="leading-relaxed">{section.description}</p>
                    <a href="#responsive" className="text-red-500 inline-flex items-center mt-4">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fifth;
