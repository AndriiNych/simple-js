import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppMainWindow from 'interface/windows/AppMainWindow';
import { Page404 } from 'pages';
import { getRoutesFromProjectList } from 'data';

export default function App() {
  console.log(getRoutesFromProjectList());
  return (
    <Routes>
      <Route path="/" element={<AppMainWindow />}>
        {getRoutesFromProjectList()}
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
