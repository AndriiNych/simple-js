import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AppBarTabs() {
  const [value, setValue] = useState(0);
  const [bgc, setBgc] = useState('bg-gray-100');
  const theme = useTheme();

  useEffect(() => {
    console.log(theme.palette.mode);
    setBgc(theme.palette.mode === 'dark' ? 'bg-gray-700' : 'bg-gray-200');
  }, [theme]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Toolbar className={bgc}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Details:" {...a11yProps(0)} />
          <Tab label="Project:" {...a11yProps(1)} />
        </Tabs>
      </Box>
    </Toolbar>
  );
}
