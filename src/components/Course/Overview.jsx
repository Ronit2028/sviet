import React from 'react'

const Overview = () => {
    return (
        <div className='w-10/12 mx-auto flex flex-wrap py-10'>
            <div className="w-full md:w-3/5 pr-auto md:pr-12">
                <div className='mb-6 pb-3'>
                    <p className="text-3xl font-medium mb-6 pb-2">Program Overview</p>
                    <p className='text-md text-justify'>
                        One of the most important components of development in the many commercial, technological, and administrative organisations is now computer science. Information gathering in computer science exposes users to a wide range of trends' capabilities. A four-year bachelor's degree programme in Computer Science & Engineering is offered by the Department of Computer Engineering at the Faculty of Engineering. The curriculum is purposefully created to give students a solid foundation in the subject, as well as analysis and in-depth knowledge. The department is outfitted with computer facilities and laboratories that enable students to be engaged on a personal level and in the real-time processing of the technological processes involved in order to expose them to in-depth.
                    </p>
                </div>
                <div>
                    <p className="text-3xl font-medium mb-3 pb-2">Program's Major Tracks</p>
                    <div className='grid grid-cols-2 pb-6 gap-x-4'>
                        <p className="text-xl font-medium border-l-4 border-[#fea700] pl-3 bg-gray-100 my-4 py-2">
                            Data Science
                        </p>
                        <p className="text-xl font-medium border-l-4 border-[#fea700] pl-3 bg-gray-100 my-4 py-2">
                            Software Development
                        </p>
                        <p className="text-xl font-medium border-l-4 border-[#fea700] pl-3 bg-gray-100 my-4 py-2">
                            Machine Learning
                        </p>
                        <p className="text-xl font-medium border-l-4 border-[#fea700] pl-3 bg-gray-100 my-4 py-2">
                            Cloud Computing
                        </p>
                        <p className="text-xl font-medium border-l-4 border-[#fea700] pl-3 bg-gray-100 my-4 py-2">
                            Networking
                        </p>
                    </div>
                </div>

            </div>
            <div className="w-full md:w-2/5">
                <div className="w-full bg-[#00112d] text-white p-6 md:p-10 mb-6 rounded-md">
                    <div className='pb-10'>
                        <p className="text-xl font-medium text-[#fea700] pb-6">
                            Duration
                        </p>
                        <p className='text-3xl font-medium'>
                            4 Years
                        </p>
                    </div>

                    <div>
                        <p className="text-xl font-medium text-[#fea700] pb-6">
                            Program Name :
                        </p>
                        <p className='text-3xl font-medium'>
                            B. Tech Computer Science Engineering
                        </p>
                    </div>

                </div>
                <div className='w-full bg-gray-100 p-6 md:p-10 rounded-md'>
                    <div className='pb-7 mb-7 border-b-2'>
                        <p className="text-2xl font-medium text-[#fea700] ">
                            Fees :
                        </p>
                        <div className='flex flex-wrap justify-between'>
                            <p className='text-3xl font-medium'>
                                45,000 INR
                            </p>
                            <button className='bg-[#fea700] text-white text-lg px-2 py-1 rounded-md '>Apply Now <i className='fa fa-arrow-right ml-1'></i></button>
                        </div>
                    </div>
                    <div className='pb-7 mb-7 border-b-2 flex justify-between flex-wrap'>

                        <div className='flex flex-wrap gap-2 items-center'>
                            <p className='text-lg font-medium'>
                                Download  Brochure :
                            </p>
                            <button className='bg-[#fea700] text-white text-lg px-2 py-1 rounded-md hover:rounded-full transition'><i className='fa fa-download'></i></button>
                        </div>
                        <div className='flex flex-wrap gap-2 items-center'>
                            <p className='text-lg font-medium'>
                                Download  Course Structure :
                            </p>
                            <button className='bg-[#fea700] text-white text-lg px-2 py-1 rounded-md hover:rounded-full transition'><i className='fa fa-download'></i></button>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <p className="text-xl font-medium text-[#fea700] ">
                            Highest CTC : 
                        </p>
                        <div className='flex flex-wrap justify-between'>
                            <p className='text-3xl font-medium'>
                                50 LPA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview