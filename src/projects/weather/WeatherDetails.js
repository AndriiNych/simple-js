import * as React from 'react';

import { Details, TYPE_TEXT } from 'components/Details';

const details = [
  {
    id: 0,
    type: TYPE_TEXT.P,
    text: 'Weather forecast display component.',
  },
  {
    id: 1,
    type: TYPE_TEXT.UL,
    text: 'Features:',
    list: [
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'API: https://api.openweathermap.org/data/2.5/.',
      },
      {
        id: 1,
        type: TYPE_TEXT.LI,
        text: 'The key for the API is stored in ".env" and for gh-pages in the Repository secrets.',
      },
      {
        id: 2,
        type: TYPE_TEXT.LI,
        text: 'The weather picture is loaded from the site.',
      },
      {
        id: 3,
        type: TYPE_TEXT.LI,
        text: 'The service shows the wind direction in degrees, so the function of determining the direction is implemented.',
      },
      {
        id: 4,
        type: TYPE_TEXT.LI,
        text: 'The list of cities is fixed and is contained in an object that indicates the name of the city, its ID on the service, and which city is used by default.',
      },

      {
        id: 5,
        type: TYPE_TEXT.LI,
        text: 'CSS using the SASS preprocessor.',
      },
      {
        id: 6,
        type: TYPE_TEXT.LI,
        text: 'When naming CSS classes, BEM technology was used.',
      },
    ],
  },
  {
    id: 2,
    type: TYPE_TEXT.PRIM,
    note: 'Note:',
    text: 'the project was done as a homework while learning JavaScript.',
  },
];

export default function WeatherDetails() {
  return <Details details={details} />;
}
