// 'use client'

// import React, { useState, useMemo } from 'react'
// import { motion } from 'framer-motion'
// import { format, parse } from 'date-fns'
// import { Search, Calendar, Building, ChevronRight } from 'lucide-react'
// import Header from '@/components/Announcement/Header'
// const placementDriveInformation = [
//   {
//     company: "Step2gen Technologies Pvt Ltd",
//     date: "Dec 05 2024",
//     details: "This is information for B. Tech CSE (Non super 60 & Super 60 only), MCA  (2025 Passing out Batch Students only) that Step2gen Technologies is conducting a placement drive.",
//     link: "/step.pdf",
//   },
//   {
//     company: "Dentsu",
//     date: "Confirm after registrations",
//     details: "This is information for •	For B. Tech CSE (Uniques only) 2025 Passing out Batch Students only that Dentsu is conducting a placement drive.",
//     link: "/dentasu.pdf",
//   },
//   {
//     company: "Learning Routes Pvt. Ltd!",
//     date: "Confirm after registrations",
//     details: "This is information for BBA , MBA, B. tech CSE , ECE,  BCA, MCA (2025 Passing out Batch Students only) that Learning Routes Pvt. Ltd is conducting a placement drive.",
//     link: "/learn.pdf",
//   },
//   {
//     company: "Ucertify Noida",
//     date: "Confirm after registrations",
//     details: "This is information for B. tech CSE, MCA 2025 Passing out Batch Students only that uCertify is conducting a placement drive.",
//     link: "/ucertify noida.pdf",
//   },
//   {
//     company: "Smart Data Enterprises",
//     date: "Confirm after registrations",
//     details: "This is information For B.Tech CSE, MCA, MBA(HR/Marketing) (2025 Passing out Batch Students) Students that Smart Data Enterprises (I) Ltd is conducting a placement drive.",
//     link: "/Smart Data Enterprises.pdf",
//   },
//   {
//     company: "TD Arora Feed Mills",
//     date: "Nov 14, 2024",
//     details: "This is information for MBA and BCA 2025 passing out students that TD Arora Feed Mills is conducting a placement drive.",
//     link: "/TD_Arora_Feed_Mills.pdf",
//   },
//   {
//     company: "IDS INFOTECH LTD",
//     date: "Feb 4, 2024",
//     details: "This is the information for B.Pharmacy 2024 passing out students that IDS INFOTECH LTD is conducting a Placement Drive.",
//     link: "#",
//   },
//   {
//     company: "Aimil Ayouthveda ltd",
//     date: "Feb 4, 2024",
//     details: "This is the information for B.Pharmacy 2024 passing out students that Aimil Ayouthveda ltd is conducting a Placement Drive.",
//     link: "#",
//   },
//   {
//     company: "Ultratech",
//     date: "Confirm after registrations",
//     details: "Ultratech is hiring BBA, MBA 2024 & 2025 students for Vendor management and Purchase positions in Rajpura. Interview: PI Round, HR Round.",
//     link: "#",
//   },
//   {
//     company: "McKinley Rice",
//     date: "Confirm after registrations",
//     details: "McKinley Rice is hiring for Sales Intern, Business Development Executive, MERN Developer, and Social Media Executive roles in Noida.",
//     link: "#",
//   },
//   {
//     company: "Shinedezign Infonet Pvt Ltd",
//     date: "Confirm after registration",
//     details: "Shinedezign Infonet is hiring for Content Writer, SEO, QA Fresher's in Mohali. Interview: Online test, Personal Interview, HR Round.",
//     link: "#",
//   },
//   {
//     company: "Penthara Technologies",
//     date: "Confirm after registrations",
//     details: "Penthara Technologies is hiring for Cloud Administrator Intern, Project Management Intern, Graphic Designer Intern roles in Mohali.",
//     link: "#",
//   },
//   {
//     company: "Ellocent Labs IT Solutions Pvt. Ltd.",
//     date: "Confirm after registrations",
//     details: "Ellocent Labs is conducting a Placement Drive for B. Tech CSE 2024 and B. Tech CSE (Super 60) 2025 students. Job location: Mohali.",
//     link: "#",
//   },
//   {
//     company: "rtCamp",
//     date: "May 20, 2024",
//     details: "rtCamp is conducting a Placement Drive for B. Tech CSE, MCA, BCA, MBA (2024 & 2025). Positions: Software Engineer (Trainee), Business Development Executive, Technical Project Coordinator.",
//     link: "#",
//   },
// ]

