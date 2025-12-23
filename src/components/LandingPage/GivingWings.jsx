// "use client"

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
// import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

// import project from '@/assets/LandingPage/Chandigarh/GivingWings/ProjectBased.jpg'
// import research from '@/assets/LandingPage/Chandigarh/GivingWings/Research.jpg'
// import startup from '@/assets/LandingPage/Chandigarh/GivingWings/startup.jpg'
// import initiative from '@/assets/LandingPage/Chandigarh/GivingWings/init.jpg'
// import sporting from '@/assets/LandingPage/sports.webp'
// import international from '@/assets/LandingPage/Chandigarh/GivingWings/international.webp'
// import bannerImage from '@/assets/LandingPage/Chandigarh/GivingWings/banner.jpg'
// const GivingWings = () => {
//     const collegeInformation = [
//         {
//             category: "Research",
//             img: research.src,
//             description: "Students lead research with state-of-the-art facilities. Over 100 articles published nationally and internationally."
//         },
//         {
//             category: "Project-Based Learning",
//             img: project.src,
//             description: "Engage in authentic challenges with project-based learning, fostering practical skills."
//         },
//         {
//             category: "Sporting Excellence",
//             img: sporting.src,
//             description: "Excel in sports with over 30 tournament participations annually, fostering passion and skill."
//         },
//         {
//             category: "Startups",
//             img: startup.src,
//             description: "Incubate innovative entrepreneurship with more than 15 successful startups launched at SVGOI."
//         },
//         {
//             category: "Global Exposure",
//             img: international.src,
//             description: "Expand horizons with international tie-ups, hosting students from over 10 countries."
//         },
//         {
//             category: "Special Initiatives",
//             img: initiative.src,
//             description: "Special batches like TheUniques, SUPER-60 and ALLIED-30 assure 100% placement for students."
//         }
//     ];

//     const placementDriveInformation = [
//         {
//             "company": "Ucertify Noida",
//             "date": "Confirm after registrations",
//             "details": "This is information for B. tech CSE, MCA 2025 Passing out Batch Students only that uCertify is conducting a placement drive.",
//             "link":"/ucertify noida.pdf"
//           },
//           {
//             "company": "Smart Data Enterprises",
//             "date": "Confirm after registrations",
//             "details": "This is information For B.Tech CSE, MCA, MBA(HR/Marketing) (2025 Passing out Batch Students) Students that Smart Data Enterprises (I) Ltd is conducting a placement drive.",
//             "link":"/Smart Data Enterprises.pdf"
//           },
//         {
//             "company": "TD Arora Feed Mills",
//             "date": "Nov 14, 2024",
//             "details": "This is information for MBA and BCA 2025 passing out students that TD Arora Feed Mills is conducting a placement drive.",
//             "link":"/TD_Arora_Feed_Mills.pdf"
//           },

//         {
//             "company": "IDS INFOTECH LTD",
//             "date": "Feb 4, 2024",
//             "details": "This is the information for B.Pharmacy 2024 passing out students that IDS INFOTECH LTD is conducting a Placement Drive.  "
//             //Date of placement drive is 7th Feb. 2024 at SVIET Campus. All the eligible students can register themselves up to 29.01.2024.
//         },
//         {
//             "company": "Aimil Ayouthveda ltd",
//             "date": "Feb 4, 2024",
//             "details": "This is the information for B.Pharmacy 2024 passing out students that Aimil Ayouthveda ltd is conducting a Placement Drive."
//             // Date of placement drive is 8th Feb. 2024 at SVIET Campus.
//         },
//         {
//             "company": "Ultratech",
//             "date": "Confirm after registrations",
//             "details": "Ultratech is hiring BBA, MBA 2024 & 2025 students for Vendor management and Purchase positions in Rajpura. Interview: PI Round, HR Round."
//             // Salary: 20k/month. Register by 6th May 2024. Offline mode.
//         },
//         {
//             "company": "McKinley Rice",
//             "date": "Confirm after registrations",
//             "details": "McKinley Rice is hiring for Sales Intern, Business Development Executive, MERN Developer, and Social Media Executive roles in Noida. "
//             //Interview: Preliminary Assessment, Core Assessment, HR Round. Salary: 6 LPA. Register by 31st May 2024. Online mode.
//         },
//         {
//             "company": "Shinedezign Infonet Pvt Ltd",
//             "date": "Confirm after registration",
//             "details": "Shinedezign Infonet is hiring for Content Writer, SEO, QA Fresher’s in Mohali. Interview: Online test, Personal Interview, HR Round. "
//             //Salary: Stipend 6 months: 10k/month, then up to 20-35k gross. Register by 3rd June 2024. Online mode.
//         },
//         {
//             "company": "Penthara Technologies",
//             "date": "Confirm after registrations",
//             "details": "Penthara Technologies is hiring for Cloud Administrator Intern, Project Management Intern, Graphic Designer Intern roles in Mohali. "
//             //Interview: Online test, PI Round. Salary: 15k to 25k/month during internship, then 4 LPA to 6.6 LPA. Register by 4th June 2024. Online mode.
//         },
//         {
//             "company": "Ellocent Labs IT Solutions Pvt. Ltd.",
//             "date": "Confirm after registrations",
//             "details": "Ellocent Labs is conducting a Placement Drive for B. Tech CSE 2024 and B. Tech CSE (Super 60) 2025 students. Job location: Mohali. "
//             //Positions: Web Developer, Business Development Executive, Content Writers. Interview: Written Test, One to One Interview. Salary: Up to 15k/month during 3-month training, then up to 3 LPA. Register by 5th May 2024. Offline mode. 18-month bond required.
//         },
//         {
//             "company": "rtCamp",
//             "date": "20th May 2024 onwards",
//             "details": "rtCamp is conducting a Placement Drive for B. Tech CSE, MCA, BCA, MBA (2024 & 2025). Positions: Software Engineer (Trainee), Business Development Executive, Technical Project Coordinator. "
//             //Job: Work from home. Salary: 50k/month for 6 months, then 12-18 LPA. Register by 4th May 2024. Perks: MacBook, health insurance, work from anywhere. Selection: Quiz, Assignment, Interview.
//         }
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true, // Add this line
//         autoplaySpeed: 3000, // Add this line (speed in milliseconds)
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1
//                 }
//             }
//         ]
//     };

//     const settings2 = {
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         autoplay: true, // Add this line
//         autoplaySpeed: 3000, // Add this line (speed in milliseconds)
//         arrows : false,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <div className='py-8 lg:py-8 h-auto lg:h-[120vh] flex items-center bg-gray-100'>
//             <div className='w-10/12 mx-auto'>
//                 <div className='mt-7'>
//                     <Typography
//                         color="blue-gray"
//                         className="mb-2 font-bold uppercase"

//                     >

//                     </Typography>
//                     <Typography
//                         color="blue-gray"
//                         className="mb-4 !text-2xl font-bold lg:!text-4xl"

//                     >
//                         Giving Wings To Your career
//                     </Typography>
//                     <Typography
//                         variant="lead"
//                         className=" !text-gray-500"

//                     >
//                         A Place Where We Nuture, Grow, Explore & Learn from The Best
//                     </Typography>
//                 </div>
//                 <div className='flex flex-wrap my-6 py-6 '>
//                     <div className="w-full md:w-1/2 lg:w-2/3 md:pr-5">
//                         <Slider {...settings}>
//                             {collegeInformation.map((info, index) => (
//                                 <div key={index} className='h-full'>
//                                     <div className="border rounded-md h-[50vh] " style={{ backgroundImage: `url(${info.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
//                                         <div className="w-full h-full bg-[#00000048] flex flex-col justify-between text-white p-5 ">
//                                             <h2 className="text-xl font-semibold">{info.category}</h2>
//                                             <p className="mt-2 text-lg font-semibold ">{info.description}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                     <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
//                         <div className="w-full grid grid-cols-2 gap-5 lg:pt-0 pt-12">
//                             <div className='bg-white rounded-md p-5 shadow-md flex flex-col justify-center'>

//                                 <p className=" text-4xl mb-3 font-semibold">
//                                     3,000
//                                 </p>

//                                 <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
//                                     Offer Letters
//                                 </p>
//                                 <p className="font-medium mb-3 text-sm">
//                                     Every Year
//                                 </p>
//                             </div>
//                             <div className='bg-[#fea700] text-white rounded-md p-5 shadow-md flex flex-col justify-center'>
//                                 <p className=" text-4xl mb-3 font-semibold">
//                                     50 LPA
//                                 </p>
//                                 <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
//                                     Highest Package
//                                 </p>
//                                 <p className="font-medium mb-3 text-sm">
//                                     Offered
//                                 </p>
//                             </div>
//                             <div className=' bg-[#fea700] text-white rounded-md p-5 shadow-md flex flex-col justify-center'>
//                                 <p className=" text-4xl mb-3 font-semibold">
//                                     350
//                                 </p>
//                                 <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
//                                     Companies
//                                 </p>
//                                 <p className="font-medium mb-3 text-sm">
//                                     Visit Per year
//                                 </p>
//                             </div>
//                             <div className='bg-white rounded-md p-5  shadow-md flex flex-col justify-center'>
//                                 <p className=" text-4xl mb-3 font-semibold">
//                                     12000
//                                 </p>
//                                 <p className="  text-lg font-medium py-1 w-fit mb-2 rounded-sm">
//                                     Dreams
//                                 </p>
//                                 <p className="font-medium mb-3 text-sm">
//                                     Fulfilled
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-wrap py-6">
//                     <div className="w-full md:w-1/2 text-white" style={{ backgroundImage: `url(${bannerImage.src})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
//                         <div className=' p-6 py-10 rounded-md flex flex-col justify-center w-full h-full bg-[#00112d91]'>
//                             <p className='text-lg lg:text-2xl font-semibold mb-3'>
//                             Latest Updates & Announcements from SVGOI

//                             </p>
//                             <p className='text-sm lg:text-lg'>
//                             Stay Updated on Admissions, Campus Events, Career Openings, and Exciting Placement Drives to Shape Your Future!
//                             </p>
//                         </div>
//                     </div>
//                     {/* <div className="w-full md:w-1/2">
//                         <Slider {...settings2}>
//                             {placementDriveInformation.map((info, index) => (
//                                 <div key={index} className='lg:px-2 lg:mt-0 mt-6 h-full'>
//                                     <div className="p-5 rounded-md flex flex-col h-[25vh] justify-between bg-white">
//                                         <div className=''>
//                                             <h2 className="text-xl font-semibold">{info.company}</h2>
//                                             <p className='text-sm font-medium pt-3'>{info.date}</p>
//                                             <p className="mt-2 text-xs text-justify " >{info.details}</p>
//                                         </div>
//                                         <div>
//                                             <button className=' text-[#fea700] font-medium rounded-sm flex items-center gap-1'>Know More <ChevronDoubleRightIcon className='h-4 w-4 font-bold' /></button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div> */}
//                     <div className="w-full md:w-1/2">
//   <Slider {...settings2}>
//     {placementDriveInformation.map((info, index) => (
//       <div key={index} className="lg:px-2 lg:mt-0 mt-6 h-full">
//         <div className="p-5 rounded-md flex flex-col h-[25vh] justify-between bg-white">
//           <div>
//             <h2 className="text-xl font-semibold">{info.company}</h2>
//             <p className="text-sm font-medium pt-3">{info.date}</p>
//             <p className="mt-2 text-xs text-justify">{info.details}</p>
//           </div>
//           <div>
//             <a
//               href={info.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#fea700] font-medium rounded-sm flex items-center gap-1 cursor-pointer"
//             >
//               Know More <ChevronDoubleRightIcon className="h-4 w-4 font-bold" />
//             </a>
//           </div>
//         </div>
//       </div>
//     ))}
//   </Slider>
// </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default GivingWings;

// "use client";

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CountUp from 'react-countup';
// import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
// import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

// import project from "@/assets/LandingPage/Chandigarh/GivingWings/ProjectBased.jpg";
// import research from "@/assets/LandingPage/Chandigarh/GivingWings/Research.jpg";
// import startup from "@/assets/LandingPage/Chandigarh/GivingWings/startup.jpg";
// import initiative from "@/assets/LandingPage/Chandigarh/GivingWings/init.jpg";
// import sporting from "@/assets/LandingPage/sports.webp";
// import international from "@/assets/LandingPage/Chandigarh/GivingWings/international.webp";
// import bannerImage from "@/assets/LandingPage/Chandigarh/GivingWings/banner.jpg";
// const GivingWings = () => {
//   const collegeInformation = [
//     {
//       category: "Research",
//       img: research.src,
//       description:
//         "Students lead research with state-of-the-art facilities. Over 100 articles published nationally and internationally.",
//     },
//     {
//       category: "Project-Based Learning",
//       img: project.src,
//       description:
//         "Engage in authentic challenges with project-based learning, fostering practical skills.",
//     },
//     {
//       category: "Sporting Excellence",
//       img: sporting.src,
//       description:
//         "Excel in sports with over 30 tournament participations annually, fostering passion and skill.",
//     },
//     {
//       category: "Startups",
//       img: startup.src,
//       description:
//         "Incubate innovative entrepreneurship with more than 15 successful startups launched at SVGOI.",
//     },
//     {
//       category: "Global Exposure",
//       img: international.src,
//       description:
//         "Expand horizons with international tie-ups, hosting students from over 10 countries.",
//     },
//     {
//       category: "Special Initiatives",
//       img: initiative.src,
//       description:
//         "Special batches like TheUniques, SUPER-60 and ALLIED-30 assure 100% placement for students.",
//     },
//   ];

//   const placementDriveInformation = [
//     {
//       company: "Ucertify Noida",
//       date: "Confirm after registrations",
//       details:
//         "This is information for B. tech CSE, MCA 2025 Passing out Batch Students only that uCertify is conducting a placement drive.",
//       link: "/ucertify noida.pdf",
//     },
//     {
//       company: "Smart Data Enterprises",
//       date: "Confirm after registrations",
//       details:
//         "This is information For B.Tech CSE, MCA, MBA(HR/Marketing) (2025 Passing out Batch Students) Students that Smart Data Enterprises (I) Ltd is conducting a placement drive.",
//       link: "/Smart Data Enterprises.pdf",
//     },
//     {
//       company: "TD Arora Feed Mills",
//       date: "Nov 14, 2024",
//       details:
//         "This is information for MBA and BCA 2025 passing out students that TD Arora Feed Mills is conducting a placement drive.",
//       link: "/TD_Arora_Feed_Mills.pdf",
//     },

