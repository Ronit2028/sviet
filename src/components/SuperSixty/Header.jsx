import React from 'react'

import groupPhoto from '@/assets/super-sixty/IMG_9332-scaled.webp'

const Header = () => {
  return (
    <div className='h-auto md:h-[80vh]' style={{backgroundImage:`url(${groupPhoto.src})`, backgroundSize:"cover", backgroundPosition:"center center"}}>
      <div className='py-12 flex flex-col justify-center h-full w-full bg-[#0000009f] text-white'>
        <div className="w-10/12 mx-auto">
          <p className="text-4xl font-medium pb-3 mb-3">
            Super 60
          </p>
          <p className='mb-6 text-lg pl-2 border-l-4 border-[#fea700]'>
            Programming for a Better Future, Today
          </p>
          <p>
          Programming is not just about writing code. It's about solving problems and creating possibilities
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header