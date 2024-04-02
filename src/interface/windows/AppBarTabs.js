import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { THEME_MODE, BACKGROUD_ALTERNATIVE } from 'style';
import { getItemFromProjectListByLocation } from 'data';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AppBarTabs({ tabNumber, selectTab }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItem] = React.useState(
    getItemFromProjectListByLocation(location.pathname)
  );
  const [bgc, setBgc] = React.useState(BACKGROUD_ALTERNATIVE[THEME_MODE.DARK]);
  const theme = useTheme();

  React.useEffect(() => {
    setBgc(
      theme.palette.mode === THEME_MODE.DARK
        ? BACKGROUD_ALTERNATIVE[THEME_MODE.DARK]
        : BACKGROUD_ALTERNATIVE[THEME_MODE.LIGHT]
    );
  }, [theme]);

  React.useEffect(() => {
    setItem(getItemFromProjectListByLocation(location.pathname));
  }, [location]);

  const handleChange = (event, newValue) => {
    navigate(item.content[newValue].to);
  };

  const getTabNumberByLoacation = path => {
    for (let idx = 0; idx < item.content.length; idx++) {
      if (item.content[idx].to === path) {
        return idx;
      }
    }
    return 0;
  };

  return (
    <Toolbar className={bgc}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Tabs
          value={getTabNumberByLoacation(location.pathname)}
          onChange={handleChange}
        >
          {item.content.map((tab, idx) => {
            return (
              <Tab label={tab.tagName} {...a11yProps({ idx })} key={idx} />
            );
          })}
        </Tabs>
      </Box>
    </Toolbar>
  );
}