//     {
//       company: "IDS INFOTECH LTD",
//       date: "Feb 4, 2024",
//       details:
//         "This is the information for B.Pharmacy 2024 passing out students that IDS INFOTECH LTD is conducting a Placement Drive.  ",
//       //Date of placement drive is 7th Feb. 2024 at SVIET Campus. All the eligible students can register themselves up to 29.01.2024.
//     },
//     {
//       company: "Aimil Ayouthveda ltd",
//       date: "Feb 4, 2024",
//       details:
//         "This is the information for B.Pharmacy 2024 passing out students that Aimil Ayouthveda ltd is conducting a Placement Drive.",
//       // Date of placement drive is 8th Feb. 2024 at SVIET Campus.
//     },
//     {
//       company: "Ultratech",
//       date: "Confirm after registrations",
//       details:
//         "Ultratech is hiring BBA, MBA 2024 & 2025 students for Vendor management and Purchase positions in Rajpura. Interview: PI Round, HR Round.",
//       // Salary: 20k/month. Register by 6th May 2024. Offline mode.
//     },
//     {
//       company: "McKinley Rice",
//       date: "Confirm after registrations",
//       details:
//         "McKinley Rice is hiring for Sales Intern, Business Development Executive, MERN Developer, and Social Media Executive roles in Noida. ",
//       //Interview: Preliminary Assessment, Core Assessment, HR Round. Salary: 6 LPA. Register by 31st May 2024. Online mode.
//     },
//     {
//       company: "Shinedezign Infonet Pvt Ltd",
//       date: "Confirm after registration",
//       details:
//         "Shinedezign Infonet is hiring for Content Writer, SEO, QA Fresher’s in Mohali. Interview: Online test, Personal Interview, HR Round. ",
//       //Salary: Stipend 6 months: 10k/month, then up to 20-35k gross. Register by 3rd June 2024. Online mode.
//     },
//     {
//       company: "Penthara Technologies",
//       date: "Confirm after registrations",
//       details:
//         "Penthara Technologies is hiring for Cloud Administrator Intern, Project Management Intern, Graphic Designer Intern roles in Mohali. ",
//       //Interview: Online test, PI Round. Salary: 15k to 25k/month during internship, then 4 LPA to 6.6 LPA. Register by 4th June 2024. Online mode.
//     },
//     {
//       company: "Ellocent Labs IT Solutions Pvt. Ltd.",
//       date: "Confirm after registrations",
//       details:
//         "Ellocent Labs is conducting a Placement Drive for B. Tech CSE 2024 and B. Tech CSE (Super 60) 2025 students. Job location: Mohali. ",
//       //Positions: Web Developer, Business Development Executive, Content Writers. Interview: Written Test, One to One Interview. Salary: Up to 15k/month during 3-month training, then up to 3 LPA. Register by 5th May 2024. Offline mode. 18-month bond required.
//     },
//     {
//       company: "rtCamp",
//       date: "20th May 2024 onwards",
//       details:
//         "rtCamp is conducting a Placement Drive for B. Tech CSE, MCA, BCA, MBA (2024 & 2025). Positions: Software Engineer (Trainee), Business Development Executive, Technical Project Coordinator. ",
//       //Job: Work from home. Salary: 50k/month for 6 months, then 12-18 LPA. Register by 4th May 2024. Perks: MacBook, health insurance, work from anywhere. Selection: Quiz, Assignment, Interview.
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true, // Add this line
//     autoplaySpeed: 3000, // Add this line (speed in milliseconds)
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//     ],
//   };

//   const settings2 = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Add this line
//     autoplaySpeed: 3000, // Add this line (speed in milliseconds)
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-8 lg:py-8 h-auto lg:h-[120vh] flex items-center bg-gray-100">
//       <div className="w-10/12 mx-auto">
//       <div className="w-full flex flex-wrap py-6 justify-between">
//           <div
//             className="w-full md:w-1/2 text-white"
//             style={{
//               backgroundImage: `url(${bannerImage.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "center center",
//             }}
//           >
//             <div className=" p-6 py-10 rounded-md flex flex-col justify-center w-full h-full bg-[#00112d91]">
//               <p className="text-lg lg:text-2xl font-semibold mb-3 ml-2">
//                 Latest Updates & Announcements from SVGOI
//               </p>
//               <Slider {...settings2}>
//                 {placementDriveInformation.map((info, index) => (
//                   <div key={index} className="lg:px-2 lg:mt-0 mt-6 h-full">
//                     <div className="p-5 rounded-md flex flex-col h-[25vh] justify-between bg-white">
//                       <div>
//                         <h2 className="text-xl font-semibold text-black">
//                           {info.company}
//                         </h2>
//                         <p className="text-sm font-medium pt-3 text-black">
//                           {info.date}
//                         </p>
//                         <p className="mt-2 text-xs text-justify text-black">
//                           {info.details}
//                         </p>
//                       </div>
//                       <div>
//                         <a
//                           href={info.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-[#fea700] font-medium rounded-sm flex items-center gap-1 cursor-pointer"
//                         >
//                           Know More{" "}
//                           <ChevronDoubleRightIcon className="h-4 w-4 font-bold" />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>

