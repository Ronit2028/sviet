import React from 'react'

const Testimonials = () => {
    return (
        <div className='w-10/12 mx-auto flex flex-wrap py-10'>
            <div className="w-full py-10">
                <p className="text-4xl text-center w-2/3 mx-auto mb-6">
                    Listen to the Resonance of Achievement -
                    Explore Further Accounts from Our Distinguished Alumni!
                </p>
                <p className="text-lg text-center mb-6 pb-6">
                    Uncover the inspiring narratives and significant perspectives shared by our successful graduates.
                </p>
            </div>
            <div className="w-full md:w-1/2 h-[50vh] flex items-end text-white" style={{ backgroundImage: `url(https://sviet.ac.in/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-02-at-12.21.29-AM-1.jpeg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                <div className='p-6 w-full h-full flex items-end' style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))' }}>
                    <div className='w-full'>
                        <p className="text-4xl">
                            Aman Pushkar
                        </p>
                        <div className='flex justify-between w-full'>
                            <p className="text-xl">
                                Escalon
                            </p>
                            <div className='flex gap-2'>
                                <button className='bg-[#fea700] text-white rounded-md h-7 w-7'><i className='fa fa-arrow-left'></i></button>
                                <button className='bg-[#fea700] text-white rounded-md h-7 w-7'><i className='fa fa-arrow-right'></i></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full md:w-1/2 bg-gray-100">
                <div className="p-6 h-full">

                    <div className='flex flex-col justify-center h-full'>
                        <i className='text-5xl text-center pb-6 fa fa-quote-left'>
                        </i>
                        <p className="text-2xl ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores corporis tenetur nobis pariatur tempore reprehenderit necessitatibus commodi ipsam porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nostrum?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials