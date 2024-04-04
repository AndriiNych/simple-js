import * as React from 'react';

import './sass/index.scss';
import countdownProjectJs, { stopInterval } from './js';

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
            <div className="field">
              <span className="value" data-days>
                00
              </span>
              <span className="label">Days</span>
            </div>
            <div className="field">
              <span className="value" data-hours>
                00
              </span>
              <span className="label">Hours</span>
            </div>
            <div className="field">
              <span className="value" data-minutes>
                00
              </span>
              <span className="label">Minutes</span>
            </div>
            <div className="field">
              <span className="value" data-seconds>
                00
              </span>
              <span className="label">Seconds</span>
            </div>
          </div>
        </div>
        <div className="notes margin__auto">
          <p className="notes__all">
            List of implemented functions on the page:
          </p>
          <ul className="notes__list">
            <li className="notes__item">
              If the timer has already started, pressing the Start button again
              button again will result in an error message.
            </li>
            <li className="notes__item">
              To restart the timer, you need to stop it.
            </li>
            <li className="notes__item">
              The timer stops when you try to enter a new starting point again.
            </li>
            <li className="notes__item">
              When you select a valid reference point value, the the timer
              readings.
            </li>
            <li className="notes__item">
              When you start the timer, the timer first recalculates its
              readings to current (if there was a delay between selecting the
              starting point and starting the or the timer was stopped) and only
              then starts.
            </li>
            <li className="notes__item">
              If an incorrect reference point is entered, the timer is reset to
              is reset to zero.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
