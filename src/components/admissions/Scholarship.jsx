import React from "react";
import category from "@/assets/admissions/category.jpg";

const Scholarship = () => {
  return (
    <div className="w-full h-screen mt-2 relative flex flex-wrap gap-3 ">
      <div
        className=" md:w-5/12 z-[-2]"
        style={{
          backgroundImage: `url(${category.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div
          className="md:w-5/12 z-[-1] absolute top-0  h-full text-white"
          style={{
            backgroundColor: "rgb(254 , 167 , 0 )",
            mixBlendMode: 'multiply',
          }}
        ></div>
        <div className="z-[2] w-full h-full flex items-center">
          <div className="mx-auto ">
            <h2 className="md:text-5xl text-xl w-[300px] text-wrap font-medium text-white"> 
              SVGOI Scholarships
            </h2>
            <p className="w-[300px] text-gray-200 mt-2">
            ESSENTIAL FINANCIAL SUPPORT FOR SECURING YOUR ACADEMIC FUTURE
            </p>
            <button className='bg-white text-black p-2 rounded-md text-lg mt-3 cursor-pointer hover:bg-gray-200'>Apply Now</button>
          </div>
        </div>
      </div>
      <div className="w-6/12 flex flex-wrap gap-5 mx-auto">
          <div className="">

          </div>
      </div>
    </div>
  );
};

export default Scholarship;
