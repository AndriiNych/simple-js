import * as React from 'react';
import { useTheme } from '@mui/material/styles';

import './sass/index.scss';
import promiseJs from './js';
import { THEME_MODE } from 'style';

const classNameBackground = {
  [THEME_MODE.DARK]: 'country__container--dark',
  [THEME_MODE.LIGHT]: 'country__container--light',
};

export default function PromiseProject() {
  const [classBackground, setClassBackground] = React.useState('');
  const theme = useTheme();

  React.useEffect(() => {
    setClassBackground(classNameBackground[theme.palette.mode]);
  }, [theme]);

  React.useEffect(() => {
    promiseJs();
  }, []);

  return (
    <section className="promise__section">
      <div className="promise__container">
        <form className="promise__from">
          <div className="promise_input">
            <label>
              First delay (ms)
              <input type="number" name="delay" required />
            </label>
            <label>
              Delay step (ms)
              <input type="number" name="step" required />
            </label>
            <label>
              Amount
              <input type="number" name="amount" required />
            </label>
          </div>
          <button type="submit">Create promises</button>
        </form>
      </div>
    </section>
  );
}
