import React from 'react';
import Image from 'next/image';
import img from '../../assets/mission-vission-vector.70934ee2310f41731191.png';

const MissionVission = () => {
  const MissionData = [
    {
      number: '1',
      title: 'Empowering Students',
      description: 'Our mission is to inspire and empower students to reach for the stars, guiding them towards academic excellence and personal growth.'
    },
    {
      number: '2',
      title: 'Driving Positive Change',
      description: 'We strive to be a catalyst for positive change in society, fostering innovation and leadership among our students.'
    },
    {
      number: '3',
      title: 'Fostering Community Engagement',
      description: 'We are committed to fostering community engagement, encouraging our students to become active participants in creating a better world.'
    },
    {
      number: '4',
      title: 'Promoting Diversity and Inclusion',
      description: 'Our mission includes promoting diversity and inclusion, ensuring that every student feels valued and respected.'
    }
  ];

  const VisionData = [
    {
      number: '1',
      title: 'Pursuing Excellence',
      description: 'Our vision is to create a world-class educational institution that nurtures talent and fosters a culture of excellence.'
    },
    {
      number: '2',
      title: 'Building Leaders',
      description: 'We envision a future where our graduates are leaders and innovators, making a positive impact on the world.'
    },
    {
      number: '3',
      title: 'Global Impact',
      description: 'Our vision includes making a global impact, collaborating with partners worldwide to address pressing challenges.'
    },
    {
      number: '4',
      title: 'Sustainable Future',
      description: 'We are committed to creating a sustainable future, integrating environmental responsibility into everything we do.'
    }
  ];

  return (
    <>
      <div className="container md:w-4/5 px-5 mx-auto py-12 flex">
        <div className="md:w-1/2 flex flex-col align-middle  justify-center">
          <div className="flex mb-2 md:mb-5 items-center">
            <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
            <h1 className="text-lg font-bold">OUR PHILOSPHY</h1>
          </div>
          <h1 className="text-lg md:text-3xl font-semibold mb-8  ">Our principles and   <span className='text-[#016db6] text-4xl md:text-7xl md:py-3 block'> convictions</span></h1>
          <p className='text-justify'>To become a leading global educational institution, SVGOI is committed to revolutionizing education, nurturing luminaries and innovators, and advancing knowledge for society and industry. Our goal is to create extraordinary talent across various disciplines, shaping the leaders of tomorrow.</p>
        </div>
        <div className="w-1/2 h-96 hidden md:block"> <Image className='' src={img} /></div>
      </div>

      <div className="container md:w-4/5 px-5 md:px-0 mx-auto pb-24">

        <div className="md:flex items-center md:pt-7  ">
          <div className="md:w-1/3 h-full flex justify-center pb-7 md:pb-0 "><h1 className='md:text-5xl text-2xl font-semibold'> MISSION</h1></div>
          <div className="md:w-2/3">
            <div className="container px-5 mx-auto flex flex-wrap">
              {MissionData.map((item) => (
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
      <div className="container md:w-4/5 px-5 md:px-0 mx-auto pb-24">
        <div className="md:flex-row flex flex-col-reverse items-center justify-center ">
          <div className="md:w-2/3">
            <div className="container  mx-auto flex flex-wrap">
              {VisionData.map((item) => (
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
          <div className="md:w-1/3 h-full flex justify-center  "><h1 className='md:text-5xl text-2xl  font-semibold text-center'> VISION</h1></div>
        </div>
        {/* <div className="flex flex-col mt-12">
          <div className="flex mb-2 md:mb-5 items-center">
            <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
            <h1 className="text-lg font-bold">OUR MOTTO</h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Educating students to become job creators, not job seekers.</h2>
         
          
        </div> */}
      </div>
      
      
    </>
  );
};

export default MissionVission;
