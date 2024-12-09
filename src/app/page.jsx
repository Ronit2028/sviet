// "use client"

// import { useState, useEffect } from 'react'

// import Header from "@/components/LandingPage/Header"
// import GivingWings from "@/components/LandingPage/GivingWings"
// import PlacementOverview from "@/components/LandingPage/PlacementOverview"
// import Placement from '@/components/Placement/Placement';
// import Unlock from "@/components/LandingPage/Unlock"
// import ChartYourPath from "@/components/LandingPage/ChartYourPath"
// import SVIETinMedia from "@/components/LandingPage/SVIETinMedia"
// import Testimonials from "@/components/LandingPage/Testimonials"
// import EventCarousel from "@/components/LandingPage/EventCarousel"
// import FeaturesSection16 from '@/components/LandingPage/FeaturesSection16'
// import BookReleaseWidget from '@/components/Globals/BookReleaseWidget'
// import HackathonPopup from '@/components/LandingPage/HackathonPopup'
// import EducationFairPopup from '@/components/LandingPage/EducationFairPopup'

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   useEffect(() => {
//     // Simulate loading delay (you can replace this with actual data fetching)
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timeout);
//   }, []);

//   const handleEnquireClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };
//   return (

//     <main>
//      {/* <div>
//       <EducationFairPopup />
//       <HackathonPopup />
//     </div> */}
     
      
//       <div className='z-0'><Header /></div>
//       <button className='bg-[#fea700] text-white px-2 py-1 fixed end-0 top-1/2 transform -translate-y-1/2 rotate-90' onClick={handleEnquireClick}>
//         Enquire Now
//       </button>
//       {showModal && (
//         <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
//           <div className="w-4/5 lg:w-1/3 mx-auto rounded-lg p-4 z-50">
//             <button className="absolute top-0 right-0 m-2 text-black hover:text-gray-800" onClick={handleCloseModal}>
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
            
//             <BookReleaseWidget />
//           </div>
//         </div>
//       )}
//       <div className='z-30 mt-[-50px]'><GivingWings /></div>
//       {/* <PlacementOverview /> */}
//       <Placement />
//       <Unlock />
//       <ChartYourPath />
//       <SVIETinMedia />
//       <EventCarousel />
//       <Testimonials />
//       <FeaturesSection16 />
//     </main>
//   )
// }


"use client";

import { useState, useEffect } from "react";

import Header from "@/components/LandingPage/Header";
import GivingWings from "@/components/LandingPage/GivingWings";
import Placement from "@/components/Placement/Placement";
import Unlock from "@/components/LandingPage/Unlock";
import ChartYourPath from "@/components/LandingPage/ChartYourPath";
import SVIETinMedia from "@/components/LandingPage/SVIETinMedia";
import Testimonials from "@/components/LandingPage/Testimonials";
import EventCarousel from "@/components/LandingPage/EventCarousel";
import FeaturesSection16 from "@/components/LandingPage/FeaturesSection16";
import BookReleaseWidget from "@/components/Globals/BookReleaseWidget";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleEnquireClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      {/* Header Section */}
      <div className="relative z-0">
        <Header />
      </div>

      {/* Enquire Button */}
      <button
        className="bg-[#fea700] text-white px-2 py-1 fixed right-0 top-1/2 transform -translate-y-1/2 rotate-90 z-20"
        onClick={handleEnquireClick}
      >
        Enquire Now
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative w-4/5 lg:w-1/3 bg-white rounded-lg p-4 z-60">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={handleCloseModal}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <BookReleaseWidget />
          </div>
        </div>
      )}

      {/* Content Sections */}
      <div className="relative z-10">
        <GivingWings />
      </div>
      <div className="relative z-0">
        <Placement />
      </div>
      <div className="relative z-10">
        <Unlock />
      </div>
      <div className="relative z-0">
        <ChartYourPath />
      </div>
      <div className="relative z-0">
        <SVIETinMedia />
      </div>
      <div className="relative z-0">
        <EventCarousel />
      </div>
      <div className="relative z-0">
        <Testimonials />
      </div>
      <div className="relative z-0">
        <FeaturesSection16 />
      </div>
    </main>
  );
}
