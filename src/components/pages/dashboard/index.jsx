import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { DownloadOutlined, Email, PersonAdd, PointOfSale, Traffic } from '@mui/icons-material';
import { tokens } from '../../../theme';
import PageHeader from '../../layout/PageHeader';
import { demoTransactions } from "../../../data/demoData";
import ProgressCircle from './ProgressCircle';
import StatBox from './StatBox';
import LineChart from '../../graphs/LineChart';
import BarChart from '../../graphs/BarChart';
import GeoChart from '../../graphs/GeoChart';

export const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeader title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button sx={{ backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px" }}>
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
        {/* ROW 1 */}
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox title="1,361" subtitle="Emails Sent" progress="0.75" increase="+14%" icon={<Email sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}/>
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" >
          <StatBox title="431,225" subtitle="Sales Obtained" progress="0.50" increase="+21%" icon={<PointOfSale sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}/>
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" >
          <StatBox title="15,251" subtitle="New Clients" progress="0.40" increase="+5%" icon={<PersonAdd sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}/>
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" >
          <StatBox title="1,714,134" subtitle="Traffic Received" progress="0.70" increase="+43%"icon={<Traffic sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}/>
        </Box>

        {/* ROW 2 */}
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center" >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]} >
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined sx={{ fontSize: "26px", color: colors.greenAccent[500] }}/>
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto" >
          <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px">
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {demoTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} >
          <Typography variant="h5" fontWeight="600" sx={{ padding: "30px 30px 0 30px" }}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} padding="30px">
          <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeoChart isDashboard={true} />
          </Box>
        </Box>      
      </Box>      
    </Box>      
  )
}

export default Dashboard;