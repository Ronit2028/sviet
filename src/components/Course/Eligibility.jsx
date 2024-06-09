import React from 'react';

const Eligibility = ({ eligibilityCriteria, affiliation, modeOfAdmission, programOutcomes }) => {
    return (
        <div className='w-10/12 py-6 md:py-10 mx-auto flex flex-wrap'>

            <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
            {programOutcomes.map((outcome, index) => (
                    <div key={index} className='w-full rounded-md' style={{ backgroundImage: `url(${outcome.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                        <div className="w-full h-full rounded-md p-6 bg-[#0000007a] text-white flex flex-col justify-end" >
                            <p className='font-medium text-2xl pb-3'>
                                {outcome.title}
                            </p>
                            <p className='text-sm pb-3'>
                                {outcome.desc}
                            </p>
                        </div>
                    </div>
                ))}
                {/* Other cards */}
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-6">
                <div className='py-3 my-3 border-b-2'>
                    <p className="text-2xl font-medium  mb-5 border-l-4 border-[#fea700] pl-2">
                        Eligibility Criteria
                    </p>
                    <p className="text-md mb-5">
                        {eligibilityCriteria}
                    </p>
                </div>
                <div className='py-3 my-3 border-b-2'>
                    <p className="text-2xl font-medium mb-5 border-l-4 border-[#fea700] pl-2">
                        Affiliations & Approval
                    </p>
                    <p className="text-md mb-5">
                        {affiliation.affiliated_to}
                        <br />
                        {affiliation.approved_by}
                    </p>
                </div>
                <div className='py-3 my-3'>
                    <p className="text-2xl font-medium border-l-4 border-[#fea700] pl-2  mb-5">
                        Mode of Admission
                    </p>
                    <p className="text-md mb-5">
                        {modeOfAdmission}
                    </p>
                    <button className='bg-[#fea700] text-white p-2 rounded-md text-lg mt-3'></button>
                </div>
            </div>
        </div>
    )
}

export default Eligibility;
