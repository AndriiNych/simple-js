import React from 'react';
import AppBar from '@mui/material/AppBar';
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
  const { tabNumber, selectTab } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <AppBarHeader {...props} />
          <AppBarTabs tabNumber={tabNumber} selectTab={selectTab} />
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
