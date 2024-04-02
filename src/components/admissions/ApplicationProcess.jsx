"use client"

import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
const ApplicationProcess = () => {
  const steps = [
    "Visit sviet.ac.in and complete the online application form for admission.",
    "Upon submission, you will receive a confirmation email containing your unique Application ID.",
    "Prepare for and appear in the SVIET-EEE (Entrance Exam Eligibility Test-cum-Scholarship Exam)",
    "Check the SVIET website or your email for the announcement of SVIET-EEE results and your name on the merit list",
    " Shortlisted candidates will undergo an English language proficiency test.",
    "Participate in group discussions or personal interviews to assess interpersonal skills and subject knowledge.",
    " Depending on the course, additional tests may be conducted to assess specific skills.",
    "Carry all original mark sheets and essential credentials for verification",
    "Upon successful completion of tests and interviews, receive a provisional offer letter from SVIET.",
    "Complete the fee payment as per instructions in the offer letter.",
    "Receive the final offer letter along with a unique Student PRN.",
    "Submit all original documents as per the requirements mentioned in the offer letter.",
    "Welcome to SVIET! to begin your academic journey."
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
        
          >
            Admission Procedure
          </Typography>
          <Typography
            variant="lead"
            className=" !text-gray-500"
      
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
