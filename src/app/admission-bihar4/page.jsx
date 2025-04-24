import React from 'react'
import Apply from '@/components/admissions/Apply'
import Header from "@/components/admission-bihar4/Header"
import Overview from '@/components/admissions/Overview'
import Scholarship from '@/components/admissions/Scholarship'
import Unlock from '@/components/LandingPage/Unlock'
import Courses from '@/components/admissions/Courses'
import ApplicationProcess from '@/components/admissions/ApplicationProcess'
import ChartYourPath from '@/components/LandingPage/ChartYourPath'
import SvietAdmissionsGuidelines from '@/components/admissions/SvietAdmissionsGuidelines'
import TestimonialSection16 from '@/components/LandingPage/Testimonials'
const page = () => {
  return (
    <div>
      <Header/>
      <Overview/>
      <ApplicationProcess/>
      <Courses/>
      <Unlock/>
      <ChartYourPath/>
      <SvietAdmissionsGuidelines/>
      <Scholarship/>
      <TestimonialSection16/>
    </div>
  )
}

export default page