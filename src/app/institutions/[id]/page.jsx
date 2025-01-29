"use client"
import InstitutionHeader from '../../../components/Institutions/InstitutionHeader';
import InstitutionCourse from '../../../components/Institutions/InstitutionCourse'
import InstitutionBestProgramm from '../../../components/Institutions/InstitutionBestProgramm'

const Page = ({ params }) => {
    const paramId = params.id;

    const swamiVivekanandInstitutes = [
        {
            id: 1, name: "Swami Vivekanand Institute of Engineering and Technology (SVIET)",
            description: "Swami Vivekananad Institute Of Engineering & Technology(SVIET) is the premier Institute of India and is known for its high standards in teaching and research and attracts eminent scholars of its faculty. It was established in 2014 under the approval of All India Council of Technical Education India (AICTE)  Ever since its inception, a strong commitment to excellence in teaching and research has made this Institute a role-model and path-setter for other colleges in the country. Its rich academic tradition has always attracted the most talented students who later on went on to make important contribution to their society."
            , category: "Engineering and Technology",
            programs: {
                "M.Tech": {
                    "specializations": [
                        "Computer Science Engineering ",
                        "Electronics & Communications Engineering",
                        "Mechanical Engineering"
                    ]
                },
                "B.Tech": {
                    "specializations": [
                        "Computer Science Engineering",
                        "Electronics & Communications Engineering",
                        "Electrical Engineering",
                        "Civil Engineering",
                        "Mechanical Engineering"
                    ]
                },
                "Business Studies": {
                    "specializations": [
                        "Master of Business Administration(MBA)"
                    ]
                },
                "Computer Application": {
                    "specializations": [
                        "Master of Computer Application(MCA)"
                    ]
                }
            },
            committee:"/SVIET/SVIET-Committees.pdf",
            md:"/SVIET/Mandatory-Disclosure-SVIET-1.pdf",
            

        },
        {
            id: 2, name: "Swami Vivekanand College of Pharmacy (SVCP)",
            description: "Swami Vivekanand College of Pharmacy (SVCP) is a premier institution of Pharmaceutical Education and Research in the region, approved by All India Council of Technical Education India (AICTE) and Pharmacy Council of India (PCI). The institute has covered a long and glorious journey of 11 years. In its travelogue, the Institute crossed multiple milestones and continues to head ahead towards the well-defined goals. SVCP takes the advantage of our position as the oldest college of pharmacy in the region to offer an undergraduate and postgraduate pharmacy curriculum that is one of the most innovative in today’s scenario. Our program emphasizes communication skills, problem-solving ability, and a collaborative approach to providing patient-focused health care."

            , category: "Pharmacy",
            programs: {
                " Masters in Pharmacy (M.Pharma)": {

                },
                "Bachelor in Pharmacy (B.Pharma)": {

                },
                "Diploma in Pharmacy (D.Pharma)": {

                },
                "Doctor in Pharmacy (Pharma.D)": {

                }
            },
            committee:"",
            md:"",

        },
        {
            id: 3, name: "Swami Vivekanand Faculty of Information Technology & Business Management (SVFIT & BM)",
            description: "Amongst the leading Business Management Institutes of North India, Swami Vivekanand Faculty of Information Technology & Business Management (SVFITBM) provides management education with innovative applied research, and practice to educate business leaders of tomorrow to the students who are opting for the various graduate courses under Punjabi University, Patiala that includes BBA, BCA, B.Com, B.Sc (Non-Med.) and B.A. Graduates at SVFITBM, make a difference by creating real value for society. The Institute emphasizes to focus on a holistic multi-disciplinary, and multi-cultural approach to learning."
            , category: "Information Technology & Business Management",
            programs: {
                "Education": {
                    "specializations": [

                        "Bachelor of Arts (BA)"

                    ]
                },
                "Business Studies": {
                    "specializations": [
                        " Bachelor in Business Administration (BBA)",

                    ]
                },
                "Basic Sciences    ": {
                    "specializations": [
                        "B.Sc (Non- Medical)"]
                },
                "Computer Application": {
                    "specializations": [

                        "Bacholer of Computer Application(BCA)"
                    ]
                }
            },
            committee:"",
            md:"",
        },
        {
            id: 4, name: "Swami Vivekanand Faculty of Technology and Management (SVFTM)",
            description: "The contemporary global scenery, has been on a great demand for business leaders, with unique skillsets in business management. The Faculty of Management, endeavors to equip students with the necessary skills and business ethics required to navigate the business world. With a uniquely .formulated, practical based curriculum, the Faculty of Management seeks to nurture students into highly competent management personnel. It goes on to impart within the students, a set of entrepreneurial skills, thus not only promoting a working culture but also a culture for business innovation with vital management solutions. The faculty’s strategic industrial tie-ups, provides students with endless avenues for hands-on training from expert industrialists from various leading business fields."
            , category: "Technology and Management",
            programs: {
                "Business Studies": {
                    "specializations": [
                        "BBA",

                    ]
                },
                "Hospitality & Catering": {
                    "specializations": [
                        "Bachelor of Hotel Management & Catering Technology (BHMCT)",

                        "Masters of Hotel Management & Catering Technology (MHMCT)",

                        "B.Sc Nutrition &Dietics",

                        "BVOC"
                    ]
                },
                "Paramedical    ": {
                    "specializations": [
                        " B.SC – MLS",

                        "  B.Sc Operation theatre technology",

                        " B.Sc Radiology & Imaging Technology",

                        "B.Sc CCT"
                    ]
                },
                "Computer Application": {
                    "specializations": [
                        "Bachelor of Computer Application(BCA)",
                        "PGDCA"
                    ]
                },
                "Basic Sciences": {
                    "specializations": [
                        "M.Sc Maths",
                        "M.Sc Physics"
                    ]
                }
                ,
                "Commerce": {
                    "specializations": [
                        "M.Com",

                    ]
                }
            },
            committee:"",
            md:"",
        },
        {
            id: 5, name: "Swami Vivekanand College of Education(SVCE)",
            description: "Swami Vivekanand College Of Education grows with the purpose to develop the Institute into a centre of excellence in teaching and research, which is at par with International standards. It is recognized by National Council for Teacher Education (NCTE), also has accredited with the National Accreditation Assessment Council (NAAC), Bangalore and is affiliated to Punjabi University, Patiala. The courses being offered are B.Ed, M.Ed & M.A (Education).      The experienced and trained faculty at Swami Vivekanand College of Education (SVCE) with the interactive teaching provides every student with a teaching vision required to educate the modern world. The infrastructure at SVCE includes smart classrooms and technical training session to provide the tutors of future the knowledge about the tools of modern teaching."
            , category: "Education",
            programs: {
                "Education": {
                    "specializations": [
                        "Bachelor of Education (B.Ed)",

                        "Master of Education (M.Ed)",

                        "Master of Arts in Education (M.A Education)"
                    ]
                },
            },
            committee:"",
            md:"",
        },
        {
            id: 6, name: "Swami Vivekanand Polytechnic college(SVPC)",
            description: "Swami Vivekanand Polytechnic College (SVPC), offers Engineering courses such as Diploma in Computer Science & Engineering, Mechanical Engineering, Civil Engineering, and Electronics & Communication Engineering. The vision of the college is to be identified as a premier academic institution that advances the quality of Education. The mission is developing and training internationally recognized professionals with a commitment to continued professional development. The core value of the college is, to embark on research and development in the field of engineering technology and practice to increase the quality of professional education. Early engagement in learning and professional development stands a better chance of success. A three-year diploma in engineering program is too akin to the need of the society by enlarging. The emphasis is more on a practical approach to create seamless tiers between technicians and Engineers which can support shop floor and field operations."
            , category: "Polytechnic/ Diploma",
            programs: {
                "Computer Science Engineering": {},
                "Electrical Engineering": {},
                "Civil Engineering": {},
                "Mechanical Engineering": {},
                "DMLT": {}
            },
            committee:"",
            md:"",
        },
        {
            id: 7, name: "Swami Vivekanand Industrial Training Center (SVITC)",
            description: "Swami Vivekanand Industrial Training Centre is the training Institute which provides training in technical field in India. Normally a student who has passed 8th & 10th standard is eligible for admission to ITI. The objective of opening of ITI is to provide technical manpower to industries.     These students are trained in basic skills required to do jobs of say operator or a craftsman. The course in ITI is designed in a way to impart basic skill in the trade specified. The college is imparting the training in technical trades like COPA, welder, plumber etc. Students of engineering trade can go for higher studies like diploma in engineering. ITI qualified students can set up their own garage Motor/ generator/ transformer/ computer winding shops or fabrication shops depending upon trade opted."
            , category: "Industrial Training",
            programs: {
                " Welder": {

                },
                "Plumber": {

                },
                "Copa": {

                },

            },
            committee:"",
            md:"",
        },
        {
            id: 8, name: "Swami Vivekanand College of Management & Technology (SVCMT)",
            description: "Swami Vivekanand College of Management and Technology SVCMT provides modern teaching through various courses in modern sciences and management. The courses offered under SVCMT are both graduate and post graduate programs. The students who have passed their 12th or who have graduated and holds a degree of B.Sc can apply in SVCMT. The students are trained with basic and professional skills while understanding all about modern Equipments and their use. The faculty tutoring students have extensive industry experience. The academics are designed in a way so that students understand the theory behind the course in a practical way. SVCMT aims to provide quality education with placements."
            , category: "Management & Technology",
            programs: {
                "Business Studies": {
                    "specializations": [


                        " Bachelor of Business administration (BBA)"
                    ]
                },
                "Paramedical": {
                    "specializations": [

                        "M.Sc – MLS – Clinical Research",

                        "  M.Sc - Anesthesia & Operation Theatre technology",

                        " B.Sc- Radio Medical Imaging technology",

                        "B.Sc- Operation Theatre technology",

                        "B.Sc- Optometry",

                        "Bachelor of Science in Anaesthesia (B.Sc. Ant)",
                        "(M.Sc. MLS) ",
                        "Bachelor of Physiotherapy (BPT)"

                    ]
                },
                "Basic Sciences": {
                    "specializations": [

                        "M.Sc Chemistry"
                    ]
                },
                "Computer Application": {
                    "specializations": [
                        "Bachelor of Computer Application(BCA)",
                        "B.S IT"
                    ]
                }
            },
            committee:"/SVCMT/SVCMT Committees.pdf",
            md:"/SVCMT/Mandatory Disclosure SVCMT updated.pdf",
        },
        // {
        //     id: 9, name: "Swami Vivekanand Paramedical College (SVPMC)",
        //     description: "Swami Vivekanand College of Pharmacy (SVCP) is a premier institution of Pharmaceutical Education and Research in the region, approved by All India Council of Technical Education India (AICTE) and Pharmacy Council of India (PCI). The institute has covered a long and glorious journey of 11 years. In its travelogue, the Institute crossed multiple milestones and continues to head ahead towards the well-defined goals. SVCP takes the advantage of our position as the oldest college of pharmacy in the region to offer an undergraduate and postgraduate pharmacy curriculum that is one of the most innovative in today’s scenario. Our program emphasizes communication skills, problem-solving ability, and a collaborative approach to providing patient-focused health care."
        //     , category: "Paramedical",
        //     programs: {
        //         "Paramedical Sciences": {}
        //     }
        // },
        {
            id: 10, name: "Swami Vivekanand College of Law",
            description: "Legal education maintains a position of great significance in today’s society; it is a vital component of ensuring administrative transparency, delivering social justice and the maintenance of global peace. The Faculty of Law is dedicated towards imparting the knowledge of law coupled with an understanding of essential legal principles. The faculty plays the vital role of shaping the future of abled, critically thinking, analytically empowered and enlightened legal human resources. Additionally, it offers a modernized intellectually stimulating curriculum that is uniquely customized to satisfy the versatile academic needs of every student. The dynamic range of diploma, undergraduate, post graduate and doctorate programs are designed to meet the contemporary needs of the society. The Faculty of Law focuses on the comprehensive acquisition of legal knowledge in both theoretical and practical aspects, while promoting a staunch mooting culture. We are committed to guiding you today, on the journey towards your legal career tomorrow."


            , category: "Law",
            programs: {
                " Bachelor of Law (LLB)": {

                },
                "Integrated BA LLB": {

                },

            },
            committee:"",
            md:"",
        },
        
    ];

    // Find the institute with the matching id
    const institute = swamiVivekanandInstitutes.find(institute => institute.id === parseInt(paramId));

    return (
        <>
            {/* <h1 className='py-12'> {paramId}</h1> */}
            <InstitutionHeader institute={institute ? institute.name : 'Unknown'} category={institute.category} />
            <InstitutionBestProgramm description={institute.description} />
            <InstitutionCourse programs={institute.programs} committee={institute.committee} md={institute.md} />

        </>
    );
};

export default Page;
