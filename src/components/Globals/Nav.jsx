// "use client"

// import React from "react";
// import Link from "next/link";

// import about from '@/assets/Globals/About.jpg'
// import programs from '@/assets/Globals/Programs.jpg'
// import admission from '@/assets/Globals/Admissions.jpg'
// import placement from '@/assets/Globals/placement.jpg'
// import international from '@/assets/Globals/international.jpg'
// import contact from '@/assets/Globals/contact.jpg'
// import initiatives from '@/assets/Globals/Initiatives.jpg'


// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Avatar,
//   Card,
//   IconButton,
// } from "@material-tailwind/react";
// import {
//   CubeTransparentIcon,
//   UserCircleIcon,
//   CodeBracketSquareIcon,
//   Square3Stack3DIcon,
//   ChevronDownIcon,
//   Cog6ToothIcon,
//   InboxArrowDownIcon,
//   LifebuoyIcon,
//   PowerIcon,
//   RocketLaunchIcon,
//   Bars2Icon,
//   TrophyIcon,
//   AcademicCapIcon,
//   GlobeAltIcon,
//   PhoneIcon,
// } from "@heroicons/react/24/solid";

// import logo from '@/assets/Brand/Logo.webp'
// import Image from "next/image";
// import card from "@material-tailwind/react/theme/components/card";


// const navListMenuItems = [
//   {
//     title: "@material-tailwind/html",
//     description:
//       "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
//   },
//   {
//     title: "@material-tailwind/react",
//     description:
//       "Learn how to use @material-tailwind/react, packed with rich components for React.",
//   },
//   {
//     title: "Material Tailwind PRO",
//     description:
//       "A complete set of UI Elements for building faster websites in less time.",
//   },
// ];

// const navListAboutItems = [
//   {
//     title: "What Is SVGOI",
//     description:
//       "We are committed to providing quality education and holistic development to our students, we strive to create an environment conducive to learning and innovation.",
//   },
//   {
//     title: "Our Flag Bearers",
//     description:
//       "They are dedicated professionals who are passionate about shaping the future of our students.",
//   },
//   {
//     title: "Our Vision and Mission",
//     description:
//       "Our vision is to be a global leader in education, research, and innovation.",
//   },
// ];



// const navListProgramsItems = [
//   {
//     title: "Undergraduate Programs",
//     description:
//       "Explore our wide range of undergraduate programs designed to equip students with the knowledge and skills necessary for their chosen career paths",
//   },
//   {
//     title: "Postgraduate Programs",
//     description:
//       "Discover our postgraduate programs that offer advanced study opportunities for students looking to deepen their expertise and pursue specialized careers.",
//   },
//   {
//     title: "Diploma and Certificate Courses",
//     description:
//       "Enroll in our diploma and certificate courses to gain practical skills and enhance your professional credentials.",
//   },
// ];

// const navListPlacementsItems = [
//   {
//     title: "Placement Opportunities",
//     description:
//       "Discover the various placement opportunities available to students at our institution.",
//   },
//   {
//     title: "Internship Programs",
//     description:
//       "Explore our internship programs designed to provide students with hands-on experience in their respective fields.",
//   },
//   {
//     title: "Career Guidance",
//     description:
//       "Get access to career guidance and counseling services to help you make informed decisions about your future.",
//   },
// ];
// const navListAdmissionsItems = [
//   {
//     title: "Admission Process",
//     description:
//       "Learn about our admission process and how to apply for admission to our institution.",
//   },
//   {
//     title: "Eligibility Criteria",
//     description:
//       "Understand the eligibility criteria for admission to our various programs. ",
//   },
//   {
//     title: "Scholarships and Financial Aid",
//     description:
//       "Explore our scholarships and financial aid options available to support students in pursuing their education. ",
//   },
// ];
// const navListCampusLifeItems = [
//   {
//     title: "The Uniques ",
//     description:
//       "A Community of students realizing the dream of Corporate in College and working on real-life projects at ground-zero",
//     link: "/uniques",
//   },
//   {
//     title: "Super 60",
//     description:
//       "A Batch of 60 students getting free of cost technical training and soft skill training and real time work experience in their college days",
//     link: "/super-sixty"
//   },
// ];
// const navListInternationalItems = [
//   {
//     title: "Study Abroad Programs",
//     description:
//       "Explore our study abroad programs that offer opportunities for students to gain international exposure and experience different cultures. ",
//   },
//   {
//     title: "Exchange Programs",
//     description:
//       "Participate in our exchange programs and spend a semester or academic year studying at one of our partner institutions abroad.",
//   },
//   {
//     title: "International Students Support",
//     description:
//       "Receive dedicated support services tailored to the needs of international students.",
//   },
// ];
// const navLisContactItems = [
//   {
//     title: "General Inquiries",
//     description:
//       "For general inquiries and information about our institution, please feel free to contact us.",
//   },
//   {
//     title: "Admissions Office",
//     description:
//       "Contact our admissions office for inquiries related to admissions, application procedures, eligibility criteria, and more.",
//   },
//   {
//     title: "Placement Cell",
//     description:
//       "Connect with our placement cell for inquiries regarding placement opportunities, internships, career guidance, and industry collaborations. ",
//   },
// ];

