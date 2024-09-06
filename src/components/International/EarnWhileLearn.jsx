// "use client";

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Link from 'next/link';

// const testimonials = [
//     {
//         id: 1,
//         name: "Animbom Yimemeyn",
//         course: "BCA | Batch 2023",
//         country: "Zimbabwe",
//         feedback: "I am incredibly grateful for the opportunities I received at SVGOI, especially through the 'Earn While You Learn' program. This initiative allowed me to gain valuable work experience while studying, leading to my placement at MWIDM, Mohali, as a Trainee in US Recruitment. The program provided both financial independence and practical skills, preparing me to confidently step into my professional career.",
//         headerImage: "https://utfs.io/f/82dbee11-9e87-4d21-867f-4f7c3e8c678e-a8ydmo.30.59_4d09c680.jpg"
//     },
//     {
//         id: 2,
//         name: "Lawrencia Achiaa Bonsu",
//         course: "M.Pharmacy | Batch 2023",
//         country: "Ghana",
//         feedback: "I am truly thankful for the opportunities provided by SVGOI, particularly through the 'Earn While You Learn' program. This initiative allowed me to gain practical industry experience while continuing my studies, which was invaluable. My placement at MWIDM, Mohali, was a direct result of this program. The combination of academic learning and hands-on experience has given me the confidence and skills needed to excel in my professional journey.",
//         headerImage: "https://utfs.io/f/3a49881d-3ae3-4ed4-bd6e-3c280cbd6b4c-a8ydmp.10.07_a62b3726.jpg"
//     },
//     {
//         id: 3,
//         name: "Mercy Brando",
//         course: "M.Pharmacy | Batch 2023",
//         country: "Zimbabwe",
//         feedback: "I am immensely grateful for the opportunities offered by SVGOI, especially through the 'Earn While You Learn' program. This initiative enabled me to gain valuable practical experience while continuing my studies. My placement at MWIDM, Mohali, as a Trainee in US Recruitment, was made possible through this program. The blend of academic learning and real-world experience has equipped me with the confidence and skills to excel in my future career.",
//         headerImage: "https://utfs.io/f/cd37a977-ec0a-4e58-91be-40ecfb4bc9f7-a8ydmq.05.38_ba70e860.jpg"
//     },
//     {
//         id: 4,
//         name: "Greatwin Nicole Makaye",
//         course: "BBA | Batch 2023",
//         country: "Zimbabwe",
//         feedback: "I am incredibly thankful for the opportunities I received at SVGOI, particularly through the 'Earn While You Learn' program. This initiative allowed me to gain practical industry experience while pursuing my studies. My placement at MWIDM, Mohali, as a Trainee in US Recruitment, was a direct outcome of this program. The combination of academic knowledge and hands-on experience has prepared me with the confidence and skills necessary to thrive in my professional career.",
//         headerImage: "https://utfs.io/f/39cf3530-59ac-4745-b458-c65c83e24ade-a8ydmr.18.34_f906f05d.jpg"
//     },
//     {
//         id: 5,
//         name: "Che Bernard David",
//         course: "BBA | Batch 2023",
//         country: "Cameroon",
//         feedback: "I am deeply appreciative of the opportunities provided by SVGOI, especially through the 'Earn While You Learn' program. This initiative gave me the chance to gain practical industry experience while completing my studies. My placement at MWIDM, Mohali, was made possible through this program. The integration of academic learning with real-world exposure has equipped me with the skills and confidence needed to succeed in my professional journey.",
//         headerImage: "https://utfs.io/f/c5d04647-ba3a-43ac-9408-07d8aa6a5647-a8ydmr.27.38_fa3d3679.jpg"
//     },
//     {
//         id: 6,
//         name: "Kinye Leoga Milcels",
//         course: "B.Com | Batch 2023",
//         country: "Zimbabwe",
//         feedback: "Being part of SVGOI's 'Earn While You Learn' program has been a transformative experience for me. This initiative provided me with the opportunity to gain real-world experience at MWIDM, Mohali, while still pursuing my studies. The hands-on work I did as a Trainee in US Recruitment not only complemented my academic learning but also built my confidence and practical skills. I'm excited to apply what I've learned and continue growing in my career.",
//         headerImage: "https://utfs.io/f/039015c3-f3b4-4b8d-997c-e288dcfd9442-a8ydmp.50.45_aa0bbf7d.jpg"
//     }
// ];

