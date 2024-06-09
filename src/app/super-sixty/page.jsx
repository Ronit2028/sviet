import React from 'react'
import Header from '@/components/SuperSixty/Header'
import Achievement from '@/components/SuperSixty/Achievement'
import Events from '@/components/SuperSixty/Events'
import Courses from '@/components/SuperSixty/Courses'
import Testimonial from '@/components/SuperSixty/Testimonial'
import SixtyAdv from '@/components/SuperSixty/SixtyAdv'
import Timeline from '@/components/SuperSixty/Timeline'
import Usps from '@/components/SuperSixty/Usps'
import Testimonials from '@/components/LandingPage/Testimonials'
import Alumini from '../../components/SuperSixty/Alumini'
const page = () => {
    return (
        <div>
            <Header />
            <Usps />
            <Courses />
            <Events />
            <SixtyAdv />
            <Achievement />
            <Timeline/>
            <Alumini/>
            <Testimonials/>
        </div>
    )
}

export default page