import * as React from 'react';

import './sass/index.scss';
import countdownProjectJs, { stopInterval, removeFlatpickr } from './js';
import { Notes, Datas } from './components';

function clear() {
  stopInterval();
  removeFlatpickr();
}

export default function CountdownProject() {
  React.useEffect(() => {
    countdownProjectJs();

    return () => clear();
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
          <Datas />
        </div>
        <div className="notes margin__auto">
          <p className="notes__all">
            List of implemented functions on the page:
          </p>
          <Notes />
        </div>
      </div>
    </section>
  );
}
