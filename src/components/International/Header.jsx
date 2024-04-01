import React from 'react'

const Header = () => {
    return (
        <div className='h-[auto] md:h-[80vh] ' style={{ backgroundImage: "url(https://sviet.org.in/wp-content/uploads/DSC_6833-scaled-1.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className="w-full flex flex-col justify-between h-full bg-[#00000099] text-white">
                <div className="w-10/12 mx-auto flex flex-col justify-center h-full py-6">
                    <p className="text-4xl font-medium pb-6">
                        India's Top Premier Institution
                    </p>
                    <p className='text-xl border-l-4 border-[#fea700] pl-2'>
                        Educating world-wide citizens for a moving world
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Header