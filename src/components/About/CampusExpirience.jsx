"use client";

import React from "react";
import bannerImage from "@/assets/LandingPage/bannerImage.jpg";

import { Typography } from "@material-tailwind/react";

const CampusExpirience = () => {
  return (
    <div>
      <div
        className="w-full text-white"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="  rounded-md flex flex-col justify-center w-full h-full bg-[#000000e3]">
          <section className="text-gray-600 body-font">
            <div className="w-10/12 py-16 mx-auto">
              <div className="flex flex-col text-start w-full mb-10">
                <Typography variant="h6" color="white" className="text-lg">
                  FOR <span className="text-[#fea700]">BRIGHT FUTURE</span>
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="my-2 !text-2xl lg:!text-4xl mb-4"
                >
                  Discover the Best Engineering Programs at SVGOI
                </Typography>
                <Typography
                  variant="lead"
                  className="mx-auto w-full text-white text-sm lg:text-lg text-justify"
                >
                  Situated just 30 km from Chandigarh on the NH-1
                  Chandigarh-Patiala National Highway, SVGOI offers a prime
                  location and a world-class education. The sprawling campus is
                  strategically positioned, equidistant from Chandigarh, Mohali,
                  Panchkula, Ambala, and Patiala. SVGOI takes pride in its
                  culturally rich and diverse community. The campus welcomes
                  students from across India, including Assam, Nagaland,
                  Himachal Pradesh, Uttarakhand, Uttar Pradesh, Delhi-NCR, and
                  Punjab, as well as international students from Egypt, Nepal,
                  and beyond. This vibrant mix of cultures creates a melting pot
                  of ideas and traditions, fostering an unparalleled learning
                  and social experience.
                </Typography>{" "}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CampusExpirience;
