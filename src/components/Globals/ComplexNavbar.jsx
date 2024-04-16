"use client"

import React, { useState, useEffect } from 'react';



function ComplexNavbar() {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isProgramsMenuOpen, setProgramsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.scrollHeight;
            const scrollPercent = (scrollTop / (fullHeight - windowHeight)) * 100;
            setScrollPercent(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    const toggleProgramsMenu = () => {
        setProgramsMenuOpen(!isProgramsMenuOpen);
    };

    // Define your menu items as an array of objects
    const menuItems = [
        { label: 'HOME', path: '/' },
        { label: 'ABOUT US', path: '#' },
        { label: 'PROGRAMS', path: '#', id: "programs-dropdown" },
        { label: 'PLACEMENTS', path: '/placement' },
        { label: 'INTERNATIONAL', path: '/international' },
        { label: 'CONTACT US', path: '#' },
    ];

    const programCategories = [
        {
            label: 'Engineering and Technology',
            subcategories: [
                'M.Tech',
                'Computer Science and Engineering(CSE)',
                'Electronics and Comm. Engineering(ECE)',
                'Mechanical Engineering(ME)',
                'B.Tech',
                'Computer Science and Engineering(CSE)',
                'Electronics and Comm. Engineering(ECE)',
                'Electrical Engineering(EE)',
                'Mechanical Engineering(ME)',
                'Civil Engineering(CE)'
            ]
        },
        {
            label: 'Polytechnic/Diploma',
            subcategories: [
                'Computer Science and Engineering(CSE)',
                'Electrical Engineering(EE)',
                'Mechanical Engineering(ME)',
                'Civil Engineering(CE)'
            ]
        },
        {
            label: 'Industrial Training Institute(ITI)',
            subcategories: ['WELDER', 'PLUMBER', 'COPA']
        },
        {
            label: 'Nursing',
            subcategories: ['Diploma in Nursing']
        },
        {
            label: 'Pharmacy',
            subcategories: ['Masters in Pharmacy (M.Pharm.)', 'Bachelor in Pharmacy(B.Pharm)', 'Diploma in Pharmacy (D.Pharm.)', 'Doctor of Pharmacy (Pharm. D)']
        },
        {
            label: 'Hospitality and Catering',
            subcategories: ['Master of Hotel Management & Catering Technology (MHMCT)', 'Bachelor of Hotel Management & Catering Technology (BHMCT)', 'Bachelor of Vocation in Hotel Management (B.Voc HMCT)', 'B.Sc Nutrition and Dietics (B.Sc N&D)']
        },
        {
            label: 'Education',
            subcategories: ['Master of Education(M.Ed)', 'Master of Arts in Education (M.A edu)', 'Bachelor of Education(B.Ed)', 'Bachelor of Arts(B.A)']
        },
        {
            label: 'Computer Application',
            subcategories: ['Master of Computer Application(MCA)', 'Bachelor of Computer Application(BCA)', 'Post Graduation Diploma in Computer Application(PGDCA)', 'B.Sc Information Technology (B.Sc IT)']
        },
        {
            label: 'Law',
            subcategories: ['Bachelor of Law (LLB)', 'Bachelor of Arts + Bachelor of Law (BA. LL.B)']
        },
        {
            label: 'Business Studies',
            subcategories: ['Master in Business Administration(MBA)', 'Bachelor in Business Administration (BBA)', 'Bachelor for Commerce(B.Com)', 'Master of Commerce (M.Com)']
        },
        {
            label: 'Paramedical',
            subcategories: [
                'M.Sc-MLS-Biochemistry',
                'M.Sc-Anesthesia & Operation Theatre Technology (M.Sc Anes. & OTT)',
                'B.Sc-Radio Medical Imaging Technology (B.Sc RMIT)',
                'B.Sc-Operation Theatre Technology (B.Sc OTT)',
                'B.Sc-Optometry',
                'B.Sc-Anesthesia & Operation Technology (B.Sc Anes. & OTT)',
                'B.Sc-Medical Lab Science (B.Sc MLS)',
                'Diploma in Medical Lab Technology (DMLT)',
                'B.Sc Cardiac Care Technology (B.Sc CCT)',
                'B.Sc Physiotherapy'
            ]
        },
        {
            label: 'Basic Science',
            subcategories: ['M.Sc Maths', 'M.Sc Physics', 'M.Sc Chemistry', 'B.Sc Non-Medical']
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col">
                {/* Page Scroll Progress */}
                <div className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.25 bg-[#fe7d2f]" style={{ width: `${scrollPercent}%` }}></div>

                <nav className="flex justify-between py-5 bg-white backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
                    <div className="flex items-center">
                        <a href="#" className="cursor-pointer">
                            <h3 className="text-2xl font-medium text-blue-500">
                                <img className="h-10 object-cover" src="https://sviet.ac.in/wp-content/uploads/2021/08/svietlogooo-1.png" alt="Store Logo" />
                            </h3>
                        </a>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="block lg:hidden">
                        <button onClick={toggleMobileMenu} className="p-2 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="items-center hidden lg:flex">
                        {menuItems.map((item, index) => (
                            <a key={index} href={item.path} id={item.id} className="flex mr-3 font-medium text-sm text-black hover:text-[#FE7D2F]  cursor-pointer transition-colors duration-300" onClick={() => item.id === "programs-dropdown" && toggleProgramsMenu()}>
                                {item.label}
                            </a>

                        ))}
                        
                    </div>
                    {isProgramsMenuOpen && (
                            <div className="absolute z-20 top-full w-full left-0 bg-white shadow-md">
                                <div className="w-full h-[60vh] mx-auto px-4 py-4 flex flex-col flex-wrap gap-5 p-5">
                                    {programCategories.map((category, index) => (
                                        <div key={index}>
                                            <h4 className="text-lg font-semibold mb-2">{category.label}</h4>
                                            <ul>
                                                {category.subcategories.map((subcategory, subIndex) => (
                                                    <li key={subIndex} className="text-gray-700 hover:text-[#FE7D2F] cursor-pointer transition-colors duration-300">
                                                        {subcategory}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md">
                        <div className="max-w-md p-6">
                            <div className="flex flex-col space-y-4">
                                {menuItems.map((item, index) => (
                                    <a key={index} href={item.path} className="flex font-medium text-sm text-black hover:text-[#FE7D2F] hover:underline cursor-pointer transition-colors duration-300 border-b border-gray-200 pb-2">
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Medium Device Menu */}
                {isMobileMenuOpen && (
                    <div className="hidden lg:flex fixed inset-0 z-20 bg-white/80 backdrop-blur-md">
                        <div className="max-w-full p-6">
                            <div className="flex flex-col space-y-4">
                                {menuItems.map((item, index) => (
                                    <a key={index} href={item.path} className="flex font-medium text-sm text-black hover:text-[#FE7D2F] hover:underline cursor-pointer transition-colors duration-300 border-b border-gray-200 pb-2">
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default ComplexNavbar;
