import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppMainWindow from 'interface/windows/AppMainWindow';
import { Page404 } from 'pages';
// import { getRoutesFromProjectList } from 'data';

import { HomePageDetails } from 'pages';
import { ImageGalleryDetails, ImageGalleryProject } from 'projects';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppMainWindow />}>
        <Route index element={<HomePageDetails />} />
        <Route path="image-gallery-details" element={<ImageGalleryDetails />} />
        <Route path="image-gallery-project" element={<ImageGalleryProject />} />
        {/* {getRoutesFromProjectList()} */}
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
