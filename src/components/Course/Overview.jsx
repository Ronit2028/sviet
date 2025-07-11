// "use client"

import React from 'react';
import Link from 'next/link';


const Overview = ({ programOverview, majorTracks, duration, programName, fees, brochureDownloadLink, courseStructureDownloadLink, highestCTC }) => {
    return (
        <div className='w-10/12 mx-auto flex flex-wrap py-10'>
            <div className="w-full md:w-3/5 pr-auto md:pr-12">
                <div className='mb-6 pb-3'>
                    <p className="text-3xl font-medium mb-6 pb-2">Program Overview</p>
                    <p className='text-md text-justify'>{programOverview}</p>
                </div>
                <div>
                    <p className="text-3xl font-medium mb-3 pb-2">Program's Major Tracks</p>
                    <div className='grid grid-cols-2 pb-6 gap-x-4'>
                        {majorTracks.map((track, index) => (
                            <p key={index} className="text-xl font-medium border-l-4 border-[#fea700] pl-3 bg-gray-100 my-4 py-2">{track}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-2/5">
                <div className="w-full bg-[#00112d] text-white p-6 md:p-10 mb-6 rounded-md">
                    <div className='pb-10'>
                        <p className="text-xl font-medium text-[#fea700] pb-6">Duration</p>
                        <p className='text-3xl font-medium'>{duration}</p>
                    </div>
                    <div>
                        <p className="text-xl font-medium text-[#fea700] pb-6">Program Name :</p>
                        <p className='text-3xl font-medium'>{programName}</p>
                    </div>
                </div>
                <div className='w-full bg-gray-100 p-6 md:p-10 rounded-md'>
                    <div className='pb-7 mb-7 border-b-2'>
                        <p className="text-2xl font-medium mb-5">Fees :</p>
                        <div className='flex flex-wrap justify-between'>
                            {/* <p className='text-3xl font-medium'>{fees}</p> */}
                            <Link href="/Fee_Structure_2025.pdf">
                                <button className='bg-[#fea700] text-white text-xl px-2 py-1 rounded-md '>Download Fee Structure <i className='fa fa-arrow-right ml-1'></i></button>
                            </Link>
                        </div>
                    </div>
                    <div className='pb-7 mb-7 border-b-2 flex justify-between flex-wrap'>
                        <div className='flex flex-wrap gap-2 items-center'>
                            <p className='text-lg font-medium'>Download Brochure :</p>
                            <Link href="/SVIET-Brochure-2025.pdf">
                                <button className='bg-[#fea700] text-white text-lg px-2 py-1 rounded-md hover:rounded-full transition'><i className='fa fa-download'></i></button>
                            </Link>     </div>
                        {/* <div className='flex flex-wrap gap-2 items-center'>
                            <p className='text-lg font-medium'>Download Course Structure :</p>
                            <button className='bg-[#fea700] text-white text-lg px-2 py-1 rounded-md hover:rounded-full transition'><i className='fa fa-download'></i></button>
                        </div> */}
                    </div>
                    {/* <div className='pb-5'>
                        <p className="text-xl font-medium text-[#fea700] ">Highest CTC :</p>
                        <div className='flex flex-wrap justify-between'>
                            <p className='text-3xl font-medium'>{highestCTC}</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Overview;