// function NavListAbout() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const renderItems = navListAboutItems.map(({ title, description }) => (
//     <a href="/about" key={title}>
//       <MenuItem>
//         <Typography variant="h6" color="blue-gray" className="mb-1">
//           {title}
//         </Typography>
//         <Typography variant="small" color="gray" className="font-normal">
//           {description}
//         </Typography>
//       </MenuItem>

//     </a>
//   ));

//   return (
//     <React.Fragment>
//       <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography as="a" href="#" variant="small" className="font-normal text-md focus:bg-white">
//             <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
//               <UserCircleIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//               About{" "}
//               <ChevronDownIcon
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
//           <Card
//             color="blue"
//             shadow={false}
//             variant="gradient"
//             className="col-span-3 grid h-full w-full place-items-center rounded-md"
//           >
//             <img src={about.src} alt="" srcSet="" />
//           </Card>
//           <ul className="col-span-4 flex w-full flex-col gap-1">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>

//       <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
//         <Link href="/about" className="flex items-center gap-2">
//           <UserCircleIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//           About{" "}
//         </Link>
//       </MenuItem>

//     </React.Fragment>
//   );
// }
// function NavListPrograms() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const renderItems = navListProgramsItems.map(({ title, description }) => (
//     <a href="/programs" key={title}>
//       <MenuItem>
//         <Typography variant="h6" color="blue-gray" className="mb-1">
//           {title}
//         </Typography>
//         <Typography variant="small" color="gray" className="font-normal">
//           {description}
//         </Typography>
//       </MenuItem>
//     </a>
//   ));

//   return (
//     <React.Fragment>
//       <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography as="a" href="#" variant="small" className="font-normal text-md">
//             <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
//               <CubeTransparentIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//               Programs{" "}
//               <ChevronDownIcon
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
//           <Card
//             color="blue"
//             shadow={false}
//             variant="gradient"
//             className="col-span-3 grid h-full w-full place-items-center rounded-md"
//           >
//             <img src={programs.src} alt="" srcSet="" />
//           </Card>
//           <ul className="col-span-4 flex w-full flex-col gap-1">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden ">
//         <Link href="/programs" className="flex items-center gap-2">
//           <CubeTransparentIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//           Programs{" "}
//         </Link>
//       </MenuItem>


//     </React.Fragment>
//   );
// }
// function NavListPlacements() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const renderItems = navListPlacementsItems.map(({ title, description }) => (
//     <a href="/placement" key={title}>
//       <MenuItem>
//         <Typography variant="h6" color="blue-gray" className="mb-1">
//           {title}
//         </Typography>
//         <Typography variant="small" color="gray" className="font-normal">
//           {description}
//         </Typography>
//       </MenuItem>
//     </a>
//   ));

//   return (
//     <React.Fragment>
//       <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography as="a" href="#" variant="small" className="font-normal text-md">
//             <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
//               <CodeBracketSquareIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//               Placements{" "}
//               <ChevronDownIcon
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
//           <Card
//             color="blue"
//             shadow={false}
//             variant="gradient"
//             className="col-span-3 grid h-full w-full place-items-center rounded-md"
//           >
//             <img src={placement.src} alt="" srcSet="" />
//           </Card>
//           <ul className="col-span-4 flex w-full flex-col gap-1">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
//         <Link href="/placement" className="flex items-center gap-2">
//           <CodeBracketSquareIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//           Placements{" "}
//         </Link>
//       </MenuItem>

