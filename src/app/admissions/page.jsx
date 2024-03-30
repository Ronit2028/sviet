import React from 'react'
import Apply from '@/components/admissions/Apply'
import Header from "@/components/admissions/Header"
import Overview from '@/components/admissions/Overview'
import Scholarship from '@/components/admissions/Scholarship'
import Unlock from '@/components/LandingPage/Unlock'
import Courses from '@/components/admissions/Courses'
import ApplicationProcess from '@/components/admissions/ApplicationProcess'
import ChartYourPath from '@/components/LandingPage/ChartYourPath'

const page = () => {
  return (
    <div>
      <Header/>
      <Overview/>
      <ApplicationProcess/>
      <Courses/>
      <Unlock/>
      <ChartYourPath/>
    </div>
  )
}

export default page