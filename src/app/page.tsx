"use client"

import {useState, useEffect} from 'react'

import Header from "@/components/LandingPage/Header"
import GivingWings from "@/components/LandingPage/GivingWings"
import PlacementOverview from "@/components/LandingPage/PlacementOverview"
import Unlock from "@/components/LandingPage/Unlock"
import ChartYourPath from "@/components/LandingPage/ChartYourPath"
import SVIETinMedia from "@/components/LandingPage/SVIETinMedia"
import Testimonials from "@/components/LandingPage/Testimonials"
import EventCarousel from "@/components/LandingPage/EventCarousel"
import FeaturesSection16 from '@/components/LandingPage/FeaturesSection16'
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with actual data fetching)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (

    <main>
      <Header />
      <GivingWings />
      <PlacementOverview />
      <Unlock />
      <ChartYourPath />
      <SVIETinMedia />
      <EventCarousel />
      <Testimonials />
      <FeaturesSection16 />
    </main>
  )
}
