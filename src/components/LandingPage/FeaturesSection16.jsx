"use client"

import React from "react";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

import adm from '@/assets/LandingPage/Chandigarh/admission-cell-3-1-scaled-1-removebg-preview.png'
import hand from '@/assets/LandingPage/Chandigarh/hand.png'
import cultural from '@/assets/LandingPage/Chandigarh/cultural.png'
import image from '@/assets/LandingPage/Chandigarh/peace.png'

export function FeatureSection16() {
  return (
    <section className="lg:py-28 py-10 px-8 bg-gray-100/50">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          Features
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
          Explore Why Chandigarh
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-lg !text-gray-500"
        >
          Discover the unique features that make Chandigarh an ideal destination for education and growth.
        </Typography>
      </div>
      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card
          className="col-span-1 bg-white overflow-hidden"
          shadow={false}

        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Educational Hub
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Chandigarh is home to renowned educational institutions offering diverse academic programs and research opportunities.
            </Typography>
            <img
              src={adm.src}
              alt="iphone"
              className="w-full xl:h-[370px] lg:h-[360px] lg:translate-y-8 translate-y-7 object-contain object-bottom"
            />
          </CardBody>
        </Card>
        <Card
          className="col-span-2 bg-white overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Serene Environment
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Experience the tranquility and picturesque surroundings of Chandigarh, nestled amidst the Shivalik range.
            </Typography>
            <img
              src={image.src}
              alt="laptop"
              className="w-full lg:h-[380px] md:h-[300px] h-[220px] lg:translate-y-16 translate-y-10 object-contain object-center"
            />
          </CardBody>
        </Card>
      </div>
      <div className="container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card
          className="col-span-2 bg-white overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Cultural Diversity
            </Typography>
            <Typography className="text-center max-w-sm mx-auto text-base font-normal leading-7 !text-gray-500">
              Immerse yourself in Chandigarh's rich cultural tapestry, welcoming people from diverse backgrounds and traditions.
            </Typography>
            <img
              src={cultural.src}
              alt="laptop"
              className="w-full xl:h-[355px] lg:h-[380px] md:h-[300px] h-[180px] lg:translate-y-6 translate-y-10 object-contain object-center"
            />
          </CardBody>
        </Card>
        <Card className="col-span-1 bg-white" shadow={false}>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Career Opportunities
            </Typography>
            <Typography className="text-center max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Tap into Chandigarh's thriving job market across industries such as IT, Biotechnology, and Pharmaceuticals.
            </Typography>

            <div className="flex justify-between items-end mt-[144px]">
              <div className="flex gap-2">

                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="mr-4 text-xs font-bold cursor-pointer"
                >
                </Typography>
              </div>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="text-xs font-bold cursor-pointer"
              >

              </Typography>
              <img
                src={hand.src}
                alt="logo"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default FeatureSection16;
