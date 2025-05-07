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
    "company": "STELLARAA EDUTECH",
    "date": "Confirm after registrations",
    "details": "This is information For B. tech CSE, BCA, MCA, BBA, MBA (2025 passing out Batch Students only.) that STELLARAA EDUTECH is conducting a placement drive.",
    "link": "/Stellaraa_Edutech.pdf",
  },
  {
    "company": "NowFloats",
    "date": "Confirm after registrations",
    "details": "This is information For B. tech CSE, BCA, MCA, BBA, MBA (2025 passing out Batch Students only.) & BBA, MBA(2026 Passing out) that NowFloats is conducting a placement drive.",
    "link": "/NowFloats.pdf",
  },
  {
    "company": "GMH ORGANICS",
    "date": "Confirm after registrations",
    "details": "This is information For BCA, BBA, MBA (2025 passing out Batch Students only.) that GMH ORGANICS is conducting a placement drive.",
    "link": "/GMH_Organics.pdf",
  },
  {
    "company": "Semlon Remedies",
    "date": "Confirm after registrations",
    "details": "This is information For B. pharmacy (2025 passing out Batch Students only) that Semlon Remedies Pvt. Ltd. is conducting a placement drive.",
    "link": "/Semlon_Remedies.pdf",
  },
  {
    "company": "Drishti IAS",
    "date": "Confirm after registrations",
    "details": "This is information For B. tech CSE, BCA, MCA, BBA, MBA (2025 passing out Batch Students only) that Drishti IAS is conducting a placement drive. ",
    "link": "/Drishti_IAS.pdf",
  },
  {
    "company": "Tirupati Group",
    "date": "Confirm after registrations",
    "details": "Tirupati Group is conducting a campus placement drive for B. Pharmacy 2025 batch students for the Production Trainee role. Salary: 1.71 LPA. Interview process: PI & HR Round. ",
    "link": "/Tirupati-Group-Drive.pdf",
  },
  {
    "company": "Cadila Pharmaceuticals Ltd.",
    "date": "Confirm after registrations",
    "details": "Cadila Pharmaceuticals Ltd. is conducting a campus placement drive for B. Pharmacy 2025 batch students for the Field Officer role. Salary: 2.40 LPA.",
    "link": "/Cadila-Pharmaceuticals-Drive.pdf",
  },
  {
    company: "Black Apple Technolgoies",
    date: "Confirm after registrations",
    details: "This is information for B. Tech CSE , ECE , MBA 2025 Passing out Batch Students only) that Black Apple Technolgoies is conducting a placement drive.",
    link: "/Black-Apple-Tech.pdf",
  },
  {
    company: "Kandhari beverages",
    date: "Confirm after registrations",
    details: "This is information for B. tech Civil (2025 passing out Batch Students only.) thatKandhari beverages is conducting a placement drive.",
    link: "/Kandhari.pdf",
  },
  {
    company: "Karvi Solutions",
    date: "Confirm after registrations",
    details: "This is information for B. tech CSE, ECE, MBA, BCA, MCA (2025 passing out Batch Students only.) that Karvi Solutions is conducting a placement drive.",
    link: "/Karvi-Solutions.pdf",
  },
  {
    company: "Pontika Aerotech Ltd.",
    date: "Confirm after registrations",
    details: "This is information for MBA, B. pharmacy 2025 Passing out Batch Students only. that Pontika Aerotech Ltd. is conducting a placement drive.",
    link: "/Pontika.pdf",
  },
  {
    company: "Vibcare Pharma Pvt. Ltd.",
    date: "Confirm after registrations",
    details: "This is information For B. pharmacy, BBA  2025 Passing out Batch Students only throughout Students that Vibcare Pharma Pvt. Ltd. is conducting a placement drive.",
    link: "/Vibcare.pdf",
  },
  {
    company: "Hitachi Astemo Gurugram Powertrain Systems Pvt. Ltd",
    date: "Confirm after registrations",
    details: "This is information •For Diploma ME & EE & ECE 2025 Passing out Batch Students only. throughout Students that Hitachi Astemo Gurugram Powertrain Systems Pvt. Ltd is conducting a placement drive.",
    link: "/Hitachi.pdf",
  },
  {
    company: "Bayatree Infocom",
    date: "Confirm after registrations",
    details: "This is information For B.Tech CSE (Super 60 & Non super 60), MCA 2025 Passing out Batch Students only) throughout Students that BayaTree Infocom (P) Ltd. is conducting a placement drive.",
    link: "/Bayatree.pdf",
  },
  {
    company: "Simson Softwares",
    date: "Confirm after registrations",
    details: "This is information for B. Tech CSE (Super 60 & Non super 60) (2025 batch passing out)  throughout Students that Simson Softwares Pvt. Ltd. is conducting a placement drive.",
    link: "/Simson.pdf",
  },
  {
    company: "Step2gen Technologies Pvt Ltd",
    date: "Dec 05 2024",
    details: "This is information for B. Tech CSE (Non super 60 & Super 60 only), MCA  (2025 Passing out Batch Students only) that Step2gen Technologies Pvt. Ltd is conducting a placement drive.",
    link: "/step.pdf",
  },
  {
    company: "Dentsu",
    date: "Confirm after registrations",
    details: "This is information for •	For B. Tech CSE (Uniques only) 2025 Passing out Batch Students only that Dentsu is conducting a placement drive.",
    link: "/dentasu.pdf",
  },
  {
    company: "Learning Routes Pvt. Ltd!",
    date: "Confirm after registrations",
    details: "This is information for BBA , MBA, B. tech CSE , ECE,  BCA, MCA (2025 Passing out Batch Students only) that Learning Routes Pvt. Ltd is conducting a placement drive.",
    link: "/learn.pdf",
  },
  {
    company: "Ucertify Noida",
    date: "Confirm after registrations",
    details: "This is information for B. tech CSE, MCA 2025 Passing out Batch Students only that uCertify is conducting a placement drive.",
    link: "/ucertify noida.pdf",
  },
  {
    company: "Smart Data Enterprises",
    date: "Confirm after registrations",
    details: "This is information For B.Tech CSE, MCA, MBA(HR/Marketing) (2025 Passing out Batch Students) Students that Smart Data Enterprises (I) Ltd is conducting a placement drive.",
    link: "/Smart Data Enterprises.pdf",
  },
  {
    company: "TD Arora Feed Mills",
    date: "Nov 14, 2024",
    details: "This is information for MBA and BCA 2025 passing out students that TD Arora Feed Mills is conducting a placement drive.",
    link: "/TD_Arora_Feed_Mills.pdf",
  },
  {
    company: "IDS INFOTECH LTD",
    date: "Feb 4, 2024",
    details: "This is the information for B.Pharmacy 2024 passing out students that IDS INFOTECH LTD is conducting a Placement Drive.",
    link: "#",
  },
  {
    company: "Aimil Ayouthveda ltd",
    date: "Feb 4, 2024",
    details: "This is the information for B.Pharmacy 2024 passing out students that Aimil Ayouthveda ltd is conducting a Placement Drive.",
    link: "#",
  },
  {
    company: "Ultratech",
    date: "Confirm after registrations",
    details: "Ultratech is hiring BBA, MBA 2024 & 2025 students for Vendor management and Purchase positions in Rajpura. Interview: PI Round, HR Round.",
    link: "#",
  },
  {
    company: "McKinley Rice",
    date: "Confirm after registrations",
    details: "McKinley Rice is hiring for Sales Intern, Business Development Executive, MERN Developer, and Social Media Executive roles in Noida.",
    link: "#",
  },
  {
    company: "Shinedezign Infonet Pvt Ltd",
    date: "Confirm after registration",
    details: "Shinedezign Infonet is hiring for Content Writer, SEO, QA Fresher's in Mohali. Interview: Online test, Personal Interview, HR Round.",
    link: "#",
  },
  {
    company: "Penthara Technologies",
    date: "Confirm after registrations",
    details: "Penthara Technologies is hiring for Cloud Administrator Intern, Project Management Intern, Graphic Designer Intern roles in Mohali.",
    link: "#",
  },
  {
    company: "Ellocent Labs IT Solutions Pvt. Ltd.",
    date: "Confirm after registrations",
    details: "Ellocent Labs is conducting a Placement Drive for B. Tech CSE 2024 and B. Tech CSE (Super 60) 2025 students. Job location: Mohali.",
    link: "#",
  },
  {
    company: "rtCamp",
    date: "May 20, 2024",
    details: "rtCamp is conducting a Placement Drive for B. Tech CSE, MCA, BCA, MBA (2024 & 2025). Positions: Software Engineer (Trainee), Business Development Executive, Technical Project Coordinator.",
    link: "#",
  },
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
