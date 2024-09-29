// src/ChartComponent.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

function ChartComponent({ data }) {
  const chartData = {
    labels: data ? data.labels : [],
    datasets: [
      {
        label: 'Dataset 1',
        data: data ? data.values : [],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
}

export default ChartComponent;
