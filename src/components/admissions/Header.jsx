import React from 'react'
import backdrop from '@/assets/admissions/backdrop.jpg'

const Header = () => {
  return (
    <div className='h-[80vh] text-white' style={{backgroundImage:`url(${backdrop.src})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
    <div className="bg-[#000000b1] overlay h-full w-full flex flex-col justify-center py-12">
        <div className="w-10/12 mx-auto py-6">
            <p className='text-4xl mb-3'>
                Admissions at SVIET
            </p>
            <p className='text-2xl mb-6 font-medium'>
                Simplified, Compehensive & Transparent
            </p>
            <p className='text-md w-full lg:w-1/2 border-l-4 border-[#fea700] pl-2'>
            We are delighted that you are considering joining our institution, known for its academic excellence and vibrant community.  </p>
        </div>
    </div>
</div>
  )
}

export default Header