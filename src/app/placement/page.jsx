import React from 'react'
import Gallery from '@/components/Placement/Gallery'
import Header from '@/components/Placement/Header'
import Overview from '@/components/Placement/Overview'
import PlacementOverview from '@/components/LandingPage/PlacementOverview'
import Department from '@/components/Placement/Department'
import VisionMission from '@/components/Placement/VisionMission'
import Tracker from '@/components/Placement/Tracker'
import EventCarousel from '@/components/LandingPage/EventCarousel'
import IndustrailExposure from "@/components/Placement/IndustrialExposure"
import Testimonials from '@/components/LandingPage/Testimonials'
import MulitilpleCharts from '../../components/About/MulitipleCharts'
import PlacementDriveCarousel from '@/components/Placement/PlacementDriveCarousel'
import Charts from '../../components/About/Charts';
const page = () => {
  return (
    <div>
      <Header />
      <Overview />
      <PlacementOverview />
      <Department />
      <VisionMission />
      {/* <EventCarousel /> */}
      <Charts />
     <MulitilpleCharts/>
     <PlacementDriveCarousel/>
      <IndustrailExposure/>
      <Gallery/>
      <Testimonials/>
    </div>
  )
}

export default page