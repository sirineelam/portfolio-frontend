import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { PortfolioItemType } from '../types';

interface PortfolioItemProps {
  data: PortfolioItemType;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ data }) => {
  const { scrip, price, quantity, avgCost, investedAmount, portfolioPercentage, unrealizedPL, percentReturn } = data;

  const profitClass = percentReturn > 0 ? 'positive' : percentReturn < 0 ? 'negative' : '';

  const progressValue = Math.abs(percentReturn);
  const isPositive = percentReturn >= 0;

  return (
    <Grid container spacing={2} sx={{ borderBottom: '1px solid #ddd', padding: '1rem 0', mt: 1 }}>
      <Grid item xs={2} sx={{ borderRight: '1px solid #ddd', padding: '1rem', textAlign: 'left' }}>
        <Typography variant="body2" color="textSecondary">
          {scrip}
        </Typography>
        <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }}>
          ${price.toFixed(2)}
        </Typography>
      </Grid>

      <Grid item xs={3} sx={{ borderRight: '1px solid #ddd', padding: '1rem', textAlign: 'center' }}>
        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.primary">Quantity:</Typography>
          <Typography variant="body2" color="text.primary">{quantity}</Typography>
        </Grid>
        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.primary">Avg Cost:</Typography>
          <Typography variant="body2" color="text.primary">${avgCost.toFixed(2)}</Typography>
        </Grid>
        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.primary">Invested Amt:</Typography>
          <Typography variant="body2" color="text.primary">${investedAmount.toFixed(2)}</Typography>
        </Grid>
      </Grid>

      <Grid item xs={3} sx={{ borderRight: '1px solid #ddd', padding: '1rem', textAlign: 'center' }}>
        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.primary">Market Value:</Typography>
          <Typography variant="body2" color="text.primary">${(price * quantity).toFixed(2)}</Typography>
        </Grid>
        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.primary">% of Portfolio:</Typography>
          <Typography variant="body2" color="text.primary">{portfolioPercentage.toFixed(2)}%</Typography>
        </Grid>

        <Box sx={{
          marginTop: 1,
          height: 10,
          width: '100%',
          backgroundColor: '#ddd',
          borderRadius: 5,
        }}>
          <Box sx={{
            width: `${portfolioPercentage}%`,
            backgroundColor: '#2196F3',
            height: '100%',
            borderRadius: '5px',
          }} />
        </Box>
      </Grid>

      <Grid item xs={3} sx={{ borderRight: '1px solid #ddd', padding: '1rem', textAlign: 'center' }}>
        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.primary">Unrealized P/L:</Typography>
          <Typography variant="body2" component="span" sx={{ color: profitClass === 'positive' ? 'green' : profitClass === 'negative' ? 'red' : 'black' }}>
            ${unrealizedPL.toFixed(2)}
          </Typography>
        </Grid>

        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.primary">% Return:</Typography>
          <Typography variant="body2" component="span" sx={{ color: profitClass === 'positive' ? 'green' : profitClass === 'negative' ? 'red' : 'black' }}>
            {percentReturn.toFixed(2)}%
          </Typography>
        </Grid>

        <Box sx={{
          marginTop: 1,
          position: 'relative',
          height: 10,
          width: '100%',
          backgroundColor: '#ddd',
          borderRadius: 5,
        }}>
          {isPositive && (
            <Box sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              width: `${progressValue}%`,
              backgroundColor: 'green',
              height: '100%',
              borderRadius: 5,
            }} />
          )}
          {!isPositive && (
            <Box sx={{
              position: 'absolute',
              right: '50%',
              top: 0,
              width: `${progressValue}%`,
              backgroundColor: 'red',
              height: '100%',
              borderRadius: 5,
            }} />
          )}
        </Box>
      </Grid>
      <Grid item xs={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem', textAlign: 'center' }}>
        <Button
          variant="text"
          color="success"
          sx={{
            width: '100%',
            marginBottom: 1,
            border: '1px solid gray',
            color: 'green',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
            },
          }}
        >
          Buy
        </Button>

        <Button
          variant="text"
          color="error"
          sx={{
            width: '100%',
            border: '1px solid gray',
            color: 'red',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
            },
          }}
        >
          Sell
        </Button>
      </Grid>
    </Grid>
  );
};

export default PortfolioItem;
