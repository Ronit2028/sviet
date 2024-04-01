import React from 'react'

const Achievement = () => {
  return (
    <div className='w-full py-12 flex flex-wrap'>
      <div className='w-full md:w-1/2 flex items-center'>
        <div className="w-10/12 mx-auto flex flex-col justify-center">
          <p className="text-3xl font-medium mb-3">
            Guaranteed Success:
          </p>
          <p className="mb-6 pl-2 border-l-4 border-[#fea700] text-lg">
            Empowering the Next Generation: The Super 60 Batch
          </p>
          <p className='text-justify text-lg'>
          Dedicated to ensuring the success of every student, the Super 60 Batch receives personalized attention, mentorship, and support from faculty members and industry experts. With a focus on holistic growth and skill development, students in this elite group are groomed to excel in both academic and professional endeavors.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 hidden md:block">
        <img src="https://media.licdn.com/dms/image/D4D22AQHRnJD7yH8OnA/feedshare-shrink_2048_1536/0/1697104133139?e=1714608000&v=beta&t=tghNYnoxP65AJtvVB8xzR9kQo63m6wkFdwfRREnsaiM" alt="" srcset="" width={"100%"} className='rounded-md'/>
      </div>
    </div>
  )
}

export default Achievement