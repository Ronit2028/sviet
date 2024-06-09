"use client";

import React, { useState, useMemo } from 'react';
import { Typography } from '@material-tailwind/react';
import data from '@/data/data';

const ContactForm = () => {
    const [categoryFilter, setCategoryFilter] = useState('');
    const [programFilter, setProgramFilter] = useState('');

    // Extract unique categories from data
    const uniqueCategories = useMemo(() => {
        const categories = data.map((item) => item.course_name);
        return Array.from(new Set(categories));
    }, []);

    // Extract programs based on selected category
    const programsByCategory = useMemo(() => {
        if (!categoryFilter) return [];
        return data
            .filter((item) => item.course_name === categoryFilter)
            .map((item) => ({
                name: item.program_name,
                duration: item.duration,
                link: item.id
            }));
    }, [categoryFilter]);

    const handleCourseChange = (e) => {
        setCategoryFilter(e.target.value);
        setProgramFilter(''); // Reset program filter when category changes
    };

    return (
        <div className='w-11/12 py-12 mx-auto p-8 bg-white rounded-md'>
            <Typography color="blue-gray" className="mb-8 !text-2xl font-bold lg:!text-3xl  text-gray-800">
                Enquire Now!
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <input type="text" className='input border-2 border-gray-200 rounded-md w-full px-2 py-1' placeholder='Enter Your Name' />
                <input type="text" className='input border-2 border-gray-200 rounded-md w-full px-2 py-1' placeholder='Enter Your Email Address' />
                <input type="text" className='input border-2 border-gray-200 rounded-md w-full px-2 py-1' placeholder='Enter Your Number' />
                <input type="text" className='input border-2 border-gray-200 rounded-md w-full px-2 py-1' placeholder='Enter Your City' />
            </div>
            <div className='my-5'>
                <label htmlFor="" className='text-lg font-medium mb-3'>Enter Your Interested Program</label>
                <div className='grid grid-cols-2 gap-x-8 mt-3'>
                    <div>
                        <select value={categoryFilter} onChange={handleCourseChange} className='border-2 px-2 py-1 rounded-md w-full'>
                            <option value="">
                                Select Your Course
                            </option>
                            {uniqueCategories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select value={programFilter} onChange={(e) => setProgramFilter(e.target.value)} className='border-2 px-2 py-1 rounded-md w-full'>
                            <option value="">
                                Select Your Program
                            </option>
                            {programsByCategory.map((program) => (
                                <option key={program.link} value={program.name}>
                                    {program.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <p className="block text-gray-700 text-lg font-medium mb-3" htmlFor="dob">How old are you?</p>
                <div className="flex">
                    <input
                        type="text"
                        id="day"
                        name="day"
                        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                        placeholder="DD"
                        required
                    />
                    <input
                        type="text"
                        id="month"
                        name="month"
                        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                        placeholder="MM"
                        required
                    />
                    <input
                        type="text"
                        id="year"
                        name="year"
                        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="YYYY"
                        required
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
