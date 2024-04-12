import * as React from 'react';

import { Details, TYPE_TEXT } from 'components/Details';

const details = [
  {
    id: 0,
    type: TYPE_TEXT.P,
    text: 'The project allows you to view images from the pixabay.com service using keyword search.',
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
        id: 3,
        type: TYPE_TEXT.LI,
        text: 'Іmages are taken from the service"https://pixabay.com/api/".',
      },
      {
        id: 4,
        type: TYPE_TEXT.LI,
        text: 'API requests using axios.',
      },
      {
        id: 5,
        type: TYPE_TEXT.LI,
        text: 'Notifications are implemented using "notiflix".',
      },
      {
        id: 6,
        type: TYPE_TEXT.LI,
        text: 'The access key is stored in ".env" for gh-pages in the secrets repository.',
      },
      {
        id: 7,
        type: TYPE_TEXT.LI,
        text: 'The gallery is implemented on the simpelightbox library.',
      },
      {
        id: 8,
        type: TYPE_TEXT.LI,
        text: 'The project implements the infinite scrolling (lazy loading) mechanism for loading images. The mechanism for determining when to load the next portion of images is implemented independently. When handling scroll triggering, lodash.throttle is used.',
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

export default function ImageGalleryDetails() {
  return <Details details={details} />;
}