//           <div className="w-full md:w-[620px]  text-white">
//             <div className=" p-6 py-10 flex flex-col justify-center w-full h-full bg-[#00112d91]">
//               <p className="text-lg lg:text-2xl font-semibold mb-3">
//                 Latest Updates & Announcements from SVGOI
//               </p>
//               <p className="text-sm lg:text-lg">
//                 Stay Updated on Admissions, Campus Events, Career Openings, and
//                 Exciting Placement Drives to Shape Your Future!
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-7">
//           <Typography
//             color="blue-gray"
//             className="mb-2 font-bold uppercase"
//           ></Typography>
//           <Typography
//             color="blue-gray"
//             className="mb-4 !text-2xl font-bold lg:!text-4xl"
//           >
//             Giving Wings To Your career
//           </Typography>
//           <Typography variant="lead" className=" !text-gray-500">
//             A Place Where We Nuture, Grow, Explore & Learn from The Best
//           </Typography>
//         </div>
//         <div className="flex flex-wrap my-6 py-6 ">
//           <div className="w-full md:w-1/2 lg:w-2/3 md:pr-5">
//             <Slider {...settings}>
//               {collegeInformation.map((info, index) => (
//                 <div key={index} className="h-full">
//                   <div
//                     className="border rounded-md h-[50vh] "
//                     style={{
//                       backgroundImage: `url(${info.img})`,
//                       backgroundSize: "cover",
//                       backgroundRepeat: "no-repeat",
//                       backgroundPosition: "center center",
//                     }}
//                   >
//                     <div className="w-full h-full bg-[#00000048] flex flex-col justify-between text-white p-5 ">
//                       <h2 className="text-xl font-semibold">{info.category}</h2>
//                       <p className="mt-2 text-lg font-semibold ">
//                         {info.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
//           <div className="w-full grid grid-cols-2 gap-5 lg:pt-0 pt-12">
//           <div className="bg-white rounded-md p-5 shadow-md flex flex-col justify-center">
//             <p className="text-4xl mb-3 font-semibold">
//               <CountUp end={3000} duration={2.5} />
//             </p>
//             <p className="text-lg font-medium py-1 w-fit mb-2 rounded-sm">
//               Offer Letters
//             </p>
//             <p className="font-medium mb-3 text-sm">Every Year</p>
//           </div>
//           <div className="bg-[#fea700] text-white rounded-md p-5 shadow-md flex flex-col justify-center">
//             <p className="text-4xl mb-3 font-semibold">
//               <CountUp end={50} duration={2.5} suffix=" LPA" />
//             </p>
//             <p className="text-lg font-medium py-1 w-fit mb-2 rounded-sm">
//               Highest Package
//             </p>
//             <p className="font-medium mb-3 text-sm">Offered</p>
//           </div>
//           <div className="bg-[#fea700] text-white rounded-md p-5 shadow-md flex flex-col justify-center">
//             <p className="text-4xl mb-3 font-semibold">
//               <CountUp end={350} duration={2.5} />
//             </p>
//             <p className="text-lg font-medium py-1 w-fit mb-2 rounded-sm">
//               Companies
//             </p>
//             <p className="font-medium mb-3 text-sm">Visit Per year</p>
//           </div>
//           <div className="bg-white rounded-md p-5 shadow-md flex flex-col justify-center">
//             <p className="text-4xl mb-3 font-semibold">
//               <CountUp end={12000} duration={2.5} />
//             </p>
//             <p className="text-lg font-medium py-1 w-fit mb-2 rounded-sm">
//               Dreams
//             </p>
//             <p className="font-medium mb-3 text-sm">Fulfilled</p>
//           </div>
//         </div>
//       </div>
//           </div>
//         </div>
       
//       </div>
    
//   );
// };

// export default GivingWings;


'use client'

import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import Link from 'next/link'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import { Megaphone, Calendar, Building, Users, BookOpen, GraduationCap } from 'lucide-react'

