import * as React from 'react';

import { Details, TYPE_TEXT } from 'components/Details';

const details = [
  {
    id: 0,
    type: TYPE_TEXT.P,
    text: 'The project is the output of brief information about the country.',
  },
  {
    id: 1,
    type: TYPE_TEXT.P,
    text: 'To start the search, you need to start entering the name of the country. As you enter letters, the search for countries is performed:',
  },

  {
    id: 2,
    type: TYPE_TEXT.UL,
    text: '',
    list: [
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'if there are many countries, an error message is displayed and you are prompted to enter more letters;',
      },
      {
        id: 1,
        type: TYPE_TEXT.LI,
        text: 'if the number of countries is small, a list of them is displayed;',
      },
      {
        id: 2,
        type: TYPE_TEXT.LI,
        text: 'if there is only one country, information about the country is displayed;',
      },
      {
        id: 3,
        type: TYPE_TEXT.LI,
        text: 'if there are no countries with the entered name, an error message is displayed.',
      },
    ],
  },

  {
    id: 3,
    type: TYPE_TEXT.UL,
    text: 'Features:',
    list: [
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'The project is implemented in JavaScript using the classes.',
      },
      {
        id: 1,
        type: TYPE_TEXT.LI,
        text: 'CSS using the SASS preprocessor.',
      },
      {
        id: 2,
        type: TYPE_TEXT.LI,
        text: 'When naming CSS classes, BEM technology was used.',
      },
      {
        id: 3,
        type: TYPE_TEXT.LI,
        text: 'Information about countries is taken from the service"https://restcountries.com".',
      },
      {
        id: 4,
        type: TYPE_TEXT.LI,
        text: 'The delay in launching an appeal to the country service is implemented using "lodash.debounce".',
      },
      {
        id: 5,
        type: TYPE_TEXT.LI,
        text: 'Notifications are implemented using "notiflix".',
      },
    ],
  },

  {
    id: 4,
    type: TYPE_TEXT.PRIM,
    note: 'Note:',
    text: 'the project was done as a homework while learning JavaScript.',
  },
];

export default function ImageGalleryDetails() {
  return <Details details={details} />;
}
