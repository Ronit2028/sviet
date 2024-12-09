import React from 'react';
import backdrop from '@/assets/About/backdrop.jpg';


const Header = () => {
    return (
        <div 
            className='h-[80vh] text-white' 
            style={{
                backgroundImage: `url(${backdrop.src})`, 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center center'
            }}
        >
            <div className='bg-[#000000b1] h-full w-full flex flex-col justify-center'>
                <div className='w-10/12 mx-auto py-6'>
                    <p className='text-4xl mb-6 font-bold'>
                        SVGOI
                    </p>
                    <p className='text-md w-1/2 border-l-4 border-[#fea700] pl-2'>
                    Discover a range of top-tier institutions under Swami Vivekanand Educational Group, each offering innovative programs and world-class facilities to shape the leaders of tomorrow. Browse through our colleges and find the one that aligns with your educational aspirations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
