"use client"

import React from "react";


import about from '@/assets/Globals/About.jpg'
import programs from '@/assets/Globals/Programs.jpg'
import admission from '@/assets/Globals/Admissions.jpg'
import placement from '@/assets/Globals/placement.jpg'
import international from '@/assets/Globals/international.jpg'
import contact from '@/assets/Globals/contact.jpg'
import initiatives from '@/assets/Globals/Initiatives.jpg'


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
} from "@heroicons/react/24/solid";

import logo from '@/assets/Brand/Logo.webp'
import Image from "next/image";
import card from "@material-tailwind/react/theme/components/card";


// profile menu component
// const profileMenuItems = [
//   {
//     label: "My Profile",
//     icon: UserCircleIcon,
//   },
//   {
//     label: "Edit Profile",
//     icon: Cog6ToothIcon,
//   },
//   {
//     label: "Inbox",
//     icon: InboxArrowDownIcon,
//   },
//   {
//     label: "Help",
//     icon: LifebuoyIcon,
//   },
//   {
//     label: "Sign Out",
//     icon: PowerIcon,
//   },
// ];

// function ProfileMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
//       <MenuHandler>
//         <Button
//           variant="text"
//           color="blue-gray"
//           className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
//         >
//           <Avatar
//             variant="circular"
//             size="sm"
//             alt="tania andrew"
//             className="border border-gray-900 p-0.5"
//             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//           />
//           <ChevronDownIcon
//             strokeWidth={2.5}
//             className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
//               }`}
//           />
//         </Button>
//       </MenuHandler>
//       <MenuList className="p-1">
//         {profileMenuItems.map(({ label, icon }, key) => {
//           const isLastItem = key === profileMenuItems.length - 1;
//           return (
//             <MenuItem
//               key={label}
//               onClick={closeMenu}
//               className={`flex items-center gap-2 rounded ${isLastItem
//                 ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
//                 : ""
//                 }`}
//             >
//               {React.createElement(icon, {
//                 className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
//                 strokeWidth: 2,
//               })}
//               <Typography
//                 as="span"
//                 variant="small"
//                 className="font-normal"
//                 color={isLastItem ? "red" : "inherit"}
//               >
//                 {label}
//               </Typography>
//             </MenuItem>
//           );
//         })}
//       </MenuList>
//     </Menu>
//   );
// }

// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

const navListAboutItems = [
  {
    title: "What Is SVGOI",
    description:
      "We are committed to providing quality education and holistic development to our students, we strive to create an environment conducive to learning and innovation.",
  },
  {
    title: "Our Flag Bearers",
    description:
      "They are dedicated professionals who are passionate about shaping the future of our students.",
  },
  {
    title: "Our Vision and Mission",
    description:
      "Our vision is to be a global leader in education, research, and innovation.",
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

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
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
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen} >
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal text-md focus:bg-white">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
              Pages{" "}
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
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
function NavListAbout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListAboutItems.map(({ title, description }) => (
    <a href="/about" key={title}>
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
          <Typography as="a" href="#" variant="small" className="font-normal text-md focus:bg-white">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <UserCircleIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
              About{" "}
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
            <img src={about.src} alt="" srcSet="" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
        About{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
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
        <Square3Stack3DIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
        Programs{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>

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
        <Square3Stack3DIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
        Placements{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
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
        <Square3Stack3DIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
        Admissions{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
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
          <Typography as="a" href="#" variant="small" className="font-normal text-md">
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
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
        Our Initiatives{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
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
        <Square3Stack3DIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
        Internationale{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
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
        <Square3Stack3DIcon className="h-[20px] w-[20px] text-blue-gray-500" />{" "}
        Contact Us{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
// nav list component
const navListItems = [
  {
    label: "About",
    icon: UserCircleIcon,
    path: '/about'
  },
  {
    label: "Programs",
    icon: CubeTransparentIcon,
    path: '/programs'
  },
  {
    label: "Placements",
    icon: CodeBracketSquareIcon,
    path: "/placement"
  },
  {
    label: "Admissions",
    icon: AcademicCapIcon,
    path: "/admissions"
  },
  {
    label: "International",
    icon: GlobeAltIcon,
    path: "/international"
  },
  {
    label: "Our Initiatives",
    icon: PowerIcon,
    path: "/international"
  },
  {
    label: "Contact Us",
    icon: PhoneIcon,
    path: '/contact-us'
  },
];



function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">




      <div className="flex flex-wrap overflow-hidden justify-end  w-full py-2 items-center gap-2 lg:rounded-full">
        {/* <NavListMenu /> */}
        <NavListAbout />
        <NavListPrograms />
        <NavListPlacements />
        <NavListAdmission />
        <NavListCampus />
        < NavListInternaltional />
        <NavListContact />
      </div>

      {/* {navListItems.map(({ label, icon, path }, key) => (
        <Typography
          key={label}
          as="a"
          href={path}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))} */}
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
          className="mr-4 md:w-2/12 ml-2 cursor-pointer py-1.5 font-medium"
        >
          <Image src={logo} className="w-[100px] md:w-[250px]" />
        </Typography>
        <div className="flex flex-col md:w-8/12  ">

          <div className="hidden lg:flex justify-end w-full border-b-2 py-3">
            <div className="w-1/3 flex items-center  justify-end gap-2">
              <span className="text-sm font-semibold">Get Social:</span>
              <a href="https://www.facebook.com/svietofficial/"><i className="fab fa-facebook mx-1"></i></a>
              <a href="https://www.instagram.com/svietofficial/?hl=en"><i className="fab fa-instagram mx-1"></i></a>
              <a href="https://www.linkedin.com/company/swami-vivekanand-institute-of-engineering-and-technology/"><i className="fab fa-linkedin mx-1"></i></a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsvietofficial"><i className="fab fa-twitter mx-1"></i></a>
            </div>
            <div className="w-1/3 flex items-center text-sm font-semibold justify-end gap-2 pr-6"><span className="text-sm font-semibold">Get Connected:</span>
              <i className="fab fa-whatsapp mx-1"></i>
              <span className="mx-1">360&#xb0;</span>
              <i className="far fa-compass mx-1"></i>
            </div>
          </div>

          <div className="hidden lg:block w-full  ">
            <NavList />
          </div>
        </div>


        <div className="lg:w-2/12 flex justify-end">

          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden flex items-center justify-center"

          >
            <Bars2Icon className="h-6 w-6 m-auto" />
          </IconButton>
          <Button className="border-2 xl:mr-16  bg-gray-800 lg:p-3 lg:text-lg   text-gray-100" size="sm" variant="text">
            <span>Apply Now</span>

          </Button></div>
        {/* <ProfileMenu /> */}
      </div>

      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>

  );
}