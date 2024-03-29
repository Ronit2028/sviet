import React from 'react'
import Image from 'next/image';
import successImage from '../../assets/LandingPage/success.jpg';


const CulturalDiversity = () => {
  return (
    <>
   
  <div class="container  py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap  mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
    <div class=" flex flex-col align-middle  justify-center">
                <div class="flex mb-5 items-center">
                    <span class="border-l-2 border-[#ff9602] h-6 mr-3"></span>
                    <h1 class="text-lg font-bold">CULTURE</h1>
                </div>
                <h1 class="text-5xl font-semibold mb-8  "><h1 className='text-[#ff9602] text-7xl py-3 '> Cultural</h1> Nexus Institute</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, accusantium exercitationem! Tenetur exercitationem tempora esse nostrum odio totam id laborum, nesciunt autem impedit accusamus nam itaque! Harum tempore enim quod.</p>
            </div>
   
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 px-4 sm:mt-0">
    <Image src={successImage} alt="Success" class="object-cover object-center w-full h-full"  />
    </div>

  <div class="flex flex-wrap  mt-10 mb-auto  w-full  content-start sm:pr-10">
    
      <div class="px-4 py-auto sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-bold text-4xl py-5   text-gray-900">28</h2>
        <p class="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">States</p>
      </div>
      <div class="px-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-bold text-4xl py-5  text-gray-900">75+</h2>
        <p class="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">Nationalities</p>
      </div>
      <div class="px-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-bold text-4xl py-5  text-gray-900">35000+</h2>
        <p class="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">International Students</p>
      </div>
      <div class="px-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-bold text-4xl py-5 text-gray-900">50000+</h2>
        <p class="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">Full time students</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default CulturalDiversity