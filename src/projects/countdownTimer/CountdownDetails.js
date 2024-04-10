import * as React from 'react';

import { Details, TYPE_TEXT } from 'components/Details';

const details = [
  { id: 0, type: TYPE_TEXT.P, text: 'The project is a countdown timer.' },
  {
    id: 1,
    type: TYPE_TEXT.P,
    text: 'To start the timer, you need to select the date and time, and then start the countdown.',
  },

  {
    id: 2,
    type: TYPE_TEXT.UL,
    text: 'Features:',
    list: [
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'To start the timer, you need to select the date and time, and then start the countdown.',
      },
      {
        id: 1,
        type: TYPE_TEXT.LI,
        text: 'The project is implemented in JavaScript.',
      },
      { id: 2, type: TYPE_TEXT.LI, text: 'CSS using the SASS preprocessor.' },
      {
        id: 3,
        type: TYPE_TEXT.LI,
        text: 'The date and time input field is implemented using "flatpickr".',
      },
      {
        id: 4,
        type: TYPE_TEXT.LI,
        text: 'Notifications are implemented using "notiflix".',
      },
      {
        id: 5,
        type: TYPE_TEXT.LI,
        text: 'The timer interval is set using the "setInterval" function.',
      },
      {
        id: 6,
        type: TYPE_TEXT.LI,
        text: 'When the timer is stopped, the "clearInterval" function is used.',
      },
    ],
  },
  {
    id: 3,
    type: TYPE_TEXT.PRIM,
    note: 'Note:',
    text: 'the project was done as a homework while learning JavaScript.',
  },
];

export default function CountdownDetails() {
  return <Details details={details} />;
}
