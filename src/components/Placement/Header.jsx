import React from 'react'

const Header = () => {
    return (
        <div className='h-[auto] md:h-[80vh] ' style={{ backgroundImage: "url(http://sviet.ac.in/wp-content/uploads/2023/04/DSC_6797-scaled.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className="w-full flex flex-col justify-between h-full bg-[#00000099] text-white">
                <div className="w-10/12 mx-auto flex flex-col justify-center h-full py-12">
                    <p className="text-4xl font-medium pb-6">
                        Placements at SVIET
                    </p>
                    <p className='text-xl border-l-4 border-[#fea700] pl-2'>
                        Our Motto is Arise, Awake &
                        Achieve!  </p>
                </div>
                <div className="mt-auto pt-6 grid grid-cols-2 md:grid-cols-4">
                    <div className='p-6 lg:p-12 border-2 border-[#ffffff75]'>
                        <p className="text-3xl lg:text-4xl pb-3 font-medium">

                            5,000
                            +
                            
                        </p>
                        <p>
                            Offer letters
                        </p>
                    </div>
                    <div className='p-6 lg:p-12 border-2 border-[#ffffff75]'>
                        <p className='text-3xl lg:text-4xl pb-3 font-medium'>


                            50
                            Lakh
                        </p>
                        <p>Highest Package Offered

                        </p>
                    </div>
                    <div className='p-6 lg:p-12 border-2 border-[#ffffff75]'>
                        <p className='text-3xl lg:text-4xl pb-3 font-medium'>


                            10,000
                            +
                        </p>
                        <p>
                            Dreams Fullfilled

                        </p>
                    </div>
                    <div className='p-6 lg:p-12 border-2 border-[#ffffff75]'>
                        <p className='text-3xl lg:text-4xl pb-3 font-medium'>

                            250
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