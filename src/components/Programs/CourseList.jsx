"use client"

import React from 'react'
import { useState } from 'react';
const CourseList = () => {
    const [categoryFilter, setCategoryFilter] = useState('');
    const [durationFilter, setDurationFilter] = useState('');

    const educationPrograms = [
        {
            category: "Engineering and Technology",
            programs: [
                { name: "M.Tech Computer Science and Engineering(CSE)", duration: "2 years", link: "example.com/mtech_cse" },
                { name: "M.Tech Electronics and Comm. Engineering(ECE)", duration: "2 years", link: "example.com/mtech_ece" },
                { name: "M.Tech Mechanical Engineering(ME)", duration: "2 years", link: "example.com/mtech_me" },
                { name: "B.Tech Computer Science and Engineering(CSE)", duration: "4 years", link: "example.com/btech_cse" },
                { name: "B.Tech Electronics and Comm. Engineering(ECE)", duration: "4 years", link: "example.com/btech_ece" },
                { name: "B.Tech Electrical Engineering(EE)", duration: "4 years", link: "example.com/btech_ee" },
                { name: "B.Tech Mechanical Engineering(ME)", duration: "4 years", link: "example.com/btech_me" },
                { name: "B.Tech Civil Engineering(CE)", duration: "4 years", link: "example.com/btech_ce" },
                { name: "Polytechnic/Diploma Computer Science and Engineering(CSE)", duration: "3 years", link: "example.com/poly_cse" },
                { name: "Polytechnic/Diploma Electrical Engineering(EE)", duration: "3 years", link: "example.com/poly_ee" },
                { name: "Polytechnic/Diploma Mechanical Engineering(ME)", duration: "3 years", link: "example.com/poly_me" },
                { name: "Polytechnic/Diploma Civil Engineering(CE)", duration: "3 years", link: "example.com/poly_ce" },
                { name: "Industrial Training Institute(ITI) WELDER", duration: "2 years", link: "example.com/iti_welder" },
                { name: "Industrial Training Institute(ITI) PLUMBER", duration: "2 years", link: "example.com/iti_plumber" },
                { name: "Industrial Training Institute(ITI) COPA", duration: "2 years", link: "example.com/iti_copa" }
            ]
        },
        {
            category: "Nursing",
            programs: [
                { name: "Diploma in Nursing", duration: "3 years", link: "example.com/diploma_nursing" },
                { name: "Pharmacy Masters in Pharmacy (M.Pharm.)", duration: "2 years", link: "example.com/mpharm" },
                { name: "Bachelor in Pharmacy(B.Pharm)", duration: "4 years", link: "example.com/bpharm" },
                { name: "Diploma in Pharmacy (D.Pharm.)", duration: "2 years", link: "example.com/dpharm" },
                { name: "Doctor of Pharmacy (Pharm. D)", duration: "6 years", link: "example.com/pharmd" }
            ]
        },
        {
            category: "Hospitality and Catering",
            programs: [
                { name: "Master of Hotel Management & Catering Technology (MHMCT)", duration: "2 years", link: "example.com/mhmct" },
                { name: "Bachelor of Hotel Management & Catering Technology (BHMCT)", duration: "4 years", link: "example.com/bhmct" },
                { name: "Bachelor of Vocation in Hotel Management (B.Voc HMCT)", duration: "3 years", link: "example.com/bvoc_hmct" },
                { name: "B.Sc Nutrition and Dietics (B.Sc N&D)", duration: "3 years", link: "example.com/bsc_nutrition" }
            ]
        },
        {
            category: "Education",
            programs: [
                { name: "Master of Education(M.Ed)", duration: "2 years", link: "example.com/med" },
                { name: "Master of Arts in Education (M.A edu)", duration: "2 years", link: "example.com/ma_edu" },
                { name: "Bachelor of Education(B.Ed)", duration: "2 years", link: "example.com/bed" },
                { name: "Bachelor of Arts(B.A)", duration: "3 years", link: "example.com/ba" }
            ]
        },
        {
            category: "Computer Application",
            programs: [
                { name: "Master of Computer Application(MCA)", duration: "3 years", link: "example.com/mca" },
                { name: "Bachelor of Computer Application(BCA)", duration: "3 years", link: "example.com/bca" },
                { name: "Post Graduation Diploma in Computer Application(PGDCA)", duration: "1 year", link: "example.com/pgdca" },
                { name: "B.Sc Information Technology (B.Sc IT)", duration: "3 years", link: "example.com/bsc_it" }
            ]
        },
        {
            category: "Law",
            programs: [
                { name: "Bachelor of Law (LLB)", duration: "3 years", link: "example.com/llb" },
                { name: "Bachelor of Arts + Bachelor of Law (BA. LL.B)", duration: "5 years", link: "example.com/ba_llb" }
            ]
        },
        {
            category: "Business Studies",
            programs: [
                { name: "Master in Business Administration(MBA)", duration: "2 years", link: "example.com/mba" },
                { name: "Bachelor in Business Administration (BBA)", duration: "3 years", link: "example.com/bba" },
                { name: "Bachelor for Commerce(B.Com)", duration: "3 years", link: "example.com/bcom" },
                { name: "Master of Commerce (M.Com)", duration: "2 years", link: "example.com/mcom" }
            ]
        },
        {
            category: "Paramedical",
            programs: [
                { name: "M.Sc-MLS-Biochemistry", duration: "2 years", link: "example.com/msc_biochemistry" },
                { name: "M.Sc-Anesthesia & Operation Theatre Technology (M.Sc Anes. & OTT)", duration: "2 years", link: "example.com/msc_anesthesia" },
                { name: "B.Sc-Radio Medical Imaging Technology (B.Sc RMIT)", duration: "3 years", link: "example.com/bsc_rmit" },
                { name: "B.Sc-Operation Theatre Technology (B.Sc OTT)", duration: "3 years", link: "example.com/bsc_ott" },
                { name: "B.Sc-Optometry", duration: "3 years", link: "example.com/bsc_optometry" },
                { name: "B.Sc-Anesthesia & Operation Technology (B.Sc Anes. & OTT)", duration: "3 years", link: "example.com/bsc_anesthesia" },
                { name: "B.Sc-Medical Lab Science (B.Sc MLS)", duration: "3 years", link: "example.com/bsc_mls" },
                { name: "Diploma in Medical Lab Technology (DMLT)", duration: "2 years", link: "example.com/dmlt" },
                { name: "B.Sc Cardiac Care Technology (B.Sc CCT)", duration: "3 years", link: "example.com/bsc_cct" },
                { name: "B.Sc Physiotherapy", duration: "4 years", link: "example.com/bsc_physiotherapy" }
            ]
        },
        {
            category: "Basic Science",
            programs: [
                { name: "M.Sc Maths", duration: "2 years", link: "example.com/msc_maths" },
                { name: "M.Sc Physics", duration: "2 years", link: "example.com/msc_physics" },
                { name: "M.Sc Chemistry", duration: "2 years", link: "example.com/msc_chemistry" },
                { name: "B.Sc Non-Medical", duration: "3 years", link: "example.com/bsc_non_medical" }
            ]
        }
    ];

    const swamiVivekanandInstitutes = [
        { name: "Swami Vivekanand Institute of Engineering and Technology (SVIET)", category: "Engineering and Technology" },
        { name: "Swami Vivekanand College of Pharmacy (SVCP)", category: "Pharmacy" },
        { name: "Swami Vivekanand Faculty of Information Technology & Business Management (SVFIT & BM)", category: "Information Technology & Business Management" },
        { name: "Swami Vivekanand Faculty of Technology and Management (SVFTM)", category: "Technology and Management" },
        { name: "Swami Vivekanand College of Education(SVCE)", category: "Education" },
        { name: "Swami Vivekanand Polytechnic college(SVPC)", category: "Polytechnic" },
        { name: "Swami Vivekanand Industrial Training Center (SVITC)", category: "Industrial Training" },
        { name: "Swami Vivekanand College of Management & Technology (SVCMT)", category: "Management & Technology" },
        { name: "Swami Vivekanand Paramedical College (SVPMC)", category: "Paramedical" },
        { name: "Swami Vivekanand College of Law", category: "Law" }
    ];



    // Filtered programs based on category and duration
    const filteredPrograms = educationPrograms.filter((program) => {
    const programDurations = program.programs.map((course) => course.duration);
    return (
      (categoryFilter === '' || program.category === categoryFilter) &&
      (durationFilter === '' || programDurations.includes(durationFilter))
    );
  });
    // Example usage:


    return (
        <div className="w-10/12 bg-white mt-auto lg:mt-[-125px] mx-auto flex flex-wrap shadow-md my-8 rounded-lg">

            <div className="hidden md:block w-full md:w-1/3 p-6 bg-[#00112d] text-white">
                <p className="text-3xl py-4 border-l-4 border-[#fea700] pl-4 mb-4">
                    Our Institutions
                </p>
                {
                    swamiVivekanandInstitutes.map(name => (
                        <p className='text-xl my-3 py-3'>
                            {name.name}
                        </p>
                    ))
                }
            </div>
            <div className="w-full md:w-2/3 p-6">
                <div className=''>

                    <div className=''>
                        <p>
                            <span className='text-[#fea700] text-lg font-medium pb-6'>
                            Filter By </span> :  <select
                                className=" appearance-none bg-white border border-gray-400 hover:border-gray-500 p-1 px-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                            >
                                <option value="" className='p-2 border-b-2 '>All Categories</option>
                                {/* Populate options with unique categories */}
                                {educationPrograms.map(program => (
                                    <option key={program.category} className='p-2 border-b-2 ' value={program.category}>{program.category}</option>
                                ))}
                            </select>
                        </p>
                        {/* <p>
                            Filter By Duration: <select
                                className="block  appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                value={durationFilter}
                                onChange={(e) => setDurationFilter(e.target.value)}
                            >
                                <option value="">All Durations</option>
                                {["2 years", "3 years", "4 years", "6 years"].map(duration => (
                                    <option key={duration} value={duration}>{duration}</option>
                                ))}


                            </select>
                        </p> */}
                    </div>
                </div>
                <div className="mt-8">
                    {filteredPrograms.map(program => (
                        <div key={program.category} className="mb-8">
                            {/* <h3 className="text-4xl mb-6">{program.category}</h3> */}
                            <ul>
                                {program.programs.map(course => (
                                    <li key={course.name} className="mb-4 py-8 border-b-2">
                                        <a href={course.link} className="text-2xl font-medium mb-2 pb-2">{course.name}</a>
                                        <div className='flex justify-between'>
                                            <p className="text-xl mt-3">
                                                Duration :  <span className='text-[#fea700]'>{course.duration}</span>
                                            </p>
                                            <button className='hover:bg-[#fea700] rounded-md w-8 h-8 flex justify-center transition items-center text-[#fea700] hover:text-white hover:rounded-full bg-gray-100'><i className='fa fa-arrow-right'></i></button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseList