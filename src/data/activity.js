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
    "id": 2,
    "image": "",
    "name": "Guest Lecture",
    "desc": "Department of CSE of SVIET has organized A guest lecturer and Q& A session on Programming.",
    "program_type": "Engineering",
    "link": "Read More"
  },
  {
    "id": 3,
    "image": "",
    "name": "Talk Show",
    "desc": "The CEO/Founder of Chai Thela, Mr. Pankaj Judge, shared his life-changing journey during Talk Show: Success Mantra.",
    "program_type": "Engineering",
    "link": "Read More"
  },
  {
    "id": 4,
    "image": "",
    "name": "Super 60 Selection",
    "desc": "Recently SVIET, Chandigarh has organized an Entrance test for the selection of new batch of super 60 students SUPER602K22.",
    "program_type": "Engineering",
    "link": "View More"
  },
  {
    "id": 5,
    "image": "",
    "name": "Interview for S60 Batch",
    "desc": "The selection process for the students of Super 60 & The Uniques batch 2022 has come to an end.",
    "program_type": "Engineering",
    "link": "View More"
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
    program_type: "Business Studies",
    link: "https://www.instagram.com/p/Cwm6CeEry5g/?utm_source=ig_web_copy_link",
  },
  {
    id: 9,
    image:
      "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/391633212_734278022076560_4825640263093733744_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QibqqeQPXkQAb4lnd7R&_nc_ht=scontent.fixc4-1.fna&oh=00_AfB6txDglG0XLhOmsKLou7xK133aGPg9wU18h6ccUNXyPA&oe=662601EE",
    name: "Management Mania 2K23",
    desc: "The Department of Commerce and Management hosted “Management Mania 2K23” on October 10, 2023, featuring 13 management-related episodes.",
    program_type: "Business Studies",
    link: "https://www.instagram.com/p/CyYCYKLSpxV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 10,
    image:
      "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/387805084_733403312164031_1195453040758802563_n.jpg?stp=dst-jpg_p600x600&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Qufq7cWP55MAb7hFdVp&_nc_ht=scontent.fixc4-1.fna&oh=00_AfBqzp4j6haodSejVkmGszO1NL0Xr0NJ9r6guVerQIm0-Q&oe=6625DB3F",
    name: "Workshop",
    desc: "Commerce and Management conducted 2-day workshop on October 11-12. Dr. Satinder Kumar from Punjabi University led sessions on Marketing Research and Network Diagrams.",
    program_type: "Business Studies",
    link: "https://www.instagram.com/p/CyVHXz9SYK4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
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
  {
    "id": 13,
    "name": "Mocktail Session",
    "desc": "A mocktail session was organized by Department of Hotel Management on 22nd September, 2022 for its students.",
    "program_type": "Hotel-Management",
    "image": "https://m.facebook.com/photo.php?fbid=416703610569119&set=a.405861254986688&type=3",
    "link": "View More"
  },
  {
    "id": 14,
    "name": "Indian Cuisine Practical",
    "desc": "Department of Hotel Management organized a INDIAN CUISINE PRACTICAL for the students of BHMCT- 2nd Sem.",
    "program_type": "Hotel-Management",
    "image": "indian_cuisine_image_url",
    "link": "View More"
  },
  {
    "id": 15,
    "name": "Rajasthani Cuisine Practical",
    "desc": "Department of Hotel Management organized a practical on RAJASTHANI CUISINE for the students of BHMCT- 4TH Sem.",
    "program_type": "Hotel-Management",
    "image": "rajasthani_cuisine_image_url",
    "link": "View More"
  },

  {
    "id": 16,
    "name": "Interactive Seminar",
    "desc": "Swami Vivekanand College of Law organised an interactive seminar on Alternative Dispute Resolution (ADR) on 10th March, 2023.",
    "program_type": "law",
    "image": "interactive_seminar_image_url",
    "link": "View More"
  },
  {
    "id": 17,
    "name": "Inauguration",
    "desc": "Mr. Suvir Sidhu, Advocate, Chairman, Bar Council of Punjab & Haryana inaugurated the Moot Court.",
    "program_type": "law",
    "image": "inauguration_image_url",
    "link": "View More"
  },
  {
    "id": 18,
    "name": "Indian Constitution Day",
    "desc": "Swami Vivekanand College of Law organized Inter-department Poster making competition on the topic “India the mother of Democracy”.",
    "program_type": "law",
    "image": "indian_constitution_day_image_url",
    "link": "View More"
  },
  {
    "id": 19,
    "name": "Interactive Seminar",
    "desc": "Swami Vivekanand College of Law organised an interactive seminar on Alternative Dispute Resolution (ADR) on 10th March, 2023.",
    "program_type": "law",
    "image": "interactive_seminar_image_url",
    "link": "View More"
  },


];
export default activities;
