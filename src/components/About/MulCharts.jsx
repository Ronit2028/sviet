"use client"



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export default function MulCharts() {


    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);




    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <div className="slider-container md:w-4/5 container m-auto">
            <h2></h2>
            <h4></h4>
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} >
                <div >
                    <div className="md:w-10/12 m-auto ">
                        <h1 className="text-xl font-medium text-center py-8">Percentage of Placements By Course</h1>
                        <Bar
                            data={{
                                labels: ["Engineering", "Pharmacy", "Business Management", "Agriculture", "Computer Application", "Paramedical", "Hospitality and Catering", "Diploma", "Accounting", "Others"],
                                datasets: [
                                    {
                                        label: "Students Placed",
                                        data: [93, 95, 89, 52, 91, 75, 87, 50, 55, 45],
                                        backgroundColor: '#016db6',
                                    },
                                    // {
                                    //     label: "Not placed",
                                    //     data: [1, 2, 3, 0, 0],
                                    //     backgroundColor: '#ff9602',
                                    // },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: true,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    }
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Years'
                                        }
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Number of Students'
                                        }
                                    }
                                }
                            }}
                        />
                    </div>

                </div>
                <div>
                    <div className="md:w-10/12 m-auto ">
                        <h1 className="text-xl font-medium text-center py-8">Companies Visited for Placement Drives (Last 5 Years Trends)</h1>
                        <Bar
                            data={{
                                labels: ["2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Number of Companies",
                                        data: [143, 140, 203, 240, 255],
                                        backgroundColor: '#fea700',
                                    },
                                    // {
                                    //     label: "Not placed",
                                    //     data: [1, 2, 3, 0, 0],
                                    //     backgroundColor: '#ff9602',
                                    // },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: true,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    }
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Years'
                                        }
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'LPA'
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div className="md:w-10/12 m-auto ">
                        <h1 className="text-xl font-medium text-center py-8">Industry Leadning Pay Package Offered (Last 7 years Trends)</h1>
                        <Bar
                            data={{
                                labels: ["2017", "2018","2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Packages in LPA",
                                        data: [15, 20, 25.5, 37, 48, 50, 50],
                                        backgroundColor: '#016db6',
                                    },
                                    // {
                                    //     label: "Not placed",
                                    //     data: [1, 0, 0, 8, 9],
                                    //     backgroundColor: '#ff9602',
                                    // },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: true,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    }
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Years'
                                        }
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Number of Students'
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div className="w-10/12 m-auto ">
                        <h1 className="text-xl font-medium text-center py-8">Success Rates (Last 8 Years Trends)</h1>
                        <Bar
                            data={{
                                labels: ["2016","2017","2018","2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Percentage Rate",
                                        data: [72,82,89,95,93,96,94,92],
                                        backgroundColor: '#fea700',
                                    },
                                    // {
                                    //     label: "Not placed",
                                    //     data: [1, 6, 9, 0, 0],
                                    //     backgroundColor: '#ff9602',
                                    // },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: true,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    }
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Years'
                                        }
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Number of Companies'
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                </div>

            </Slider>
            <h4></h4>
            <Slider
                className=""
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                <div className="" >
                    <div className="md:w-1/2 m-auto ">
                    <h1 className="text-xl font-medium text-center py-8">Percentage of Placements By Course</h1>
                        <Bar
                            data={{
                                labels: ["Engineering", "Pharmacy", "Business Management", "Agriculture", "Computer Application", "Paramedical", "Hospitality and Catering", "Diploma", "Accounting", "Others"],
                                datasets: [
                                    {
                                        label: "Students Placed",
                                        data: [93, 95, 89, 52, 91, 75, 87, 50, 55, 45],
                                        backgroundColor: '#016db6',
                                    },
                                    // {
                                    //     label: "Not placed",
                                    //     data: [1, 2, 3, 0, 0],
                                    //     backgroundColor: '#ff9602',
                                    // },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: true,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    }
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Years'
                                        }
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Number of Students'
                                        }
                                    }
                                }
                            }}
                        />

                    </div>

                </div>
                <div >
                    <div className="md:w-1/2 m-auto ">
                    <h1 className="text-xl font-medium text-center py-8">Companies Visited for Placement Drives (Last 5 Years Trends)</h1>
                        <Bar
                            data={{
                                labels: ["2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Number of Companies",
                                        data: [143, 140, 203, 240, 255],
                                        backgroundColor: '#fea700',
                                    },
                                    // {
                                    //     label: "Not placed",
                                    //     data: [1, 2, 3, 0, 0],
                                    //     backgroundColor: '#ff9602',
                                    // },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: true,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    }
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Years'
                                        }
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'LPA'
                                        }
                                    }
                                }
                            }}
                        />

                    </div>

                </div>
                <div >
                    <div className="md:w-1/2 m-auto ">
                    <h1 className="text-xl font-medium text-center py-8">Industry Leadning Pay Package Offered (Last 7 years Trends)</h1>
                        <Bar
                            data={{
                                labels: ["2017", "2018","2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Packages in LPA",
                                        data: [15, 20, 25.5, 37, 48, 50, 50],
                                        backgroundColor: '#016db6',
                                    },
                                    // {
                                    //     label: "Not placed",
                                    //     data: [1, 0, 0, 8, 9],
                                    //     backgroundColor: '#ff9602',
                                    // },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: true,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    }
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Years'
                                        }
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Number of Students'
                                        }
                                    }
                                }
                            }}
                        />
                    </div>

                </div>
                <div >
                    <div className="md:w-1/2 m-auto ">
                    <h1 className="text-xl font-medium text-center py-8">Success Rates (Last 8 Years Trends)</h1>
                        <Bar
                            data={{
                                labels: ["2016","2017","2018","2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Percentage Rate",
                                        data: [72,82,89,95,93,96,94,92],
                                        backgroundColor: '#fea700',
                                    },
                                    // {
                                    //     label: "Not placed",
                                    //     data: [1, 6, 9, 0, 0],
                                    //     backgroundColor: '#ff9602',
                                    // },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: true,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    }
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Years'
                                        }
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Number of Companies'
                                        }
                                    }
                                }
                            }}
                        />

                    </div>

                </div>
            </Slider>
        </div>
    );
}