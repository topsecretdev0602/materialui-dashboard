import { Box } from '@mui/material';
import React from 'react'
import LineChart from '../../graphs/LineChart';
import PageHeader from '../../layout/PageHeader';

export const Line = () => {
  
  return (
    <Box m="20px">
      <PageHeader title="Line" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
      
  )
}

export default Line;