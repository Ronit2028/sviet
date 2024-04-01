import React from 'react'

const StudentSpeak = () => {
    return (
        <div className='py-12 w-10/12 mx-auto'>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-3'>
                <div className='my-auto'>
                    <p className="text-3xl font-medium">Our Students Speak</p>
                    <p className='text-lg pl-2 border-l-4 border-[#fea700] mt-3'>Our Reviews Speak For Us</p>
                    <p className='text-justify pt-6'>
                        We offer the insightful comprehensive learning journey where students can go on to ensure that they acquire the right knowledge and the important skill set to succeed at the vast global stage. Our Industry Interface academic experience is designed in a way so that students can grab the most of the knowledge while gaining the practical edge in learning process. With over 53 diploma, graduate and post graduate degree program, we provide you academic opportunities that are recognized globally. The curriculum of SVGOI is further supported by more than 10 top universities of India and it has received awards in terms of academic approach from more than 5 top education organization. Furthermore, Our international tie-up with more than 13 countries and 250+ companies from the fortune 500 have guaranteed the most lucrative path towards the global success for our students.
                    </p>
                    <p className='text-justify pt-6'>
                        We at SVGOI understand all these difficulties and to make the journey of our International students’ memorable one, we do all our efforts to provide them best experience.
                    </p>
                    <p className='pt-6 text-justify'>
                        We are here to assist our foreign students at every step of the way from their arrival to settlement in the campus.
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/M5nNS8EQ9OA?si=7d-ZCNhwV_XdgAx_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                            className='rounded-md shadow-md'
                        ></iframe>
                    </div>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/M5nNS8EQ9OA?si=7d-ZCNhwV_XdgAx_" title="YouTube video player" frameborder="0"
                            className='rounded-md shadow-md' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap  mt-10 mb-auto  w-full  content-start sm:pr-10">

                <div className="px-4 py-auto sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-bold text-4xl py-5   text-gray-900">28</h2>
                    <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">States</p>
                </div>
                <div className="px-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-bold text-4xl py-5  text-gray-900">75+</h2>
                    <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">Nationalities</p>
                </div>
                <div className="px-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-bold text-4xl py-5  text-gray-900">35000+</h2>
                    <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">International Students</p>
                </div>
                <div className="px-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-bold text-4xl py-5 text-gray-900">50000+</h2>
                    <p className="leading-relaxed text-lg font-bold border-l-2 px-3  border-[#ff9602]">Full time students</p>
                </div>
            </div>
        </div>

    )
}

export default StudentSpeak