import React from 'react'

import backdrop from '@/assets/Programs/backdrop.jpg'

const Header = () => {
    return (
        <div className='h-[75vh] text-white' style={{ backgroundImage: `url(${backdrop.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className="bg-[#000000b1] overlay h-full w-full flex flex-col justify-center">
                <div className="w-10/12 mx-auto py-6">
                    <p className='text-4xl mb-3'>
                    SVGOI Announcements
                    </p>
                    <p className='text-2xl w-1/2 border-l-4 border-[#fea700] pl-2'>
                         Get In Touch With Us
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Header