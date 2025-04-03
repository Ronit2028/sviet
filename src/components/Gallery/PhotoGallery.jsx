// import React from 'react'

// const PhotoGallery = ({speakers, type}) => {
//     const organizers = [
//         {
//             id: 1,
//             image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/events/Copy%2520of%2520WTM%2520IWD%25202024%2520-%2520Profile%2520Avatar%2520%25282%2529.jpg",
//             name: "Loveleen Kaur",
//             company: "Astrotalk",
//             designation: "Senior Software Engineer",
//             profile: "",
//             twitter: "https://twitter.com/cammykamal",
//             linkedin: "https://www.linkedin.com/in/kamal-vaid/",
//             bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
//         },
//         {
//             id: 2,
//             image: "https://gdgchandigarh.com/assets/organizers/Pranav.png",
//             name: "Pranav Kumar",
//             company: "Nagarro",
//             designation: "Sen. Engineerr",
//             profile: "",
//             twitter: "https://twitter.com/hifiveyatin",
//             linkedin: "https://www.linkedin.com/in/hifiveyatin/",
//             bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
//         },
//         {
//             id: 3,
//             image: "https://gdgchandigarh.com/assets/organizers/Aashi.jpeg",
//             name: "Aashi Dutt",
//             company: "MedEnGauge Healthcare Pvt Ltd",
//             designation: "Co-Founderr",
//             profile: "",
//             twitter: "https://twitter.com/loveleen_nancy",
//             linkedin: "https://www.linkedin.com/in/loveleen-kaur/",

//             bio: "Loveleen Kaur, a bundle of positivity and happiness, this tech-savvy girl loves mountains and works wonders with technology. She is currently working as an Senior Android Developer with 5 years of experience. She is Co-Organizer of GDG Chandigarh, WTM Ambassador and Google Android Educator. Hailing from the technology field, she loves logic, but also has a passion for creativity. In her free time, She loves to mentor people to help them learn and grow in their career."
//         },
//         {
//             id: 4,
//             image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/WhatsApp%2520Image%25202023-08-04%2520at%252017.32.11.jpeg",
//             name: "Nitin Tiwari",
//             company: "LTIMindtree",
//             designation: "Software Engineerr",
//             profile: "",
//             linkedin: "https://www.linkedin.com/in/pranav-kumar-verma/",
//             twitter: "https://twitter.com/prnvkmr954",
//             bio: "Pranav is a Senior Engineer by profession having 6.7 years of experience in corporate field. He loves programming and developing games. He states that learning is a process that never stops, even if you are old enough, there will be things that you can still learn. His hobbies are reading books playing games."
//         },
//         {
//             id: 5,
//             image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/WhatsApp%2520Image%25202023-05-23%2520at%25205.28.55%2520PM%2520%25282%2529.jpeg",
//             name: "Kartik Derasari",
//             company: "Google Cloud",
//             designation: "Google Cloud Expert",
//             profile: "",
//             twitter: "https://twitter.com/CherishSantoshi",
//             linkedin: "https://www.linkedin.com/in/cherishsantoshi/",
//             bio: "An experienced Program Manager currently managing programs for 5 million developers across the globe. I'm passionate about building and scaling tech-communities and promoting technical education."
//         },

//     ]
//     return (
//         <div className=' mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
//             {speakers.map((organizer, index) => (
//                 <div key={index} className='bg-white rounded-md shadow-md p-6 h-full flex gap-3 items-center'>
//                     <img src={organizer.image} className='h-[100px] w-[100px] rounded-full' alt="" />
//                     <div>
//                         <div className='mb-2'>
//                             <p className="text-lg font-bold">
//                                 {organizer.name}
//                             </p>
//                             <p className="text-sm font-semibold">
//                                 {organizer.company}
//                             </p>
//                         </div>
//                         <p className="text-sm font-semibold text-red-800">
//                             {organizer.designation}
//                         </p>
//                         <p className="text-white w-fit text-sm bg-red-800 rounded-md p-1 my-2">{type}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default PhotoGallery

import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

const PhotoGallery = ({ type }) => {
    const galleries = [
        {
            "id": 1,
            "image": "https://utfs.io/f/f6b3783c-66de-4f32-a72b-9041fcc8472e-nm33wo.jpg",
            "event_name": "Departments",
            "description": "Snapshots from our departmental showcases, celebrating academic achievements and innovation.",
            "gallery": "https://drive.google.com/drive/u/4/folders/1s0AUtKrv9oUoCgotsB1nQaVsl-pHRp-q"
        },
        {
            "id": 5,
            "image": "https://utfs.io/f/db9bb4f9-5f2a-486a-b24e-c6a29435366a-w384cm.jpg",
            "event_name": "Cultural Activities",
            "description": "Relive the vibrant performances and cultural expressions that brought our campus alive.",
            "gallery": "https://drive.google.com/drive/u/4/folders/1LQS2kFNZsnlt9NG-_Kwt6t3r5c49HR4L"
        },
        {
            "id": 8,
            "image": "https://utfs.io/f/d77d2e93-bb44-4f3d-8b8b-70651ff5f997-dgdqel.webp",
            "event_name": "Events",
            "description": "Memorable highlights from key events, capturing the excitement and engagement.",
            "gallery": "https://drive.google.com/drive/u/4/folders/1hVAhmkpLa8CEGVtI5-fTI1iMlumByxPQ"
        },
        {
            "id": 14,
            "image": "https://utfs.io/f/a72c45ff-5623-43b0-b64f-c7062d359205-nm33wo.jpg",
            "event_name": "Campus Vibes",
            "description": "A vibrant showcase of campus life, featuring candid moments and unique interactions.",
            "gallery": "https://drive.google.com/drive/u/4/folders/1kBBTxL_jS2YUtk2Cp-eECgHwSlAN7ju_"
        },
        {
            "id": 16,
            "image": "https://utfs.io/f/f3179493-2246-445d-9fcf-77eb59db9293-x2mjo0.jpeg",
            "event_name": "Sports",
            "description": "Action-packed shots from our sports events, highlighting athleticism and teamwork.",
            "gallery": "https://drive.google.com/drive/u/4/folders/1Tgem_IXYdBdM9drUl3Pa3kwPquBMy631"
        },
        {
            "id": 18,
            "image": "https://utfs.io/f/4e6ea4f6-7eb8-4c00-af72-4b34097df548-26ylxr.jpg",
            "event_name": "T&P",
            "description": "Capturing the essence of our Training & Placement activities, showcasing career-building opportunities.",
            "gallery": "https://drive.google.com/drive/folders/1WIyELewRoDhgCP3GNmgQXCg4o3BvJyTt"
        }
        // {
        //     id: 2,
        //     image: "https://utfs.io/f/a2b3518f-f8ab-4a5b-b5b5-93125c1f5509-dyxwz9.jpg",
        //     event_name: "Applied Sciences",
        //     description: "A gallery showcasing the Applied Sciences event through engaging photos.",
        //     gallery: "https://drive.google.com/drive/folders/1WQ5a7_P_7F_6iKSfWptOr5QzREXfurND"
        // },
        // {
        //     id: 3,
        //     image: "https://utfs.io/f/fe06744e-ad97-4060-83b2-3a3c3255b5d9-2fq5wp.webp",
        //     event_name: "Computer Application",
        //     description: "Photos from the Computer Application event, featuring key moments and highlights.",
        //     gallery: "https://drive.google.com/drive/folders/1hGhqU3Y0hUnMaLr-u2HFI2d7f6ozmjJv"
        // },
        // {
        //     id: 4,
        //     image: "https://utfs.io/f/a4b1c9a2-8777-4540-8e54-be2b2b311df6-rhz8j6.jpg",
        //     event_name: "End Batch Pics",
        //     description: "Highlights from the End Batch event, featuring memorable moments and activities.",
        //     gallery: "https://drive.google.com/drive/folders/1q-SAZbnmSmu-x0TqMdni71nrrWr-3uR-"
        // },
        
        // {
        //     id: 6,
        //     image: "https://utfs.io/f/ad8fe976-1465-45fc-8e3e-47fb03683c31-6yxgx9.jpg",
        //     event_name: "Hotel Management",
        //     description: "Visuals highlighting key moments from the Hotel Management event and its discussions.",
        //     gallery: "https://drive.google.com/drive/folders/1VPVrYjp0UozIHaZ2zq8EBAZzZbbF2sJy"
        // },
        // {
        //     id: 7,
        //     image: "https://utfs.io/f/a0e87531-3145-4e21-a148-9a9ccfea56ba-41dn1d.jpg",
        //     event_name: "International Department",
        //     description: "Photos capturing the International Department event, showcasing global interactions.",
        //     gallery: "https://drive.google.com/drive/folders/1Gcx2qjZuaM9EuuaEUX-LVqkXwZAU5FyQ"
        // },
        
        // {
        //     id: 9,
        //     image: "https://utfs.io/f/248bd660-bd89-48f9-a460-ffc3667458fa-nm33wo.jpg",
        //     event_name: "Mom",
        //     description: "Highlights from the Mom event, featuring key moments and special memories.",
        //     gallery: "https://drive.google.com/drive/folders/1YjCrrzThetMmjQQ4_QBlgspCf_CJfEo5"
        // },
        // {
        //     id: 10,
        //     image: "https://utfs.io/f/d2c8a46f-9ca9-438b-83ed-9ecf8faaa39e-h50yev.jpg",
        //     event_name: "MBA",
        //     description: "A collection of images from the MBA event, showcasing key presentations and interactions.",
        //     gallery: "https://drive.google.com/drive/folders/1hvJhAlE4nCj5pjJqe1qulztwbKSJqBuy"
        // },
        // {
        //     id: 11,
        //     image: "https://utfs.io/f/9a0f7feb-b766-42ad-a171-7f0fd5cd9d27-74edaw.webp",
        //     event_name: "Paramedical Sciences",
        //     description: "Photos from the Paramedical Sciences event, highlighting academic and practical sessions.",
        //     gallery: "https://drive.google.com/drive/folders/1e0_Pat6UDCMw1CU0ZsQVTI6PeLlZBrR1"
        // },
        // {
        //     id: 12,
        //     image: "https://utfs.io/f/b7c865ef-f8a1-4cfc-9780-015320f8a6ba-qwm3k7.jpg",
        //     event_name: "Pharmacy",
        //     description: "A gallery of images from the Pharmacy event, showcasing educational and interactive sessions.",
        //     gallery: "https://drive.google.com/drive/folders/1ac1Ge73BHwvahFCcjoPIRwA0dK1sYNfo"
        // },
        // {
        //     id: 13,
        //     image: "https://utfs.io/f/1252c9c2-3d91-4c17-ac43-6f88d806b249-jlo1ag.jpg",
        //     event_name: "Radio Imaging Technology",
        //     description: "Photos from the Radio Imaging Technology event, highlighting key moments and sessions.",
        //     gallery: "https://drive.google.com/drive/folders/1moyMNb7Qix0UDHJi1t65FNcc-a3bUM6y"
        // },
        
        // {
        //     id: 15,
        //     image: "https://utfs.io/f/1765a327-6659-4f3e-8236-277dfd3d62b2-nm33wo.jpg",
        //     event_name: "Reels 2024",
        //     description: "Photos from Reels 2024, capturing key moments and activities.",
        //     gallery: "https://drive.google.com/drive/folders/1UHMNK0Z_OZ8H7SbCms0CuBr780IWAqzT"
        // },
        
        // {
        //     id: 17,
        //     image: "https://utfs.io/f/fb2f55ae-d5e4-4dac-af03-1a1e0280be12-lku8wk.jpg",
        //     event_name: "Super 60",
        //     description: "Highlights from the Super 60 event, showcasing key achievements and moments.",
        //     gallery: "https://drive.google.com/drive/folders/1XFstOdtlzKnrh-7rTm7_xDpl2uGX7WP_"
        // },
        
    ];
    
    return (
        <div className='mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-20 px-4 sm:px-8 md:px-16 lg:px-20'>
            {galleries.map((gallery) => (
                <div key={gallery.id} className='bg-white rounded-md shadow-md p-4 sm:p-6 flex flex-col sm:flex-row gap-3 items-center'>
                    <img 
                        src={gallery.image} 
                        className='h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] rounded-sm object-cover' 
                        alt={gallery.event_name} // Improved alt text
                    />
                    <div className='text-center sm:text-left'>
                        <div className='mb-2'>
                            <p className="text-lg font-bold lg:mb-2">
                                {gallery.event_name}
                            </p>
                            <p className="text-sm font-semibold lg:text-justify">
                                {gallery.description}
                            </p>
                        </div>
                        <a 
                            href={gallery.gallery} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-md no-underline font-semibold text-[#fea700] flex justify-center sm:justify-start items-center"
                        >
                            View Gallery <ChevronDoubleRightIcon className='h-4 w-4 font-bold mt-[2px] ml-1' />
                        </a>
                        <p className="text-white w-fit text-sm bg-[#fea700] rounded-md p-1 my-2 mx-auto sm:mx-0">{type}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PhotoGallery;
