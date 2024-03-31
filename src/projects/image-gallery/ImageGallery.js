import React, { useEffect, Suspense } from 'react';

import './sass/index.scss';
import imageGalleryJs from './js/index.js';

// const LazyComponent = React.lazy(() => import('./AfterImageGallery'));

export default function ImageGallery() {
  useEffect(() => {
    imageGalleryJs();
    //     const script = document.createElement('script');
    //     script.src = './js/index.js';
    //     script.async = true;
    //     document.body.appendChild(script);
    //     return () => {
    //       document.body.removeChild(script);
    //     };
  }, []);

  return (
    <React.Fragment>
      <header className="search__header">
        <form id="form" className="search__form">
          <input
            id="search"
            name="search"
            type="text"
            className="search__input"
            placeholder="Enter type pictures"
          />
          <button
            name="start"
            type="submit"
            className="search__btn search__btn--top"
          ></button>
        </form>
      </header>
      <section>
        <div className="container">
          <div className="gallery"></div>
          <div title="Back to search" className="back-search hidden"></div>
        </div>
      </section>
      <footer className="search__header hidden">
        <p className="footer__title hidden">The End ;)</p>
      </footer>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense> */}
    </React.Fragment>
  );
}
