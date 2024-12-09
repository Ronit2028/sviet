

'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, ChevronRight } from 'lucide-react'
import Header from '@/components/institution/Header'



const institutions = [
  {
    id: 1, name: "Swami Vivekanand Institute of Engineering and Technology (SVIET)",
            description: "Swami Vivekananad Institute Of Engineering & Technology(SVIET) is the premier Institute of India and is known for its high standards in teaching and research and attracts eminent scholars of its faculty. It was established in 2014 under the approval of All India Council of Technical Education India (AICTE)  Ever since its inception, a strong commitment to excellence in teaching and research has made this Institute a role-model and path-setter for other colleges in the country. Its rich academic tradition has always attracted the most talented students who later on went on to make important contribution to their society.",
            link: "https://www.sviet.ac.in/institutions/1",
  },
  {
    id: 2, name: "Swami Vivekanand College of Pharmacy (SVCP)",
            description: "Swami Vivekanand College of Pharmacy (SVCP) is a premier institution of Pharmaceutical Education and Research in the region, approved by All India Council of Technical Education India (AICTE) and Pharmacy Council of India (PCI). The institute has covered a long and glorious journey of 11 years. In its travelogue, the Institute crossed multiple milestones and continues to head ahead towards the well-defined goals. SVCP takes the advantage of our position as the oldest college of pharmacy in the region to offer an undergraduate and postgraduate pharmacy curriculum that is one of the most innovative in today’s scenario. Our program emphasizes communication skills, problem-solving ability, and a collaborative approach to providing patient-focused health care" ,
            link: "https://www.sviet.ac.in/institutions/2",},
            
  {
    id: 3, name: "Swami Vivekanand Faculty of Information Technology & Business Management (SVFIT & BM)",
            description: "Amongst the leading Business Management Institutes of North India, Swami Vivekanand Faculty of Information Technology & Business Management (SVFITBM) provides management education with innovative applied research, and practice to educate business leaders of tomorrow to the students who are opting for the various graduate courses under Punjabi University, Patiala that includes BBA, BCA, B.Com, B.Sc (Non-Med.) and B.A. Graduates at SVFITBM, make a difference by creating real value for society. The Institute emphasizes to focus on a holistic multi-disciplinary, and multi-cultural approach to learning.",
            link: "https://www.sviet.ac.in/institutions/3",
  },

  {
    
    id: 4, name: "Swami Vivekanand Faculty of Technology and Management (SVFTM)",
    description: "The contemporary global scenery, has been on a great demand for business leaders, with unique skillsets in business management. The Faculty of Management, endeavors to equip students with the necessary skills and business ethics required to navigate the business world. With a uniquely .formulated, practical based curriculum, the Faculty of Management seeks to nurture students into highly competent management personnel. It goes on to impart within the students, a set of entrepreneurial skills, thus not only promoting a working culture but also a culture for business innovation with vital management solutions. The faculty’s strategic industrial tie-ups, provides students with endless avenues for hands-on training from expert industrialists from various leading business fields.",
    link: "https://www.sviet.ac.in/institutions/4",
  },
  {
    id: 5, name: "Swami Vivekanand College of Education(SVCE)",
            description: "Swami Vivekanand College Of Education grows with the purpose to develop the Institute into a centre of excellence in teaching and research, which is at par with International standards. It is recognized by National Council for Teacher Education (NCTE), also has accredited with the National Accreditation Assessment Council (NAAC), Bangalore and is affiliated to Punjabi University, Patiala. The courses being offered are B.Ed, M.Ed & M.A (Education).      The experienced and trained faculty at Swami Vivekanand College of Education (SVCE) with the interactive teaching provides every student with a teaching vision required to educate the modern world. The infrastructure at SVCE includes smart classrooms and technical training session to provide the tutors of future the knowledge about the tools of modern teaching."
            ,link: "https://www.sviet.ac.in/institutions/5",
  },
  {
    id: 6, name: "Swami Vivekanand Polytechnic college(SVPC)",
            description: "Swami Vivekanand Polytechnic College (SVPC), offers Engineering courses such as Diploma in Computer Science & Engineering, Mechanical Engineering, Civil Engineering, and Electronics & Communication Engineering. The vision of the college is to be identified as a premier academic institution that advances the quality of Education. The mission is developing and training internationally recognized professionals with a commitment to continued professional development. The core value of the college is, to embark on research and development in the field of engineering technology and practice to increase the quality of professional education. Early engagement in learning and professional development stands a better chance of success. A three-year diploma in engineering program is too akin to the need of the society by enlarging. The emphasis is more on a practical approach to create seamless tiers between technicians and Engineers which can support shop floor and field operations.",
            link: "https://www.sviet.ac.in/institutions/6",
  },
  {
     id: 7, name: "Swami Vivekanand Industrial Training Center (SVITC)",
            description: "Swami Vivekanand Industrial Training Centre is the training Institute which provides training in technical field in India. Normally a student who has passed 8th & 10th standard is eligible for admission to ITI. The objective of opening of ITI is to provide technical manpower to industries.     These students are trained in basic skills required to do jobs of say operator or a craftsman. The course in ITI is designed in a way to impart basic skill in the trade specified. The college is imparting the training in technical trades like COPA, welder, plumber etc. Students of engineering trade can go for higher studies like diploma in engineering. ITI qualified students can set up their own garage Motor/ generator/ transformer/ computer winding shops or fabrication shops depending upon trade opted.",
            link: "https://www.sviet.ac.in/institutions/7",
  },
  {
    id: 8, name: "Swami Vivekanand College of Management & Technology (SVCMT)",
            description: "Swami Vivekanand College of Management and Technology SVCMT provides modern teaching through various courses in modern sciences and management. The courses offered under SVCMT are both graduate and post graduate programs. The students who have passed their 12th or who have graduated and holds a degree of B.Sc can apply in SVCMT. The students are trained with basic and professional skills while understanding all about modern Equipments and their use. The faculty tutoring students have extensive industry experience. The academics are designed in a way so that students understand the theory behind the course in a practical way. SVCMT aims to provide quality education with placements.",
            link: "https://www.sviet.ac.in/institutions/8",
  },
  {
     id: 10, name: "Swami Vivekanand College of Law",
            description: "Legal education maintains a position of great significance in today’s society; it is a vital component of ensuring administrative transparency, delivering social justice and the maintenance of global peace. The Faculty of Law is dedicated towards imparting the knowledge of law coupled with an understanding of essential legal principles. The faculty plays the vital role of shaping the future of abled, critically thinking, analytically empowered and enlightened legal human resources. Additionally, it offers a modernized intellectually stimulating curriculum that is uniquely customized to satisfy the versatile academic needs of every student. The dynamic range of diploma, undergraduate, post graduate and doctorate programs are designed to meet the contemporary needs of the society. The Faculty of Law focuses on the comprehensive acquisition of legal knowledge in both theoretical and practical aspects, while promoting a staunch mooting culture. We are committed to guiding you today, on the journey towards your legal career tomorrow.",
            link: "https://www.sviet.ac.in/institutions/9",
  },
  
]

const Institution = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredInstitutions = useMemo(() => {
    return institutions.filter(
      (institution) =>
        institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        institution.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
            Institutions
          </h1>
          <div className="mb-8 relative">
            <input
              type="text"
              placeholder="Search institutions..."
              className="w-full p-4 pr-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-4 top-4 text-gray-400" />
          </div>
          <div className="space-y-6">
            {filteredInstitutions.map((institution) => (
              <motion.div
                key={institution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {institution.name}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">{institution.description}</p>
                  <div className="flex items-center justify-between">
                    <a
                      href={institution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#fea700] focus:outline-none"
                    >
                      Learn More
                      <ChevronRight className="ml-2 -mr-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Institution