// const announcement = () => {
//   const [searchTerm, setSearchTerm] = useState('')

//   const sortedAnnouncements = useMemo(() => {
//     return [...placementDriveInformation].sort((a, b) => {
//       if (a.date === "Confirm after registrations" || a.date === "Confirm after registration") return 1
//       if (b.date === "Confirm after registrations" || b.date === "Confirm after registration") return -1
//       return new Date(b.date).getTime() - new Date(a.date).getTime()
//     })
//   }, [])

//   const filteredAnnouncements = useMemo(() => {
//     return sortedAnnouncements.filter(
//       (announcement) =>
//         announcement.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         announcement.details.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   }, [sortedAnnouncements, searchTerm])

//   return (
    
//     <div className="">
//         <Header />
//         <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
//         <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-7xl mx-auto"
//       >
//         <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
//           Announcements
//         </h1>
//         <div className="mb-8 relative">
//           <input
//             type="text"
//             placeholder="Search announcements..."
//             className="w-full p-4 pr-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search className="absolute right-4 top-4 text-gray-400" />
//         </div>
//         <div className="space-y-6">
//           {filteredAnnouncements.map((announcement, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-2xl font-bold text-gray-900">{announcement.company}</h2>
                 
//                 </div>
//                 <p className="text-gray-600 mb-4">{announcement.details}</p>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center text-sm text-gray-500">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     <span>{announcement.date}</span>
//                   </div>
//                   <a
//                     href={announcement.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#fea700] focus:outline-none 0"
//                   >
//                     Learn More
//                     <ChevronRight className="ml-2 -mr-1 h-4 w-4" />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//         </div>
      
//     </div>
//   )
// }

// export default announcement



'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, ChevronRight } from 'lucide-react'
import Header from '@/components/Announcement/Header'

