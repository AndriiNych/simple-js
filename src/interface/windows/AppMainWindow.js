import React, { useState, useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BasicTabs from './Tabs';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppTopBar from './AppTopBar';
import { storageTheme } from 'storage';

const currentTheme = mode =>
  createTheme({
    palette: {
      mode: mode,
    },
  });

const currentMode = isChecked => (isChecked ? 'dark' : 'light');

export default function AppMainWindow(props) {
  const [isChecked, setIsChecked] = useState(
    storageTheme.getThemeModeFromLocalStorageAsChecked()
  );
  const [theme, setTheme] = useState(currentTheme(currentMode(isChecked)));

  React.useEffect(() => {
    setTheme(currentTheme(currentMode(isChecked)));
  }, [isChecked]);

  const handleChangeTheme = isChecked => {
    storageTheme.setThemeModeToLocalStorage(currentMode(isChecked));
    setIsChecked(isChecked);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppTopBar
        {...props}
        isChecked={isChecked}
        handleChangeTheme={handleChangeTheme}
      />
      <Toolbar />
      <Container>
        <Box sx={{ my: 10 }}>
          <BasicTabs />
          {[...new Array(12)].map((el, idx) => {
            return (
              <div key={idx}>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
              </div>
            );
          })}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
