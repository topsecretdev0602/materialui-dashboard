import React, { useState } from 'react'
import { useTheme } from '@emotion/react';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlined, HomeOutlined, MapOutlined, MenuOutlined, PeopleOutlined, PersonOutlined, PieChartOutlined, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { tokens } from '../../theme';
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from 'react-router-dom';

const Tab = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box 
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlined /> : undefined} style={{ margin: "10px 0 20px 0", color: colors.grey[100]}}>
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" aligntems="center" ml="15px">
                <Typography variant='h3' color={colors.grey[100]}>ADMIN</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img alt="profile-user" width="100px" height="100px" src={`../../assets/homer.jpeg`} style={{ cursor: "pointer", borderRadius: "50%" }} />
              </Box>
              <Box textAlign="center">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                  Homer
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Father
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Tab title="Dashboard" to="/" icon={<HomeOutlined />} selected={selected} setSelected={setSelected}/>
            <Typography variant="h5" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Data</Typography>
            <Tab title="Team" to="/team" icon={<PeopleOutlined />} selected={selected} setSelected={setSelected}/>
            <Tab title="Contacts" to="/contacts" icon={<ContactsOutlined />} selected={selected} setSelected={setSelected}/>
            <Tab title="Invoices" to="/invoices" icon={<ReceiptOutlined />} selected={selected} setSelected={setSelected}/>
            <Typography variant="h5" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Pages</Typography>
            <Tab title="Add User" to="/user" icon={<PersonOutlined />} selected={selected} setSelected={setSelected}/>
            <Tab title="Calendar" to="/calendar" icon={<CalendarTodayOutlined />} selected={selected} setSelected={setSelected}/>
            <Tab title="FAQ" to="/faq" icon={<HelpOutlined />} selected={selected} setSelected={setSelected}/>
            <Typography variant="h5" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Charts</Typography>
            <Tab title="Bar" to="/bar" icon={<BarChartOutlined />} selected={selected} setSelected={setSelected}/>
            <Tab title="Pie" to="/pie" icon={<PieChartOutlined />} selected={selected} setSelected={setSelected}/>
            <Tab title="Line" to="/line" icon={<TimelineOutlined />} selected={selected} setSelected={setSelected}/>
            <Tab title="Geo" to="/geo" icon={<MapOutlined />} selected={selected} setSelected={setSelected}/>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Navbar;