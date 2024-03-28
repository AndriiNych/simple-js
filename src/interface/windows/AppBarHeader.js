import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AppMenu from './AppMenu';
import SwitchMode from './SwitchMode';

export default function AppBarHeader(props) {
  return (
    <Toolbar>
      <AppMenu />
      <Box className="flex justify-between items-center w-full">
        <Typography variant="h6" component="div">
          Scroll to elevate App bar
        </Typography>
        <SwitchMode {...props} />
      </Box>
    </Toolbar>
  );
}
