import React from 'react'

const Eligibility = () => {
    return (
        <div className='w-10/12 py-6 md:py-10 mx-auto flex flex-wrap'>

            <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
                <div className='w-full rounded-md' style={{ backgroundImage: `url(https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?t=st=1709886977~exp=1709890577~hmac=66a3b50c64d38aee89f9b742b0e88f02c4dc089db5b293ca2604061e1b83db2d&w=1380)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                    <div className="w-full h-full rounded-md p-6 bg-[#0000007a] text-white flex flex-col justify-end" >
                        <p className='font-medium text-2xl pb-3'>
                            Web Developer
                        </p>
                        <p className='text-sm pb-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatem? Et obcaecati soluta excepturi quos, minus quae praesentium cupiditate. Provident!
                        </p>
                    </div>
                </div>
                <div className='w-full rounded-md' style={{ backgroundImage: `url(https://img.freepik.com/free-photo/young-man-looking-fiber-optic-tester-medium-shot_23-2148323492.jpg?t=st=1709887648~exp=1709891248~hmac=fd97896d6c9a43b42ed17e8b74044b3b8817bd43480bcbb1c41abe7e4354860b&w=1380)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                    <div className="w-full h-full rounded-md p-6 bg-[#0000007a] text-white flex flex-col justify-end" >
                        <p className='font-medium text-2xl pb-3'>
                            Network Engineer
                        </p>
                        <p className='text-sm pb-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatem? Et obcaecati soluta excepturi quos, minus quae praesentium cupiditate. Provident!
                        </p>
                    </div>
                </div>
                <div className='w-full rounded-md' style={{ backgroundImage: `url(https://img.freepik.com/free-photo/handsome-latin-businessman-examining-sales-data-while-working-home_662251-890.jpg?t=st=1709887709~exp=1709891309~hmac=617a921bdc9afe34c3a226aaba222774281d21fc3bba4570fcb1b10466eb7878&w=826)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                    <div className="w-full h-full rounded-md p-6 bg-[#0000007a] text-white flex flex-col justify-end" >
                        <p className='font-medium text-2xl pb-3'>
                            Database Administrator
                        </p>
                        <p className='text-sm pb-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatem? Et obcaecati soluta excepturi quos, minus quae praesentium cupiditate. Provident!
                        </p>
                    </div>
                </div>
                <div className='w-full rounded-md' style={{ backgroundImage: `url(https://img.freepik.com/free-photo/person-utilizing-ai-tools-daily-tasks_23-2150879483.jpg?t=st=1709887738~exp=1709891338~hmac=511154c8cca622428a063f8434ac8de630e5c996428535e3410f1c892a3347fe&w=1380)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                    <div className="w-full h-full rounded-md p-6 bg-[#0000007a] text-white flex flex-col justify-end" >
                        <p className='font-medium text-2xl pb-3'>
                            ML Engineer
                        </p>
                        <p className='text-sm pb-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatem? Et obcaecati soluta excepturi quos, minus quae praesentium cupiditate. Provident!
                        </p>
                    </div>
                </div>

            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-6">
                <div className='py-3 my-3 border-b-2'>
                    <p className="text-2xl font-medium  mb-5 border-l-4 border-[#fea700] pl-2">
                        Eligibility Criteria
                    </p>
                    <p className="text-md mb-5">
                        Students who have completed the 12th grade with physics, chemistry and maths/biology with 45% marks in case of general category and 40% marks in case of sc category can apply. The Management Quota requires students to pass the Sviet EEE Examination and have a minimum 65% mark in each of the three science subjects in the 12th grade
                    </p>
                </div>
                <div className='py-3 my-3 border-b-2'>
                    <p className="text-2xl font-medium mb-5 border-l-4 border-[#fea700] pl-2">
                        Affiliation
                    </p>
                    <p className="text-md mb-5">
                        Affiliated to IKGPTU, Jalandhar
                        Approved by AICTE
                    </p>
                </div>
                <div className='py-3 my-3'>
                    <p className="text-2xl font-medium border-l-4 border-[#fea700] pl-2  mb-5">
                        Mode of Admission
                    </p>
                    <p className="text-md mb-5">
                        For admissions please visit our portal to register/login yourself and proceed ahead with your admission application.
                    </p>
                    <button>
                        <button className='bg-[#fea700] text-white p-2 rounded-md text-lg mt-3'>Apply Now</button>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Eligibility