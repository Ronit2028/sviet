import React from 'react'

const SVIETinMedia = () => {
    return (
        <div className='py-12 my-10 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className="py-10 w-full flex flex-col justify-center">
                <p className="text-4xl pb-3 mb-3">
                    Discover the
                    <br />
                    Latest News, Events, and Insights
                </p>

                <p className='text-lg mt-3'>
                    Stay updated with our dynamic campus life, groundbreaking research endeavors, student achievements, and collaborations with industry leaders. Whether it's a campus event, academic breakthrough, or student success story, our media section captures the essence of SVIET's journey towards excellence.
                </p>
                <button className='text-lg text-white rounded-md bg-[#fea700] w-fit p-2 mt-5'>Know More</button>
            </div>
            <div className="w-full ">
                <div className="event-card rounded-md shadow-md">
                    <div className="image-section h-[30vh]" style={{backgroundImage:`url(https://sviet.ac.in/wp-content/uploads/2023/06/IMG_0201-1024x683.jpg)`, backgroundSize:"cover", backgroundPosition:"center bottom", backgroundRepeat:"no-repeat"}}>

                    </div>
                    <div className="text-section p-6">
                        <div>
                            <p className="text-xl font-medium ">
                                SVIET Event News Heading
                            </p>
                            <p className='text-md pb-6'>
                                Event Type
                            </p>
                            <p className='text-sm pb-6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla deleniti, veritatis mollitia dolor quidem incidunt suscipit dolore nostrum inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at id adipisci nesciunt ratione dolorum exercitationem natus, delectus laboriosam quos!
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <p className="text-sm font-semibold">
                                Some Random Date
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