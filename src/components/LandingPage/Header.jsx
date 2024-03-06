import React from 'react'

const Header = () => {
    return (
        <div className='h-auto md:h-[100vh] bg-black text-white flex items-center'>
            <div className='w-10/12 mx-auto flex flex-wrap items-center'>
                <div className='w-full md:w-1/2'>
                    <p className='text-5xl w-4/5 mb-3 pb-3'>
                        Shaping Future Leaders in Engineering & Technology (Since 2004)
                    </p>
                    <p className='text-xl font-semibold mt-3 mb-3 pb-3'>
                        Ranked NIRF 104 (2021). Impeccable placements with 200+ companies. A legacy of excellence in Engineering & Technology education. Recognized by NIRF for its quality programs.
                    </p>
                    <button className='bg-[#fea700] text-white p-2 rounded-md text-lg mt-3'>Apply Now</button>
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-center py-4'>
                    <div className="max-w-lg mx-auto  bg-gray-100 rounded-lg">
                        <h2 className="text-2xl font-semibold text-center p-6 text-black">Apply Today for SVIET Programs</h2>
                        <form className='bg-white w-full h-full p-6 rounded-lg'>
                            <div className='flex flex-wrap gap-4'>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Enter your Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Enter your Email Address:</label>
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
                            <div className='flex flex-wrap gap-4'>
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
                            <div className='flex flex-wrap gap-4'>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interestedProgram">Choose Your Interested Program:</label>
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
    )
}

export default Header
