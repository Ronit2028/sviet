import React from 'react'
import Apply from '@/components/admissions/Apply'
import Header from "@/components/admissions/Header"
import Svgoi from '@/components/admissions/Svgoi'
import Scholarship from '@/components/admissions/Scholarship'
import Unlock from '@/components/LandingPage/Unlock'
import Howapply from '../../components/admissions/Howapply'

const page = () => {
  return (
    <div>
      <Header/>
      <Apply/>
      <Scholarship/>
      <Svgoi/>
      <Unlock />
      <Howapply />
    </div>
  )
}

export default page