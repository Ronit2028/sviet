import React from 'react'
import Image from 'next/image'
import img1 from '../../assets/LandingPage/bannerImage.jpg';
const AboutUs = () => {
  return (
    <section className=" w-full mx-auto flex flex-col py-8 lg:py-28">
       {/* <p className="text-4xl pb-3 mb-3 font-semibold">
        <span className="text-[#fea700]">
          About  </span>
        <br/>
        The SVGOI
      </p> */}
      
      <div className="flex flex-col lg:flex-row items-start gap-10">
      <div className="relative lg:w-1/2 mt-8 lg:mt-0">
          <Image 
            src={img1.src}
            width={800} 
            height={800} 
            alt="SVGOI Campus" 
            className="w-full lg:h-[450px] rounded-lg shadow-lg "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold"><span className="text-[#fea700]">
          About  </span>
        <br/>
        The SVGOI</h3>
            <p>Swami Vivekanand Group of Institutions (SVGOI) was founded under the Shri Raghunath Rai Memorial Educational and Charitable Trust on September 29, 2003. The journey began with the establishment of Swami Vivekanand Institute of Engineering and Technology (SVIET) in 2004. Over the years, SVGOI expanded its horizons:</p>
          </div>
        </div>
        <div className="font-light text-gray-900 sm:text-lg lg:w-1/2">
         
          <ul className='text-[16px] max-w-xl space-y-3'>
            {[
              { year: '2005', event: 'Swami Vivekanand College of Pharmacy (SVCP) and Swami Vivekanand College of Education (SVCE) were established.' },
              { year: '2010', event: 'Swami Vivekanand Polytechnic College (SVPC) joined the group.' },
              { year: '2012', event: 'Swami Vivekanand Faculty of Information Technology & Business Management and Swami Vivekanand Industrial Training Centre (SVITC) were introduced.' },
              { year: '2014', event: 'Swami Vivekanand College of Faculty Management & Technology came into existence.' },
              { year: '2017', event: 'Swami Vivekanand College of Management & Technology (SVCMT) was established under MRSPTU.' },
              { year: '2021', event: 'Swami Vivekanand College of Law became the latest addition to the group.' }
            ].map((item, index) => (
              <li key={index} className="p-1 shadow-md">
                <span className='font-semibold text-[#fea700]'>{item.year}:</span> {item.event}
              </li>
            ))}
          </ul>
        </div>
        
        
      </div>
    </section>
  )
}

export default AboutUs
