"use client"

import { useState, useEffect } from 'react'

import Header from "@/components/LandingPage/Header"
import GivingWings from "@/components/LandingPage/GivingWings"
import PlacementOverview from "@/components/LandingPage/PlacementOverview"
import Placement from '@/components/Placement/Placement';
import Unlock from "@/components/LandingPage/Unlock"
import ChartYourPath from "@/components/LandingPage/ChartYourPath"
import SVIETinMedia from "@/components/LandingPage/SVIETinMedia"
import Testimonials from "@/components/LandingPage/Testimonials"
import EventCarousel from "@/components/LandingPage/EventCarousel"
import FeaturesSection16 from '@/components/LandingPage/FeaturesSection16'
import BookReleaseWidget from '@/components/Globals/BookReleaseWidget'
import HackathonPopup from '@/components/LandingPage/HackathonPopup'
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // Simulate loading delay (you can replace this with actual data fetching)
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
    
      <HackathonPopup/>
     
      
      <Header />
      <button className='bg-[#fea700] text-white px-2 py-1 fixed end-0 top-1/2 transform -translate-y-1/2 rotate-90' onClick={handleEnquireClick}>
        Enquire Now
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-4/5 lg:w-1/3 mx-auto rounded-lg p-4 z-50">
            <button className="absolute top-0 right-0 m-2 text-black hover:text-gray-800" onClick={handleCloseModal}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <BookReleaseWidget />
          </div>
        </div>
      )}
      <GivingWings />
      {/* <PlacementOverview /> */}
      <Placement />
      <Unlock />
      <ChartYourPath />
      <SVIETinMedia />
      <EventCarousel />
      <Testimonials />
      <FeaturesSection16 />
    </main>
  )
}
