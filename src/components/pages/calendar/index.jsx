import { Box, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../../theme';
import PageHeader from '../../layout/PageHeader';

export const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
        <PageHeader title="CALENDAR" subtitle="Manage your meetings" />
    </Box>
      
  )
}

export default Calendar;