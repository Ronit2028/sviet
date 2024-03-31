import React from 'react'
import bannerImage from '@/assets/LandingPage/bannerImage.jpg'


const CampusExpirience = () => {
  return (
    <div>
      <div className="w-full text-white" style={{ backgroundImage: `url(${bannerImage.src})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
        <div className='  rounded-md flex flex-col justify-center w-full h-full bg-[#000000e3]'>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-start w-full mb-10">
                <h2 className="text-xs text-[#ff9602]  tracking-widest font-medium title-font mb-1">SMTHNG</h2>
                <h1 className="sm:text-3xl  text-2xl font-medium title-font  text-gray-100 py-6">An Enthusiastic Campus Experience</h1>
                <p className='h-0.5 bg-[#ff9602] w-1/2  '></p>
                <p className='py-3 text-gray-100 w-1/2'>Swami Vivekanand Group of Institutions was established in year 2004 under the aegis of Sh.Raghunath Rai Memorial Education & Charitable Trust,The governing body is headed by Sh. Ashwani Garg and Sh.Ashok Garg.</p>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CampusExpirience