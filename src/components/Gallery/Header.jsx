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
                        Gallery Highlights
                    </p>
                    <p className='text-md w-1/2 border-l-4 border-[#fea700] pl-2'>
                        Explore our collection of memorable moments and events that capture the vibrant life at Swami Vivekanand Group of Institutes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