const placementDriveInformation = [
   {
  "company": "Campus Placement Drive - Grazitti Interactive",
  "date": "09-02-2026",
  "details": "Swami Vivekanand Group of Institutes is organizing a campus placement drive for Grazitti Interactive at SVIET, Banur. The job location is Panchkula IT Park for the position of Software Developer. Eligible candidates are B.Tech (CSE/IT) 2026 passing out batch students with a minimum CGPA of 7.0 and a 2-year service agreement. The placement drive will be held on 12th February 2026 through offline mode at the company premises. The interview process includes Group Discussion, Technical Interview, and HR Final Round. Salary offered is ₹15,000 per month during 6 months of training, followed by a CTC of ₹4,00,000 – ₹5,00,000 per annum based on assessment grading. Registration is mandatory before 10-02-2026 through the provided link.",
  "link": "/Grazitti-Interactive.pdf"
},
  {
  "company": "Notice regarding Workshop on Effective Sales and Marketing Strategies for Start-ups",
  "date": "10-02-2026",
  "details": "This notice informs students of the Department of Business Administration under Swami Vivekanand Institute of Engineering & Technology that a workshop on 'Effective Sales and Marketing Strategies for Start-ups' is being organized under the aegis of IIC. The session will be delivered by Mr. Gourav Kumar Gupta, Founder & CEO, Tech CADD, on 12th February 2026 at 11:00 AM in Seminar Hall, Block-F.",
  "link": "/Notice-Workshop-Effective-Sales-Marketing-Strategies-12-02-2026.pdf"
},
  {
  "company": "Notice regarding Lift Timings for Girls' Hostel (Block I)",
  "date": "03-02-2026",
  "details": "This notice informs all residents of the Girls' Hostel (Block I) at Swami Vivekanand Group of Institutes that the lift facility may be used only during the following timings: Monday to Friday from 08:00 AM to 05:00 PM, and Saturday and Sunday from 09:00 AM to 04:00 PM. Students are directed to strictly adhere to the mentioned timings to ensure safety, smooth functioning, and proper maintenance of the lift.",
  "link": "/Notice-regarding-Lift-Timings-Girls-Hostel-03-02-2026.pdf"
},
  {
  "company": "Circular regarding Cloth Donation Camp by NSS Unit",
  "date": "02-02-2026",
  "details": "This circular informs all HODs, faculty members, staff, and students of Swami Vivekanand Group of Institutes that the NSS Unit, in collaboration with the Department of Civil Engineering, is organizing a Cloth Donation Camp on 13th February 2026 (Friday) at Village Khera Gajju, Tehsil Rajpura, starting from 10:00 AM onwards. Donated clothes can be deposited in the Cloth Donation Box placed in the Admin Block.",
  "link": "/Circular-regarding-Cloth-Donation-Camp-13-02-2026.pdf"
},
  {
    "company": "Notice regarding Workshop on Sponsored Seed Grant Proposal Writing",
    "date": "21-01-2026",
    "details": "This notice informs faculty members of Swami Vivekanand College of Pharmacy about a workshop on Sponsored Seed Grant Proposal Writing to be held on 22nd January 2026 in the Research Lab, Block F. The workshop aims to provide practical guidance on drafting competitive grant proposals and strengthening research funding capabilities.",
    "link": "/15-Notice-regarding-Workshop-on-Sponsored-Seed-Grant-Proposal-Writing.pdf"
  },
  {
    "company": "Notice regarding Republic Day Celebration",
    "date": "21-01-2026",
    "details": "This notice informs faculty and staff members that Republic Day will be celebrated on 26th January 2026 by the Department of Cultural Affairs in collaboration with the NCC Department. The celebration will take place at the playground in front of the auditorium from 09:00 AM onwards.",
    "link": "/17-Notice-regarding-republic-day-celebration.pdf"
  },
  {
    "company": "Notice regarding Workshop on Research Paper Writing and Journal Publication",
    "date": "15-01-2026",
    "details": "This notice informs faculty members that the Research Department is organizing a workshop on Research Paper Writing and Journal Publication on 17th January 2026 (Saturday) at 10:00 AM in the F Block Seminar Hall. The workshop will be led by Dr. Arpit Mehrotra and focuses on manuscript writing, journal selection, peer review process, publication ethics, and responding to reviewers.",
    "link": "/11-notice-regarding-workshop-on-Research.pdf"
  },
  {
    "company": "Notice regarding Lohri Celebration",
    "date": "08-01-2026",
    "details": "This notice informs faculty and staff members that the Lohri celebration will be organized on 13th January 2026 by the Department of Cultural Affairs in collaboration with the HR Department. The event will take place at the playground in front of the auditorium from 01:30 PM onwards.",
    "link": "/Notice-Lohri-Celebration.pdf"
  },
  {
    "company": "New Year Resolution – Director’s Message",
    "date": "01-01-2026",
    "details": "This message outlines the New Year 2026 resolutions of the Director Academics, focusing on strengthening academic quality, promoting research and innovation, ensuring transparency and discipline, encouraging faculty development, and creating an inclusive and motivating institutional environment.",
    "link": "/New-Year-Director-Resolution.pdf"
  },
  {
  "company": "Duty Roster for Examination Duty (1st Jan to 15th Jan 2026)",
  "date": "01-01-2026",
  "details": "This document contains the examination duty roster for faculty and staff members assigned to various examination centers including CSVIET Block, SVCP Block, and HP/MRS Block for the period from 1st January 2026 to 15th January 2026. The roster specifies morning and evening shifts along with designated centers for each staff member to ensure smooth conduct of examinations.",
  "link": "/Duty-Roster-from-1jan-to-15-jan-2026.pdf"
},
  {
    "company": "Notice regarding Christmas Day Celebration",
    "date": "23-12-2025",
    "details": "This notice informs faculty members, staff, and students that Christmas Day will be celebrated on 25th December 2025 in the Campus Auditorium from 12:00 PM onwards. The event is organized by the Department of International Affairs and the Department of Cultural Affairs.",
    "link": "/Notice-Christmas-Day-Celebration-2025.pdf"
  },
  {
    "company": "Notice regarding Library opening on Saturdays and Sundays",
    "date": "23-12-2025",
    "details": "This notice informs students that the Library in the Administration Block will remain open on all Saturdays and Sundays in addition to regular working days from 09:00 AM to 04:40 PM for academic use.",
    "link": "/Notice-Library-Open-on-Weekends.pdf"
  },
  {
    "company": "Office Order for deputation of Library staff on weekends",
    "date": "23-12-2025",
    "details": "This office order lists the library staff members deputed on rotational duty to ensure smooth functioning of the Library on Saturdays and Sundays along with regular working days.",
    "link": "/Office-Order-Library-Staff-Weekend-Duty.pdf"
  },
  {
    "company": "Notice regarding Christmas Day celebration",
    "date": "23-12-2025",
    "details": "This notice invites faculty members, staff, and students to participate in the Christmas Day celebration organized by the Department of International Affairs and Cultural Affairs on 25th December 2025 at 12:00 PM in the Campus Auditorium.",
    "link": "/Notice-Christmas-Day-Celebration-2025.pdf"
  },
  {
    "company": "Circular regarding academic activities of 1st year",
    "date": "As per academic schedule",
    "details": "This circular contains important information regarding the academic activities, schedules, and guidelines for 1st year students.",
    "link": "/Circular-regarding-academic-activities-of-1st-year.pdf"
  },
  {
    "company": "MST-2 Notice for Students",
    "date": "As per examination schedule",
    "details": "This notice provides instructions and important information for students appearing in MST-2 examinations.",
    "link": "/MST-2-Notice-for-Students.pdf"
  },
  {
    "company": "MST-2 Notice for Faculty",
    "date": "As per examination schedule",
    "details": "This notice contains MST-2 responsibilities, invigilation duties, and instructions for all faculty members.",
    "link": "/MST-2-Notice-for-Faculty.pdf"
  },
  {
    "company": "Registration Notice for AI Impact Summit",
    "date": "Registration open — last date mentioned inside PDF",
    "details": "This notice provides information regarding student registration for the AI Impact Summit, including eligibility and event details.",
    "link": "/AI-Impact-Summit-Registration-Notice.pdf"
  },
  {
    "company": "Genotis Pharmaceuticals Pvt Ltd",
    "date": "Confirm after registrations",
    "details": "This is information •For B. pharmacy (2025 passing out Batch Students only) that Genotis Pharmaceuticals Pvt Ltd Greater Chandigarh , Ambala is conducting a placement drive.",
    "link": "/Genotis-Pharmaceuticals.pdf",
  },
  {
    "company": "Crowne Plaza",
    "date": "Confirm after registrations",
    "details": "This is information For HM 2026 Passing out Batch Students only that Crowne Plaza Greater Noida is conducting a placement drive.",
    "link": "/Crown-Plaza.pdf",
  },
  {
    "company": "Park Plaza Ludhiana",
    "date": "Confirm after registrations",
    "details": "This is information •For HM 2026 Passing out Batch Students only. that Park Plaza Ludhiana is conducting a placement drive.",
    "link": "/Park-Plaza.pdf",
  },
  {
    "company": "Shinedezign Infonet Pvt. Ltd.",
    "date": "Confirm after registrations",
    "details": "This is information •For MBA (HR) 2025 passing out Batch Students that Shinedezign Infonet Pvt Ltd, Mohali is conducting a placement drive.",
    "link": "/Shinedezign_Infonet.pdf",
  },
  {
    "company": "Reliance Retail Ltd.",
    "date": "Confirm after registrations",
    "details": "This is information •For BBA, B.com, MBA (2025 & 2026 passing out Batch Students only). that Reliance Retail Ltd is conducting a placement drive.",
    "link": "/Reliance_Retail.pdf",
  },
  // {
  //   "company": "Higgs Healthcare",
  //   "date": "7th june 2025",
  //   "details": "This is information •For B. pharmacy (2025 passing out Batch Students only.) that Higgs Healthcare is conducting a placement drive.",
  //   "link": "/Higgs_Healthcare.pdf",
  // },
  // {
  //   "company": "STELLARAA EDUTECH",
  //   "date": "Confirm after registrations",
  //   "details": "This is information For B. tech CSE, BCA, MCA, BBA, MBA (2025 passing out Batch Students only.) that STELLARAA EDUTECH is conducting a placement drive.",
  //   "link": "/Stellaraa_Edutech.pdf",
  // },
  // {
  //   "company": "NowFloats",
  //   "date": "Confirm after registrations",
  //   "details": "This is information For B. tech CSE, BCA, MCA, BBA, MBA (2025 passing out Batch Students only.) & BBA, MBA(2026 Passing out) that NowFloats is conducting a placement drive.",
  //   "link": "/NowFloats.pdf",
  // },
  // {
  //   "company": "GMH ORGANICS",
  //   "date": "Confirm after registrations",
  //   "details": "This is information For BCA, BBA, MBA (2025 passing out Batch Students only.) that GMH ORGANICS is conducting a placement drive.",
  //   "link": "/GMH_Organics.pdf",
  // },
  // {
  //   "company": "Semlon Remedies",
  //   "date": "Confirm after registrations",
  //   "details": "This is information For B. pharmacy (2025 passing out Batch Students only) that Semlon Remedies Pvt. Ltd. is conducting a placement drive.",
  //   "link": "/Semlon_Remedies.pdf",
  // },
  // {
  //   "company": "Drishti IAS",
  //   "date": "Confirm after registrations",
  //   "details": "This is information For B. tech CSE, BCA, MCA, BBA, MBA (2025 passing out Batch Students only) that Drishti IAS is conducting a placement drive. ",
  //   "link": "/Drishti_IAS.pdf",
  // },
  // {
  //   "company": "Tirupati Group",
  //   "date": "Confirm after registrations",
  //   "details": "Tirupati Group is conducting a campus placement drive for B. Pharmacy 2025 batch students for the Production Trainee role. Salary: 1.71 LPA. Interview process: PI & HR Round. ",
  //   "link": "/Tirupati-Group-Drive.pdf",
  // },
  // {
  //   "company": "Cadila Pharmaceuticals Ltd.",
  //   "date": "Confirm after registrations",
  //   "details": "Cadila Pharmaceuticals Ltd. is conducting a campus placement drive for B. Pharmacy 2025 batch students for the Field Officer role. Salary: 2.40 LPA.",
  //   "link": "/Cadila-Pharmaceuticals-Drive.pdf",
  // },
  // {
  //   company: "Black Apple Technolgoies",
  //   date: "Confirm after registrations",
  //   details: "This is information for B. Tech CSE , ECE , MBA 2025 Passing out Batch Students only) that Black Apple Technolgoies is conducting a placement drive.",
  //   link: "/Black-Apple-Tech.pdf",
  // },
  // {
  //   company: "Kandhari beverages",
  //   date: "Confirm after registrations",
  //   details: "This is information for B. tech Civil (2025 passing out Batch Students only.) thatKandhari beverages is conducting a placement drive.",
  //   link: "/Kandhari.pdf",
  // },
  // {
  //   company: "Karvi Solutions",
  //   date: "Confirm after registrations",
  //   details: "This is information for B. tech CSE, ECE, MBA, BCA, MCA (2025 passing out Batch Students only.) that Karvi Solutions is conducting a placement drive.",
  //   link: "/Karvi-Solutions.pdf",
  // },
  // {
  //   company: "Pontika Aerotech Ltd.",
  //   date: "Confirm after registrations",
  //   details: "This is information for MBA, B. pharmacy 2025 Passing out Batch Students only. that Pontika Aerotech Ltd. is conducting a placement drive.",
  //   link: "/Pontika.pdf",
  // },
  // {
  //   company: "Vibcare Pharma Pvt. Ltd.",
  //   date: "Confirm after registrations",
  //   details: "This is information For B. pharmacy, BBA  2025 Passing out Batch Students only throughout Students that Vibcare Pharma Pvt. Ltd. is conducting a placement drive.",
  //   link: "/Vibcare.pdf",
  // },
  // {
  //   company: "Hitachi Astemo Gurugram Powertrain Systems Pvt. Ltd",
  //   date: "Confirm after registrations",
  //   details: "This is information •For Diploma ME & EE & ECE 2025 Passing out Batch Students only. throughout Students that Hitachi Astemo Gurugram Powertrain Systems Pvt. Ltd is conducting a placement drive.",
  //   link: "/Hitachi.pdf",
  // },
  // {
  //   company: "Bayatree Infocom",
  //   date: "Confirm after registrations",
  //   details: "This is information For B.Tech CSE (Super 60 & Non super 60), MCA 2025 Passing out Batch Students only) throughout Students that BayaTree Infocom (P) Ltd. is conducting a placement drive.",
  //   link: "/Bayatree.pdf",
  // },
  // {
  //   company: "Simson Softwares",
  //   date: "Confirm after registrations",
  //   details: "This is information for B. Tech CSE (Super 60 & Non super 60) (2025 batch passing out)  throughout Students that Simson Softwares Pvt. Ltd. is conducting a placement drive.",
  //   link: "/Simson.pdf",
  // },
  // {
  //   company: "Step2gen Technologies Pvt Ltd",
  //   date: "Dec 05 2024",
  //   details: "This is information for B. Tech CSE (Non super 60 & Super 60 only), MCA  (2025 Passing out Batch Students only) that Step2gen Technologies Pvt. Ltd is conducting a placement drive.",
  //   link: "/step.pdf",
  // },
  // {
  //   company: "Dentsu",
  //   date: "Confirm after registrations",
  //   details: "This is information for •	For B. Tech CSE (Uniques only) 2025 Passing out Batch Students only that Dentsu is conducting a placement drive.",
  //   link: "/dentasu.pdf",
  // },
  // {
  //   company: "Learning Routes Pvt. Ltd!",
  //   date: "Confirm after registrations",
  //   details: "This is information for BBA , MBA, B. tech CSE , ECE,  BCA, MCA (2025 Passing out Batch Students only) that Learning Routes Pvt. Ltd is conducting a placement drive.",
  //   link: "/learn.pdf",
  // },
  // {
  //   company: "Ucertify Noida",
  //   date: "Confirm after registrations",
  //   details: "This is information for B. tech CSE, MCA 2025 Passing out Batch Students only that uCertify is conducting a placement drive.",
  //   link: "/ucertify noida.pdf",
  // },
  // {
  //   company: "Smart Data Enterprises",
  //   date: "Confirm after registrations",
  //   details: "This is information For B.Tech CSE, MCA, MBA(HR/Marketing) (2025 Passing out Batch Students) Students that Smart Data Enterprises (I) Ltd is conducting a placement drive.",
  //   link: "/Smart Data Enterprises.pdf",
  // },
  // {
  //   company: "TD Arora Feed Mills",
  //   date: "Nov 14, 2024",
  //   details: "This is information for MBA and BCA 2025 passing out students that TD Arora Feed Mills is conducting a placement drive.",
  //   link: "/TD_Arora_Feed_Mills.pdf",
  // },
  // {
  //   company: "IDS INFOTECH LTD",
  //   date: "Feb 4, 2024",
  //   details: "This is the information for B.Pharmacy 2024 passing out students that IDS INFOTECH LTD is conducting a Placement Drive.",
  //   link: "#",
  // },
  // {
  //   company: "Aimil Ayouthveda ltd",
  //   date: "Feb 4, 2024",
  //   details: "This is the information for B.Pharmacy 2024 passing out students that Aimil Ayouthveda ltd is conducting a Placement Drive.",
  //   link: "#",
  // },
  // {
  //   company: "Ultratech",
  //   date: "Confirm after registrations",
  //   details: "Ultratech is hiring BBA, MBA 2024 & 2025 students for Vendor management and Purchase positions in Rajpura. Interview: PI Round, HR Round.",
  //   link: "#",
  // },
  // {
  //   company: "McKinley Rice",
  //   date: "Confirm after registrations",
  //   details: "McKinley Rice is hiring for Sales Intern, Business Development Executive, MERN Developer, and Social Media Executive roles in Noida.",
  //   link: "#",
  // },
  // {
  //   company: "Shinedezign Infonet Pvt Ltd",
  //   date: "Confirm after registration",
  //   details: "Shinedezign Infonet is hiring for Content Writer, SEO, QA Fresher's in Mohali. Interview: Online test, Personal Interview, HR Round.",
  //   link: "#",
  // },
  // {
  //   company: "Penthara Technologies",
  //   date: "Confirm after registrations",
  //   details: "Penthara Technologies is hiring for Cloud Administrator Intern, Project Management Intern, Graphic Designer Intern roles in Mohali.",
  //   link: "#",
  // },
  // {
  //   company: "Ellocent Labs IT Solutions Pvt. Ltd.",
  //   date: "Confirm after registrations",
  //   details: "Ellocent Labs is conducting a Placement Drive for B. Tech CSE 2024 and B. Tech CSE (Super 60) 2025 students. Job location: Mohali.",
  //   link: "#",
  // },
  // {
  //   company: "rtCamp",
  //   date: "May 20, 2024",
  //   details: "rtCamp is conducting a Placement Drive for B. Tech CSE, MCA, BCA, MBA (2024 & 2025). Positions: Software Engineer (Trainee), Business Development Executive, Technical Project Coordinator.",
  //   link: "#",
  // },
]


const Announcement = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const sortedAnnouncements = useMemo(() => {
    return [...placementDriveInformation].sort((a, b) => {
      if (a.date === "Confirm after registrations" || a.date === "Confirm after registration") return 1
      if (b.date === "Confirm after registrations" || b.date === "Confirm after registration") return 1
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  }, [])

  const filteredAnnouncements = useMemo(() => {
    return sortedAnnouncements.filter(
      (announcement) =>
        announcement.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        announcement.details.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [sortedAnnouncements, searchTerm])

  return (
    <div className="">
      <Header />
      <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
            Announcements
          </h1>
          <div className="mb-8 relative">
            <input
              type="text"
              placeholder="Search announcements..."
              className="w-full p-4 pr-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-4 top-4 text-gray-400" />
          </div>
          <div className="space-y-6">
            {filteredAnnouncements.map((announcement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{announcement.company}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{announcement.details}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{announcement.date}</span>
                    </div>
                    <a
                      href={announcement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#fea700] focus:outline-none"
                    >
                      Learn More
                      <ChevronRight className="ml-2 -mr-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Announcement
