import React from 'react';
import './Dashboard.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 24100,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 42300,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 72600,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 52900,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 60100,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 67000,
            "revenue": 61000
        }
    ];
    return (
        <div className='chart-container'>
            <div>
                <LineChart width={500} height={400} data={data}>
                    <Line dataKey={"investment"}></Line>
                    <Line dataKey={"sell"}></Line>
                    <Line dataKey={"revenue"}></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis dataKey={"investment"}></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
                <b className='fig-title'>Fig: Month vs(investment,sell,revenue)</b>
            </div>
            <div>
                <BarChart width={500} height={400} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Bar dataKey={"investment"}></Bar>
                    <Bar dataKey={"sell"}></Bar>
                    <Bar dataKey={"revenue"}></Bar>
                    <Tooltip></Tooltip>

                </BarChart>
                <b className='fig-title'>Fig: Month vs(investment,sell,revenue)</b>
            </div>
        </div>
    );
};

export default Dashboard;