import project from "@/assets/LandingPage/Chandigarh/GivingWings/ProjectBased.jpg";
import research from "@/assets/LandingPage/Chandigarh/GivingWings/Research.jpg";
import startup from "@/assets/LandingPage/Chandigarh/GivingWings/startup.jpg";
import initiative from "@/assets/LandingPage/Chandigarh/GivingWings/init.jpg";
import sporting from "@/assets/LandingPage/sports.webp";
import international from "@/assets/LandingPage/Chandigarh/GivingWings/international.webp";
import bannerImage from "@/assets/LandingPage/Chandigarh/GivingWings/banner.jpg";
import AboutUs from '../../components/LandingPage/AboutUs'

const Card = ({ className, ...props }) => (
  <div className={`rounded-sm shadow-lg ${className}`} {...props} />
)

  const placementDriveInformation = [
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
  {
    "company": "Higgs Healthcare",
    "date": "7th june 2025",
    "details": "This is information •For B. pharmacy (2025 passing out Batch Students only.) that Higgs Healthcare is conducting a placement drive.",
    "link": "/Higgs_Healthcare.pdf",
  },
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
      date: "Dec 05 2024",
      details: "This is information For B.Tech CSE (Super 60 & Non super 60), MCA 2025 Passing out Batch Students only) throughout Students that BayaTree Infocom (P) Ltd. is conducting a placement drive.",
      link: "/Bayatree.pdf",
    },
    {
      company: "Simson Softwares",
      date: "Dec 05 2024",
      details: "This is information for B. Tech CSE (Super 60 & Non super 60) (2025 batch passing out)  throughout Students that Simson Softwares Pvt. Ltd. is conducting a placement drive.",
      link: "/Simson.pdf",
    },
    {
      company: "Step2gen Technologies Pvt Ltd",
      date: "Dec 05 2024",
      details: "This is information for B. Tech CSE (Non super 60 & Super 60 only), MCA  (2025 Passing out Batch Students only) that Step2gen Technologies is conducting a placement drive.",
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
      details:
        "This is information for B. tech CSE, MCA 2025 Passing out Batch Students only that uCertify is conducting a placement drive.",
      link: "/ucertify noida.pdf",
    },
    {
      company: "Smart Data Enterprises",
      date: "Confirm after registrations",
      details:
        "This is information For B.Tech CSE, MCA, MBA(HR/Marketing) (2025 Passing out Batch Students) Students that Smart Data Enterprises (I) Ltd is conducting a placement drive.",
      link: "/Smart Data Enterprises.pdf",
    },
    {
      company: "TD Arora Feed Mills",
      date: "Nov 14, 2024",
      details:
        "This is information for MBA and BCA 2025 passing out students that TD Arora Feed Mills is conducting a placement drive.",
      link: "/TD_Arora_Feed_Mills.pdf",
    },

    {
      company: "IDS INFOTECH LTD",
      date: "Feb 4, 2024",
      details:
        "This is the information for B.Pharmacy 2024 passing out students that IDS INFOTECH LTD is conducting a Placement Drive.  ",
      //Date of placement drive is 7th Feb. 2024 at SVIET Campus. All the eligible students can register themselves up to 29.01.2024.
    },
    {
      company: "Aimil Ayouthveda ltd",
      date: "Feb 4, 2024",
      details:
        "This is the information for B.Pharmacy 2024 passing out students that Aimil Ayouthveda ltd is conducting a Placement Drive.",
      // Date of placement drive is 8th Feb. 2024 at SVIET Campus.
    },
    {
      company: "Ultratech",
      date: "Confirm after registrations",
      details:
        "Ultratech is hiring BBA, MBA 2024 & 2025 students for Vendor management and Purchase positions in Rajpura. Interview: PI Round, HR Round.",
      // Salary: 20k/month. Register by 6th May 2024. Offline mode.
    },
    {
      company: "McKinley Rice",
      date: "Confirm after registrations",
      details:
        "McKinley Rice is hiring for Sales Intern, Business Development Executive, MERN Developer, and Social Media Executive roles in Noida. ",
      //Interview: Preliminary Assessment, Core Assessment, HR Round. Salary: 6 LPA. Register by 31st May 2024. Online mode.
    },
    {
      company: "Shinedezign Infonet Pvt Ltd",
      date: "Confirm after registration",
      details:
        "Shinedezign Infonet is hiring for Content Writer, SEO, QA Fresher’s in Mohali. Interview: Online test, Personal Interview, HR Round. ",
      //Salary: Stipend 6 months: 10k/month, then up to 20-35k gross. Register by 3rd June 2024. Online mode.
    },
    {
      company: "Penthara Technologies",
      date: "Confirm after registrations",
      details:
        "Penthara Technologies is hiring for Cloud Administrator Intern, Project Management Intern, Graphic Designer Intern roles in Mohali. ",
      //Interview: Online test, PI Round. Salary: 15k to 25k/month during internship, then 4 LPA to 6.6 LPA. Register by 4th June 2024. Online mode.
    },
    {
      company: "Ellocent Labs IT Solutions Pvt. Ltd.",
      date: "Confirm after registrations",
      details:
        "Ellocent Labs is conducting a Placement Drive for B. Tech CSE 2024 and B. Tech CSE (Super 60) 2025 students. Job location: Mohali. ",
      //Positions: Web Developer, Business Development Executive, Content Writers. Interview: Written Test, One to One Interview. Salary: Up to 15k/month during 3-month training, then up to 3 LPA. Register by 5th May 2024. Offline mode. 18-month bond required.
    },
    {
      company: "rtCamp",
      date: "20th May 2024 onwards",
      details:
        "rtCamp is conducting a Placement Drive for B. Tech CSE, MCA, BCA, MBA (2024 & 2025). Positions: Software Engineer (Trainee), Business Development Executive, Technical Project Coordinator. ",
      //Job: Work from home. Salary: 50k/month for 6 months, then 12-18 LPA. Register by 4th May 2024. Perks: MacBook, health insurance, work from anywhere. Selection: Quiz, Assignment, Interview.
    },
  ];

  const collegeInformation = [
    {
      category: "Research",
      img: research.src,
      description:
        "Students lead research with state-of-the-art facilities. Over 100 articles published nationally and internationally.",
    },
    {
      category: "Project-Based Learning",
      img: project.src,
      description:
        "Engage in authentic challenges with project-based learning, fostering practical skills.",
    },
    {
      category: "Sporting Excellence",
      img: sporting.src,
      description:
        "Excel in sports with over 30 tournament participations annually, fostering passion and skill.",
    },
    {
      category: "Startups",
      img: startup.src,
      description:
        "Incubate innovative entrepreneurship with more than 15 successful startups launched at SVGOI.",
    },
    {
      category: "Global Exposure",
      img: international.src,
      description:
        "Expand horizons with international tie-ups, hosting students from over 10 countries.",
    },
    {
      category: "Special Initiatives",
      img: initiative.src,
      description:
        "Special batches like TheUniques, SUPER-60 and ALLIED-30 assure 100% placement for students.",
    },
  ];

