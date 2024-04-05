import * as React from 'react';

import './sass/index.scss';
import promiseJs from './js';

export default function PromiseProject() {
  React.useEffect(() => {
    promiseJs();
  }, []);

  return (
    <section className="promise__section">
      <div className="promise__container">
        <form className="promise__from">
          <div className="promise_input">
            <label>
              First delay (ms)
              <input type="number" name="delay" required />
            </label>
            <label>
              Delay step (ms)
              <input type="number" name="step" required />
            </label>
            <label>
              Amount
              <input type="number" name="amount" required />
            </label>
          </div>
          <button type="submit">Create promises</button>
        </form>
      </div>
    </section>
  );
}
