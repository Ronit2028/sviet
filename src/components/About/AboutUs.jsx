import React from 'react'
import Image from 'next/image';
import img1 from '../../assets/LandingPage/bannerImage.jpg';


const AboutUs = () => {
  return (

    <section className="bg-white w-10/12 mx-auto flex">
      <div className="items-center py-8 mx-auto gap-10 lg:grid lg:grid-cols-2 lg:py-28">
        <div className="font-light  text-gray-900 sm:text-lg ">
          <p className="text-4xl pb-3 mb-3 font-semibold">
            <span className="text-[#fea700]">
              About  </span>
            <br />
            The SVGOI
          </p>

          <p className="max-w-xl mb-4 text-sm md:text-lg text-justify">A state-of-the-art campus situated 30 km from Chandigarh on the NH-1 Chandigarh-Patiala National Highway. The sprawling campus of the SVGOI is equidistant from Chandigarh, Mohali, Panchkula, Ambala, and Patiala. SVGOI has a mission to build leaders through holistic, transformative, and innovative education. </p>
          <p className=" max-w-xl text-sm md:text-lg text-justify">For this purpose, a healthy number of international and national students from diverse regions like Egypt, Nepal, Assam, Nagaland, Jharkhand, Delhi-NCR, Himachal Area (Upper and Lower), Uttrakhand, Chandigarh, Panchkula, Mohali, U.P., and other localities are regularly studying at the campus, adding to the cultural diversity found on campus.</p>
        </div>
        <div className="relative">
          <Image className="w-full rounded-lg" src={img1} alt="office content 1" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Our Beautiful Campus</h3>
                <p>Where innovation meets tradition</p>
              </div>
          {/* <Image className="mt-4 w-20  h-20 lg:-mt-40 rounded-lg" src={img2} alt="office content 2"/> */}
        </div>
      </div>
    </section>

  )
}

export default AboutUs

// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { ChevronRight } from 'lucide-react'
// import img1 from '../../assets/LandingPage/bannerImage.jpg';

// const AboutUs = () => {


//   return (
//     <section className="w-10/12 mx-auto bg-gradient-to-br from-white to-yellow-50 py-16 lg:py-24">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           className="flex flex-col lg:flex-row items-center gap-12"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="lg:w-1/2 space-y-6">
//             <motion.h2 
//               className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               About <span className="text-[#fea700]">The SVGOI</span>
//             </motion.h2>
//             <motion.p 
//               className="text-lg text-gray-600 leading-relaxed"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               A state-of-the-art campus situated 30 km from Chandigarh on the NH-1 Chandigarh-Patiala National Highway. The sprawling campus of the SVGOI is equidistant from Chandigarh, Mohali, Panchkula, Ambala, and Patiala.
//             </motion.p>
//             <motion.p 
//               className="text-lg text-gray-600 leading-relaxed"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               SVGOI has a mission to build leaders through holistic, transformative, and innovative education. Our diverse student body includes international and national students from regions like Egypt, Nepal, Assam, Nagaland, Jharkhand, Delhi-NCR, Himachal Area, Uttrakhand, Chandigarh, Panchkula, Mohali, U.P., and beyond.
//             </motion.p>
//             <motion.button 
//               className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#fea700] hover:bg-[#e69600] transition-colors duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               Learn More <ChevronRight className="ml-2 h-5 w-5" />
//             </motion.button>
//           </div>
//           <motion.div 
//             className="lg:w-1/2 relative"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            
//               <Image
//                 src={img1}
//                 alt="SVGOI Campus"
//                 layout="fill"
//                 objectFit="cover"
//                 className=" w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//               <div className="absolute bottom-4 left-4 text-white">
//                 <h3 className="text-2xl font-bold">Our Beautiful Campus</h3>
//                 <p>Where innovation meets tradition</p>
//               </div>
//             </div>
//             <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#fea700] rounded-full opacity-20 blur-2xl"></div>
//             <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
//           </motion.div>
//         </motion.div>


//       </div>
//     </section>
//   )
// }

// export default AboutUs

