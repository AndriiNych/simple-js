import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AppMenu from './AppMenu';
import SwitchMode from './SwitchMode';
import { getItemFromProjectListByLocation } from 'data';

export default function AppBarHeader(props) {
  const location = useLocation();
  const item = getItemFromProjectListByLocation(location.pathname);

  return (
    <Toolbar>
      <AppMenu />
      <Box className="flex justify-between items-center w-full">
        <Typography variant="h6" component="div">
          {item.title}
        </Typography>
        <SwitchMode {...props} />
      </Box>
    </Toolbar>
  );
}
