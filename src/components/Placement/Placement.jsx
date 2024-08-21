// import React from 'react';
// import img1 from "../../assets/placement/placements/aamil.png";
// import img2 from "../../assets/placement/placements/ocean.png";
// import img3 from "../../assets/placement/placements/uc.png";
// import img4 from "../../assets/placement/placements/value.png";
// import img5 from "../../assets/placement/placements/jp.png";
// import img6 from "../../assets/placement/placements/decathlon.png";
// import img7 from "../../assets/placement/placements/altruist.png";
// import img8 from "../../assets/placement/placements/Clicklabs.webp";
// import img9 from "../../assets/placement/placements/MBA.webp";
// import img10 from "../../assets/placement/placements/RMC.webp";
// import img11 from "../../assets/placement/placements/park.webp";
// import img12 from "../../assets/placement/placements/manali.webp";
// import img13 from "../../assets/placement/placements/jio.jpg";
// import img14 from "../../assets/placement/placements/pharma.jpg";

// export default function Widget() {
//     const alumni = {
//         name: "AVINASH VERMA",
//         image: img13,
//         package: "50 LPA"
//     };

//     const students =[
//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         },
//         // Repeat this structure 11 more times for a total of 12 cards
//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         },
//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         },
//     ];

//     const alu = [

//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         },
//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         },
//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         },
//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         },
//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         },
//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         },
//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         },
//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         },
//         {
//             name: "MOON MANDAL",
//             image: img13,
//             package: "11 LPA"
//         }
//     ];

//     return (
//         <div className="bg-zinc-100 pl-4 ">
//             <div className="container mx-auto">
//                 <div className="flex flex-wrap h-[100vh] ">
//                     <div className="w-full lg:w-2/12 p-4 pt-8">
//                         <h2 className="text-2xl font-bold">TRANSFORMING DREAMS INTO REALITY</h2>
//                         <p className="bg-yellow-500 text-white inline-block px-2 py-1 mt-2">Our Alumni Our Pride</p>
//                         <p className="mt-4">Join the brilliant and dynamic community of learning at SVIET</p>
//                         <p className="mt-4 font-bold">1000+ PLACEMENTS IN 250+ COMPANIES</p>
//                         <p className="text-sm">SESSION 2023-24</p>
//                         <p className="text-sm mt-2">Awarded as The Best Placement College in North India</p>
//                     </div>

//                     <div className="w-full lg:w-2/12 p-4 bg-yellow-400 rounded-lg h-[91vh] mt-[30px] ">
//                         <div className="text-center">
//                             <p className="font-bold text-lg">{alumni.name}</p>
//                             <img src={alumni.image} alt="Jio Logo" className="mx-auto my-4" style={{ width: "100px", height: "100px" }} />
//                             <p className="text-4xl font-bold">{alumni.package}</p>
//                         </div>
//                     </div>
//                     <div className="w-full lg:w-2/12 p-4 pt-8">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-x-4 gap-y-8 rounded-lg ">
//                             {students.map((students, index) => (
//                                 <div key={index} className="bg-red-500 text-white p-4 rounded-lg h-[200px] flex flex-col justify-evenly">
//                                     <p className="font-bold">{students.name}</p>
//                                     <img src={students.image} alt="Jio Logo" className="my-2" style={{ width: "50px", height: "50px" }} />
//                                     <p>{students.package}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="w-full lg:w-6/12 p-4 bg-yellow-400 h-[100vh] pt-8">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-8 rounded-lg ">
//                             {alu.map((alumnus, index) => (
//                                 <div key={index} className="bg-red-500 text-white p-4 rounded-lg h-[200px] flex flex-col justify-evenly">
//                                     <p className="font-bold">{alumnus.name}</p>
//                                     <img src={alumnus.image} alt="Jio Logo" className="my-2" style={{ width: "50px", height: "50px" }} />
//                                     <p>{alumnus.package}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";
import React from "react";
import img1 from "../../assets/placement/logos/19.png";
import img2 from "../../assets/placement/placements/Jiodidita.png";
import img3 from "../../assets/placement/logos/17.png";
import img4 from "../../assets/placement/logos/18.png";
import img5 from "../../assets/placement/logos/20.png";
import img6 from "../../assets/placement/logos/18.png";
import img7 from "../../assets/placement/logos/21.png";
import img8 from "../../assets/placement/logos/22.png";
import img9 from "../../assets/placement/logos/26.png";
import img10 from "../../assets/placement/logos/27.png";
import img11 from "../../assets/placement/logos/25.png";
import img12 from "../../assets/placement/logos/28.png";
import img13 from "../../assets/placement/logos/26.png";
import img14 from "../../assets/placement/logos/26.png";
import img32 from "../../assets/placement/logos/23.png";
import img33 from "../../assets/placement/logos/24.png";
import img34 from "../../assets/placement/logos/29.png";
import backgroundImage from "../../assets/placement/students/stu.jpg";
import img16 from "../../assets/placement/students/1.jpg";
import img17 from "../../assets/placement/students/2.jpg";
import img18 from "../../assets/placement/students/3.jpg";
import img19 from "../../assets/placement/students/4.jpg";
import img20 from "../../assets/placement/students/5.jpg";
import img21 from "../../assets/placement/students/6.jpg";
import img30 from "../../assets/placement/students/15.jpg";
import img22 from "../../assets/placement/students/7.jpg";
import img23 from "../../assets/placement/students/8.jpg";
import img24 from "../../assets/placement/students/9.jpg";
import img25 from "../../assets/placement/students/10.jpg";
import img26 from "../../assets/placement/students/11.jpg";
import img27 from "../../assets/placement/students/12.jpg";
import img28 from "../../assets/placement/students/13.jpg";
import img29 from "../../assets/placement/students/14.jpg";
import img31 from "../../assets/placement/students/16.jpg";