//     </React.Fragment>
//   );
// }
// function NavListAdmission() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const renderItems = navListAdmissionsItems.map(({ title, description }) => (
//     <a href="/admissions" key={title}>
//       <MenuItem>
//         <Typography variant="h6" color="blue-gray" className="mb-1">
//           {title}
//         </Typography>
//         <Typography variant="small" color="gray" className="font-normal">
//           {description}
//         </Typography>
//       </MenuItem>
//     </a>
//   ));

//   return (
//     <React.Fragment>
//       <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography as="a" href="#" variant="small" className="font-normal text-md">
//             <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
//               <AcademicCapIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//               Admissions{" "}
//               <ChevronDownIcon
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
//           <Card
//             color="blue"
//             shadow={false}
//             variant="gradient"
//             className="col-span-3 grid h-full w-full place-items-center rounded-md"
//           >
//             <img src={admission.src} alt="" srcSet="" />
//           </Card>
//           <ul className="col-span-4 flex w-full flex-col gap-1">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
//         <Link className="flex items-center gap-2" href="/admissions">
//           <AcademicCapIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//           Admissions{" "}</Link>
//       </MenuItem>

//     </React.Fragment>
//   );
// }
// function NavListCampus() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const renderItems = navListCampusLifeItems.map(({ title, description, link }) => (
//     <a href={link} key={title}>
//       <MenuItem>
//         <Typography variant="h6" color="blue-gray" className="mb-1">
//           {title}
//         </Typography>
//         <Typography variant="small" color="gray" className="font-normal">
//           {description}
//         </Typography>
//       </MenuItem>
//     </a>
//   ));

//   return (
//     <React.Fragment>
//       <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography variant="small" className="font-normal text-md">
//             <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
//               <TrophyIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//               Our Initiatives{" "}
//               <ChevronDownIcon
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
//           <Card
//             color="blue"
//             shadow={false}
//             variant="gradient"
//             className="col-span-3 grid h-full w-full place-items-center rounded-md"
//           >
//             <img src={initiatives.src} alt="" srcSet="" />
//           </Card>
//           <ul className="col-span-4 flex w-full flex-col gap-1">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 p-0 lg:hidden">
//         <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//           <MenuHandler>
//             <Typography variant="small" className="font-normal text-md p-0">
//               <span className="flex lg:hidden items-center gap-2 font-medium text-blue-gray-900">
//                 <TrophyIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//                 Our Initiatives{" "}
//                 <ChevronDownIcon
//                   strokeWidth={2}
//                   className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
//                     }`}
//                 />
//               </span>
//             </Typography>
//           </MenuHandler>
//           <MenuList className="grid grid-cols-7 gap-3 overflow-visible lg:hidden">

//             <ul className="flex w-full flex-col gap-1 lg:hidden">
//               {renderItems}
//             </ul>
//           </MenuList>
//         </Menu>
//       </MenuItem>

//     </React.Fragment>
//   );
// }
// function NavListInternaltional() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const renderItems = navListInternationalItems.map(({ title, description }) => (
//     <a href="/international" key={title}>
//       <MenuItem>
//         <Typography variant="h6" color="blue-gray" className="mb-1">
//           {title}
//         </Typography>
//         <Typography variant="small" color="gray" className="font-normal">
//           {description}
//         </Typography>
//       </MenuItem>
//     </a>
//   ));

//   return (
//     <React.Fragment>
//       <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography as="a" href="#" variant="small" className="font-normal text-md">
//             <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
//               <GlobeAltIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//               International{" "}
//               <ChevronDownIcon
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
//           <Card
//             color="blue"
//             shadow={false}
//             variant="gradient"
//             className="col-span-3 grid h-full w-full place-items-center rounded-md"
//           >
//             <img src={international.src} alt="" srcSet="" />
//           </Card>
//           <ul className="col-span-4 flex w-full flex-col gap-1">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
//         <Link href="/international" className="flex gap-2 items-center">
//           <GlobeAltIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//           International{" "}</Link>
//       </MenuItem>

