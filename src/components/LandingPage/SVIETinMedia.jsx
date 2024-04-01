import React from 'react'

const SVIETinMedia = () => {
    return (
        <div className='py-12 my-10 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className="py-10 w-full flex flex-col justify-center">
                <p className="text-4xl pb-3 mb-3 font-semibold">
                    <span className="text-[#fea700]">
                        Discover  </span> the
                    <br />
                    Latest News, Events, and Insights
                </p>

                <p className='text-md text-gray-800 mt-3'>
                    Stay updated with our dynamic campus life, groundbreaking research endeavors, student achievements, and collaborations with industry leaders. Whether it's a campus event, academic breakthrough, or student success story, our media section captures the essence of SVIET's journey towards excellence.
                </p>
                <button className='text-lg text-white rounded-md bg-[#fea700] w-fit p-2 mt-5'>Know More</button>
            </div>
            <div className="w-full ">
                <div className="event-card rounded-md shadow-md">
                    <div className="image-section h-[40vh]" style={{ backgroundImage: `url(https://media.licdn.com/dms/image/D5622AQG9N5MX7IwGSw/feedshare-shrink_2048_1536/0/1711190034649?e=1714608000&v=beta&t=ZJeC8VG0beXNZ7HILu03bao2vOUXJWNMcGwycTSBR4g)`, backgroundSize: "cover", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat" }}>

                    </div>
                    <div className="text-section p-6">
                        <div>
                            <p className="text-xl font-semibold ">
                                Global Future Summit 2024
                            </p>
                            <p className='text-md pb-6'>
                                Industrialist & HR Panel Discssion and Ideathon
                            </p>
                            <p className='text-sm pb-6'>
                                Global Futures Summit 2024 Grabs Media Spotlight!
                                Keep your eyes peeled for ongoing media reports from the Global Futures Summit 2024! There's always something new on the horizon. Join SVIET and be part of the change!      </p>
                        </div>
                        <div className='flex justify-between'>
                            <p className="text-sm font-semibold text-[#fea700]">
                                March 28, 2024
                            </p>
                            <button className='rounded-md bg-[#fea700] text-white p-2 h-7 w-7 flex justify-center items-center'><i className='fa fa-arrow-right'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SVIETinMedia