import * as React from 'react';

import { Details, TYPE_TEXT } from 'components/Details';

const details = [
  {
    id: 0,
    type: TYPE_TEXT.P,
    text: 'Work with a video player. The project is aimed at working with local storage. When viewing an image, the current viewing time is recorded in local storage; when refreshing the page, the time is taken from the storage and viewing starts from the saved point.',
  },
  {
    id: 1,
    type: TYPE_TEXT.UL,
    text: 'Features:',
    list: [
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'The project is implemented in JavaScript.',
      },
      {
        id: 1,
        type: TYPE_TEXT.LI,
        text: 'CSS using the SASS preprocessor.',
      },
      {
        id: 2,
        type: TYPE_TEXT.LI,
        text: 'Video is taken from player.vimeo.com.',
      },
      {
        id: 4,
        type: TYPE_TEXT.LI,
        text: 'The @vimeo/player service is used.',
      },
      {
        id: 5,
        type: TYPE_TEXT.LI,
        text: 'When recording the current viewing time, lodash.throttle is used.',
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

export default function VideoPlayerDetails() {
  return <Details details={details} />;
}
