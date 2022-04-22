import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from "../../styles/bar-chart.module.css";


export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May',];

export const data =  {
        labels,
        datasets: [
            {
                label: 'Blog',
                data:  [2478,5267,734,2484,433],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                fontFamily: "monserrat",
                fill: false
            },
        ],
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const App = ({period, title}) => {
    return (
        <div className = {styles.container}>
            <div className = {styles.title}>{title}</div>
            <div className = {styles.wrapper}>
                <Bar options={options} data={data} />
            </div>
        </div>
    )
}


export default App;