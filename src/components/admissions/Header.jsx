import React from 'react'
import backdrop from '@/assets/admissions/backdrop.jpg'

const Header = () => {
  return (
    <div className='h-auto md:h-[100vh] lg:h-[70vh] text-white flex items-center' style={{backgroundImage:`url(${backdrop.src})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
            <div className='w-full h-full lg:h-[70vh]  flex items-center bg-[#00000095] md:absolute'>
            <div className='w-10/12 mx-auto md:flex md:flex-wrap items-center'> 
                <div className='w-full lg:text-start text-center md:w-1/2 md:relative mt-3 md:mt-0 md:top-[30px] '>
                    <p className='text-6xl lg:w-4/5 mb-3 pb-3'>
                        Gateway to your Dreams  
                    </p>
                    <p className='text-xl font-semibold mt-3 mb-3 pb-3'>
                    Join us to explore Endless Career Opportunities
                    </p>
                    <button className='bg-[#fea700] text-white p-2 rounded-md text-lg mt-3'>Apply Now</button>
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-end py-4 md:relative xl:left-[100px] md:top-[200px]'>
                    <div className="max-w-lg mx-auto bg-[#fea700] rounded-lg">
                        <h2 className="text-2xl font-semibold text-center p-6 text-black">Apply Today for SVIET Programs</h2>
                        <form className='bg-white w-full h-full p-6 rounded-lg shadow-lg '>
                            <div className='xl:block md:flex gap-2'>
                                <div className="mb-4 ">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="mb-4 ">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> Email Address:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Your Email Address"
                                        required
                                    />
                                </div>
                            </div>
                            <div className=''>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">Enter Mobile No:</label>
                                    <input
                                        type="text"
                                        id="mobile"
                                        name="mobile"

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Mobile Number"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">Type your city & select from list:</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Your City"
                                        required
                                    />
                                    {/* You can add a dropdown list for cities here if needed */}
                                </div>
                            </div>
                            <div className='xl:block md:flex gap-2'>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interestedProgram">Choose Program:</label>
                                    <input
                                        type="text"
                                        id="interestedProgram"
                                        name="interestedProgram"

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Interested Program"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discipline">Select Discipline:</label>
                                    <input
                                        type="text"
                                        id="discipline"
                                        name="discipline"

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Discipline"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="program">Select Program:</label>
                                <input
                                    type="text"
                                    id="program"
                                    name="program"

                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Program"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">How old are you?</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        id="day"
                                        name="day"

                                        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                                        placeholder="DD"
                                        required
                                    />
                                    <input
                                        type="text"
                                        id="month"
                                        name="month"

                                        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                                        placeholder="MM"
                                        required
                                    />
                                    <input
                                        type="text"
                                        id="year"
                                        name="year"

                                        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="YYYY"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#fea700] hover:bg-[#ffb327] transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Header