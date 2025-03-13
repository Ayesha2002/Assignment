import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface BloodPressureData {
  year: number;
  systolic: number;
  diastolic: number;
}

interface Props {
  data: BloodPressureData[];
}

export const BloodPressureChart: React.FC<Props> = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.year.toString()),
    datasets: [
      {
        label: 'Systolic',
        data: data.map(d => d.systolic),
        borderColor: '#0066CC',
        backgroundColor: '#EDF6FF',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#0066CC',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
      {
        label: 'Diastolic',
        data: data.map(d => d.diastolic),
        borderColor: '#00B341',
        backgroundColor: '#F1FFF7',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#00B341',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        pointRadius: 6,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          boxWidth: 12,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        }
      },
      tooltip: {
        backgroundColor: '#FFFFFF',
        titleColor: '#1A1C1E',
        bodyColor: '#1A1C1E',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: (items: any) => `Year ${items[0].label}`,
          label: (item: any) => `${item.dataset.label}: ${item.raw} mmHg`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#E5E7EB',
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
          color: '#44474A',
          padding: 8,
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
          color: '#44474A',
          padding: 8,
        },
        border: {
          display: false,
        },
      }
    }
  };

  return (
    <div className="w-full h-[400px]">
      <Line data={chartData} options={options} />
    </div>
  );
};