//     </React.Fragment>
//   );
// }
// function NavListContact() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const renderItems = navLisContactItems.map(({ title, description }) => (
//     <a href="/contact-us" key={title}>
//       <MenuItem>
//         <Typography variant="h6" color="blue-gray" className="mb-1">
//           {title}
//         </Typography>
//         <Typography variant="small" color="gray" className="font-normal">
//           {description}
//         </Typography>
//       </MenuItem>
//     </a>
//   ));

//   return (
//     <React.Fragment>
//       <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography as="a" href="#" variant="small" className="font-normal text-md">
//             <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
//               <PhoneIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//               Contact Us{" "}
//               <ChevronDownIcon
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
//           <Card
//             color="blue"
//             shadow={false}
//             variant="gradient"
//             className="col-span-3 grid h-full w-full place-items-center rounded-md"
//           >
//             <img src={contact.src} alt="" srcSet="" />
//           </Card>
//           <ul className="col-span-4 flex w-full flex-col gap-1">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
//         <Link className="flex gap-2 items-center" href="/contact-us">
//           <Square3Stack3DIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//           Contact Us{" "}</Link>
//       </MenuItem>

//     </React.Fragment>
//   );
// }



// function NavList() {
//   return (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">




//       <div className="flex flex-wrap overflow-hidden justify-end  w-full py-2 items-center gap-2 lg:rounded-full">
//         {/* <NavListMenu /> */}
//         <NavListAbout />
//         <NavListPrograms />
//         <NavListPlacements />
//         <NavListAdmission />
//         <NavListCampus />
//         < NavListInternaltional />
//         <NavListContact />
//       </div>

//     </ul>
//   );
// }

// export function ComplexNavbar() {
//   const [isNavOpen, setIsNavOpen] = React.useState(false);

//   const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setIsNavOpen(false),
//     );
//   }, []);

//   return (
//     <Navbar className="mx-auto p-2 lg:pl-6 text-gray-800" fullWidth={true}>
//       <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="/"
//           className="mr-4 md:w-2/12 ml-2 cursor-pointer py-1.5 font-medium"
//         >
//           <Image src={logo} className="w-[100px] md:w-[250px]" />
//         </Typography>
//         <div className="flex flex-col md:w-8/12  ">

//           <div className="hidden lg:flex justify-end w-full border-b-2 py-3">
//             <div className="w-1/3 flex items-center  justify-end gap-2">
//               <span className="text-sm font-semibold">Get Social:</span>
//               <a href="https://www.facebook.com/svietofficial/"><i className="fab fa-facebook mx-1"></i></a>
//               <a href="https://www.instagram.com/svietofficial/?hl=en"><i className="fab fa-instagram mx-1"></i></a>
//               <a href="https://www.linkedin.com/company/swami-vivekanand-institute-of-engineering-and-technology/"><i className="fab fa-linkedin mx-1"></i></a>
//               <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsvietofficial"><i className="fab fa-twitter mx-1"></i></a>
//             </div>
//             <div className="w-1/3 flex items-center text-sm font-semibold justify-end gap-2 pr-6"><span className="text-sm font-semibold">Get Connected:</span>
//               <a href="https://wa.me/7347411011">
//                 <i className="fab fa-whatsapp mx-1"></i>
//               </a>
//               <span className="mx-1">360&#xb0;</span>
//               <i className="far fa-compass mx-1"></i>
//             </div>
//           </div>

//           <div className="hidden lg:block w-full  ">
//             <NavList />
//           </div>
//         </div>


//         <div className="lg:w-2/12 flex justify-end">

//           <IconButton
//             size="sm"
//             color="blue-gray"
//             variant="text"
//             onClick={toggleIsNavOpen}
//             className="ml-auto mr-2 lg:hidden flex items-center justify-center"

//           >
//             <Bars2Icon className="h-6 w-6 m-auto" />
//           </IconButton>
//           <Link href="https://admission.sviet.ac.in/">
//             <Button className="border-2 xl:mr-16  bg-gray-800 lg:p-3 lg:text-lg   text-gray-100" size="sm" variant="text">
//               <span>Apply Now</span>

