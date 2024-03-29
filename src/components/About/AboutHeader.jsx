import React from 'react'

import backdrop from '@/assets/Programs/backdrop.jpg'

const AboutHeader = () => {
    return (
        <div className='h-[60vh] text-white' style={{backgroundImage:`url(${backdrop.src})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
            <div className="bg-[#000000b1] overlay h-full w-full flex flex-col justify-center">
                <div className="w-10/12 mx-auto py-6">
                    <p className='text-4xl mb-3'>
                       About
                    </p>
                    <p className='text-2xl mb-6'>
                        Where Innovation Meets Industry: Chart Your Engineering Journey at SVIET
                    </p>
                    <p className='text-md w-1/2 border-l-4 border-[#fea700] pl-2'>
                        Dive into cutting-edge programs that equip you with the skills and knowledge to solve real-world challenges.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutHeader