import { Box } from '@mui/material';
import React from 'react'
import BarChart from '../../graphs/BarChart';
import PageHeader from '../../layout/PageHeader';

export const Bar = () => {
  
  return (
    <Box m="20px">
      <PageHeader title="BAR CHART" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
      
  )
}

export default Bar;