import React from 'react';
import Image from 'next/image';
import img from '../../assets/mission-vission-vector.70934ee2310f41731191.png';

const BenefitsSection = () => {
  const BenefitsData = [
    {
      number: '1',
      title: 'Leadership Development',
      description: 'ISTE provides a platform for students to enhance leadership skills, empowering them to take charge of projects and initiatives.'
    },
    {
      number: '2',
      title: 'Networking Opportunities',
      description: 'Gain access to a vast network of professionals and peers, opening doors to internships, collaborations, and industry insights.'
    },
    {
      number: '3',
      title: 'Hands-on Learning',
      description: 'ISTE chapters conduct workshops, seminars, and hands-on sessions to help students gain practical experience in technical fields.'
    },
    {
      number: '4',
      title: 'Career Advancement',
      description: 'ISTE provides resources and guidance to help students build a successful career by connecting them with experts and industry leaders.'
    }
  ];

  const AdditionalOpportunitiesData = [
    {
      number: '1',
      title: 'Technical Competitions',
      description: 'Participate in various national and international technical competitions to showcase your talent and gain recognition.'
    },
    {
      number: '2',
      title: 'Skill Development Workshops',
      description: 'Attend skill development workshops that focus on the latest technologies, tools, and methodologies.'
    },
    {
      number: '3',
      title: 'Research and Innovation',
      description: 'ISTE encourages students to engage in research activities and innovations that contribute to the advancement of technology.'
    },
    {
      number: '4',
      title: 'Collaborative Projects',
      description: 'Work on collaborative projects with industry experts and fellow students to gain real-world experience and enhance teamwork skills.'
    }
  ];

  return (
    <>
      <div className="container md:w-4/5 px-5 mx-auto py-12 flex">
        <div className="md:w-1/2 flex flex-col align-middle justify-center">
          <div className="flex mb-2 md:mb-5 items-center">
            <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
            <h1 className="text-lg font-bold">OUR IMPACT</h1>
          </div>
          <h1 className="text-lg md:text-3xl font-semibold mb-8">
            Elevating Students Through{' '}
            <span className='text-[#016db6] text-4xl md:text-7xl md:py-3 block'> Opportunities and Benefits</span>
          </h1>
          <p className='text-justify'>
            As part of ISTE, students get the chance to thrive academically and professionally. From leadership roles to hands-on experience, ISTE provides unparalleled opportunities to shape the future of technology and innovation.
          </p>
        </div>
        <div className="w-1/2 h-96 hidden md:block">
          <Image className='' src={img} alt="ISTE Benefits" />
        </div>
      </div>

      <div className="container md:w-4/5 px-5 md:px-0 mx-auto pb-24">
        <div className="md:flex items-center md:pt-7">
          <div className="md:w-1/3 h-full flex justify-center pb-7 md:pb-0">
            <h1 className='md:text-5xl text-2xl font-semibold'>BENEFITS</h1>
          </div>
          <div className="md:w-2/3">
            <div className="container px-5 mx-auto flex flex-wrap">
              {BenefitsData.map((item) => (
                <div key={item.number} className="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">{item.number}</div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-10 h-10 text-[#ff9602] bg-gray-300 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-2 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-md">{item.title}</h2>
                      <p className="leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container md:w-4/5 px-5 md:px-0 mx-auto pb-24 ml-[-0px]">
        <div className="md:flex-row flex flex-col-reverse items-center justify-center ">
          <div className="md:w-2/3">
            <div className="container mx-auto flex flex-wrap">
              {AdditionalOpportunitiesData.map((item) => (
                <div key={item.number} className="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">{item.number}</div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-10 h-10 text-[#ff9602] bg-gray-300 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-2 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-md">{item.title}</h2>
                      <p className="leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 h-full flex justify-center">
            <h1 className='md:text-5xl text-2xl font-semibold text-center'>OPPORTUNITIES</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitsSection;
