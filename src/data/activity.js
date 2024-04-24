const activities = [
    {
        "id": 1,
        "image": "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/336922432_2747792045363548_2609600354789932941_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N83VOFsmVbgAb5BLoAa&_nc_oc=AdidIG4gV3p13F-0ur4tuKJ3Le0UYVdZF88tgFh-PG1WMLNY9xSEjzUe8ajUbCSP8udjeVMkUSj5BPNb411xr3eb&_nc_ht=scontent.fixc4-1.fna&oh=00_AfAOEiALgFOshp8e1tM9pJ_PdMIJvaeHc15Bpp713NL92g&oe=6625C52C",
        "name": "Science Fiesta",
        "desc": "The department of Applied Science organized a Science Fiesta Program for the students of 1st year.",
        "program_type": "Engineering",
        "link": "https://www.instagram.com/p/CqNSHDwyPP7/?utm_source=ig_web_copy_link"
    },
    {
        "id": 22,
        "image": "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/433186770_843645591139802_3937150149773274621_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MI_bqEP4udgAb5QF7yU&_nc_ht=scontent.fixc4-1.fna&oh=00_AfB13VBK2oHlGc9GmYVBSOVYwRYVFOvKWd5tOql75v9DoA&oe=662EE1F8",
        "name": "Felicitation Ceremony",
        "desc": "The Department of Applied Science recently organized a special Felicitation Ceremony to honor the exceptional achievements of their top-performing students across various fields.",
        "program_type": "Engineering",
        "link": "https://www.instagram.com/p/C4s-luoyjCt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA== "
    },
    {
        "id": 25,
        "image": "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/433234790_840978714739823_8686223682322215775_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3UNYL5BVJp4Ab6Opm0U&_nc_ht=scontent.fixc4-3.fna&oh=00_AfB4jYiTYG9e67B1PuKU-ChH0L7_6Sg6XsQbkUfcRNTW-g&oe=662ED61F",
        "name": "Expert lecture",
        "desc": "The expert lecture on AI methodologies with Mr. Vishal Gahrotra from PRIMUS SOFTWARE CORPORATION was a game-changer. Participants from Super 60, Uniques, MCA, and BCA batches gained valuable insights into the latest AI techniques, ensuring they stay at the forefront of the tech landscape.",
        "program_type": "Engineering",
        "link": "https://www.instagram.com/p/C4hsaAgSv6F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==  "
    },
    {
        "id": 22,
        "image": "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/433121352_846399487531079_1668107039980169405_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=51edKhuLu0IAb5WQxX_&_nc_ht=scontent.fixc4-2.fna&oh=00_AfAwgQDZO7FizmBsT3mbLuURgjopRpqy5ohP1HBVTIiVzQ&oe=662ED724",
        "name": "Interaction at U-Zone",
        "desc": "Inspiring Mind A Day of Interaction at U-Zone.The encouragement from our Esteemed Chief Guests fueled our passion for excellence, fostering a culture of collaboration and innovation within our campus.",
        "program_type": "Engineering",
        "link": "https://www.instagram.com/p/C4pSLNUycU4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==  "
    },
    {
        "id": 2,
        "image": "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/337401764_601726401975137_4824346628541318990_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-N5qlL9CFaYAb4Aod5S&_nc_ht=scontent.fixc4-3.fna&oh=00_AfAjFBE47-dHu04M4isw43WAHLi2kud0qM28WJv2ByABjQ&oe=6625EB6F",
        "name": "Guest Lecture",
        "desc": "Department of CSE of SVIET has organized A guest lecturer and Q& A session on Programming.",
        "program_type": "Engineering",
        "link": "Read More"
    },
    {
        "id": 3,
        "image": "https://scontent.fixc2-1.fna.fbcdn.net/v/t39.30808-6/327161732_1196540724328581_5446096428396690408_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3rR5THjoib0Ab6GODhl&_nc_ht=scontent.fixc2-1.fna&oh=00_AfDjlesqfd8-L2b2kElRyZvKcNwm68tzn80dV6lQPJETLw&oe=66269868",
        "name": "Talk Show",
        "desc": "The CEO/Founder of Chai Thela, Mr. Pankaj Judge, shared his life-changing journey during Talk Show: Success Mantra.",
        "program_type": "Engineering",
        "link": "Read More"
    },
    {
        "id": 4,
        "image": "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/322865636_727495995637272_3756576777792187436_n.jpg?stp=dst-jpg_p640x640&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GOWrZBXi74UAb6_eiBx&_nc_ht=scontent.fixc4-2.fna&oh=00_AfAzcYAbw95S5i9T8SYaVUsMN9QkKcQdZ55JXw9jdQPn2A&oe=6625E1C2",
        "name": "Super 60 Selection",
        "desc": "Recently SVIET, Chandigarh has organized an Entrance test for the selection of new batch of super 60 students SUPER602K22.",
        "program_type": "Engineering",
        "link": "View More"
    },
//New data

{
    id: 26,
    image:
        "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/432640564_840387738132254_8320121415793404083_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Vs0ZcXcpLngAb40EVnO&_nc_ht=scontent.fixc4-2.fna&oh=00_AfDfdak7G1XSxhHWtq7VWR4i0ksPiw1iueh2ON2X8TBEjw&oe=662EDED1",
    name: "Expert talk",
    desc: "This expert talk, thoughtfully organized by Swami Vivekanand College of Pharmacy, delved deep into the journey of becoming a Registered Pharmacist in Australia and New Zealand. Browse through the snapshots from the session.",
    program_type: "Pharmacy",
    link: "https://www.instagram.com/p/C4ff3MgyLbU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA== ",
},
{
    id: 27,
    image:
        "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/431283185_839044108266617_3667154384644697898_n.jpg?stp=dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P7cyb4_IFmQAb5e4MV8&_nc_ht=scontent.fixc4-3.fna&oh=00_AfAkd7_dkPo658fMoJnKDoIptLx1DsvEGpA9uHf5a1CUFw&oe=662ED2E4",
    name: "Interaction session",
    desc: "a profound sense of anticipation filled the air as Mr. Vishal Garg, Director Secretarial & Administration, and Mr. Ankur Gill, Director Operations, engaged in an invigorating interaction session with the 30 students selected after yesterday's rigorous interview round for the Pharma Super 60 batch 2023.",
    program_type: "Pharmacy",
    link: "https://www.instagram.com/p/C4aV8XrynQN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==  ",
},

    {
        id: 6,
        image:
            "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/316678247_510470801123951_65945429488718184_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cZaYxFFkHHAAb41pIQ_&_nc_ht=scontent.fixc4-3.fna&oh=00_AfBhmJyy0S46fVTRrNxD_VPpz5TuBagPO4FmNagwb3llWA&oe=6625FFA6",
        name: "National Pharmacy Week",
        desc: "Department of Pharmacy organized a five day long celebrations of National Pharmacy Week 2022 with a valedictory session on 25th November 2022.",
        program_type: "Pharmacy",
        link: "https://www.instagram.com/p/Cla7VpByn3s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },

    {
        id: 7,
        image:
            "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/307698953_10158507298766721_6323056636472218149_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wR3QXnzcJagAb6Y2hl7&_nc_ht=scontent.fixc4-2.fna&oh=00_AfCsLAB65fz3GeFAoyvaCJHGvQEnrOgPgaf0XSwuZtf86w&oe=6625F518",
        name: "Expert Talk",
        desc: "Swami Vivekanand College of Pharmacy, Banur organized an Expert talk on ENHANCING EMPLOYABILITY SKILLS on 15th September, 2022 for B. Pharmacy students.",
        program_type: "Pharmacy",
        link: "https://www.instagram.com/p/CijqQN5PHld/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        id: 8,
        image:
            "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/372816803_704604345043928_5576251858430474564_n.jpg?stp=dst-jpg_p600x600&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VQlTusvabBIAb53Wg1N&_nc_ht=scontent.fixc4-2.fna&oh=00_AfBrD-z9LdyoOMFaEbfXOkbCjroorUcczyiK8hhGi4nLpQ&oe=662606B5",
        name: "Mera BIll App",
        desc: "SVGOI hosted a session on September 1st, highlighting the latest initiative by the Government of Punjab in the form of an application software known as “MERA BILL.”",
        program_type: "BusinessStudies",
        link: "https://www.instagram.com/p/Cwm6CeEry5g/?utm_source=ig_web_copy_link",
    },
    {
        id: 9,
        image:
            "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/391633212_734278022076560_4825640263093733744_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QibqqeQPXkQAb4lnd7R&_nc_ht=scontent.fixc4-1.fna&oh=00_AfB6txDglG0XLhOmsKLou7xK133aGPg9wU18h6ccUNXyPA&oe=662601EE",
        name: "Management Mania 2K23",
        desc: "The Department of Commerce and Management hosted “Management Mania 2K23” on October 10, 2023, featuring 13 management-related episodes.",
        program_type: "BusinessStudies",
        link: "https://www.instagram.com/p/CyYCYKLSpxV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        id: 10,
        image:
            "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/387805084_733403312164031_1195453040758802563_n.jpg?stp=dst-jpg_p600x600&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Qufq7cWP55MAb7hFdVp&_nc_ht=scontent.fixc4-1.fna&oh=00_AfBqzp4j6haodSejVkmGszO1NL0Xr0NJ9r6guVerQIm0-Q&oe=6625DB3F",
        name: "Workshop",
        desc: "Commerce and Management conducted 2-day workshop on October 11-12. Dr. Satinder Kumar from Punjabi University led sessions on Marketing Research and Network Diagrams.",
        program_type: "BusinessStudies",
        link: "https://www.instagram.com/p/CyVHXz9SYK4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        "id": 25,
        "name": "Insightful talk",
        "desc": "Explore the essence of our event in these glimpse, featuring Prof. (Dr.) Ajay Ranga's insightful talk on 'Consumer Awareness: An Indian Perspective. Students got empowered with invaluable knowledge about their consumer rights, shaping them as informed and proactive members of society.",
        "program_type": "law",
        "image": "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/432739390_841051161399245_4379095002407485622_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9X5CSf-JIQcAb7KbbK2&_nc_ht=scontent.fixc4-3.fna&oh=00_AfBvFtCo4QulFUGGbR5zU0YHgdLng7dhIkdsrkxuUlh42w&oe=662EF5BC",
        "link": "https://www.instagram.com/p/C4iF2MfyZEs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA== "
    },
    {
        id: 11,
        image:
            "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/386463035_728929672611395_792987037777091299_n.jpg?stp=dst-jpg_p600x600&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=C7yRufJjtjoAb78wZlV&_nc_ht=scontent.fixc4-3.fna&oh=00_AfAwskr_IshoceQj9Uhc4z0zIhQe28WUlTtDSNdNNt_OMg&oe=6625E47B",
        name: "Nukkad Natak",
        desc: "On October 6, 2023, the Radio Imaging Technology students gathered at Gol Parking for a touching Nukkad Natak, uniting to honor our heroes.",
        program_type: "paramedical",
        link: "https://www.instagram.com/p/CW47OzxMui8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        id: 12,
        image:
            "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/391632897_735487501955612_1071900480826672575_n.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SIsK8vtRtCsAb4qt7sp&_nc_oc=Adi3JZ1Ld6l8DoFW-9-011p_9yjGDxSCFGyj7lgSVJ2br9rV-aQ2A4lowBBGE_3I3ctFStr0_RYoekjaUaH5-be3&_nc_ht=scontent.fixc4-1.fna&oh=00_AfCYnFK9QhWMsG8XoYKYG165s5ZWpHV4F9cU-d7fRc2y4g&oe=6625F78E",
        name: "Project Presentation",
        desc: "The Paramedical Science Department organized a project presentation competition marking “World Anesthesia Day” on October 13, sparking engaging discussions.",
        program_type: "paramedical",
        link: "https://www.instagram.com/p/Cyc6gGcrc0H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    //New Data
    {
        id: 21,
        image:
            "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/434138325_845997457571282_463391602160637380_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6dzTrf30ookQ7kNvgHtNv54&_nc_ht=scontent.fixc4-1.fna&oh=00_AfBxzkPr80hXDHSS_EOQLu33CXhLGJIA9Xm8_dICu4mGXQ&oe=662ED312",
        name: "Expert Talk ",
        desc: "The Radio Imaging Technology, BPT, and Nursing Departments celebrating the journey of goal setting and subconscious focus with Dr. Shiv Gautam (M.S. Ayurveda, eye specialist) and Dr. Hem Raj Rana (MD Ayurveda).",
        link: "https://www.instagram.com/p/C40xIAESmqT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA== ",
    },
    {
        "id": 13,
        "name": "Mocktail Session",
        "desc": "A mocktail session was organized by Department of Hotel Management on 22nd September, 2022 for its students.",
        "program_type": "Hotel-Management",
        "image": "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/308658266_416704207235726_8871917304209725227_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-qeqpSzQnqsAb5tE38o&_nc_ht=scontent.fixc4-3.fna&oh=00_AfDTpPsx9GmEOM1PZWcmQb24F8_FX2HgC-QJyB0hH0nrpg&oe=6625F8E5",
        "link": "https://www.instagram.com/p/Ci2EUoBh6aH/?utm_source=ig_web_copy_link"
    },
    {
        "id": 14,
        "name": "Indian Cuisine Practical",
        "desc": "Department of Hotel Management organized a INDIAN CUISINE PRACTICAL for the students of BHMCT- 2nd Sem.",
        "program_type": "Hotel-Management",
        "image": "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/331383608_2184753951727778_1857737291411742179_n.jpg?stp=dst-jpg_p600x600&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tYgjFvjjt0MAb64LRWM&_nc_ht=scontent.fixc4-3.fna&oh=00_AfD7d_iDDWCo4zyf6D8h3exm3mZuqDQGT4vHfMjxFd8NGw&oe=66260618",
        "link": "https://www.instagram.com/p/CotaCMFytoF/?utm_source=ig_web_copy_link"
    },
    {
        "id": 15,
        "name": "Rajasthani Cuisine Practical",
        "desc": "Department of Hotel Management organized a practical on RAJASTHANI CUISINE for the students of BHMCT- 4TH Sem.",
        "program_type": "Hotel-Management",
        "image": "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/280261362_10158312354631721_5960165066366160253_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NU5xSTSmoWcAb5LRwAm&_nc_ht=scontent.fixc4-1.fna&oh=00_AfD-Fy0oDPfCryxzvDpBdhWRm5aDaGhZgz3KYc_Vf_Wq1w&oe=6625DBCE",
        "link": "https://www.instagram.com/p/CcwxUdIqx8R/?utm_source=ig_web_copy_link"
    },
    {
        "id": 22,
        "name": "ASHN-E-RANG",
        "desc": "Relive the colorful moments from 'JASHN-E-RANG' - our vibrant Holi celebration organized by the Department of Hotel Management!",
        "program_type": "Hotel-Management",
        "image": "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/433246392_845706167600411_2768999267750478356_n.jpg?stp=dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5nlkdgErBKMAb7pJqp4&_nc_ht=scontent.fixc4-1.fna&oh=00_AfC77K6TSmDKWJdWZpv3xGKDazVTYwRbiwOCSVZagJ7X4w&oe=662EECE6",
        "link": "https://www.instagram.com/p/C4z6MuoSog4/?utm_source=ig_web_copy_link"
    },

    {
        "id": 16,
        "name": "Interactive Seminar",
        "desc": "Swami Vivekanand College of Law organised an interactive seminar on Alternative Dispute Resolution (ADR) on 10th March, 2023.",
        "program_type": "law",
        "image": "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/331439286_569029698588870_7623071642582570335_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7i7ofA6ettcAb52xPe9&_nc_ht=scontent.fixc4-2.fna&oh=00_AfBWn1CtcP4aPfb2lHhXnfi9Owa73XxolT_PyUW7ym0Lyw&oe=6625E46C",
        "link": "https://www.instagram.com/p/Ctis_6WNxXb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        "id": 17,
        "name": "Inauguration",
        "desc": "Mr. Suvir Sidhu, Advocate, Chairman, Bar Council of Punjab & Haryana inaugurated the Moot Court.",
        "program_type": "law",
        "image": "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/321786223_1670356676712107_5969229893523409596_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7xLOvDiEom4Ab4GIJAj&_nc_ht=scontent.fixc4-3.fna&oh=00_AfAeVCyHJyq-UmiAutaNBjzjA4r4IVuWLS8XYhaaQrdcWQ&oe=6625FFD0",
        "link": "https://www.instagram.com/p/CmqSEeeqGSM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        "id": 18,
        "name": "Indian Constitution Day",
        "desc": "Swami Vivekanand College of Law organized Inter-department Poster making competition on the topic “India the mother of Democracy”.",
        "program_type": "law",
        "image": "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/316686134_509812544523110_5062847170408107393_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D0XG5EncfiUAb7gtQSa&_nc_ht=scontent.fixc4-2.fna&oh=00_AfCMGBNz58ZbAETFr73jpgr8sqBc60X1LK42dNvxxHGyNA&oe=6625F01C",
        "link": "https://www.instagram.com/p/CqVA88Ctmja/?utm_source=ig_web_copy_link"
    },
    {
        "id": 19,
        "name": "Interactive Seminar",
        "desc": "Swami Vivekanand College of Law organised an interactive seminar on Alternative Dispute Resolution (ADR) on 10th March, 2023.",
        "program_type": "law",
        "image": "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/333544986_5995389387216309_3362412567012774753_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Rft9A7Fl3-oAb7ZlfMH&_nc_ht=scontent.fixc4-2.fna&oh=00_AfB05mpFXlH4Lfrik55GZF0fm0mTWfUsyiyHqymp8An9UQ&oe=6625F3E9",
        "link": "https://www.instagram.com/p/CppXyw3yTL9/?utm_source=ig_web_copy_link"
    },
    //New Data
    {
        "id": 20,
        "name": "World Water Day",
        "desc": "Reflecting on our impactful village drive hosted by Swami Vivekanand College of Law in celebration of World Water Day.",
        "program_type": "law",
        "image": "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/432739606_845746284263066_1247820143580682144_n.jpg?stp=dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BeITksUIdzMAb7DE2IR&_nc_ht=scontent.fixc4-2.fna&oh=00_AfBT3NDdVFnCow7dHZfUW_tLb5OWDN9ofVbe8woM8oG3-w&oe=662EF136",
        "link": "https://www.instagram.com/p/C40HpPPLp7a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA== "
    },
    {
        "id": 24,
        "name": "Insightful talk",
        "desc": "Explore the essence of our event in these glimpse, featuring Prof. (Dr.) Ajay Ranga's insightful talk on 'Consumer Awareness: An Indian Perspective. Students got empowered with invaluable knowledge about their consumer rights, shaping them as informed and proactive members of society.",
        "program_type": "law",
        "image": "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/432739390_841051161399245_4379095002407485622_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9X5CSf-JIQcAb7KbbK2&_nc_ht=scontent.fixc4-3.fna&oh=00_AfBvFtCo4QulFUGGbR5zU0YHgdLng7dhIkdsrkxuUlh42w&oe=662EF5BC",
        "link": "https://www.instagram.com/p/C4iF2MfyZEs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA== "
    },

];
export default activities;


// 
