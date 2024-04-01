"use client"

import React from 'react'
import bannerImage from '@/assets/LandingPage/bannerImage.jpg'


import { Typography } from '@material-tailwind/react'

const CampusExpirience = () => {
  return (
    <div>
      <div className="w-full text-white" style={{ backgroundImage: `url(${bannerImage.src})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
        <div className='  rounded-md flex flex-col justify-center w-full h-full bg-[#000000e3]'>
          <section className="text-gray-600 body-font">
            <div className="w-10/12 px-5 py-24 mx-auto">
              <div className="flex flex-col text-start w-full mb-10">

                <Typography
                  variant="h6"
                  color="white"
                  className="text-lg"
                >
                  FOR <span className='text-[#fea700]'>
                    BRIGHT FUTURE
                  </span>
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="my-2 !text-2xl lg:!text-4xl mb-4"
                >
                  Get The Best Engineering Programs
                </Typography>
                <Typography
                  variant="lead"
                  className="mx-auto w-full text-white text-sm lg:text-lg text-justify"
                >
                  Swami Vivekanand Institute Of Engineering & Technology(SVIET) is the premier Institute of India and is known for its high standards in teaching and research and attracts eminent scholars of its faculty. It was established in 2004 under the approval of All India Council of Technical Education India (AICTE) Ever since its inception, a strong commitment to excellence in teaching and research has made this Institute a role-model and path-setter for other colleges in the country. Its rich academic tradition has always attracted the most talented students who later on went on to make important contribution to their society.
                </Typography>  </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CampusExpirience