import * as React from 'react';

const notes = [
  'If the timer has already started, pressing the Start button again button again will result in an error message.',
  'To restart the timer, you need to stop it.',
  'The timer stops when you try to enter a new starting point again.',
  'When you select a valid reference point value, the the timer readings.',
  'When you start the timer, the timer first recalculates its readings to current (if there was a delay between selecting the starting point and starting the or the timer was stopped) and only then starts.',
  'If an incorrect reference point is entered, the timer is reset to is reset to zero.',
];

export default function Notes() {
  return (
    <ul className="notes__list">
      {notes.map((item, idx) => (
        <li className="notes__item" key={idx}>
          {item}
        </li>
      ))}
    </ul>
  );
}
