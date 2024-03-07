import Header from "@/components/LandingPage/Header"
import GivingWings from "@/components/LandingPage/GivingWings"
import PlacementOverview from "@/components/LandingPage/PlacementOverview"
import Unlock from "@/components/LandingPage/Unlock"
import ChartYourPath from "@/components/LandingPage/ChartYourPath"
import SVIETinMedia from "@/components/LandingPage/SVIETinMedia"
import Testimonials from "@/components/LandingPage/Testimonials"
import EventCarousel from "@/components/LandingPage/EventCarousel"
export default function Home() {
  return(
    
    <div>
      <Header/>
      <GivingWings/>
      <PlacementOverview/>
      <Unlock/>
      <ChartYourPath/>
      <SVIETinMedia/>
      <EventCarousel/>
      <Testimonials/>
    </div>
  )
}
