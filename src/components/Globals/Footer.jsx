import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-12 px-4">
                <div className="flex flex-wrap gap-y-8">
                    {/* Logo and Address section */}
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 pr-10 border-r border-gray-400">
                        <div className="logo mt-4">
                            <img src="https://sviet.org.in/wp-content/uploads/2023/04/SVIET-Logo-Dark.png" alt="" className='pb-5 border-b-[0.5px] mb-5' />
                        </div>
                        <div className="address">
                            <div className="locate mb-4 text-sm font-extralight">- LOCATE US</div>
                            <div className="uni-name text-lg mt-5 mb-4">Lovely Professional University</div>
                            <div className="uni-address text-sm font-light mb-2">Jalandhar-Delhi, G.T. Road, Phagwara, Punjab (INDIA) -144411.</div>
                        </div>
                        <div className="uni-contact ext-sm font-light mb-2">
                            <a href="tel:+911824517000">Tel: +91-1824-517000</a> <br />
                            <a href="tel:+911824404404">Tel: +91-1824-404404</a>
                        </div>
                        <div className="get-directions">
                            <a href="https://www.lpu.in/admission/lpu-in-your-town.php#lpu-town" className="link-btn">
                                <img src="https://www.lpu.in/lpu-assets/images/icons/chevron-right.svg" alt="Chevron Right" />
                                Get Directions
                            </a>
                        </div>
                    </div>
                    {/* Admissions section */}
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mt-2 p-6 border-r border-gray-400">
                        <div className="heading text-xl font-semibold mb-4">Admissions</div>
                        <ul className="leading-loose text-sm font-light">
                            <li><a href="https://www.lpu.in/admission/admissions.php">Admissions 2024-25</a></li>
                            <li><a target="_blank" href="https://www.lpu.in/international/international_students.php">International Admission 2024-25</a></li>
                            <li><a target="_blank" href="https://www.lpude.in/admissions/overview.php">Distance Education Admissions</a></li>
                            <li><a target="_blank" href="https://www.lpuonline.com/">Online Education Admissions</a></li>
                            <li><a href="https://www.lpu.in/scholarship/scholarship.php">Scholarship &amp; Aid</a></li>
                            <li><a href="https://www.lpu.in/frmloginaccounts.aspx">Fee Deposits</a></li>
                            <li><a href="https://www.lpu.in/downloads/faq.pdf">FAQs</a></li>
                        </ul>
                    </div>
                    {/* Academics section */}
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 p-6 border-r border-gray-400">
                        <div className="heading text-xl font-semibold mb-4">Academics</div>
                        <ul className="leading-loose text-sm font-light">
                            <li><a href="https://www.lpu.in/jpd">Joint Placement Drive</a></li>
                            <li><a href="https://www.lpu.in/educationawards">Education Awards</a></li>
                            <li><a href="https://www.lpu.in/lpusummerschool/index.php">LPU Summer School</a></li>
                            <li><a href="http://alumni.lpu.in/">Alumni</a></li>
                            <li><a href="https://www.lpu.in/campus_life/entrepreneurship.php">Entrepreneurship</a></li>
                            <li><a target="_blank" href="https://lpu.in/downloads/application.pdf">Recognition Application (ODL)</a></li>
                            <li><a target="_blank" href="https://lpu.in/downloads/application-2.pdf">Recognition Application (Online)</a></li>
                            <li><a title="Top Engineering Colleges (B.Tech - M.Tech)" href="//www.lpu.in/engineering/" target="_blank">Top engineering college in india</a></li>
                            <li><a title="Top MBA Colleges" href="//www.lpu.in/mba/" target="_blank">Top MBA Colleges</a></li>
                        </ul>
                    </div>
                    {/* Resources section */}
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 p-6">
                        <div className="heading text-xl font-semibold mb-4">Resources</div>
                        <ul className="leading-loose text-sm font-light">
                            <li>Explorica</li>
                            <li>Knowledge Brainstorm</li>
                            <li>11th Convocation Gallery</li>
                            <li> Distance Education</li>
                            <li>Online Education</li>
                            <li>Online Fee Payment</li>
                            <li>UMS Login</li>
                            <li>Apply Certificate</li>
                        </ul>
                    </div>

                </div>
                {/* Footer bottom section */}
                <div className="footer-bottom mt-8 border-t border-gray-700 pt-6">
                    <ul className="flex flex-wrap justify-between">
                        <li><a href="https://www.lpu.in/anti-ragging.php ">Anti Ragging</a></li>
                        <li><a style={{ cursor: 'pointer' }} target="_blank" data-bs-toggle="modal" data-bs-target="#sexual-harrassment-footer">ICC</a></li>
                        <li>Privacy Policy</li>
                        <li>Disclaimer</li>
                        <li>Terms and Conditions</li>
                        <li>Student Grievance Redressal</li>
                        <li>RTI</li>
                        <li>Feedback</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;