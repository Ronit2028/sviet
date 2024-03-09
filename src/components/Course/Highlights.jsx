import React from 'react'

const Highlights = () => {
    const programHighlights = [
        "Learn by Doing: We embrace a hands-on learning approach through case studies and projects, preparing you for real-world challenges.",
        "Advanced Labs: Gain experience with cutting-edge technology in our state-of-the-art labs, equipping you with the latest tools and skills.",
        "Industry Ready: Our program integrates a six-month industry internship, providing valuable work experience and building your professional network.",
        "Global Exposure: Expand your horizons through national and international immersion programs, fostering intercultural understanding.",
        "Industry Connections: Benefit from our dedicated industry-academia partnerships, securing internship and placement opportunities with leading companies.",
        "Beyond Academics: Develop essential skills through workshops like business communication and effective presentation, preparing you for success.",
        "Entrepreneurship Support: Explore your entrepreneurial spirit through funding, mentorship, and networking opportunities in our on-campus incubator.",
        "Expert Learning: Learn from renowned faculty and industry guest speakers, gaining insights from experienced professionals.",
        "Master the Latest Technologies: Our program equips you with in-demand skills in mobile app development, full-stack development, internet technologies, IoT, data science, cybersecurity, and more."
    ];
    return (
        <div className='w-10/12 my-6 mx-auto p-6 bg-[#00112d] text-white rounded-md'>
            <p className="text-3xl py-6 text-white font-medium">
                Program Highlights
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3'>
                {programHighlights.map(highlight => (
                    <div className='flex pb-4 mb-4 items-center gap-2'>
                        <i className='fa fa-arrow-right mr-1 text-[#fea700]'></i>  
                        <p className='text-lg '>
                        {highlight}
                    </p></div>
                ))
                }
            </div>
        </div>
    )
}

export default Highlights