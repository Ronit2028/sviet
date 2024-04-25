import React from 'react'

import backdrop from '@/assets/Programs/backdrop.jpg'
import { CgNametag } from 'react-icons/cg'
import Link from 'next/link'
const Header = ({courseName, backgroundImage, title, subTitle}) => {
    return (
        <div className='h-[75vh] text-white' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className="bg-[#000000b1] overlay h-full w-full flex flex-col justify-center">
                <div className="w-10/12 mx-auto py-6">
                    <p className='text-2xl mb-3'>
                        {courseName}
                    </p>
                    <p className='text-4xl mb-6'>
                        {title}
                    </p>
                    <p className='text-md w-1/2 border-l-4 border-[#fea700] pl-2'>
                        {subTitle}
                    </p>
                    <Link href="https://www.admission.sviet.ac.in">
                        <button className='bg-[#fea700] text-white px-2 py-1'>Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header