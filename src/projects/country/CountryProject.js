import * as React from 'react';

import './scss/index.scss';
import countryJs from './js';

export default function CountryProject() {
  React.useEffect(() => {
    countryJs();
  }, []);

  return (
    <div className="country__container">
      <input type="text" id="search-box" placeholder="Enter country name" />
      <ul className="country__list"></ul>
      <div className="country__info"></div>
    </div>
  );
}
