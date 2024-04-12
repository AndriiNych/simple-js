import * as React from 'react';

import { Details, TYPE_TEXT } from 'components/Details';

const details = [
  {
    id: 0,
    type: TYPE_TEXT.P,
    text: 'A simple image gallery.',
  },
  {
    id: 1,
    type: TYPE_TEXT.UL,
    text: 'Features:',
    list: [
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'The gallery is built on the basicLightbox library.',
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
        text: 'The list of images is taken from the prepared json file.',
      },
      {
        id: 5,
        type: TYPE_TEXT.LI,
        text: 'Images are taken from pixabay.com as ready-made links to images.',
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
