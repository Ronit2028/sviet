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


import React from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

const PhotoGallery = ({ type }) => {
    const speakers = [
        {
            id: 1,
            image: "https://utfs.io/f/96dd0f23-861d-427d-8c1f-ab1ee953ad13-cot3tk.webp",
            event_name: "Teej",
            description: "Celebrating the vibrant festival of Teej with various cultural activities.",
            gallery: "https://drive.google.com/drive/folders/1RemCuvpUxX_pWbV5AmXEoZmf2VPzB1Nj "
        },
        {
            id: 2,
            image: "https://utfs.io/f/2e3a643e-c8c3-4e11-b7ef-5e6c947bfba9-869kq6.webp",
            event_name: "Independence Day'24",
            description: "Commemorating Independence Day with patriotic events and speeches.",
            gallery: "https://drive.google.com/drive/folders/1PzmHPe0oiqN684MRSDfwXh8N3SI_djyF"
        },
        {
            id: 3,
            image: "https://utfs.io/f/55cf797c-3716-4916-b775-0a61c0cbc09c-ls62sd.jpg",
            event_name: "Techathon2.0",
            description: "Techathon 2.0 emerged as a dynamic fusion of innovation and entertainment.",
            gallery: "https://drive.google.com/drive/folders/1IqmUhyinq7CjRaz9T-TRHiu3tJDfZJ4Y"
        },
        {
            id: 4,
            image: "https://utfs.io/f/9a08b157-a1bd-4310-b37e-b1582b2a156c-inzo76.jpg",
            event_name: "Global Future Summit 2k24",
            description: "Uniquely focused on the evolving dynamics between industry trends and human resources strategies.",
            gallery: "https://drive.google.com/drive/folders/1g6wboDF2C4qJ-4RxPE7uwW_d43Nt8FHW"
        },
        {
            id: 5,
            image: "https://utfs.io/f/da745ae4-7fbe-4c73-9475-bfbfd1fc7ba7-pq03ce.jpg",
            event_name: "Lohri",
            description: "Lohri celebrates the harvest season with bonfires and festive traditions.",
            gallery: "https://drive.google.com/drive/folders/1bJlP8W-MMveS2YTroCIPQVULvJugQSER"
        },
        {
            id: 6,
            image: "https://utfs.io/f/d77d2e93-bb44-4f3d-8b8b-70651ff5f997-dgdqel.webp",
            event_name: "Spontania 2k24",
            description: "Spontania 2K24 lit up the cultural scene with its vibrant and spirited celebration.",
            gallery: "https://drive.google.com/drive/folders/1rycy6DO7xXKkvS7uMNJoXLgLHxIAfilT"
        },
        {
            id: 7,
            image: "https://utfs.io/f/2ca3c7f5-4ab9-477d-8664-eef268e4ca3b-amrkfi.jpg",
            event_name: "Covocation 14th",
            description: "Convocation 14 emerged as a hallmark of academic excellence and inspirational milestones.",
            gallery: "https://drive.google.com/drive/folders/1ak54oiw-Fdi0vC9qL22HovIyU_yByaEi"
        },
    ];
    

    return (
        <div className='mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-20 px-4 sm:px-8 md:px-16 lg:px-20'>
            {speakers.map((organizer) => (
                <div key={organizer.id} className='bg-white rounded-md shadow-md p-4 sm:p-6 flex flex-col sm:flex-row gap-3 items-center'>
                    <img 
                        src={organizer.image} 
                        className='h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] rounded-sm object-cover' 
                        alt={organizer.event_name} // Improved alt text
                    />
                    <div className='text-center sm:text-left'>
                        <div className='mb-2'>
                            <p className="text-lg font-bold lg:mb-2 ">
                                {organizer.event_name}
                            </p>
                            <p className="text-sm font-semibold lg:text-justify ">
                                {organizer.description}
                            </p>
                        </div>
                        <a 
                            href={organizer.gallery} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-md no-underline font-semibold text-[#fea700]  flex justify-center sm:justify-start items-center"
                        >
                            View Gallery <ChevronDoubleRightIcon className='h-4 w-4 font-bold mt-[2px] ml-1' />
                        </a>
                        <p className="text-white w-fit text-sm bg-[#fea700]  rounded-md p-1 my-2 mx-auto sm:mx-0">{type}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PhotoGallery;