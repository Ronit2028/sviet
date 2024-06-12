import React from 'react'

import backdrop from '@/assets/About/backdrop.jpg'

const Header = () => {
    return (
        <div className='h-[80vh] text-white' style={{backgroundImage:`url(${backdrop.src})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
            <div className="bg-[#000000b1] overlay h-full w-full flex flex-col justify-center">
                <div className="w-10/12 mx-auto py-6">
                   
                    <p className='text-4xl mb-6 font-bold'>
                    Where Excellence Meets Opportunity

                    </p>
                    <p className='text-md w-1/2 border-l-4 border-[#fea700] pl-2'>
                    Swami Vivekanand Group of Institutes offers an education that meets the demands of today’s globalized society, ensuring students are ready for both current and future challenges.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header