// const TestimonialCard = ({ index, name, course, country, feedback, headerImage }) => (
//     <div className={`w-full flex flex-col md:flex-row items-center p-4`}>
//         <div className="w-full md:w-1/3 pr-0 md:pr-2 mb-4 md:mb-0">
//             <img src={headerImage} alt="testimonial" className="w-full h-auto rounded-lg md:rounded-l-lg border-b-8 border-[#fea700]" />
//         </div>
//         <div className="w-full md:w-2/3 p-4 md:p-8 border rounded-lg shadow-xl">
//             <p className="text-base md:text-lg pl-4 text-justify mb-4 md:mb-8">{feedback}</p>
//             <p className="text-base md:text-lg font-semibold mb-2 pl-4 text-yellow-500">{name}</p>
//             <p className="text-sm md:text-base mb-1 pl-4">{course}</p>
//             <p className="text-sm md:text-base mb-4 pl-4">{country}</p>
//         </div>
//     </div>
// );

// const EarnWhileLearn = () => {
//     const settings = {
//         autoplay: true,
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 720,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     vertical: false,
//                     verticalSwiping: false,
//                 },
//             },
//         ],
//     };

//     return (
//         <div style={{
//             backgroundImage: "url(https://sviet.org.in/wp-content/uploads/IMG_1197-scaled-1.jpg)",
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             backgroundAttachment: "fixed"
//         }}>
//             <div className="w-full h-auto md:h-[100vh] flex justify-center items-center bg-[#00112deb] text-white py-4 overflow-hidden ">
//                 <div className="w-11/12 lg:w-10/12 py-6 flex flex-col md:flex-col md:mt-36 lg:mt-16 lg:flex-row">
//                     <div className="text-start w-full lg:w-1/3 flex flex-col lg:pl-16 justify-center p-6">
//                         <h1 className="text-3xl lg:text-5xl font-normal mb-4">Earn While Learn</h1>
//                         <p className="text-base md:text-xl lg:text-justify text-left">
//                             Our "Earn While Learn" program is designed to provide international students with a unique opportunity to gain valuable work experience while pursuing their studies. This initiative helps students blend academic knowledge with practical skills, ensuring they are well-prepared for the global job market.
//                         </p>
//                     </div>
//                     <div className="w-full lg:w-2/3 ">
//                         <Slider {...settings} className="w-full py-8 md:py-12 ">
//                             {testimonials.map((testimonial, index) => (
//                                 <div key={index} className="w-[95%] mx-auto px-2 h-full">
//                                     <div className="rounded-md shadow-md bg-white text-[#00112d] h-auto flex flex-col ">
//                                         <TestimonialCard
//                                             index={index}
//                                             name={testimonial.name}
//                                             course={testimonial.course}
//                                             country={testimonial.country}
//                                             feedback={testimonial.feedback}
//                                             headerImage={testimonial.headerImage}
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EarnWhileLearn;
"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

const testimonials = [
    {
        id: 1,
        name: "Animbom Yimemeyn",
        course: "BCA | Batch 2023",
        country: "Zimbabwe",
        feedback: "I am incredibly grateful for the 'Earn While You Learn' program at SVGOI. This initiative allowed me to gain valuable work experience while studying, leading to my placement at MWIDM, Mohali. The program provided both financial independence and practical skills, preparing me for my professional career with confidence.",
        headerImage: "https://utfs.io/f/8406a631-8af0-4acf-9d61-e99e21d99bd4-17q.jpg"
    },
    {
        id: 2,
        name: "Lawrencia Achiaa Bonsu",
        course: "M.Pharmacy | Batch 2023",
        country: "Ghana",
        feedback: "I am truly thankful for SVGOI's 'Earn While You Learn' program. It enabled me to gain practical industry experience while studying, which was invaluable for my placement at MWIDM, Mohali. The combination of academic learning and hands-on experience has given me the skills needed to excel in my career.",
        headerImage: "https://utfs.io/f/5f306c4c-bea4-4b41-a054-276968ce69cc-18e.jpg"
    },
    {
        id: 3,
        name: "Mercy Brando",
        course: "M.Pharmacy | Batch 2023",
        country: "Zimbabwe",
        feedback: "I am immensely grateful for SVGOI's 'Earn While You Learn' program. It allowed me to gain practical experience while studying, leading to my placement at MWIDM, Mohali. This blend of academic learning and real-world exposure has equipped me with the confidence and skills needed to excel in my future career.",
        headerImage: "https://utfs.io/f/c5637b69-dc51-4aaf-b378-782904679350-17r.jpg"
    },
    {
        id: 4,
        name: "Greatwin Nicole Makaye",
        course: "BBA | Batch 2023",
        country: "Zimbabwe",
        feedback: "I am thankful for the 'Earn While You Learn' program at SVGOI. It gave me the chance to gain industry experience while pursuing my studies. My placement at MWIDM, Mohali, was a direct outcome of this program, which prepared me with the confidence and skills necessary to thrive in my professional career.",
        headerImage: "https://utfs.io/f/8fc94af2-9e04-43d2-bc63-baae2798d7ce-18f.jpg"
    },
    {
        id: 5,
        name: "Che Bernard David",
        course: "BBA | Batch 2023",
        country: "Cameroon",
        feedback: "I deeply appreciate the 'Earn While You Learn' program at SVGOI. It provided me with the chance to gain practical industry experience while completing my studies. This program has equipped me with the skills and confidence needed to succeed in my professional journey.",
        headerImage: "https://utfs.io/f/b88a3011-9807-42bd-b5aa-037eb42ff871-18g.jpg"
    },
    {
        id: 6,
        name: "Kinye Leoga Milcels",
        course: "B.Com | Batch 2023",
        country: "Zimbabwe",
        feedback: "Being part of SVGOI's 'Earn While You Learn' program has been transformative. It allowed me to gain real-world experience at MWIDM, Mohali, while continuing my studies. The hands-on work I did as a Trainee in US Recruitment not only complemented my academic learning but also built my confidence and skills.",
        headerImage: "https://utfs.io/f/4e0eb508-4c79-4abd-8e7d-f62d38258a1a-fmmr1z.jpg"
    },
    {
        id: 7,
        name: "Jamila Mazrui",
        course: "BCA | Batch 2024",
        country: "Kenya",
        feedback: "SVGOI's 'Earn While You Learn' program has been an enriching journey. The opportunity to work with Apaana Healthcare, Mohali, while continuing my studies has given me invaluable industry experience. This experience has prepared me for future challenges, and I’m eager to leverage these insights as I move forward in my career.",
        headerImage: "https://utfs.io/f/6198ec27-043e-44fa-ada4-06a71188ca5d-18h.png"
    },
    {
        id: 8,
        name: "Charity Matangaidze",
        course: "BA.LLB | Batch 2024",
        country: "Zimbabwe",
        feedback: "Participating in SVGOI's 'Earn While You Learn' program has been eye-opening. Working with Apaana Healthcare, Mohali, alongside my studies provided hands-on exposure that complements my legal education. This experience has boosted my skills and confidence, preparing me for future success in my field.",
        headerImage: "https://utfs.io/f/ead3fe28-f4b5-4688-a3aa-372e9f166791-18i.png"
    },
    {
        id: 9,
        name: "Marcelle Madzima",
        course: "B.Voc HM | Batch 2024",
        country: "Zimbabwe",
        feedback: "SVGOI's 'Earn While You Learn' program has been incredibly rewarding. My placement at PrimeFox Infotech as a Process Associate allowed me to gain practical industry knowledge while continuing my studies. This opportunity has significantly enhanced my skills, preparing me for future challenges.",
        headerImage: "https://utfs.io/f/b85767d3-0176-4ce8-a484-792878ea1135-18j.png"
    },
    {
        id: 10,
        name: "Takunda Mike Mariso",
        course: "Diploma CSE | Batch 2024",
        country: "Zimbabwe",
        feedback: "Being part of SVGOI's 'Earn While You Learn' program has been life-changing. The opportunity to work at Apaana Healthcare as an Associate Trainee not only helped me gain practical skills but also provided financial support to continue my education. This experience has been invaluable in shaping my future.",
        headerImage: "https://utfs.io/f/015c2446-cd76-48b8-a98b-06635aac253d-18k.png"
    },
    {
        id: 11,
        name: "Liza Ndlovu",
        course: "B.Voc HM | Batch 2024",
        country: "Zimbabwe",
        feedback: "My journey at SVGOI has been transformative, especially through the 'Earn While You Learn' program. Being placed at PrimeFox Infotech as a Process Associate has sharpened my professional skills and provided financial support. This experience has empowered me to step confidently into the future.",
        headerImage: "https://utfs.io/f/8b67f85a-3763-44c1-88db-4cb405e718a8-18l.png"
    },
    {
        id: 12,
        name: "Theresa Urombo",
        course: "M.Sc. MLS | Batch 2024",
        country: "Zimbabwe",
        feedback: "My experience at SVGOI has been truly enriching, especially through the 'Earn While You Learn' program. Working at Grey Matters Group as a Speaking Trainee provided me with financial support and improved my communication skills. The chance to work while studying has boosted my confidence and prepared me for future career success.",
        headerImage: "https://utfs.io/f/91e93192-b48e-4c31-a2cb-f1406ebf6322-fmmr1z.jpg"
    }
];



const TestimonialCard = ({ index, name, course, country, feedback, headerImage }) => (
    <div className="event-card rounded-md shadow-md bg-white text-[#00112d] h-full flex flex-col justify-between">
        <div
            className="image-section h-48 md:h-64"
            style={{
                backgroundImage: `url(${headerImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
            }}
        />
        <div className="text-section p-4 md:p-6 flex flex-col justify-between h-auto">
            <div>
                <p className="text-sm md:text-md pb-2 text-justify line-clamp-12">
                    {feedback}
                </p>
                <p className="text-lg md:text-md font-semibold text-[#fea700]">{name}</p>
                <p className="text-sm font-semibold ">{course}</p>
                <p className="text-sm font-semibold ">{country}</p>
            </div>
        </div>
    </div>
);


const EarnWhileLearn = () => {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                },
            },
        ],
    };

    return (
        <div
            style={{
                backgroundImage: "url(https://sviet.org.in/wp-content/uploads/IMG_1197-scaled-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="w-full h-auto  flex justify-center items-center bg-[#00112deb] text-white py-10  overflow-hidden">
                <div className="w-10/12 py-6 flex flex-col flex-wrap-reverse md:flex-row">
                    <div className="w-full lg:w-2/3">
                        <Slider {...settings} className="w-full py-8 md:py-12">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-[95%] mx-auto px-2 h-full">
                                    <TestimonialCard
                                        index={index}
                                        name={testimonial.name}
                                        course={testimonial.course}
                                        country={testimonial.country}
                                        feedback={testimonial.feedback}
                                        headerImage={testimonial.headerImage}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="text-start w-full lg:w-1/3 flex flex-col lg:pl-16 justify-center md:p-6">
                        <h1 className="lg:text-5xl text-3xl font-normal mb-4">Earn While Learn</h1>
                        <p className="text-xl pb-4 font-semibold">
                            Our "Earn While Learn" program is designed to provide international students with a unique opportunity to gain valuable work experience while pursuing their studies.
                        </p>
                        <p className="mb-4 text-justify">
                            This initiative helps students blend academic knowledge with practical skills, ensuring they are well-prepared for the global job market.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarnWhileLearn;
