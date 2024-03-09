import React from 'react'
import Header from '@/components/Course/Header'
import Overview from '@/components/Course/Overview'
import Eligibility from '@/components/Course/Eligibility'
import Highlights from '@/components/Course/Highlights'
import Labs from '@/components/Course/Labs'
import PlacementOverview from '@/components/LandingPage/PlacementOverview'
import Events from "@/components/Course/Events"
const page = () => {
  return (
    <div>
        <Header/>
        <Overview/>
        <Eligibility/>
        <Highlights/>
        <Labs/>
        <PlacementOverview/>
        <Events/>
    </div>
  )
}

export default page