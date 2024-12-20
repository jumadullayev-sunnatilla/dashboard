import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: true,
        text: '',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 1',
        data: [200, 220, 500,300,350,200,400],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Dataset 2',
        data: [500, 150, 250,200,250,150,300],
        borderColor: 'rgb(53, 235, 83)',
        backgroundColor: 'rgba(53, 235, 83 0.5)',
      },
    ],
  };
const Linechart = () => {
  return (
    <div className='bg-[#0F1535] w-[500px] text-white rounded-lg'>
        <Line options={options} data={data} />
    </div>
  )
}

export default Linechart