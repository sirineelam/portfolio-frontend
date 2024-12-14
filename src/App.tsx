import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import PortfolioItem from './components/PortfolioItem';
import PortfolioSummary from './components/PortfolioSummary';
import { PortfolioItemType } from './types';

const App: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioItemType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/portfolio');
      const data = await response.json();
      setPortfolioData(data.data);
    };
    
    fetchData();
  }, []);

  return (
    <div className="app"> 
      <Grid container spacing={3} sx={{ padding: 3, backgroundColor: 'white' }}>
        <Grid item xs={9}>
          {portfolioData.map((item, index) => (
            <PortfolioItem key={index} data={item} />
          ))}
        </Grid>

        <Grid item xs={3}>
          <PortfolioSummary data={portfolioData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
