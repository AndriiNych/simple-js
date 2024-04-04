import * as React from 'react';

import './scss/index.scss';
import weatherJs from './js';

export default function WeatherProject() {
  React.useEffect(() => {
    weatherJs();
  }, []);

  return (
    <section className="weather">
      <div className="weather__container">
        <div className="weather__input">
          <label className="input__label">
            <p className="input__title">Choose the city:</p>
          </label>
        </div>
        <div className="weater__result">
          <p className="weather__data"></p>
          <p className="weather__city"></p>
          <ul className="weather__main-list">
            <li className="weather__main-item">
              <img
                src=""
                alt=""
                className="weather__img"
                width="48"
                height="48"
              />
            </li>
            <li className="weather__main-item">
              <p className="weather__temp"></p>
            </li>
          </ul>
          <ul className="weather__other-list"></ul>
        </div>
      </div>
    </section>
  );
}