//             </Button>
//           </Link>
//         </div>

//         {/* <ProfileMenu /> */}
//       </div>

//       <MobileNav open={isNavOpen} className="overflow-scroll">
//         <NavList />
//       </MobileNav>
//     </Navbar>

//   );
// }
"use client"

import React from "react";
import Link from "next/link";

import about from '@/assets/Globals/About.jpg'
import programs from '@/assets/Globals/Programs.jpg'
import admission from '@/assets/Globals/Admissions.jpg'
import placement from '@/assets/Globals/placement.jpg'
import international from '@/assets/Globals/international.jpg'
import contact from '@/assets/Globals/contact.jpg'
import initiatives from '@/assets/Globals/Initiatives.jpg'
// import gallery from '@/assets/Globals/Gallery.jpg'

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  TrophyIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  PhoneIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

import logo from '@/assets/Brand/Logo.webp'
import Image from "next/image";

const navListAboutItems = [
  {
    title: "What Is SVGOI",
    description:
      "We are committed to providing quality education and holistic development to our students, we strive to create an environment conducive to learning and innovation.",
      link: "/about",
  },
  {
    title: "From the Desk of Management",
    description:
      "They are dedicated professionals who are passionate about shaping the future of our students.",
      link: "/management",
  },
  {
    title: "Our Vision and Mission",
    description:
      "Our vision is to be a global leader in education, research, and innovation.",
      link: "/about",
  },
];

const navListProgramsItems = [
  {
    title: "Undergraduate Programs",
    description:
      "Explore our wide range of undergraduate programs designed to equip students with the knowledge and skills necessary for their chosen career paths",
  },
  {
    title: "Postgraduate Programs",
    description:
      "Discover our postgraduate programs that offer advanced study opportunities for students looking to deepen their expertise and pursue specialized careers.",
  },
  {
    title: "Diploma and Certificate Courses",
    description:
      "Enroll in our diploma and certificate courses to gain practical skills and enhance your professional credentials.",
  },
];

const navListPlacementsItems = [
  {
    title: "Placement Opportunities",
    description:
      "Discover the various placement opportunities available to students at our institution.",
  },
  {
    title: "Internship Programs",
    description:
      "Explore our internship programs designed to provide students with hands-on experience in their respective fields.",
  },
  {
    title: "Career Guidance",
    description:
      "Get access to career guidance and counseling services to help you make informed decisions about your future.",
  },
];

const navListAdmissionsItems = [
  {
    title: "Admission Process",
    description:
      "Learn about our admission process and how to apply for admission to our institution.",
  },
  {
    title: "Eligibility Criteria",
    description:
      "Understand the eligibility criteria for admission to our various programs. ",
  },
  {
    title: "Scholarships and Financial Aid",
    description:
      "Explore our scholarships and financial aid options available to support students in pursuing their education. ",
  },
];

const navListCampusLifeItems = [
  {
    title: "The Uniques ",
    description:
      "A Community of students realizing the dream of Corporate in College and working on real-life projects at ground-zero",
    link: "/uniques",
  },
  {
    title: "Super 60",
    description:
      "A Batch of 60 students getting free of cost technical training and soft skill training and real time work experience in their college days",
    link: "/super-sixty"
  },
];

const navListInternationalItems = [
  {
    title: "Study Abroad Programs",
    description:
      "Explore our study abroad programs that offer opportunities for students to gain international exposure and experience different cultures. ",
  },
  {
    title: "Exchange Programs",
    description:
      "Participate in our exchange programs and spend a semester or academic year studying at one of our partner institutions abroad.",
  },
  {
    title: "International Students Support",
    description:
      "Receive dedicated support services tailored to the needs of international students.",
  },
];

const navLisContactItems = [
  {
    title: "General Inquiries",
    description:
      "For general inquiries and information about our institution, please feel free to contact us.",
  },
  {
    title: "Admissions Office",
    description:
      "Contact our admissions office for inquiries related to admissions, application procedures, eligibility criteria, and more.",
  },
  {
    title: "Placement Cell",
    description:
      "Connect with our placement cell for inquiries regarding placement opportunities, internships, career guidance, and industry collaborations. ",
  },
];

