import * as React from 'react';

import { Details, TYPE_TEXT } from 'components/Details';

const details = [
  {
    id: 0,
    type: TYPE_TEXT.P,
    text: 'The project demonstrates how promise works in conjunction with setTimeout. The user can set the start delay, the delay between launches, and the number of generated promises. Using a random number generator, the promise is rejected in 30% of cases. Depending on the result, the user receives appropriate notifications.',
  },
  {
    id: 1,
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
        id: 4,
        type: TYPE_TEXT.LI,
        text: 'Notifications are implemented using "notiflix".',
      },
      {
        id: 5,
        type: TYPE_TEXT.LI,
        text: 'Promise and setTimeout is used.',
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

export default function SimpleGalleryDetails() {
  return <Details details={details} />;
}
