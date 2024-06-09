import React from 'react';
import Header from '@/components/Course/Header';
import Overview from '@/components/Course/Overview';
import Eligibility from '@/components/Course/Eligibility';
import Highlights from '@/components/Course/Highlights';
import Labs from '@/components/Course/Labs';
import PlacementOverview from '@/components/LandingPage/PlacementOverview';
import Events from "@/components/Course/Events";

import data from '@/data/data'; // Import the data
import activities from '../../../data/activity';

import backdrop from '@/assets/Programs/backdrop.jpg';

const Page = ({ params }) => {

  const { id } = params;

  const courseData = data.find(course => course.id === parseInt(id));

  if (!courseData) {
    // Handle error if course data not found
    return <div>Error: Course not found</div>;
  }

  const { course_name, header, program_description, major_tracks, duration, program_outcomes, program_name, fees, eligibility_criteria, labs, program_highlights, affiliation, mode_of_admission, event_type } = courseData;

  return (
    <div>
      <Header
        courseName={course_name}
        title={header.title}
        subTitle={header.subtitle}
        backgroundImage={header.background_image}
      />
      <Overview
        programOverview={program_description}
        majorTracks={major_tracks}
        duration={duration}
        programName={program_name}
        fees={fees}
        eligibilityCriteria={eligibility_criteria}
      />
      <Eligibility
        eligibilityCriteria={courseData.eligibility_criteria.eligibility}
        affiliation={courseData.affiliation}
        modeOfAdmission={courseData.mode_of_admission}
        programOutcomes={program_outcomes}
      />
      <Highlights programHighlights={program_highlights} />
      {labs && <Labs labs={labs} />}
      <PlacementOverview />
      {event_type && <Events event_type={event_type} activities={activities} />}
  
    </div>
  )
}

export default Page;
