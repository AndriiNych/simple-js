import STYLE from 'style';

const THEME_MODE_NAME = 'themeMode';

const getThemeModeFromLocalStorageAsChecked = () => {
  const mode = localStorage.getItem(THEME_MODE_NAME) || '';
  return mode === STYLE.THEME_MODE.DARK ? true : false;
};

const setThemeModeToLocalStorage = mode => {
  localStorage.setItem(THEME_MODE_NAME, mode);
};

const storageTheme = {
  getThemeModeFromLocalStorageAsChecked,
  setThemeModeToLocalStorage,
};

export default storageTheme;
