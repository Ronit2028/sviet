// import React from 'react'

// const Header = () => {
//     return (
//         <div className='h-[auto] md:h-[80vh] ' style={{ backgroundImage: "url(https://sviet.org.in/wp-content/uploads/DSC_6833-scaled-1.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
//             <div className="w-full flex flex-col justify-between h-full bg-[#00000099] text-white">
//                 <div className="w-10/12 mx-auto flex flex-col justify-center h-full py-6">
//                     <p className="text-4xl font-medium pb-6">
//                         India's Top Premier Institution
//                     </p>
//                     <p className='text-xl border-l-4 border-[#fea700] pl-2'>
//                         Educating world-wide citizens for a moving world
//                     </p>
//                 </div>
                
//             </div>
//         </div>
//     )
// }

// export default Header
import React from 'react'
import header from "../../assets/placement/header.webp"

const Header = () => {
    return (
        <div className='h-[auto] md:h-[80vh] ' style={{ backgroundImage: `url(https://sviet.org.in/wp-content/uploads/DSC_6833-scaled-1.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className="w-full flex flex-col justify-between h-full bg-[#00000099] text-white">
                <div className="w-10/12 mx-auto flex flex-col justify-center h-full py-12">
                    <p className="text-4xl font-medium pb-6">
                    India's Top Premier Institution
                    </p>
                    <p className='text-xl border-l-4 border-[#fea700] pl-2'>
                    Educating world-wide citizens for a moving world </p>
                </div>
                <div className="mt-auto pt-6 grid grid-cols-2 md:grid-cols-4">
                    <div className='p-6 lg:p-12 border-2 border-[#ffffff75]'>
                        <p className="text-3xl lg:text-4xl pb-3 font-medium">
                        1000
                            +
                        </p>
                        <p className='font-bold text-lg'>
                        International Students
                        </p>
                    </div>
                    <div className='p-6 lg:p-12 border-2 border-[#ffffffb7]'>
                        <p className='text-3xl lg:text-4xl pb-3 font-medium'>

                        20 
                        +
                        </p>
                        <p className='font-bold text-lg'>Countries

                        </p>
                    </div>
                    <div className='p-6 lg:p-12 border-2 border-[#ffffff75]'>
                        <p className='text-3xl lg:text-4xl pb-3 font-medium'>


                        30
                            +
                        </p>
                        <p className='font-bold text-lg'>
                        Nationalities

                        </p>
                    </div>
                    <div className='p-6 lg:p-12 border-2 border-[#ffffff75]'>
                        <p className='text-3xl lg:text-4xl pb-3 font-medium'>

                            50
                            +
                        </p>

                        <p className='font-bold text-lg'>
                        Cultures
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header