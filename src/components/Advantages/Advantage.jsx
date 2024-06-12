import React from 'react';
import Image from 'next/image';


const Advantage = () => {
  const MissionData = [
    {
      number: '1',
      title: 'State-of-the-art infrastructure',
      description: 'SVGOI likely provides modern facilities and resources to support academic and research activities, enhancing the learning experience for students.'
    },
    {
      number: '2',
      title: 'Advanced laboratories',
      description: 'Well-equipped labs enable hands-on learning experiences, fostering practical skills development and innovation among students.'
    },
    {
      number: '3',
      title: 'Advanced training programs',
      description: ' SVGOI may offer specialized training programs designed to prepare students for industry demands, ensuring they have the necessary skills and knowledge to excel in their respective fields.'
    },
    
  ];

  const VisionData = [
    {
      number: '1',
      title: 'Special batches for industry-academic bridge',
      description: ' By offering specialized batches, like Super 60 & TheUniques SVGOI facilitates a smooth transition for students from academic learning to practical application in the industry, bridging the gap between theory and practice.'
    },
    {
      number: '2',
      title: 'Global culture',
      description: 'SVGOI likely fosters a diverse and inclusive environment, attracting students and faculty from around the world, thereby exposing students to different perspectives and cultures.'
    },
    {
      number: '3',
      title: 'Comprehensive educational experience',
      description: 'SVGOI aims to provide a holistic educational experience, integrating academic rigor with extracurricular activities, internships, and industry collaborations to groom well-rounded individuals.'
    }
  ];

  return (
    <>
      <div className="container md:w-4/5 px-5 mx-auto py-12 flex">
        <div className=" flex flex-col align-middle  justify-center">
          <div className="flex mb-2 md:mb-5 items-center">
            <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
            <h1 className="text-lg font-bold">Advantages</h1>
          </div>
          <h1 className="text-lg md:text-3xl font-semibold mb-8  ">Our principles and   <span className='text-[#016db6] text-4xl md:text-7xl md:py-3 block'> Your Success </span></h1>
          <p>Swami Vivekanand Group of Institutes appears to prioritize providing a high-quality educational experience that prepares students for the challenges and opportunities of the modern world. Here are several advantages offeres by SVGOI:</p>
        </div>
        
      </div>

      <div className="container md:w-4/5 px-5 md:px-0 mx-auto pb-24">

        <div className="md:flex items-center md:pt-7  ">
          <div className="md:w-1/3 h-full flex justify-center pb-7 md:pb-0 "><h1 className='md:text-5xl text-2xl font-semibold'> Modern <span className='text-[#016db6]'>Excellence</span></h1></div>
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
          <div className="md:w-1/3 h-full flex justify-center  "><h1 className='md:text-5xl text-2xl  font-semibold text-center'> Holistic <span className='text-[#016db6]'>Growth</span></h1></div>
        </div>
      </div>
    </>
  );
};

export default Advantage;
