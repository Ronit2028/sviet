import React from 'react';

import logos from '../../assets/About/leading/Amazon.webp'
import logos1 from '../../assets/About/leading/Bank.webp'
import logos2 from '../../assets/About/leading/Dell.webp'
import logos3 from '../../assets/About/leading/image_2022_01_25T14_43_24_028Z.webp'
import logos4 from '../../assets/About/leading/Reliance.webp'
import logos5 from '../../assets/About/leading/Tata.webp'
import logos6 from '../../assets/About/leading/uu.webp'

const LeadingCompanies = () => {
  const placeholderStyle = {
    borderRadius: ' 30px',
    // backgroundColor: '#02020210',
    width: '100%', // Adjust width as needed
    height: '200px', // Adjust height as needed
  };

  return (
    <div className=' md:flex justify-end h-3/4 py-12'>
      <div className="w-10/12 flex justify-center  py-10 md:py-24 ">
        <div className="md:w-1/2 flex flex-col align-middle pr-7 justify-center">
          <div className="flex mb-5 items-center">
            <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
            <h1 className="text-sm md:text-lg font-bold">CAREER DEVELOPMENT</h1>
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold mb-8">Industry Based
            <span className='text-[#ff9602] text-2xl md:text-5xl md:py-2 '> Immersive Learning</span></h1>
          <p>The unique experiential and practitioner-led pedagogical approach thrives on a consistent immersion in the industry, which ensures a hands-on learning experience for the students.</p>
        </div>
      </div>
      <div className="md:w-4/5 px-5 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className='bg-[#02020210] ' style={placeholderStyle}>
              {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

            </div>
            <div className='bg-[#02020205]' style={placeholderStyle}>
              {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

            </div>
            <div className='bg-[#02020210]' style={placeholderStyle}>
              {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

            </div>
          </div>
          <div className="grid gap-4">
            <div className='bg-[#02020205]' style={placeholderStyle}>
              {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

            </div>
            <div className='bg-[#02020210]' style={placeholderStyle}>
              {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

            </div>
            <div className='bg-[#02020205]' style={placeholderStyle}>
              <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={logos.src} alt="Google" />

            </div>
          </div>
          <div className="grid gap-4">
            <div className='bg-[#02020210]' style={placeholderStyle}>
              {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

            </div>
            <div className='bg-[#02020205]' style={placeholderStyle}>
              <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={logos1.src} alt="Google" />

            </div>
            <div className='bg-[#02020210]' style={placeholderStyle}>
              <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={logos2.src} alt="Google" />

            </div>
          </div>
          <div className="grid gap-4">
            <div className='bg-[#02020205]' style={placeholderStyle}>
              <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={logos3.src} alt="Google" />

            </div>
            <div className='bg-[#02020210]' style={placeholderStyle}>
              <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={logos4.src} alt="Google" />

            </div>
            <div className='bg-[#02020205]' style={placeholderStyle}>
              <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={logos5.src} alt="Google" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadingCompanies;
