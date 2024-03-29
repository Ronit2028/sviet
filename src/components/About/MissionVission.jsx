import React from 'react'
import Image from 'next/image';
import img from '../../assets/mission-vission-vector.70934ee2310f41731191.png';

const MissionVission = () => {
  return (
    <>
      <div className="container md:w-4/5 px-5 mx-auto py-12 flex">
      <div class="md:w-1/2 flex flex-col align-middle  justify-center">
          <div class="flex mb-2 md:mb-5 items-center">
            <span class="border-l-2 border-[#ff9602] h-6 mr-3"></span>
            <h1 class="text-lg font-bold">OUR PHILOSPHY</h1>
          </div>
          <h1 class="text-lg md:text-3xl font-semibold mb-8  ">Our principles and   <h1 className='text-[#016db6] text-4xl md:text-7xl md:py-3 '> convictions</h1></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, accusantium exercitationem! Tenetur exercitationem tempora esse nostrum odio totam id laborum, nesciunt autem impedit accusamus nam itaque! Harum tempore enim quod.</p>
        </div>
        <div className="w-1/2 h-96 hidden md:block"> <Image className='' src={img} /></div>
        </div>

      <div className="container md:w-4/5 px-5 md:px-0 mx-auto pb-24">
      
        <div className="md:flex items-center md:pt-7  ">
          <div className="md:w-1/3 h-full flex justify-center pb-7 md:pb-0 "><h1 className='md:text-5xl text-2xl font-semibold'> MISSION</h1></div>
          <div className="md:w-2/3">

            <div class="container px-5 mx-auto flex flex-wrap">
              <div class="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">1</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-10 h-10 text-[#ff9602] bg-gray-300 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div class="flex-grow sm:pl-6 mt-2 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-900 mb-1 text-md">Shooting Stars</h2>
                    <p class="leading-relaxed text-sm">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                  </div>
                </div>
              </div>
              <div class="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">2</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-10 h-10 bg-gray-300 text-[#ff9602] rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div class="flex-grow sm:pl-6 mt-2 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-900 mb-1 text-md">The Catalyzer</h2>
                    <p class="leading-relaxed text-sm">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                  </div>
                </div>
              </div>
              <div class="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">3</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-10 h-10 bg-gray-300 text-[#ff9602] rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow sm:pl-6 mt-2 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-900 mb-1 text-md">The 400 Blows</h2>
                    <p class="leading-relaxed text-sm">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                  </div>
                </div>
              </div>
              <div class="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">4</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-10 h-10 bg-gray-300 text-[#ff9602] rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow sm:pl-6 mt-2 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-900 mb-1 text-md">Neptune</h2>
                    <p class="leading-relaxed text-sm">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container md:w-4/5 px-5 md:px-0 mx-auto pb-24">
        

        <div className="md:flex-row flex flex-col-reverse items-center justify-center ">
        <div className="md:w-2/3">

          <div class="container  mx-auto flex flex-wrap">
            <div class="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">1</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-10 h-10 text-[#ff9602] bg-gray-300 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-2 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-md">Shooting Stars</h2>
                  <p class="leading-relaxed text-sm">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
              </div>
            </div>
            <div class="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">2</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-10 h-10 bg-gray-300 text-[#ff9602] rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-2 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-md">The Catalyzer</h2>
                  <p class="leading-relaxed text-sm">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
              </div>
            </div>
            <div class="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">3</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-10 h-10 bg-gray-300 text-[#ff9602] rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-2 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-md">The 400 Blows</h2>
                  <p class="leading-relaxed text-sm">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
              </div>
            </div>
            <div class="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">4</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-10 h-10 bg-gray-300 text-[#ff9602] rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-2 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-md">Neptune</h2>
                  <p class="leading-relaxed text-sm">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
              </div>
            </div>
          </div>    

          </div>
          <div className="md:w-1/3 h-full flex justify-center  "><h1 className='md:text-5xl text-2xl  font-semibold text-center'> VISION</h1></div>
       
        </div>
      </div>
    </>
  )
}

export default MissionVission