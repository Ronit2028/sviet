import React from 'react';


const InstitutionCourse = ({programs}) => {
    const coursesData =  programs
    const courses = Object.entries(coursesData).map(([program, specialization]) => ({
        title: program,
        description: specialization.specializations ? (
            <ul className="flex flex-wrap">
                {specialization.specializations.map((spec, index) => (
                    <li key={index} className="border-l-4 border-[#fea700] pl-4 mr-2 mb-2">{spec}</li>
                ))}
            </ul>
        ) : null,
        iconClass: 'fa fa-graduation-cap ' // You can adjust the icon class based on your preference
    }));

    return (
        <div className=''>
        <div className="w-full h-full bg-[#00112d] py-12">
                <div className="w-10/12 mx-auto py-12">
                    <p className='text-3xl font-medium pb-3 text-white'>
                        Best Programs
                    </p>
                    <p className='text-xl pl-2 border-l-4 border-[#fea700] text-white'>
                        for a better Future
                    </p>

                    <div className="flex flex-col gap-6 py-12">
                        {courses.map((course, index) => (
                            <div key={index} className='flex flex-col bg-white rounded-md shadow-md p-6'>
                                <div className='flex items-center mb-4'>
                                    <div className='bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center'>
                                        <i className={course.iconClass}></i>
                                    </div>
                                    <h3 className='text-2xl font-medium pb-2 ml-4'>{course.title}</h3>
                                </div>
                                <div className="pl-4">
                                    {course.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstitutionCourse;
