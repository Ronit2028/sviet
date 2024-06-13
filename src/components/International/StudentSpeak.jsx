"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Card,
    CardBody,
    Typography,
    CardHeader,
    Avatar,
} from "@material-tailwind/react";

// images
import img1 from "../../assets/LandingPage/placements/rahul.webp"
import img2 from "../../assets/LandingPage/placements/yash.jpeg"
import img3 from "../../assets/LandingPage/placements/adarsh.webp"
import img4 from "../../assets/LandingPage/placements/amit.webp"

function TestimonialCard({
    img,
    client,
    title,
    clientInfo,
    studentImage,
}) {
    return (
        <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6 py-6 w-[95%] h-[40vh] lg:h-[40vh] flex flex-col justify-between">
            <CardHeader color="transparent" floated={false} shadow={false} className='flex items-center'>
                <Typography
                    color="blue-gray"
                    className="lg:mb-20 mb-4 text-md lg:text-xl font-bold my-auto"
                >
                    &quot;{title}&quot;
                </Typography>
            </CardHeader>
            <CardBody className="px-2 lg:px-4 py-0 flex flex-wrap gap-x-6 justify-between">
                <div>
                    <div className="flex flex-wrap gap-3">
                        <Avatar src={studentImage} className="h-12 w-12 rounded-full" />
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                {client}
                            </Typography>

                            <Typography
                                variant="paragraph"
                                className="font-normal !text-gray-500"
                            >
                                {clientInfo}
                            </Typography>
                        </div>
                    </div>
                </div>
                {/* <img src={img} className="max-h-[4rem] max-w-[8rem]" alt={client} /> */}
            </CardBody>
        </Card>
    );
}

