// "use client"

// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import placement2 from '@/assets/LandingPage/Unlock/library.jpg'
// import placement from '@/assets/LandingPage/Unlock/labs.jpg'
// import placement3 from '@/assets/LandingPage/DSC00544.jpg'
// import placement4 from '@/assets/LandingPage/ic2.jpeg'
// import placement5 from '@/assets/LandingPage/Unlock/sports.jpg'
// import placement6 from '@/assets/LandingPage/ic.jpeg'
// import { Typography } from '@material-tailwind/react';


// const Unlock = () => {
//     const sectionData = [
//         {
//             heading: "Cutting-Edge Laboratories: ",
//             subheading: "Explore our state-of-the-art laboratories equipped with the latest technology and equipment, providing hands-on learning experiences for students to excel in their fields.",
//             description: "READ MORE",
//             img: placement
//         },
//         {
//             heading: "Central Library:",
//             subheading: " Immerse yourself in a world of knowledge at our central library, boasting a vast collection of resources and a conducive learning environment to support your academic journey.",
//             description: "READ MORE",
//             img: placement2
//         },
//         {
//             heading: "Research Labrotaries:",
//             subheading: "Join the forefront of innovation through our research labs, where faculty and students collaborate on groundbreaking research projects to address real-world challenges.",
//             description: "READ MORE",
//             img: placement3
//         },
//         {
//             heading: "Scholarship Opportunities: ",
//             subheading: "Fulfill your academic aspirations with our range of scholarship programs, designed to recognize and support exceptional talent across various disciplines",
//             description: "READ MORE",
//             img: placement6
//         },
//         {
//             heading: "Sports Facilities",
//             subheading: "Unleash your potential and stay fit at our world - class sports facilities, promoting holistic development and a healthy lifestyle for all students.",
//             description: "READ MORE",
//             img: placement5
//         },
//         {
//             heading: "Industrial Collaboration",
//             subheading: "ndustrial Collaboration: Benefit from our strong ties with industry partners, offering opportunities for internships, projects, and real-world experience to enhance your skillset and employability.",
//             description: "READ MORE",
//             img: placement4
//         }
//     ];

//     const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             speed: 500,
//             autoplay: true,
//         };

//     return (
//         <div className='w-10/12 mx-auto py-10 my-5'>
//             <p className="text-4xl text-medium w-full md:w-1/2 mx-auto text-start md:text-center pb-3 mb-3 pt-5">

//             </p>
//             <p className='text-lg text-medium w-full md:w-1/2 mx-auto text-start md:text-center pb-3 mb-3'>
//             </p>


//             <Typography
//                 color="blue-gray"
//                 className=" mb-4 !text-2xl font-bold lg:!text-4xl"
//             >
//                 Unlocking Opportunities at <span className="text-[#fea700]">SVGOI</span>  Empowering Students, Building Futures
//             </Typography>
//             <Typography
//                 variant="lead"
//                 className=" !text-gray-500 w-full   mb-5 pb-5"
//             >
//                Join us at SVIET to unlock endless possibilities and embark on a journey of academic excellence and personal growth.  </Typography>


//             <div className='mt-5'>
//                 <Slider {...settings}>

//                     {sectionData.map((section, index) => (
//                         <div key={index} className=" w-10/12 mx-auto rounded-md shadow-md text-white">
//                             <div className='rounded-md mr-4 justify-between md:h-[60vh] h-auto' style={{ backgroundImage: `url(${section.img.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
//                                 <div className='bg-[#00000077] w-full h-full flex flex-col justify-end p-6 py-12'>
//                                     <h2 className='text-4xl mb-4'>{section.heading}</h2>
//                                     <p className='text-sm lg:text-md w-full lg:w-1/2 mb-2'>{section.subheading}</p>
//                                 </div>

//                             </div>
//                         </div>
//                     ))}

//                 </Slider>
//             </div>
//         </div>
//     );
// }

// export default Unlock;

'use client'

import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import placement2 from '@/assets/LandingPage/Unlock/library.jpg'
import placement from '@/assets/LandingPage/Unlock/labs.jpg'
import placement3 from '@/assets/LandingPage/DSC00544.jpg'
import placement4 from '@/assets/LandingPage/ic2.jpeg'
import placement5 from '@/assets/LandingPage/Unlock/sports.jpg'
import placement6 from '@/assets/LandingPage/ic.jpeg'

const Card = ({ className, ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-md ${className}`} {...props} />
)

const CardContent = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
)

const Button = ({ className, ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
    {...props}
  />
)

const sectionData = [
  {
    heading: "Cutting-Edge Laboratories",
    subheading: "Explore our state-of-the-art laboratories equipped with the latest technology and equipment, providing hands-on learning experiences for students to excel in their fields.",
    img: placement
  },
  {
    heading: "Central Library",
    subheading: "Immerse yourself in a world of knowledge at our central library, boasting a vast collection of resources and a conducive learning environment to support your academic journey.",
    img: placement2
  },
  {
    heading: "Research Laboratories",
    subheading: "Join the forefront of innovation through our research labs, where faculty and students collaborate on groundbreaking research projects to address real-world challenges.",
    img: placement3
  },
  {
    heading: "Scholarship Opportunities",
    subheading: "Fulfill your academic aspirations with our range of scholarship programs, designed to recognize and support exceptional talent across various disciplines.",
    img: placement6
  },
  {
    heading: "Sports Facilities",
    subheading: "Unleash your potential and stay fit at our world-class sports facilities, promoting holistic development and a healthy lifestyle for all students.",
    img: placement5
  },
  {
    heading: "Industrial Collaboration",
    subheading: "Benefit from our strong ties with industry partners, offering opportunities for internships, projects, and real-world experience to enhance your skillset and employability.",
    img: placement4
  }
]

const Unlock = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-32 lg:min-h-[80vh] flex items-center">
      <div className="container mx-auto w-11/12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold  mb-4"
        >
          Unlocking Opportunities at <span className="text-[#fea700]">SVGOI</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600  mb-12"
        >
          SVGOI opens doors to growth, innovation, and career success through hands-on experience and industry partnerships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-[30vh] lg:h-[65vh]"
        >
          <Slider {...settings}>
            {sectionData.map((section, index) => (
              <div key={index} className="px-2 h-full">
                <Card className="overflow-hidden h-full group">
                  <div className="relative h-full">
                    <img 
                      src={section.img.src}
                      alt={section.heading} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent  opacity-70 "></div>
                    <CardContent className="absolute bottom-0 left-0 right-0 lg:p-4 text-black bg-white">
                      <h3 className="text-lg lg:text-2xl font-semibold lg:mb-2 mt-4 text-[#fea700] transition-colors">
                        {section.heading}
                      </h3>
                      <p className="text-sm lg:mb-3 lg:block hidden">
                        {section.subheading}
                      </p>
                     
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </motion.div>
{/* 
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-32"
        >
          <Button className="bg-[#fea700] hover:bg-[#fea700]/90 text-white px-6 py-3 text-lg rounded">
            Explore All Opportunities
          </Button>
        </motion.div> */}
      </div>
    </div>
  )
}

export default Unlock

