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
                    <div className="md:w-1/2 m-auto ">
                        <h1 className="text-xl font-medium text-center py-8">Highest Package(last 5 years trends)</h1>
                        <Bar
                            data={{
                                labels: ["2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Students Placed",
                                        data: [272, 283, 292, 315, 362],
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
                    <div className="md:w-1/2 m-auto ">
                        <h1 className="text-xl font-medium text-center py-8">Average Package (Last 5 Years Trends)</h1>
                        <Bar
                            data={{
                                labels: ["2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "LPA/Annum",
                                        data: [4.2, 4.5, 6, 6.5, 7],
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
                                            text: 'LPA'
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div className="md:w-1/2 m-auto ">
                        <h1 className="text-xl font-medium text-center py-8">Students Selected (Last 5 years Trends)</h1>
                        <Bar
                            data={{
                                labels: ["2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Students Selected",
                                        data: [1145, 1316, 1435, 1632, 1763],
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
                    <div className="w-1/2 m-auto ">
                        <h1 className="text-xl font-medium text-center py-8">Companies Visited (Last 5 Years Trends)</h1>
                        <Bar
                            data={{
                                labels: ["2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Companies Vistied",
                                        data: [272, 283, 292, 315, 362],
                                        backgroundColor: '#016db6',
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
                        <h1 className="text-sm md:text-xl md:font-medium text-center py-8">Companies recruittting at SVIET</h1>
                        <Bar
                            data={{
                                labels: ["2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Students Placed",
                                        data: [100, 200, 300, 340, 350],
                                        backgroundColor: '#016db6',
                                    },
                                    {
                                        label: "Not placed",
                                        data: [1, 2, 3, 0, 0],
                                        backgroundColor: '#ff9602',
                                    },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: false,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    },
                                    legend: {
                                        display: false // Remove the legend
                                    }
                                }
                            }}
                            plugins={[{
                                beforeInit: function (chart, options) {
                                    chart.legend.afterFit = function () {
                                        this.height = 0;
                                    };
                                }
                            }]}
                        />

                    </div>

                </div>
                <div >
                    <div className="md:w-1/2 m-auto ">
                        <h1 className="text-sm md:text-xl font-medium text-center py-8">Companies recruittting at SVIET</h1>
                        <Bar
                            data={{
                                labels: ["2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Students Placed",
                                        data: [100, 200, 300, 340, 350],
                                        backgroundColor: '#016db6',
                                    },
                                    {
                                        label: "Not placed",
                                        data: [1, 2, 3, 0, 0],
                                        backgroundColor: '#ff9602',
                                    },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: false,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    },
                                    legend: {
                                        display: false // Remove the legend
                                    }
                                }
                            }}
                            plugins={[{
                                beforeInit: function (chart, options) {
                                    chart.legend.afterFit = function () {
                                        this.height = 0;
                                    };
                                }
                            }]}
                        />

                    </div>

                </div>
                <div >
                    <div className="md:w-1/2 m-auto ">
                        <h1 className="text-sm md:text-xl font-medium text-center py-8">Companies recruittting at SVIET</h1>
                        <Bar
                            data={{
                                labels: ["2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Students Placed",
                                        data: [100, 200, 300, 340, 350],
                                        backgroundColor: '#016db6',
                                    },
                                    {
                                        label: "Not placed",
                                        data: [1, 2, 3, 0, 0],
                                        backgroundColor: '#ff9602',
                                    },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: false,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    },
                                    legend: {
                                        display: false // Remove the legend
                                    }
                                }
                            }}
                            plugins={[{
                                beforeInit: function (chart, options) {
                                    chart.legend.afterFit = function () {
                                        this.height = 0;
                                    };
                                }
                            }]}
                        />

                    </div>

                </div>
                <div >
                    <div className="md:w-1/2 m-auto ">
                        <h1 className="text-sm md:text-xl font-medium text-center py-8">Companies recruittting at SVIET</h1>
                        <Bar
                            data={{
                                labels: ["2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                    {
                                        label: "Students Placed",
                                        data: [100, 200, 300, 340, 350],
                                        backgroundColor: '#016db6',
                                    },
                                    {
                                        label: "Not placed",
                                        data: [1, 2, 3, 0, 0],
                                        backgroundColor: '#ff9602',
                                    },
                                ]
                            }}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: false,
                                        color: 'black', // You can customize the color of the labels
                                        formatter: (value, context) => {
                                            // Show value of the segment
                                            return value;
                                        }
                                    },
                                    legend: {
                                        display: false // Remove the legend
                                    }
                                }
                            }}
                            plugins={[{
                                beforeInit: function (chart, options) {
                                    chart.legend.afterFit = function () {
                                        this.height = 0;
                                    };
                                }
                            }]}
                        />

                    </div>

                </div>
            </Slider>
        </div>
    );
}