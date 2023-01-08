import { Box, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../../theme';
import GeoChart from '../../graphs/GeoChart';
import PageHeader from '../../layout/PageHeader';

export const Geo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <PageHeader title="GEOGRAPHY" subtitle="Simple Geography Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeoChart />
      </Box>
    </Box>
      
  )
}

export default Geo;