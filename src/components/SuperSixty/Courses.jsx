// "use client"

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// const Courses = () => {
//   const reasons = [
//     {
//       title: "Backend with Java",
//       description: "Master the art of backend development using Java, a versatile and widely-used programming language.",
//       iconClass: "fab fa-java"
//     },
//     {
//       title: "Frontend Development",
//       description: "Learn modern frontend development techniques and frameworks to build interactive and responsive web applications.",
//       iconClass: "fab fa-react"
//     },
//     {
//       title: "Graphic Designing",
//       description: "Unleash your creativity and express yourself visually through graphic design. Learn essential design principles, tools, and software.",
//       iconClass: "fas fa-palette"
//     },
//     {
//       title: "Softskills",
//       description: "Develop essential soft skills such as communication, teamwork, leadership, and problem-solving to excel in your career and personal life.",
//       iconClass: "fas fa-users"
//     },
//     {
//       title: "C++ Programming",
//       description: "Expand your programming skills with C++, a powerful and efficient language used in game development, system programming, and more.",
//       iconClass: "fab fa-cuttlefish"
//     },
//     {
//       title: "Digital Marketing",
//       description: "Learn the ins and outs of digital marketing strategies, including SEO, SEM, social media marketing, and analytics, to boost your online presence.",
//       iconClass: "fas fa-chart-line"
//     }
// ];

// // Settings for React Slick Carousel
// const settings = {
//     infinite:true,
//     dots: true,
//     autoplay: true,
//     arrows: false,
//     speed: 500,
//     slidesToShow: 3.5, // Show 2.5 slides on desktop
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1024, // Tablet breakpoint
//             settings: {
//                 slidesToShow: 1.5, // Show 1.5 slides on tablet
//             }
//         },
//         {
//             breakpoint: 600, // Phone breakpoint
//             settings: {
//                 slidesToShow: 1, // Show 1 slide on phone
//             }
//         }
//     ]
// };

// return (
//     <div className='text-white'>
//         <div className="w-full h-full bg-[#00112d] py-12">
//             <div className="w-10/12 mx-auto py-12">
//                 <p className='text-3xl font-medium pb-3'>
//                     Our Courses
//                 </p>
//                 <p className='text-xl pl-2 border-l-4 border-[#fea700]'>
//                     Bridging the gap between Industry and Academics
//                 </p>

//                 {/* React Slick Carousel */}
//                 <div className='grid grid-cols-1 md:grid-cols-2'>
//                     {reasons.map((reason, index) => (
//                         <div key={index} className='mt-6 h-[45vh] lg:h-[30vh] flex items-center p-3'>
//                             <div className="bg-white flex flex-col justify-center h-full rounded-md text-[#00112d] p-6">
//                                 <div className='flex items-center justify-center p-5 w-20 h-20 rounded-full text-3xl bg-[#00112d] text-white'>
//                                     <i className={reason.iconClass}></i>
//                                 </div>
//                                 <div className="ml-3">
//                                     <h3 className='text-2xl font-meium py-4'>{reason.title}</h3>
//                                     <p className='text-lg'>{reason.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// }

// export default Courses

'use client'

import React from 'react'
import { Code2, Palette, Users, PlusCircle, LineChart, Atom } from 'lucide-react'

const courses = [
  {
    title: "Backend with Java",
    description: "Master the art of backend development using Java, a versatile and widely-used programming language.",
    icon: Code2,
    color: "bg-red-500"
  },
  {
    title: "Frontend Development",
    description: "Learn modern frontend development techniques and frameworks to build interactive and responsive web applications.",
    icon: Atom,
    color: "bg-blue-500"
  },
  {
    title: "Graphic Designing",
    description: "Unleash your creativity and express yourself visually through graphic design. Learn essential design principles, tools, and software.",
    icon: Palette,
    color: "bg-purple-500"
  },
  {
    title: "Soft Skills",
    description: "Develop essential soft skills such as communication, teamwork, leadership, and problem-solving to excel in your career and personal life.",
    icon: Users,
    color: "bg-green-500"
  },
  {
    title: "C++ Programming",
    description: "Expand your programming skills with C++, a powerful and efficient language used in game development, system programming, and more.",
    icon: PlusCircle,
    color: "bg-indigo-500"
  },
  {
    title: "Digital Marketing",
    description: "Learn the ins and outs of digital marketing strategies, including SEO, SEM, social media marketing, and analytics, to boost your online presence.",
    icon: LineChart,
    color: "bg-yellow-500"
  }
]

export default function Courses() {
  return (
    <section className="bg-[#00112d] py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 w-10/12">
        <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
        <div className="flex items-center mb-12">
          <div className="w-1 h-8 bg-[#fea700] mr-4"></div>
          <p className="text-xl">Bridging the gap between Industry and Academics</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className={`w-16 h-16 rounded-full ${course.color} flex items-center justify-center mb-4`}>
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}