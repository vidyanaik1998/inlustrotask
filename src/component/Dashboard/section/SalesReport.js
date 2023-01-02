import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import Pdf from "react-to-pdf";


import { SalesReport1, SalesReport2, SalesReport3, SalesReport4 } from "../../constants/constants";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



const createData = () => {
    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
        (month) => {
            const profit = Math.round(Math.random() * 800) + 500;
            console.log("profit", Math.round(Math.random()))
            const newUsers = ~~(Math.random() * 1000) + 50;

            return {
                month,
                sales: Math.round(profit / 5),
                profit,
                newUsers,
            };
        }
    );
};


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display: false
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
        scales: {
            y: [{
                ticks: {
                    display: false
                }
            }]
        }


    },
};

const ChartContainer = () => {

    const [data, setData] = useState([]);
    const [buttonstate, setbuttonstate] = useState('')

    useEffect(() => {
        setData(SalesReport1);
        setbuttonstate('SalesReport1')
    }, []);


    const chartData = {
        labels: data.map((item) => item.month),
        datasets: [
            {
                label: "Sales1",
                backgroundColor: "rgb(232 233 251)",
                borderColor: "rgb(69, 87, 246)",
                // fill: true,
                data: data.map((item) => item.sales2),
                lineTension: 0.2,
            },
            {
                label: "Sales2",
                backgroundColor: "rgb(232 233 251)",
                borderColor: "rgb(142 152 237)",
                // fill: true,
                data: data.map((item) => item.sales1),
                lineTension: 0.3,
            },
        ],
    };

    const ref = React.createRef();

    return (
        <>
            <div className=' border-[1px] rounded-[8px] border-[#d1c7c7] p-3'>

                <div className="pb-3 flex-wrap sm:gap-0 gap-2 flex justify-between">
                    <h3 className=' text-[18px] font-bold'>Sales Report</h3>

                    <div className="flex gap-5 pb-4">
                        <button onClick={() => {
                            setbuttonstate('SalesReport1');
                            setData(SalesReport1)
                        }}
                            className={buttonstate === 'SalesReport1' ? 'border-[1px] py-1 px-2 rounded-[4px]' : ''}
                        >
                            12 Months</button>
                        <button onClick={() => {
                            setbuttonstate('SalesReport2')
                            setData(SalesReport2)
                        }
                        }
                            className={buttonstate === 'SalesReport2' ? 'border-[1px] py-1 px-2 rounded-[4px]' : ''}

                        >6 Months</button>
                        <button onClick={() => {
                            setbuttonstate('SalesReport3')
                            setData(SalesReport3)
                        }}
                            className={buttonstate === 'SalesReport3' ? 'border-[1px] py-1 px-2 rounded-[4px]' : ''}

                        >30 days</button>
                        <button onClick={() => {
                            setbuttonstate('SalesReport4')
                            setData(SalesReport4)
                        }}
                            className={buttonstate === 'SalesReport4' ? 'border-[1px] py-1 px-2 rounded-[4px]' : ''}

                        >7 days</button>
                    </div>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className="border-[1px] py-1 px-2 rounded-[4px] border-black" onClick={toPdf}>Export PDF</button>}
                    </Pdf>
                </div>
                <div ref={ref}>
                    <Chart type="line" data={chartData}
                        options={options}
                    />
                </div>


            </div>

        </>
    );
};

export default ChartContainer;
