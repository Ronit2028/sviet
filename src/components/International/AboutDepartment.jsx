import React from 'react'
import Image from 'next/image'


const AboutDepartment = () => {
    return (
        <div className='py-12 w-10/12 mx-auto'>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-3 py-12'>
                <div className='flex flex-col justify-center'>
                    <p className="text-3xl font-medium">About Department of
                        International Affairs​</p>
                    <p className='text-lg pl-2 border-l-4 border-[#fea700] mt-3'>Fostering a Global Culture for a Better Future</p>
                    <p className='text-justify pt-6'>
                        The Department of International Affairs at SVGOI is established with the motive to provide assistance to the international students studying at the SVGOI campus.Each year more than 800 international students study academic at the SVGOI. Most of these students are coming to India for the first time and they may face many difficulties here including finding a place to stay or finding work etc.​   </p>
                    <p className="text-justify pt-6">
                        The Department of Interantional Affairs at SVGOI ensures that all the problems of these students will be sorted. Students seeking help can reach out to this department and can get help in terms of hostel and amenities, finding work, assistance in documentation, activities. We promise to sort all of the problems of the international students in a quick time, so that they have a comfortable stay in India.
                    </p>

                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div>
                        <Image src="https://sviet.org.in/wp-content/uploads/IMG_1197-scaled-1.jpg" alt="" srcSet="" width={"100%"} className='rounded-md shadow-md' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutDepartment