import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { THEME_MODE, BACKGROUD_ALTERNATIVE } from 'style';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AppBarTabs({ tabNumber, selectTab }) {
  // const [value, setValue] = useState(tabNumber);
  const [bgc, setBgc] = useState(BACKGROUD_ALTERNATIVE[THEME_MODE.DARK]);
  const theme = useTheme();

  useEffect(() => {
    setBgc(
      theme.palette.mode === THEME_MODE.DARK
        ? BACKGROUD_ALTERNATIVE[THEME_MODE.DARK]
        : BACKGROUD_ALTERNATIVE[THEME_MODE.LIGHT]
    );
  }, [theme]);

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    selectTab(newValue);
  };

  return (
    <Toolbar className={bgc}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Tabs
          value={tabNumber}
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
