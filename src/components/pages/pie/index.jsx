import { Box } from '@mui/material';
import React from 'react'
import PieChart from '../../graphs/PieChart';
import PageHeader from '../../layout/PageHeader';

export const Pie = () => {
  
  return (
    <Box m="20px">
      <PageHeader title="PIE" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
      
  )
}

export default Pie;