const navListGalleryItems = [
  {
    title: "Photo Gallery",
    description: "Browse through our collection of photos showcasing campus life and events.",
  },
  {
    title: "Video Gallery",
    description: "Watch videos of our campus, student activities, and academic programs.",
  },
];

// function NavListAbout() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const renderItems = navListAboutItems.map(({ title, description }) => (
//     <a href="/about" key={title}>
//       <MenuItem>
//         <Typography variant="h6" color="blue-gray" className="mb-1">
//           {title}
//         </Typography>
//         <Typography variant="small" color="gray" className="font-normal">
//           {description}
//         </Typography>
//       </MenuItem>
//     </a>
//   ));

//   return (
//     <React.Fragment>
//       <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography as="a" href="#" variant="small" className="font-normal text-md focus:bg-white">
//             <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
//               <UserCircleIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//               About{" "}
//               <ChevronDownIcon
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
//           <Card
//             color="blue"
//             shadow={false}
//             variant="gradient"
//             className="col-span-3 grid h-full w-full place-items-center rounded-md"
//           >
//             <img src={about.src} alt="" srcSet="" />
//           </Card>
//           <ul className="col-span-4 flex w-full flex-col gap-1">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>

//       <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
//         <Link href="/about" className="flex items-center gap-2">
//           <UserCircleIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
//           About{" "}
//         </Link>
//       </MenuItem>
//     </React.Fragment>
//   );
// }
function NavListAbout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListAboutItems.map(({ title, description, link }) => (
    <a href={link} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-normal text-md focus:bg-white"
          >
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <UserCircleIcon className="h-[20px] w-[20px] text-blue-gray-500" /> About{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <img src={about.src} alt="" srcSet="" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">{renderItems}</ul>
        </MenuList>
      </Menu>

      {/* Mobile View */}
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <a href="/about" className="flex items-center gap-2">
          <UserCircleIcon className="h-[20px] w-[20px] text-blue-gray-500" /> About{" "}
        </a>
      </MenuItem>
    </React.Fragment>
  );
}

export default NavListAbout;

function NavListPrograms() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListProgramsItems.map(({ title, description }) => (
    <a href="/programs" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal text-md">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <CubeTransparentIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
              Programs{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <img src={programs.src} alt="" srcSet="" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden ">
        <Link href="/programs" className="flex items-center gap-2">
          <CubeTransparentIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
          Programs{" "}
        </Link>
      </MenuItem>
    </React.Fragment>
  );
}

function NavListPlacements() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListPlacementsItems.map(({ title, description }) => (
    <a href="/placement" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal text-md">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <CodeBracketSquareIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
              Placements{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <img src={placement.src} alt="" srcSet="" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Link href="/placement" className="flex items-center gap-2">
          <CodeBracketSquareIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
          Placements{" "}
        </Link>
      </MenuItem>
    </React.Fragment>
  );
}

function NavListAdmission() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListAdmissionsItems.map(({ title, description }) => (
    <a href="/admissions" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal text-md">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <AcademicCapIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
              Admissions{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <img src={admission.src} alt="" srcSet="" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Link className="flex items-center gap-2" href="/admissions">
          <AcademicCapIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
          Admissions{" "}</Link>
      </MenuItem>
    </React.Fragment>
  );
}

function NavListCampus() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListCampusLifeItems.map(({ title, description, link }) => (
    <a href={link} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography variant="small" className="font-normal text-md">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <TrophyIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
              Our Initiatives{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <img src={initiatives.src} alt="" srcSet="" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 p-0 lg:hidden">
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
          <MenuHandler>
            <Typography variant="small" className="font-normal text-md p-0">
              <span className="flex lg:hidden items-center gap-2 font-medium text-blue-gray-900">
                <TrophyIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
                Our Initiatives{" "}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                    }`}
                />
              </span>
            </Typography>
          </MenuHandler>
          <MenuList className="grid grid-cols-7 gap-3 overflow-visible lg:hidden">
            <ul className="flex w-full flex-col gap-1 lg:hidden">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
      </MenuItem>
    </React.Fragment>
  );
}

function NavListInternaltional() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListInternationalItems.map(({ title, description }) => (
    <a href="/international" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal text-md">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <GlobeAltIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
              International{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <img src={international.src} alt="" srcSet="" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Link href="/international" className="flex gap-2 items-center">
          <GlobeAltIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
          International{" "}</Link>
      </MenuItem>
    </React.Fragment>
  );
}

function NavListGallery() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListGalleryItems.map(({ title, description }) => (
    <a href="/gallery" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal text-md">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <PhotoIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
              Gallery{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <img src={about.src} alt="" srcSet="" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Link href="/gallery" className="flex items-center gap-2">
          <PhotoIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
          Gallery{" "}
        </Link>
      </MenuItem>
    </React.Fragment>
  );
}

function NavListContact() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navLisContactItems.map(({ title, description }) => (
    <a href="/contact-us" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal text-md">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <PhoneIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
              Contact Us{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <img src={contact.src} alt="" srcSet="" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Link className="flex gap-2 items-center" href="/contact-us">
          <Square3Stack3DIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
          Contact Us{" "}</Link>
      </MenuItem>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <div className="flex flex-wrap overflow-hidden justify-end  w-full py-2 items-center gap-2 lg:rounded-full">
        <NavListAbout />
        <NavListPrograms />
        <NavListPlacements />
        <NavListAdmission />
        <NavListCampus />
        <NavListInternaltional />
        <NavListGallery />
        <NavListContact />
      </div>
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto p-2 lg:pl-6 text-gray-800" fullWidth={true}>
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 w-[200px] ml-2 cursor-pointer py-1.5 font-medium"
        >
          <Image src={logo} className="w-[100px] md:w-[200px] h-auto" alt="SVIET Logo" />
        </Typography>
        <div className="flex flex-col flex-1">
          <div className="hidden lg:flex justify-end w-full py-3">
            <div className="w-1/3 flex items-center justify-start gap-2 pr-6 md:ml-6">
              {/* <img src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumVWT9dp3gFkCwLrRjtm2nJhzUIixOYXBA8NDb" alt="" className="w-20 h-20" /> */}
              <img src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAummUzKFoD2prEbC7OkVZGhPtxlqaunXTvJiBsM" alt="" className="w-20 h-20" />
              <img src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumnh7FhvA1z8WShHVuacLDIv5XR0itPqOklGMb" alt="" className="w-20 h-20" />
              <img src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum2eRQteWvT53OZ1aHF8mkfdPiU0cDoMlRG9zL" alt="" className="w-20 h-20" />
            </div>
            <div className="w-1/3 flex items-center  justify-end gap-2">
              <span className="text-sm font-semibold">Get Social:</span>
              <a href="https://www.youtube.com/@svietchandigarh3067"><i className="fab fa-youtube mx-1 text-[#FF0000]"></i></a>
              <a href="https://www.facebook.com/svietofficial/"><i className="fab fa-facebook mx-1 text-[#1877F2]"></i></a>
              <a href="https://www.instagram.com/svietofficial/?hl=en"><i className="fab fa-instagram mx-1 text-[#E4405F]"></i></a>
              <a href="https://www.linkedin.com/company/swami-vivekanand-institute-of-engineering-and-technology/"><i className="fab fa-linkedin mx-1 text-[#0077B5]"></i></a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsvietofficial"><i className="fab fa-twitter mx-1"></i></a>
            </div>
            <div className="w-1/3 flex items-center text-sm font-semibold justify-end gap-2 pr-6 md:ml-6">
              <span className="text-sm font-semibold">Get Connected:</span>
              <a href="https://wa.me/7347411011">
                <i className="fab fa-whatsapp mx-1"></i>
              </a>
              <span className="mx-1">360&#xb0;</span>
              <i className="far fa-compass mx-1"></i>
              <Link href="https://admission.sviet.ac.in/">
                <Button className="border-2 bg-gray-800 p-2 text-sm text-gray-100" size="sm" variant="text">
                  <span>Apply Now</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block w-full mt-[-15px] border-t-2 ">
            <NavList />
          </div>
        </div>
        <div className="flex justify-end">
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden flex items-center justify-center"
          >
            <Bars2Icon className="h-6 w-6 m-auto" />
          </IconButton>
        </div>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}

