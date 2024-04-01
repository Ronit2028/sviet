import React from 'react'

const Director = () => {
    return (
        <div className='py-12 w-10/12 mx-auto'>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-3 py-12'>
                <div className='flex flex-col justify-center'>
                    <p className="text-3xl font-medium">From the Director of International Affairs</p>
                    <p className='text-lg pl-2 border-l-4 border-[#fea700] mt-3'>Mr. Sunil Soni</p>
                    <p className='text-justify pt-6'>
                        As an educational hub, the Swami Viviekanand Group of Institutes plays host to students from across the globe. The Campus offers high quality education at affordable costs. Education which inculates global awareness is the need of the hour. Globalization demands an education system which sensitizes individuals to global issues, and enables them to think beyond borders. By offering an environment conducive to such learning, the SVGOI has emerged as a favoured destination for International Students. The Department of International Affairs at SVGOI facilitates easy acquisition of information about the various courses available at colleges, departments. The Department of International Affairs is a nodal agency that co-ordinates all the activities related to the admission of International Students. The SVGOI is one of the best institutes with well planned infrastructure. Its offer a multi and interdisciplinary educational environment, with advanced research and state of the art technological facilities. Students from all over the world are welcome here. We are happy to have these students who, we hope, will become citizens of the world and go back to their countries as international representatives, carrying knowledge and wisdom from this ancient civilization and a young and modern state back to their countries.”
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div>
                        <img src="https://sviet.ac.in/wp-content/uploads/2022/03/sssssw.png" alt="" srcSet="" width={"100%"} className='rounded-md shadow-md' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Director