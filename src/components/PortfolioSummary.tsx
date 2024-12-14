import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';
import { PortfolioItemType } from '../types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PortfolioSummaryProps {
  data: PortfolioItemType[];
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({ data }) => {
  const totalInvestedAmount = data.reduce((acc, item) => acc + item.investedAmount, 0);

  const mutualFundsInvestedAmount = data
    .filter(item => ['AADR', 'MFEM', 'JPEM'].includes(item.scrip))
    .reduce((acc, item) => acc + item.investedAmount, 0);

  const etfsInvestedAmount = totalInvestedAmount - mutualFundsInvestedAmount;

  const chartData = {
    labels: ['Mutual Funds', 'ETFs'],
    datasets: [
      {
        data: [mutualFundsInvestedAmount, etfsInvestedAmount],
        backgroundColor: ['#00FFFF', '#F5DEB3'], 
        borderColor: ['#ffffff', '#ffffff'], 
        borderWidth: 2, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom', 
        labels: {
          boxWidth: 20, 
          usePointStyle: true, 
        },
      },
      tooltip: {
        enabled: true, 
      },
    },
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Doughnut data={chartData} options={options} />
    </Box>
  );
};

export default PortfolioSummary;
