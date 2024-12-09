// import React from 'react'

// import success from "@/assets/LandingPage/success.jpg"

// import Link from 'next/link';
// import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

// const ChartYourPath = () => {
//   const chartYourPathContent = [
//     {
//       title: "Fostering Innovation and Exploration",
//       description: " With state-of-the-art facilities and dedicated faculty mentors, students have the opportunity to engage in meaningful research projects, tackle real-world challenges, and contribute to groundbreaking discoveries."
//     },
//     {
//       title: "Forge Partnerships with Industry Leaders",
//       description: "Unlock unparalleled opportunities for collaboration and growth through our strong partnerships with industry leaders. At SVIET, students benefit from hands-on experiences, internships, and mentorship programs offered by leading companies across various sectors. "
//     },
//     {
//       title: "A Dynamic Learning Environment",
//       description: " Our innovative approach to education integrates cutting-edge technology, experiential learning opportunities, and personalized instruction to empower students to become lifelong learners and adaptable problem-solvers."
//     },
//     {
//       title: "Join Our Community of Trailblazers",
//       description: "Join a vibrant community of trailblazers, dreamers, and achievers at SVIET. Here, you'll find a supportive network of peers, faculty, and alumni who are committed to helping you reach your fullest potential. "
//     }
//   ];
//   return (
//     <div style={{backgroundImage:`url(${success.src})`, backgroundSize:"cover", backgroundPosition:"center center", backgroundAttachment:"fixed"}}>
//       <div className='bg-[#00112ded] h-auto lg:h-[100vh] text-white py-10 lg:mt-[-160px] md:mt-auto flex items-center'>
//         <div className="w-10/12 mx-auto ">
//           {/* <p className='text-4xl font-semibold'>
//             Be <span className='text-[#fea700]'>Future Ready</span>
//           </p> */}
//           <div className='flex flex-wrap justify-between'>
//             <p className='text-4xl mt-2 font-semibold'>

//               Chart Your Path To Success To SVIET

//             </p>
//             <div className='flex gap-3'>
//             <Link href="https://admission.sviet.ac.in/"> 
//             <button className='bg-[#fea700] text-white text-xl px-2 py-1 rounded-md'>Apply Now</button>
//             </Link>
              
//               <Link href="/placement"><button className=' text-white text-xl px-2 py-1 rounded-md'>Placements <i className='fa fa-arrow'></i></button></Link>
//             </div>

//           </div>
//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 py-5 gap-6'>
//             {chartYourPathContent.map((data, index)=> (
//               <div key={index}  className='pr-3'>
//                 <p className='text-2xl mb-5'>
//                   {data.title}
//                 </p>
//                 <p className='text-sm mb-5 text-justify'>
//                   {data.description}
//                 </p>
                
//               </div>
//             ))}
//             <div>
//             <Link href="https://admission.sviet.ac.in/"> 
//             <button className='bg-[#fea700] text-white text-xl px-2 ml-12  py-1 rounded-md h-[40%] w-[73%] '>Apply Now</button>
//             </Link>
//             <p className='text-2xl font-semibold ml-12 mt-4 flex'>
//             Why choose <span className='text-[#fea700] pl-2'>SVGOI </span>
//             <ChevronDoubleRightIcon className='h-6 w-6 font-bold mt-1 ml-2 text-[#fea700]' />
//           </p>
          
//             </div>
//             <Link href="/advantages">
//             <button className=' bg-gray-100 text-[#fea700]  text-xl px-2 ml-12 py-1  rounded-md h-[40%] w-[77%] hover:bg-white hover:font-medium transition duration-400 ease-in-out'>Explore More</button>
//             </Link>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ChartYourPath
'use client'

import React from 'react'
import success from "@/assets/LandingPage/success.jpg"
import Link from 'next/link'
import { BookOpen, GraduationCap, Globe2, Building2 } from 'lucide-react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

const ChartYourPath = () => {
  const Card = ({ className, children, ...props }) => {
    return (
      <div className={`rounded-lg overflow-hidden ${className}`} {...props}>
        {children}
      </div>
    )
  }

  const cards = [
    {
      icon: "bg-red-500",
      title: "Milestone Placement Packages",
      description: " SVIET takes pride in its robust placement track record, with top recruiters ensuring bright futures for our students across diverse industries.",
      link: "/placement",
      image: "https://utfs.io/f/1V3V2P4kpAumJrwVw8xviyu6xWXKJ2tVo5vgeS7mwpHlNsha",
      overlay: "bg-red-600",
      badge: "bg-red-500"
    },
    {
      icon: "bg-blue-500",
      title: "We are International",
      description: "Our international collaborations open doors to global opportunities, offering exposure through exchange programs and partnerships with prestigious institutions worldwide.",
      link: "/international",
      image: "https://sviet.org.in/wp-content/uploads/IMG_1545-scaled-1.jpg",
      overlay: "bg-blue-600",
      badge: "bg-blue-500"
    },
    {
      icon: "bg-emerald-500",
      title: "Academic Excellence",
      description: "State-of-the-art facilities and dedicated faculty mentors supporting your educational journey",
      link: "/super-sixty",
      image: "https://utfs.io/f/1V3V2P4kpAumCa51NnAi6EeD1wHIp3zVSgTXJyWtuZ2hdcix",
      overlay: "bg-emerald-600",
      badge: "bg-emerald-500"
    },
    {
      icon: "bg-purple-500",
      title: "Vibrant Campus Life",
      description: "A lively campus with diverse activities, clubs, and events ensures holistic development, fostering friendships and memories that last a lifetime.",
      link: "/about",
      image: "https://utfs.io/f/d77d2e93-bb44-4f3d-8b8b-70651ff5f997-dgdqel.webp",
      overlay: "bg-purple-600",
      badge: "bg-purple-500"
    },
    {
      icon: "bg-yellow-500",
      title: "Innovation Hub",
      description: " SVIET provides a rich academic experience with modern teaching methodologies, hands-on projects, and state-of-the-art facilities to nurture innovation and critical thinking.",
      link: "/uniques",
      image: "https://utfs.io/f/1V3V2P4kpAumZ2LQg08nLS41ZsWrz2yX9qNdG5vVC7FuBlfa",
      overlay: "bg-yellow-600",
      badge: "bg-yellow-500"
    }
  ]

  return (
    <div style={{
      backgroundImage: `url(${success.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed"
    }}>
      <div className='bg-[#00112ded] h-auto text-white py-20  flex items-center'>
        <div className="w-10/12 mx-auto">
          <div className='flex flex-wrap justify-between mb-8'>
            <p className='text-4xl mt-2 font-semibold'>
              Chart <span className='text-[#fea700] font-bold'>Your Path</span> To Success To SVIET
            </p>
            <div className='flex gap-3'>
              <Link href="https://admission.sviet.ac.in/">
                <button className="bg-[#fea700] hover:bg-[#fea700]/90 text-white text-xl px-4 py-2 rounded">
                  Apply Now
                </button>
              </Link>
            </div>
            <p className='max-w-5xl text-justify mt-6 text-gray-100/90'>
              At SVIET, we believe in empowering students to transform aspirations into achievements. With a commitment to academic excellence, cutting-edge infrastructure, and a nurturing environment, we provide the perfect launchpad for your ambitions.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {cards.map((card, index) => (
              <Link href={card.link} key={index}>
                <Card className="relative h-[400px] group">
                  {/* Badge */}
                  <div className="absolute top-4 left-0 z-10">
                    <div className={`${card.badge} h-12 w-3 rounded-r-md`}></div>
                  </div>
                  
                  {/* Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${card.overlay} opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-center items-center p-6`}>
                    <p className="text-white text-lg font-semibold text-center mb-4">
                      {card.description}
                    </p>
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                      View More
                    </button>
                  </div>
                  
                  {/* Title Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white py-5 px-4">
                    <h3 className="text-gray-900 font-semibold text-xl">
                      {card.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 bg-gray-800/70 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex-1">
              <Link href="/advantages">
                <p className='text-3xl font-semibold flex items-center'>
                  Why choose <span className='text-[#fea700] pl-2'>SVGOI</span>
                  <ChevronDoubleRightIcon className='h-6 w-6 font-bold ml-2 text-[#fea700]' />
                </p>
              </Link>
              <p className='max-w-3xl text-justify mt-4 text-gray-100/90'>
                At SVGOI, we don't just educate—we inspire, nurture, and empower. With a focus on holistic development, industry-aligned curricula, and state-of-the-art facilities, we create an environment where students can unlock their true potential.
              </p>
            </div>
            <Link href="/advantages" className="mt-4 md:mt-0">
              <button className="bg-[#fea700] hover:bg-[#fea700]/90 text-white text-xl px-6 py-3 rounded">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartYourPath

