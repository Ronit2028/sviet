import React from 'react'
<<<<<<< HEAD
import sir from '@/assets/Programs/sir.jpg'
=======

import department from '@/assets/placement/dir.jpg'
import Image from 'next/image'


>>>>>>> 5dd00178a39e7d09f35d13a54a97028373decf99
const Department = () => {
    return (
        <div className='py-12 w-10/12 mx-auto'>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-3 py-12'>
                <div className='flex flex-col justify-center'>
                    <p className="text-3xl font-medium">From the Desk of Director Placements</p>
                    <p className='text-lg pl-2 border-l-4 border-[#fea700] mt-3'>Mr. Shubham Garg</p>
                    <p className='text-justify pt-6'>
                        Our aim is to provide Placements & Corporate Interface for the students and to make the students aware about the job opportunities and help them get placed. In the last fifteen years, Training & Placement Office (General) has been successfully able to place students of different courses & has invited reputed MNCs from, Social Sector, Information Technology, Manufacturing, ITES, Media, Services, Banking & Finance, etc. The Training & Placement Office (General) looks after the Campus Placements of the Engineering & Non-Engineering Courses of the College & Coordinates with the respective departmental TPO's regarding the Placement & related activities.  </p>

                </div>
                <div className='grid grid-cols-1 gap-4'>
<<<<<<< HEAD
                    <div>
                        <img src={sir.src} alt="" srcset="" className='rounded-md shadow-md object-cover ' />
=======
                    <div className='flex items-center justify-center'>


                        <Image src={department} className='h-4/5 w-4/5 object-cover border-b-8 shadow-md rounded-md border-[#fea700]' />
>>>>>>> 5dd00178a39e7d09f35d13a54a97028373decf99
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Department