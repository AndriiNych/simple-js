import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppTopBar from './AppTopBar';
import AppBody from './AppBody';
import { storageTheme } from 'storage';

const currentTheme = mode =>
  createTheme({
    palette: {
      mode: mode,
    },
  });

const currentMode = isChecked => (isChecked ? 'dark' : 'light');

export default function AppMainWindow(props) {
  const [tabNumber, setTabNumber] = React.useState(0);
  const [isChecked, setIsChecked] = React.useState(
    storageTheme.getThemeModeFromLocalStorageAsChecked()
  );
  const [theme, setTheme] = React.useState(
    currentTheme(currentMode(isChecked))
  );

  React.useEffect(() => {
    setTheme(currentTheme(currentMode(isChecked)));
  }, [isChecked]);

  const handleSelectTab = newTab => {
    setTabNumber(newTab);
  };

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
        tabNumber={tabNumber}
        selectTab={handleSelectTab}
      />
      <Toolbar />
      <AppBody>
        <Outlet />
      </AppBody>
    </ThemeProvider>
  );
}
