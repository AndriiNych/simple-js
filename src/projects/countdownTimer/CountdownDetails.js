import * as React from 'react';

import Details from 'components/Details/Details';

const details = [
  // { id: 0, type: 'h5', text: 'The project is a countdown timer.' },
  {
    id: 1,
    type: 'ul',
    text: 'Features:',
    list: [
      {
        id: 0,
        type: 'li',
        text: 'To start the timer, you need to select the date and time, and then start the countdown.',
      },
      { id: 1, type: 'li', text: 'The project is implemented in JavaScript.' },
      { id: 2, type: 'li', text: 'CSS using the SASS preprocessor.' },
      {
        id: 3,
        type: 'li',
        text: 'The date and time input field is implemented using "flatpickr".',
      },
      {
        id: 4,
        type: 'li',
        text: 'Notifications are implemented using "notiflix".',
      },
    ],
  },
  {
    id: 2,
    type: 'h5',
    text: 'Note: the project was done as a homework while learning JavaScript.',
  },
];

export default function CountdownDetails() {
  return <Details details={details} />;
}
