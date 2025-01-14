import React from 'react'
import header from "../../assets/placement/header.webp"

const Header = () => {
    return (
        <div className='h-[auto] md:h-[80vh] ' style={{ backgroundImage: `url(${header.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className="w-full flex flex-col justify-between h-full bg-[#00000099] text-white">
                <div className="w-10/12 mx-auto flex flex-col justify-center h-full py-12">
                    <p className="text-4xl font-medium pb-6">
                        Placements Overview
                    </p>
                    <p className='text-xl border-l-4 border-[#fea700] pl-2'>
                        Our Motto is Arise, Awake &
                        Achieve!  </p>
                </div>
                <div className="mt-auto pt-6 grid grid-cols-2 md:grid-cols-4">
                    <div className='p-6 lg:p-12 border-2 border-[#ffffff75]'>
                        <p className="text-3xl lg:text-4xl pb-3 font-medium">
                            3,000
                            +
                        </p>
                        <p>
                            Offer letters
                        </p>
                    </div>
                    <div className='p-6 lg:p-12 border-2 border-[#ffffff75]'>
                        <p className='text-3xl lg:text-4xl pb-3 font-medium'>

50 LPA
                        </p>
                        <p>Highest Package Offered

                        </p>
                    </div>
                    <div className='p-6 lg:p-12 border-2 border-[#ffffff75]'>
                        <p className='text-3xl lg:text-4xl pb-3 font-medium'>


                            12,000
                            +
                        </p>
                        <p>
                            Dreams Fullfilled

                        </p>
                    </div>
                    <div className='p-6 lg:p-12 border-2 border-[#ffffff75]'>
                        <p className='text-3xl lg:text-4xl pb-3 font-medium'>

                            350
                            +
                        </p>

                        <p>
                            Companies Visited Per Year
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header