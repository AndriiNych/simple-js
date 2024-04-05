import * as React from 'react';

import './sass/index.scss';
import simpleGalleryJs from './js';

export default function SimpleGalleryProject() {
  React.useEffect(() => {
    simpleGalleryJs();
  }, []);

  return <div className="gallery"></div>;
}