const GivingWings = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  return (
    <div className="py-8 lg:py-8 min-h-screen bg-gray-100">
      <div className="w-10/12 mx-auto relative">
      <div className='flex justify-between'>
      <div className='z-50 w-52 mt-[-32px] relative'>
            <img src="https://utfs.io/f/1V3V2P4kpAumppqgBkQ6ntRyaQormsAvUSgqZTJcibOuXfBW" alt="" />
          </div>
          <div className='z-50 w-52 mt-[-32px] relative'>
            <img src="https://utfs.io/f/1V3V2P4kpAumppqgBkQ6ntRyaQormsAvUSgqZTJcibOuXfBW" alt="" />
          </div>
      </div>
        <div className="w-full flex flex-wrap py-6 justify-between gap-6 z-0 mt-[-95px]">
          
          <Card className="w-full md:w-[calc(50%-0.75rem)]  text-white overflow-hidden rounded-lg ">
            <div className="p-6 py-10 rounded-lg shadow-md flex flex-col justify-center w-full h-full bg-opacity-90 bg-[#fea700]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mb-6"
              >
                <Megaphone className="w-8 h-8 mr-3" />
                <h2 className="text-2xl font-bold">Latest Updates & Announcements from SVGOI</h2>
              </motion.div>
              <Slider {...settings2}>
                {placementDriveInformation.map((info, index) => (
                  <div key={index} className="px-2">
                    <Card className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
                      <div className="flex items-center mb-4">
                        <Building className="w-6 h-6 text-[#fea700] mr-2" />
                        <h3 className="text-xl font-semibold">{info.company}</h3>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <p>{info.date}</p>
                      </div>
                      <p className="text-sm mb-4">{info.details}</p>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#fea700] hover:text-yellow-700 transition-colors duration-200"
                      >
                        Know More
                        <ChevronDoubleRightIcon className="h-4 w-4 ml-1" />
                      </a>
                    </Card>
                  </div>
                ))}
              </Slider>
              <Link href="/announcement" className="mt-6">
              <button className="bg-white text-[#fea700] text-xl px-6 py-2 rounded">
                Explore More
              </button>
            </Link>
            </div>
          </Card>

          <Card className="w-full md:w-[calc(50%-0.75rem)]  text-black overflow-hidden">
            <div className="p-6 py-10 flex flex-col justify-between w-full h-full bg-opacity-90 bg-white rounded-lg shadow-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h2 className="text-2xl font-bold mb-4">SVGOI: Empowering Excellence Across Every Campus</h2>
                <p className="text-lg">
                  Stay Updated on Admissions, Campus Events, Career Openings, and
                  Exciting Placement Drives to Shape Your Future!
                </p>
              </motion.div>
              {/* <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-[#fea700]  p-3 rounded-lg text-white"
            >
              <Users className="w-6 h-6 mr-2" />
              <span>5000+ Students</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-gray-100/60  p-3 rounded-lg shadow-lg"
            >
              <Building className="w-6 h-6 mr-2" />
              <span>4 Campuses</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-gray-100/60 p-3 rounded-lg shadow-lg"
            >
              <BookOpen className="w-6 h-6 mr-2" />
              <span>50+ Programs</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-[#fea700]  p-3 rounded-lg text-white"
            >
              <GraduationCap className="w-6 h-6 mr-2" />
              <span>95% Placement</span>
            </motion.div>
          </div> */}
           <div className="w-full flex justify-center">
              <div className="w-full grid grid-cols-2 gap-5 lg:pt-0 pt-12">
                <Card className="bg-white px-3 flex flex-col justify-center">
                  <p className="text-2xl font-semibold">
                    <CountUp end={3000} duration={2.5} suffix=" +"/>
                  </p>
                  <p className="text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                    Offer Letters
                  </p>
                 
                </Card>
                <Card className="bg-[#fea700] text-white px-3 flex flex-col justify-center">
                  <p className="text-2xl  font-semibold">
                    <CountUp end={100} duration={2.5} suffix=" +" />
                  </p>
                  <p className="text-lg font-medium py-1 w-fit  rounded-sm">
                    Programs
                  </p>
                  
                </Card>
                <Card className="bg-[#fea700] text-white px-3 flex flex-col justify-center">
                  <p className="text-2xl  font-semibold">
                    <CountUp end={600} duration={2.5} suffix=" +"/>
                  </p>
                  <p className="text-lg font-medium py-1 w-fit  rounded-sm">
                    Faculty
                  </p>
                 
                </Card>
                <Card className="bg-white px-3 flex flex-col justify-center">
                  <p className="text-2xl font-semibold">
                    <CountUp end={50000} duration={2.5} suffix=" +"/>
                  </p>
                  <p className="text-lg font-medium py-1 w-fit rounded-sm">
                    Alumni
                  </p>
                  
                </Card>
              </div>
            </div>
            <Link href="/institution" className="mt-6">
              <button className="bg-[#fea700] hover:bg-[#fea700]/90 text-white text-xl px-6 py-2 rounded">
                Explore More
              </button>
            </Link>
            </div>
          </Card>
        </div>
        <AboutUs />
        <div className="mt-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold  mb-4"
          >
            Career Placement Overview
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600  mb-12"
          >
            A Place Where We Nurture, Grow, Explore & Learn from The Best
          </motion.p>

          <div className="flex flex-wrap my-6 py-6">
            <div className="w-full md:w-1/2 lg:w-2/3 md:pr-5">
              <Slider {...settings}>
                {collegeInformation.map((info, index) => (
                  <div key={index} className="px-[1px]">
                    <Card className="overflow-hidden h-[50vh] group">
                      <div className="relative h-full">
                        <img 
                          src={info.img}
                          alt={info.category} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-semibold mb-2 ">
                            {info.category}
                          </h3>
                          <p className="text-sm mb-4 text-justify">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
              <div className="w-full grid grid-cols-2 gap-5 lg:pt-0 pt-12">
                <Card className="bg-white p-5 flex flex-col justify-center">
                  <p className="text-4xl mb-3 font-semibold">
                    <CountUp end={35000} duration={2.5} suffix=" +" />
                  </p>
                  <p className="text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                  International Students
                  </p>
                  {/* <p className="font-medium mb-3 text-sm">Every Year</p> */}
                </Card>
                <Card className="bg-[#fea700] text-white p-5 flex flex-col justify-center">
                  <p className="text-4xl mb-3 font-semibold">
                    <CountUp end={50000} duration={2.5} suffix=" +" />
                  </p>
                  <p className="text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                  Full time students
                  </p>
                  {/* <p className="font-medium mb-3 text-sm">Offered</p> */}
                </Card>
                <Card className="bg-[#fea700] text-white p-5 flex flex-col justify-center">
                  <p className="text-4xl mb-3 font-semibold">
                    <CountUp end={28} duration={2.5} />
                  </p>
                  <p className="text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                    States
                  </p>
                  {/* <p className="font-medium mb-3 text-sm">Visit Per year</p> */}
                </Card>
                <Card className="bg-white p-5 flex flex-col justify-center">
                  <p className="text-4xl mb-3 font-semibold">
                    <CountUp end={75} duration={2.5} suffix=" +"/>
                  </p>
                  <p className="text-lg font-medium py-1 w-fit mb-2 rounded-sm">
                  Nationalities
                  </p>
                  {/* <p className="font-medium mb-3 text-sm">Fulfilled</p> */}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GivingWings

