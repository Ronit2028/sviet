"use client"

import React from 'react';
import { Typography } from '@material-tailwind/react';
import { MdPhone, MdSecurity, MdDirectionsBus, MdPermPhoneMsg, MdPlace } from 'react-icons/md';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { PiHandshakeBold } from 'react-icons/pi';

const OtherContacts = () => {
  const contactDetails = [
    { department: 'Admin/Reception', icon: <MdPermPhoneMsg />, numbers: ['01762-507222', '01762-507888'] },
    { department: 'Admission Cell', icon: <PiHandshakeBold />, numbers: ['94652-33333', '01762-507800'] },
    { department: 'Security', icon: <MdSecurity />, numbers: ['94649-09298'] },
    { department: 'Transport', icon: <MdDirectionsBus />, numbers: ['84270-25133'] },
    { department: 'Placement Cell', icon: <RiMoneyDollarBoxFill />, numbers: ['8556001844'] }
  ];

  return (
    <div className='w-10/12 mx-auto py-12 bg-gray-100'>
      <Typography color="blue-gray" className="mb-2 font-bold uppercase" />
      <Typography color="blue-gray" className="mb-4 !text-2xl font-bold lg:!text-4xl">
        Other Contacts
      </Typography>
      <Typography variant="lead" className=" !text-gray-500">
        Want To Reach Out To Us
      </Typography>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 py-12'>
        {contactDetails.map((element, key) => (
          <div key={key} className='bg-white rounded-md p-6 shadow-md flex items-center gap-4 flex-wrap'>
            <div>
              <span className="mr-2 text-white bg-[#00112d] rounded-md h-12 w-12 flex items-center justify-center text-xl">{element.icon}</span>

            </div>

            <div>
              <div className="flex items-center text-md">
                <p className='text-md  font-medium'>{element.department}</p>
              </div>
              <div className='flex flex-wrap gap-3'>
                {element.numbers.map((number, index) => (
                  <p key={index} className='text-[#fea700] text-md lg:text-lg xl:text-2xl'>
                    {number}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherContacts;
