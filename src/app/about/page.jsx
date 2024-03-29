import React from 'react'
import Charts from '../../components/About/Charts';
import MulitilpleCharts from '../../components/About/MulitipleCharts'
import LeadingCompanies from '../../components/About/LeadingCompanies'
import CulturalDiversity from '../../components/About/CulturalDiversity'
import SvietAtGlance from '../../components/About/SvietAtGlance'
import Infra from '../../components/About/Infra'
import AboutUs from '../../components/About/AboutUs'
import ManagementDesk from '../../components/About/ManagementDesk'
import CampusExpirience from '../../components/About/CampusExpirience'
import AboutHeader from '../../components/About/AboutHeader'
import MissionVission from '../../components/About/MissionVission'

const page = () => {
  return (
    <>
    <AboutHeader/>
    <AboutUs/>
    <CampusExpirience/>
    <MissionVission/>
  <Charts/>
  {/* <MulitilpleCharts/> */}
  {/* <LeadingCompanies/> */}
  {/* <SvietAtGlance/> */}
  {/* <CulturalDiversity/> */}
  {/* < ManagementDesk/> */}
  {/* <Infra/> */}
    </>
    )
}

export default page