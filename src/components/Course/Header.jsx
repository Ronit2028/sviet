import React from 'react'

import backdrop from '@/assets/Programs/backdrop.jpg'

const Header = () => {
    return (
        <div className='h-[75vh] text-white' style={{ backgroundImage: `url(${backdrop.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className="bg-[#000000b1] overlay h-full w-full flex flex-col justify-center">
                <div className="w-10/12 mx-auto py-6">
                    <p className='text-2xl mb-3'>
                        B. Tech
                    </p>
                    <p className='text-4xl mb-6'>
                        Computer Science & Engineering
                    </p>
                    <p className='text-md w-1/2 border-l-4 border-[#fea700] pl-2'>
                        PROGRAMMING FOR FUTURE, TODAY
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header