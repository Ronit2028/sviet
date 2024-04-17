import React from 'react'

import backdrop from '@/assets/About/backdrop.jpg'

const AboutHeader = () => {
    return (
        <div className='h-[80vh] text-white' style={{backgroundImage:`url(${backdrop.src})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
            <div className="bg-[#000000b1] overlay h-full w-full flex flex-col justify-center">
                <div className="w-10/12 mx-auto py-6">
                    <p className='text-4xl mb-3 font-bold'>
                       About
                    </p>
                    <p className='text-2xl mb-6 font-bold'>
                    Infinite Horizons, One Campus

                    </p>
                    <p className='text-md w-1/2 border-l-4 border-[#fea700] pl-2'>
                    Swami Vivekanand Group of Institutes was established in 2004 under the aegis of Sh.Raghunath Rai Memorial Education & Charitable Trust. The governing body is headed by Sh. Ashwani Garg and Sh.Ashok Garg.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutHeader