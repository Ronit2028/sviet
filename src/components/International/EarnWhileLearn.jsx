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
        feedback: "I am incredibly grateful for the opportunities I received at SVGOI, especially through the 'Earn While You Learn' program. This initiative allowed me to gain valuable work experience while studying, leading to my placement at MWIDM, Mohali, as a Trainee in US Recruitment. The program provided both financial independence and practical skills, preparing me to confidently step into my professional career.",
        headerImage: "https://utfs.io/f/8406a631-8af0-4acf-9d61-e99e21d99bd4-17q.jpg"
    },
    {
        id: 2,
        name: "Lawrencia Achiaa Bonsu",
        course: "M.Pharmacy | Batch 2023",
        country: "Ghana",
        feedback: "I am truly thankful for the opportunities provided by SVGOI, particularly through the 'Earn While You Learn' program. This initiative allowed me to gain practical industry experience while continuing my studies, which was invaluable. My placement at MWIDM, Mohali, was a direct result of this program. The combination of academic learning and hands-on experience has given me the confidence and skills needed to excel in my professional journey.",
        headerImage: "https://utfs.io/f/5f306c4c-bea4-4b41-a054-276968ce69cc-18e.jpg"
    },
    {
        id: 3,
        name: "Mercy Brando",
        course: "M.Pharmacy | Batch 2023",
        country: "Zimbabwe",
        feedback: "I am immensely grateful for the opportunities offered by SVGOI, especially through the 'Earn While You Learn' program. This initiative enabled me to gain valuable practical experience while continuing my studies. My placement at MWIDM, Mohali, as a Trainee in US Recruitment, was made possible through this program. The blend of academic learning and real-world experience has equipped me with the confidence and skills to excel in my future career.",
        headerImage: "https://utfs.io/f/c5637b69-dc51-4aaf-b378-782904679350-17r.jpg"
    },
    {
        id: 4,
        name: "Greatwin Nicole Makaye",
        course: "BBA | Batch 2023",
        country: "Zimbabwe",
        feedback: "I am incredibly thankful for the opportunities I received at SVGOI, particularly through the 'Earn While You Learn' program. This initiative allowed me to gain practical industry experience while pursuing my studies. My placement at MWIDM, Mohali, as a Trainee in US Recruitment, was a direct outcome of this program. The combination of academic knowledge and hands-on experience has prepared me with the confidence and skills necessary to thrive in my professional career.",
        headerImage: "https://utfs.io/f/8fc94af2-9e04-43d2-bc63-baae2798d7ce-18f.jpg"
    },
    {
        id: 5,
        name: "Che Bernard David",
        course: "BBA | Batch 2023",
        country: "Cameroon",
        feedback: "I am deeply appreciative of the opportunities provided by SVGOI, especially through the 'Earn While You Learn' program. This initiative gave me the chance to gain practical industry experience while completing my studies. My placement at MWIDM, Mohali, was made possible through this program. The integration of academic learning with real-world exposure has equipped me with the skills and confidence needed to succeed in my professional journey.",
        headerImage: "https://utfs.io/f/b88a3011-9807-42bd-b5aa-037eb42ff871-18g.jpg"
    },
    {
        id: 6,
        name: "Kinye Leoga Milcels",
        course: "B.Com | Batch 2023",
        country: "Zimbabwe",
        feedback: "Being part of SVGOI's 'Earn While You Learn' program has been a transformative experience for me. This initiative provided me with the opportunity to gain real-world experience at MWIDM, Mohali, while still pursuing my studies. The hands-on work I did as a Trainee in US Recruitment not only complemented my academic learning but also built my confidence and practical skills. I'm excited to apply what I've learned and continue growing in my career.",
        headerImage: "https://utfs.io/f/4e0eb508-4c79-4abd-8e7d-f62d38258a1a-fmmr1z.jpg"
    }
];

const TestimonialCard = ({ index, name, course, country, feedback, headerImage }) => (
    <div className="event-card rounded-md shadow-md bg-white text-[#00112d] h-[60vh] flex flex-col justify-between">
        <div
            className="image-section h-1/2"
            style={{
                backgroundImage: `url(${headerImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
            }}
        />
        <div className="text-section my-auto p-6 h-1/2 flex flex-col justify-between">
            <div>
                <p className="text-lg md:text-xl font-semibold mb-3">{name}</p>
                <p className="text-sm md:text-md pb-6 line-clamp-4 text-justify">{feedback}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-sm font-semibold text-[#fea700]">{course}, {country}</p>
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
            <div className="w-full h-auto md:h-[100vh] flex justify-center items-center bg-[#00112deb] text-white py-10 overflow-hidden">
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
