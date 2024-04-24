import React from 'react'
import Image from 'next/image';

import img1 from '../../assets/Programs/DSC01074.jpg';

const InstitutionBestProgramm = ({description}) => {
  return (
    
    <section className="bg-white w-10/12 mx-auto flex">
    <div className="items-center py-8 mx-auto gap-10 lg:grid lg:grid-cols-2 lg:py-28">
      <div className="font-light  text-gray-900 sm:text-lg ">
        <p className="text-4xl pb-3 mb-3 font-semibold">
          <span className="text-[#fea700]">
          We Offer  </span>
          <br />
          Programs for Bright Future

        </p>

        <p className="mb-4 text-sm md:text-lg text-justify">
      {description}
</p>
      </div>
      <div className="">
        <Image className="w-full rounded-lg" src={img1} alt="office content 1" />
        {/* <Image className="mt-4 w-20  h-20 lg:-mt-40 rounded-lg" src={img2} alt="office content 2"/> */}
      </div>
    </div>
  </section>
    )
  
}

export default InstitutionBestProgramm