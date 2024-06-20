import React from 'react'
import Header from '@/components/International/Header'
import StudentSpeak from '@/components/International/StudentSpeak'
import PlacementOverview from '@/components/LandingPage/PlacementOverview'
import WhyChooseUs from '@/components/International/WhyChooseUs'
import AboutDepartment from '@/components/International/AboutDepartment'
import Activities from '@/components/International/Activities'
import Director from '@/components/International/Director'
import Updates from '@/components/International/Updates'
import Help from '@/components/International/Help'
import StudentsSpeak  from '../../components/International/StudentSpeak'

const page = () => {
  return (
    <div>
      <Header />
      <AboutDepartment />
      {/* <StudentSpeak /> */}
      <WhyChooseUs />
      <Help />
      <Activities />
      <Director />
      {/* <Updates /> */}
      <StudentsSpeak/>

    </div>
  )
}

export default page