import React from 'react';

const Timeline = () => {
    // Define an array of objects containing details for each step
    const steps = [
        {
            version: "Written Exam",
            releaseDate: "December 2, 2021",
            description: "Written Exam comprising of logical reasoning, aptitute and a lot more"
        },
        {
            version: "Technical Round",
            releaseDate: "December 23, 2021",
            description: "Technical round consiting of basic programming knowledge."
        },
        {
            version: "Interview Round",
            releaseDate: "January 5, 2022",
            description: "Final round with the management itself. Gear up, Be a part of something greater"
        }
    ];

    return (
        <div className='py-12'>
            <div className="w-10/12 mx-auto">
                <p className="text-4xl font-medium pb-6 text-center">
                    Selection Procedure
                </p>
                <p className='text-center pb-6 text-lg'>
                    Be A Part of Super60 and Be a Cut Above
                </p>
            </div>
            <ol className="items-center sm:flex justify-center w-10/12 mx-auto">
                {steps.map((step, index) => (
                    <li key={index} className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                                <svg className="w-2.5 h-2.5 text-[#fea700]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-100"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                            <h3 className="text-2xl my-3 font-semibold text-gray-900 ">{step.version}</h3>
                            {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"></time> */}
                            <p className="text-base font-normal text-gray-500 ">{step.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Timeline;
