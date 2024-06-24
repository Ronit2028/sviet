"use client"

import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, PolarArea, Doughnut, Line } from 'react-chartjs-2';

const Charts = () => {
    const data = {
        labels: [
            'Caelius',
            'Escalon',
            'Grazziti Inc.',
            'Bebo',
            'Jio',
            'Mamsys',
            'Accenture',
            'Wipro',
            'Byjus',
            'Infosys',
        ],
        datasets: [
            {
                label: 'No. of Placements',
                data: [10, 11, 12, 7, 9, 5, 12, 4, 3, 12, 2],
                backgroundColor: [
                    'rgb(25, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(20, 203, 207)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 99, 132)',
                    'rgb(175, 192, 192)',
                    'rgb(29, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)',
                ],
                hoverBackgroundColor: ['rgb(256, 256 , 256)'],
            },
        ],
    };

    const options = {

        responsive: true,
        scales: {
            r: {
                pointLabels: {
                    display: true,
                    centerPointLabels: true,
                    font: {
                        size: 18
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Chart.js Polar Area Chart With Centered Point Labels'
            }
        }

    };

    return (
        <div className='bg-gray-100'>
            <div className="md:flex container md:w-4/5 m-auto justify-center p-5 py-12 md:py-24 ">
                <div className="md:w-1/2 flex flex-col align-middle pr-7 justify-center">
                    <div className="flex mb-5 items-center">
                        <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
                        <p className="md:text-lg font-bold">COMPANIES</p>
                    </div>
                    <p className="md:text-5xl text-2xl font-semibold mb-8  ">Top Companies Hiring at <span className='text-[#016db6] text-3xl md:text-7xl py-3 block'> SVIET</span></p>
                    <p className='text-justify'>We at SVIET feel extremely privileged to have been able to provide manpower resources to drive the country growth engine. The cell is headed by Director – CRC & PFC and has independent staff consisting of TPOs faculty and students placement coordinators drawn from various departments of SVGOI. We ensure that students receive the best of placement offers.</p>
                </div>
                <div className="md:w-1/2 w-full h-scr md:h-auto my-12 md:my-0 flex justify-center md:block">
                    {/* <!-- Add your chart component here --> */}
                    <PolarArea data={data} options={options}></PolarArea>
                </div>
            </div>
        </div>
    );
};

export default Charts;