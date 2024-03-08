import React from 'react'
import Header from '@/components/Course/Header'
import Overview from '@/components/Course/Overview'
import Eligibility from '@/components/Course/Eligibility'
import Highlights from '@/components/Course/Highlights'
const page = () => {
  return (
    <div>
        <Header/>
        <Overview/>
        <Eligibility/>
        <Highlights/>
    </div>
  )
}

export default page