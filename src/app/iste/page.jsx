import React from 'react'
import AnimatedBG from '../../components/Uniques/AnimatedBG'
import HeroSection from '../../components/iste/HeroSection'
import MissionVission from '../../components/iste/MissionVission'
import ManagementDesk from '../../components/iste/ManagementDesk'
import Department from '@/components/iste/Department'
import Cards from '../../components/Uniques/Cards'
import Fourth from '../../components/Uniques/Fourth'
import Fifth from '../../components/Uniques/Fifth'
import BigCards from '../../components/iste/BigCards'
import Gdsc from '../../components/Uniques/Gdsc'

const main = () => {
  return (
    <>
      {/* <÷HeroSection/> */}
   
      
      <HeroSection/>
      <MissionVission />
      <Department />
      < ManagementDesk />
      <BigCards/>
    {/* <Cards/>
    <Fourth/>
    <Fifth/>
    <BigCards/>
    <Gdsc/> */}
     
    </>
  )
}

export default main