export default function Placement() {
  const alumni = {
    name: "AVINASH VERMA",
    package: "50 LPA",
    image: img1,
  };

  const students = [
    {
      name: "MOON MANDAL",
      logo: img2,
      package: "11 LPA",
      backgroundImage: img16,
    },
    {
      name: "SIMRAN KAUR",
      logo: img3,
      package: "10 LPA",
      backgroundImage: img22,
    },
    {
      name: "YASH KHANDELWAL",
      logo: img4,
      package: "16 LPA",
      backgroundImage: img19,
    },
    {
      name: "JYOTI CHAUBEY",
      logo: img32,
      package: "11 LPA",
      backgroundImage: img30,
    },
    {
      name: "SHAIENA PRIYA",
      logo: img10,
      package: "9 LPA",
      backgroundImage: img23,
    },
    {
      name: "SWATI KHANNA",
      logo: img7,
      package: "16 LPA",
      backgroundImage: img18,
    },
    {
      name: "ADITI RASHMI",
      logo: img33,
      package: "18 LPA",
      backgroundImage: img26,
    },
    {
      name: "AVINASH KUMAR",
      logo: img34,
      package: "15 LPA",
      backgroundImage: img25,
    },
    {
      name: "ROHAN SHUKLA",
      logo: img8,
      package: "18 LPA",
      backgroundImage: img20,
    },
    {
      name: "ASHISH KUMAR",
      logo: img11,
      package: "18 LPA",
      backgroundImage: img24,
    },
    {
      name: "ANKIT KUMAR",
      logo: img12,
      package: "27 LPA",
      backgroundImage: img28,
    },
    {
      name: "PAYAL KUMARI",
      logo: img13,
      package: "16 LPA",
      backgroundImage: img29,
    },
    {
      name: "GAURAV SAW",
      logo: img10,
      package: "11 LPA",
      backgroundImage: img31,
    },
    {
      name: "FARZAN ALAM",
      logo: img7,
      package: "14 LPA",
      backgroundImage: img27,
    },
    {
      name: "RITIK KUMAR",
      logo: img4,
      package: "14 LPA",
      backgroundImage: img21,
    },
    {
      name: "RITU KOUL",
      logo: img5,
      package: "13 LPA",
      backgroundImage: img17,
    },
  ];

  return (
    <div className="bg-zinc-50 pl-4">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap min-h-screen">
          <div className="w-full lg:w-2/12 p-4 pt-4 flex flex-col justify-between mb-6 lg:my-6 custom-macbook">
            <div>
              <h2 className="text-2xl lg:text-[27px] font-bold ">
                TRANSFORMING DREAMS INTO REALITY
              </h2>
              <p className="bg-yellow-500 text-white inline-block px-2 py-1 mt-2">
                Our Alumni Our Pride
              </p>
            </div>
            <p className="mt-8 lg:mt-0 font-bold">
              Join the brilliant and dynamic community of learning at SVIET
            </p>
            <div>
              <p className="mt-4 font-bold text-2xl md:text-3xl lg:text-3xl ">
                1000+ PLACEMENTS IN 250+ COMPANIES
              </p>
              <p className="text-sm font-bold border-b-2 border-black">
                SESSION 2023-24
              </p>
              <p className="text-sm mt-2 font-bold">
                Awarded as The Best Placement College in North India
              </p>
            </div>

            <style jsx>{`
              @media only screen and (min-width: 1280px) and (max-width: 1440px) {
                .custom-macbook {
                  padding-left: 20px !important;
                  padding-right: 20px !important;
                }

                .custom-macbook h2 {
                  font-size: 22px !important;
                }

                .custom-macbook p {
                  margin-top: 20px !important;
                  font-size: 14px !important;
                  font: bold !important;
                }
              }
            `}</style>
          </div>

          {/* Alumni Section */}
          <div
            className="w-full lg:w-2/12 p-4 rounded-lg h-full flex flex-col justify-between lg:h-auto lg:mt-8 lg:mb-5 text-white custom-macbook"
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-left">
              <p className="font-bold text-[25px]">{alumni.name}</p>
              <img
                src={alumni.image.src}
                alt="Alumni Logo"
                className="my-4 mt-8 h-auto w-auto"
              />
              <p className="text-4xl font-bold">{alumni.package}</p>
            </div>
          </div>

          {/* Students Section 1 */}
          <div className="w-full lg:w-2/12 p-4 pt-8">
            <div className="grid grid-cols-1 gap-x-4 gap-y-8">
              {students.slice(0, 4).map((student, index) => (
                <div
                  key={index}
                  className="text-white p-4 rounded-lg flex flex-col justify-center h-48 "
                  style={{
                    backgroundImage: `url(${student.backgroundImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <p className="font-bold text-[19px]">{student.name}</p>
                    <div className="flex flex-col">
                      <img
                        src={student.logo.src}
                        alt="Student Logo"
                        className="h-20 w-[85px] mb-2 object-contain"
                      />
                      <p className="font-bold text-2xl">{student.package}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Students Section 2 */}
          <div className="w-full lg:w-6/12 p-4 bg-[#00112df2] h-full pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-8">
              {students.slice(4).map((student, index) => (
                <div
                  key={index}
                  className="text-white p-4 pl-4 rounded-lg flex flex-col justify-center h-48"
                  style={{
                    backgroundImage: `url(${student.backgroundImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <p className="font-bold text-[19px]">{student.name}</p>
                    <div className="flex flex-col">
                      <img
                        src={student.logo.src}
                        alt="Student Logo"
                        className="h-20 w-[85px] mb-2 object-contain"
                      />
                      <p className="font-bold text-2xl">{student.package}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
