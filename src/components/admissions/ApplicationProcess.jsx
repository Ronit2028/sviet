"use client"

import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
const ApplicationProcess = () => {
  const steps = [
    "Apply online on admissions.mitwpu.edu.in and submit registration form",
    "Receive Login ID and Password (Auto redirect to Student Dashboard)",
    "Fill Application Form (Pay application form Fees - Rs.1500)",
    "Receive entrance test link for MIT-WPU CET (Date will reflect on Student Dashboard / Website)",
    "Appear for entrance test",
    "Check Merit List (Dates/Results notified on Dashboard)",
    "Receive Provisional Offer Letter upon successful selection Number",
    "Complete fee payment (1st Instalment)",
    "Verification (Payment/Personal/Education/Documents)",
    "Receive Final Offer Letter and Offer Guide with student PRN number",
    "Submit original documents",
    "Welcome to MIT-WPU!"
  ];

  return (
    <div className='bg-gray-100'>
      <div className="w-10/12 mx-auto py-8">
        <div className='mt-7 pb-6'>
          <Typography
            color="blue-gray"
            className="mb-2 font-bold uppercase"

          >

          </Typography>
          <Typography
            color="blue-gray"
            className="mb-4 !text-2xl font-bold lg:!text-4xl"
            style={{ fontFamily: 'Raleway' }}
          >
            Admission Procedure
          </Typography>
          <Typography
            variant="lead"
            className=" !text-gray-500"
            style={{ fontFamily: 'Raleway' }}
          >
            Simplified and Comprehensive
          </Typography>
        </div>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex  gap-7 py-3 bg-white rounded-lg shadow-md p-4">
              <div className=" rounded-md mb-3 ">
                <p className='text-center mb-1 font-medium'>
                  Step
                </p>
                <p className="bg-[#fea700] text-white shadow-sm px-4 flex items-center justify-center rounded-md text-lg font-bold h-10 w-10"> {index + 1}</p>
              </div>
              <div className='flex items-center'>
                <p className="font-medium text-gray-800 text-sm md:text-md lg:text-lg">{step}</p>
              </div>
              {/* <ChevronRightIcon className="h-6 w-6 text-gray-400" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>


  );
};

export default ApplicationProcess;
