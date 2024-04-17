import * as React from 'react';

import { Details, TYPE_TEXT } from 'components/Details';

const details = [
  { id: 0, type: TYPE_TEXT.P, text: 'Some simple projects in JavaScript..' },

  {
    id: 2,
    type: TYPE_TEXT.UL,
    text: 'General information:',
    list: [
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'All projects collected in this small portfolio were done as homework while learning JavaScript.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'Here are the most interesting, in my opinion, works that show some experience gained while learning JavaScript.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'The general interface was implemented in React using MUI components. ',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'Local storage is used to store the dark/light theme.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'A minimal "styling function" was implemented to standardize project descriptions.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'Tailwind is used for styling.',
      },
    ],
  },

  {
    id: 2,
    type: TYPE_TEXT.UL,
    text: 'Project description:',
    list: [
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'Projects are implemented in pure JavaScript, HTML and CSS.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'SASS preprocessor is used for CSS.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'To work with the API, we use: fetch and axios.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'Libraries are used to work with images: basiclightbox and simplelightbox.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'Flatpickr is used to work with the date.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'Messages are displayed thanks to the notiflix library.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'To eliminate unnecessary triggering when working with scrolls and input fields, the throttle and debounce functions are used from lodash.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'The video player is implemented on @vimeo/player.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'The visual part of the projects (HTML structure) was optimized in the react components to simplify the component itself and reduce the amount of HTML in it. Therefore, it may differ slightly from the source code.',
      },
      {
        id: 0,
        type: TYPE_TEXT.LI,
        text: 'Minimal changes were made to the JavaScript code of the projects. Some functions and methods were combined into a start function, which was exported from the js file to the react component in order to launch the project.',
      },
    ],
  },
];

export default function HomePageDetails() {
  return <Details details={details} />;
}
