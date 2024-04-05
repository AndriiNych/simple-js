import * as React from 'react';

import './sass/index.scss';
import countdownProjectJs, { stopInterval } from './js';

const notes = [
  'If the timer has already started, pressing the Start button again button again will result in an error message.',
  'To restart the timer, you need to stop it.',
  'The timer stops when you try to enter a new starting point again.',
  'When you select a valid reference point value, the the timer readings.',
  'When you start the timer, the timer first recalculates its readings to current (if there was a delay between selecting the starting point and starting the or the timer was stopped) and only then starts.',
  'If an incorrect reference point is entered, the timer is reset to is reset to zero.',
];

const datas = [
  { id: 1, data: 'days', children: 'Days' },
  { id: 2, data: 'hours', children: 'Hours' },
  { id: 3, data: 'minutes', children: 'Minutes' },
  { id: 4, data: 'seconds', children: 'Seconds' },
];

function Data({ data, children }) {
  return (
    <div className="field">
      <span className="value" dadatta-vallue={data}>
        00
      </span>
      <span className="label">{children}</span>
    </div>
  );
}

function Notes({ children }) {
  return <li className="notes__item">{children}</li>;
}

export default function CountdownProject() {
  React.useEffect(() => {
    countdownProjectJs();

    return stopInterval();
  }, []);

  return (
    <section className="main  ">
      <div className="container margin__auto">
        <div className="timer__container margin__auto">
          <div className="margin__auto">
            <input type="text" id="datetime-picker" />
            <button type="button" data-start>
              Start
            </button>
          </div>
          <div className="timer margin__auto">
            {datas.map(({ id, data, children }) => (
              <Data key={id} data={data}>
                {children}
              </Data>
            ))}
          </div>
        </div>
        <div className="notes margin__auto">
          <p className="notes__all">
            List of implemented functions on the page:
          </p>
          <ul className="notes__list">
            {notes.map((item, idx) => (
              <Notes key={idx}>{item}</Notes>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
