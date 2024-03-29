import React from 'react';

const LeadingCompanies = () => {
    const placeholderStyle = {
        borderRadius: ' 30px',
        // backgroundColor: '#02020210',
        width: '100%', // Adjust width as needed
        height: '200px', // Adjust height as needed
    };

    return (
        <div className=' md:flex justify-end h-3/4 py-12'>
            <div className="flex container justify-center  py-10 md:py-24 ">
                <div className="md:w-1/2 flex flex-col align-middle pr-7 justify-center">
                    <div className="flex mb-5 items-center">
                        <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
                        <h1 className="text-sm md:text-lg font-bold">CAREER DEVELOPMENT</h1>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-semibold mb-8">Industry Based
                        <h1 className='text-[#ff9602] text-2xl md:text-5xl md:py-2 '> Immersive Learning</h1></h1>
                    <p>The unique experiential and practitioner-led pedagogical approach thrives on a consistent immersion in the industry, which ensures a hands-on learning experience for the students.</p>
                </div>
            </div>
            <div className="md:w-4/5 px-5 md:px-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                         <div className='bg-[#02020210] ' style={placeholderStyle}>
                        {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

                        </div>
                         <div className='bg-[#02020205]' style={placeholderStyle}>
                      {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

                        </div>
                         <div  className='bg-[#02020210]' style={placeholderStyle}>
                      {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

                        </div>
                    </div>
                    <div className="grid gap-4">
                         <div className='bg-[#02020205]' style={placeholderStyle}>
                      {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

                        </div>
                         <div  className='bg-[#02020210]' style={placeholderStyle}>
                      {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

                        </div>
                         <div className='bg-[#02020205]' style={placeholderStyle}>
                      <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" />

                        </div>
                    </div>
                    <div  className="grid gap-4">
                         <div  className='bg-[#02020210]' style={placeholderStyle}>
                      {/* <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" /> */}

                        </div>
                         <div className='bg-[#02020205]'  style={placeholderStyle}>
                      <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" />

                        </div>
                         <div  className='bg-[#02020210]' style={placeholderStyle}>
                      <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" />

                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='bg-[#02020205]' style={placeholderStyle}>
                      <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" />

                        </div>
                         <div  className='bg-[#02020210]' style={placeholderStyle}>
                      <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" />

                        </div>
                        <div  className='bg-[#02020205]' style={placeholderStyle}>
                      <img className='px-5' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeadingCompanies;
