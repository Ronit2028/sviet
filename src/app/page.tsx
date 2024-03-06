import Header from "@/components/LandingPage/Header"
import GivingWings from "@/components/LandingPage/GivingWings"
import PlacementOverview from "@/components/LandingPage/PlacementOverview"
import Unlock from "@/components/LandingPage/Unlock"
import ChartYourPath from "@/components/LandingPage/ChartYourPath"
export default function Home() {
  return(
    
    <div>
      <Header/>
      <GivingWings/>
      <PlacementOverview/>
      <Unlock/>
      <ChartYourPath/>
    </div>
  )
}
