import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import AppBarHeader from './AppBarHeader';
import AppBarTabs from './AppBarTabs';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function AppTopBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        {/* <Stack sx={{ width: '100%' }} position="fixed"> */}
        {/* <Box position="fixed" sx={{ width: '100%' }} color="primary"> */}
        <AppBar>
          {/* <Toolbar className="w-full"> */}
          <AppBarHeader {...props} />
          {/* </Toolbar> */}
          {/* <Toolbar sx={{ backgroundColor: 'rgb(156, 163, 175)' }}> */}
          <AppBarTabs />
          {/* </Toolbar> */}
        </AppBar>
        {/* <AppBar position="static">
            
          </AppBar> */}
        {/* </Stack> */}
      </ElevationScroll>
    </React.Fragment>
  );
}
