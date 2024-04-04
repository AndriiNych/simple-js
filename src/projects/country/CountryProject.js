import * as React from 'react';
import { useTheme } from '@mui/material/styles';

import './scss/index.scss';
import countryJs from './js';
import { THEME_MODE } from 'style';

const classNameBackground = {
  [THEME_MODE.DARK]: 'country__container--dark',
  [THEME_MODE.LIGHT]: 'country__container--light',
};

export default function CountryProject() {
  const [classBackground, setClassBackground] = React.useState('');
  const theme = useTheme();

  React.useEffect(() => {
    setClassBackground(classNameBackground[theme.palette.mode]);
  }, [theme]);

  React.useEffect(() => {
    countryJs();
  }, []);

  return (
    <div className={['country__container', classBackground].join(' ')}>
      <input type="text" id="search-box" placeholder="Enter country name" />
      <ul className="country__list"></ul>
      <div className="country__info"></div>
    </div>
  );
}
