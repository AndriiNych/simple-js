import * as React from 'react';

import './sass/index.scss';
import promiseJs from './js';
import { Input } from './components';

export default function PromiseProject() {
  React.useEffect(() => {
    promiseJs();
  }, []);

  return (
    <section className="promise__section">
      <div className="promise__container">
        <form className="promise__from">
          <Input />
          <button type="submit">Create promises</button>
        </form>
      </div>
    </section>
  );
}