const testimonials = [
    {
        title: "As an international student at SVGOI, I found the faculty to be exceptionally supportive. The campus is vibrant, and the diverse student body made me feel at home. The facilities are top-notch, and I particularly enjoyed the cultural exchange programs.",
        client: "Gaurav Sharma",
        clientInfo: "SDE",
        img: "https://sviet.ac.in/wp-content/uploads/2020/07/Tata.jpg",
        studentImage: img1.src
    },
    {
        title: "SVGOI exceeded my expectations in every way. The curriculum is rigorous yet flexible, allowing me to explore my interests. The student services team was always ready to help with any issues, from academic to personal. I am proud to be part of this community.",
        client: "Yash Khandelwal",
        clientInfo: "System Engineer",
        img: "https://sviet.ac.in/wp-content/uploads/2022/01/info.png",
        studentImage: img2.src,
    },
    {
        title: "The program provided me with the skills and knowledge needed to excel in the field of software development. Highly recommended!",
        client: "Adarsh Kumar",
        clientInfo: "Software Engineer",
        img: "https://sviet.ac.in/wp-content/uploads/2020/07/First-Lady.jpg",
        studentImage: img3.src
    },
    {
        title: "The instructors are top-notch and the curriculum is well-structured. I feel well-prepared for my career in data science.",
        client: "Admit Gautam",
        clientInfo: "Software Developer",
        img: "https://sviet.ac.in/wp-content/uploads/2022/01/uu.png",
        studentImage: img4.src
    },
    {
        title: "Studying at SVGOI has been an enriching experience. The professors are knowledgeable and approachable, and the practical learning approach helped me gain valuable skills. The campus life is engaging with numerous clubs and activities that cater to various interests.",
        client: "Client Name 5",
        clientInfo: "Client Info 5",
        img: "Image URL 5",
        studentImage: "Student Image URL 5"
    },
    {
        title: "SVGOI offers a perfect blend of academic excellence and cultural diversity. The infrastructure is impressive, and the hands-on learning opportunities have prepared me well for my career. I appreciated the efforts of the international office in making my transition smooth.",
        client: "Client Name 6",
        clientInfo: "Client Info 6",
        img: "Image URL 6",
        studentImage: "Student Image URL 6"
    },
    {
        title: "The learning environment at SVGOI is outstanding. The exposure to different teaching methodologies and the chance to work on real-world projects have been invaluable. The friendships I've formed and the support from the faculty have made my experience memorable.",
        client: "Client Name 7",
        clientInfo: "Client Info 7",
        img: "Image URL 7",
        studentImage: "Student Image URL 7"
    },
    {
        title: "Choosing SVGOI was one of the best decisions I've made. The global perspective provided in the courses has broadened my understanding and opened up new career opportunities. The international student community here is strong and very welcoming.",
        client: "Client Name 8",
        clientInfo: "Client Info 8",
        img: "Image URL 8",
        studentImage: "Student Image URL 8"
    },
    {
        title: "SVGOI has a wonderful community that embraces diversity. The academic programs are challenging but rewarding, and the support system for international students is excellent. The campus is safe and has everything you need for a comfortable stay.",
        client: "Client Name 9",
        clientInfo: "Client Info 9",
        img: "Image URL 9",
        studentImage: "Student Image URL 9"
    },
    {
        title: "The holistic education approach at SVGOI is commendable. The balance between theoretical knowledge and practical application is well-maintained. The international student advisor was particularly helpful in guiding me through the initial phases of my stay.",
        client: "Client Name 10",
        clientInfo: "Client Info 10",
        img: "Image URL 10",
        studentImage: "Student Image URL 10"
    },
    {
        title: "SVGOI has provided me with a comprehensive education that combines both practical and theoretical knowledge. The faculty's dedication to student success is truly commendable, always going the extra mile to ensure we understand the material. The campus itself is modern and well-equipped, providing a conducive environment for learning. I have also benefited greatly from the various workshops and seminars that are regularly organized. These have expanded my horizons and enhanced my academic experience.",
        client: "Client Name 11",
        clientInfo: "Client Info 11",
        img: "Image URL 11",
        studentImage: "Student Image URL 11"
    },
    {
        title: "The support system for international students at SVGOI is exceptional. From the moment I arrived, I felt welcomed and well-guided through every step of my transition. The international office is always available to assist with any queries or concerns, making the process smooth and stress-free. The mentorship programs have been particularly beneficial in helping me acclimate to the new environment. Overall, the support provided has been instrumental in my academic and personal growth.",
        client: "Client Name 12",
        clientInfo: "Client Info 12",
        img: "Image URL 12",
        studentImage: "Student Image URL 12"
    },
    {
        title: "The diverse student body and inclusive campus culture at SVGOI have made my educational journey enriching and enjoyable. I have had the opportunity to meet and collaborate with students from various backgrounds, which has broadened my perspective. The university organizes numerous cultural events and activities, fostering a sense of community and belonging. The learning environment is stimulating and encourages open dialogue and exchange of ideas. This diversity has been a key factor in my positive experience.",
        client: "Client Name 13",
        clientInfo: "Client Info 13",
        img: "Image URL 13",
        studentImage: "Student Image URL 13"
    },
    {
        title: "SVGOI's state-of-the-art facilities and resources have greatly enhanced my learning experience. The library is extensive, offering a wide range of materials and digital resources. The laboratories are well-equipped, providing hands-on experience with the latest technology. Additionally, the campus provides various recreational facilities, ensuring a balanced lifestyle. The infrastructure supports a seamless blend of academic and extracurricular activities, contributing to a well-rounded education.",
        client: "Client Name 14",
        clientInfo: "Client Info 14",
        img: "Image URL 14",
        studentImage: "Student Image URL 14"
    },
    {
        title: "The faculty at SVGOI are not only experts in their fields but also approachable and supportive. This has made my academic experience very positive and encouraging. They are always willing to provide additional help outside of class hours and are genuinely interested in our success. The personalized attention and mentoring have been invaluable. Their passion for teaching and commitment to student development are evident in their engaging lectures and interactive sessions.",
        client: "Client Name 15",
        clientInfo: "Client Info 15",
        img: "Image URL 15",
        studentImage: "Student Image URL 15"
    },
    {
        title: "I appreciate the balance between academic rigor and extracurricular activities at SVGOI. It has allowed me to grow both intellectually and personally. The university offers a wide range of clubs and societies catering to various interests, promoting a vibrant campus life. Participation in these activities has helped me develop soft skills and build a strong network. The holistic approach to education ensures that students are well-prepared for future challenges.",
        client: "Client Name 16",
        clientInfo: "Client Info 16",
        img: "Image URL 16",
        studentImage: "Student Image URL 16"
    },
    {
        title: "SVGOI's curriculum is designed to be both challenging and flexible, allowing me to pursue my academic interests in depth. The courses are well-structured, providing a solid foundation in my field of study. I have had the opportunity to take elective courses that align with my career goals. The academic advisors are always available to guide us in making informed decisions. This flexibility has enabled me to tailor my education to suit my aspirations.",
        client: "Client Name 17",
        clientInfo: "Client Info 17",
        img: "Image URL 17",
        studentImage: "Student Image URL 17"
    },
    {
        title: "The international office at SVGOI has been incredibly helpful in addressing my needs and concerns as an international student. They provide comprehensive support, from visa assistance to cultural integration programs. The office organizes regular events and workshops to help international students adapt to the new environment. Their proactive approach ensures that we feel included and supported throughout our stay. This support has been crucial in making my experience at SVGOI positive and fulfilling.",
        client: "Client Name 18",
        clientInfo: "Client Info 18",
        img: "Image URL 18",
        studentImage: "Student Image URL 18"
    },
    {
        title: "The practical learning opportunities at SVGOI, such as internships and projects, have been invaluable in preparing me for the workforce. The university has strong ties with industry, providing students with ample opportunities to gain real-world experience. The career services team offers excellent support in securing internships and job placements. These experiences have not only enhanced my skills but also boosted my confidence. I feel well-prepared to enter the professional world.",
        client: "Client Name 19",
        clientInfo: "Client Info 19",
        img: "Image URL 19",
        studentImage: "Student Image URL 19"
    },
    {
        title: "I have enjoyed the cultural exchange programs at SVGOI, which have broadened my horizons and helped me make lifelong friends. These programs provide a platform to learn about different cultures and traditions. Participating in these activities has enriched my understanding of global perspectives. The university encourages active participation in cultural events, fostering a sense of global citizenship. These experiences have been among the highlights of my time at SVGOI.",
        client: "Client Name 20",
        clientInfo: "Client Info 20",
        img: "Image URL 20",
        studentImage: "Student Image URL 20"
    },
    {
        title: "The campus life at SVGOI is vibrant and engaging, with numerous clubs and activities to participate in. There is always something happening, from academic seminars to recreational events. The student community is active and welcoming, making it easy to make friends and get involved. The university promotes a healthy balance between academics and extracurriculars, ensuring a well-rounded experience. This dynamic campus environment has made my time here enjoyable and fulfilling.",
        client: "Client Name 21",
        clientInfo: "Client Info 21",
        img: "Image URL 21",
        studentImage: "Student Image URL 21"
    },
    {
        title: "SVGOI has a welcoming and inclusive environment that has made my transition to a new country much easier. The faculty, staff, and students are friendly and supportive, creating a sense of belonging. The university offers various support services, including counseling and peer mentoring. These resources have been invaluable in helping me adjust and thrive in my new surroundings. I am grateful for the warmth and hospitality I have received at SVGOI.",
        client: "Client Name 22",
        clientInfo: "Client Info 22",
        img: "Image URL 22",
        studentImage: "Student Image URL 22"
    }
];


export function StudentsSpeak() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 720, // Adjust breakpoint as needed
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
        <section className="px-8 py-10 lg:py-28">
         
            <div className="w-10/12 mx-auto">
                <Typography
                    variant="h2"
                    color="blue-gray"
                    className="mb-4 !text-2xl lg:!text-4xl"
                >
                    Our Students Speak
                </Typography>
                <Typography
                    variant="lead"
                    className="max-w-3xl !text-gray-500 mb-10 lg:mb-20"
                >
                    Our Reviews Speak for Us
                </Typography>
                <Slider {...settings} className="py-12">
                    {testimonials.map((props, key) => (
                        <TestimonialCard key={key} {...props} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default StudentsSpeak;

