"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import data from '@/data/data';

const CourseList = () => {
    const [categoryFilter, setCategoryFilter] = useState('');
    const [durationFilter, setDurationFilter] = useState('');

    // Extract unique categories from data
    const uniqueCategories = useMemo(() => {
        const categories = data.map(item => item.course_name);
        return Array.from(new Set(categories));
    }, []);

    // Extract unique durations from data
    const uniqueDurations = useMemo(() => {
        const durations = data.map(item => item.duration);
        return Array.from(new Set(durations));
    }, []);

    // Group programs by category
    const groupedPrograms = useMemo(() => {
        const grouped = data.reduce((acc, item) => {
            if (!acc[item.course_name]) {
                acc[item.course_name] = [];
            }
            acc[item.course_name].push({
                name: item.program_name,
                duration: item.duration,
                link: item.id
            });
            return acc;
        }, {});
        return grouped;
    }, [data]);

    // Filtered programs based on category and duration
    const filteredPrograms = useMemo(() => {
        let programs = Object.entries(groupedPrograms);
        if (categoryFilter) {
            programs = programs.filter(([category]) => category === categoryFilter);
        }
        if (durationFilter) {
            programs = programs.map(([category, programs]) => [
                category,
                programs.filter(program => program.duration === durationFilter)
            ]).filter(([, programs]) => programs.length > 0);
        }
        return programs;
    }, [groupedPrograms, categoryFilter, durationFilter]);

    const swamiVivekanandInstitutes = [
        { id: 1, name: "Swami Vivekanand Institute of Engineering and Technology (SVIET)", category: "Engineering and Technology" },
        { id: 2, name: "Swami Vivekanand College of Pharmacy (SVCP)", category: "Pharmacy" },
        {id: 11, name: "Swami Vivekanand Institute of Pharmacy (SVIP)", category: "Pharmacy" },
        { id: 3, name: "Swami Vivekanand Faculty of Information Technology & Business Management (SVFIT & BM)", category: "Information Technology & Business Management" },
        { id: 4, name: "Swami Vivekanand Faculty of Technology and Management (SVFTM)", category: "Technology and Management" },
        { id: 5, name: "Swami Vivekanand College of Education(SVCE)", category: "Education" },
        { id: 6, name: "Swami Vivekanand Polytechnic college(SVPC)", category: "Polytechnic" },
        { id: 7, name: "Swami Vivekanand Industrial Training Center (SVITC)", category: "Industrial Training" },
        { id: 8, name: "Swami Vivekanand College of Management & Technology (SVCMT)", category: "Management & Technology" },
        // { id: 9, name: "Swami Vivekanand Paramedical College (SVPMC)", category: "Paramedical" },
        { id: 10, name: "Swami Vivekanand College of Law", category: "Law" },
        
    ];

    return (
        <div className="w-10/12 bg-white mt-auto lg:mt-[-125px] mx-auto flex flex-wrap shadow-md my-8 rounded-lg">
            <div className="hidden md:block w-full md:w-1/3 p-6 bg-[#00112d] text-white">
                <p className="text-3xl py-4 border-l-4 border-[#fea700] pl-4 mb-4">
                    Our Institutions
                </p>
                {swamiVivekanandInstitutes.map((institute, index) => (
                    <Link key={index} href={`/institutions/${institute.id}`}>
                        <p className='text-xl my-3 py-3'>
                            {institute.name}
                        </p>
                    </Link>
                ))}
            </div>
            <div className="w-full md:w-2/3 p-6">
                <div className=''>
                    <div className=''>
                        <p>
                            <span className='text-[#fea700] text-lg font-medium pb-6'>
                                Filter By
                            </span>
                            : <select
                                className="appearance-none bg-white border border-gray-400 hover:border-gray-500 p-1 px-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                value={categoryFilter}
                                onChange={(e) => { setCategoryFilter(e.target.value) }}
                            >
                                <option value="">All Categories</option>
                                {uniqueCategories.map((category, index) => (
                                    <option
                                        key={index}
                                        value={category}
                                    >
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </p>
                        
                    </div>
                </div>
                <div className="mt-8">
                    {filteredPrograms.map(([category, programs]) => (
                        <div key={category} className="mb-8">
                            <h3 className="text-4xl mb-6">{category}</h3>
                            <ul>
                                {programs.map(course => (
                                    <li key={course.name} className="mb-4 py-8 border-b-2">
                                        <Link href={`/programs/${course.link}`} className="text-2xl font-medium mb-2 pb-2">{course.name}</Link>
                                        <div className='flex justify-between'>
                                            <p className="text-xl mt-3">
                                                Duration : <span className='text-[#fea700]'>{course.duration}</span>
                                            </p>
                                            <Link href={`/programs/${course.link}`}>
                                                <button className='hover:bg-[#fea700] rounded-md w-8 h-8 flex justify-center transition items-center text-[#fea700] hover:text-white hover:rounded-full bg-gray-100'><i className='fa fa-arrow-right'></i></button>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CourseList;
