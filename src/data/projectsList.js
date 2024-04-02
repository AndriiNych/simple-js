import * as React from 'react';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import Diversity1Icon from '@mui/icons-material/Diversity1';
//import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
// import SevereColdIcon from '@mui/icons-material/SevereCold';

import { HomePageDetails } from 'pages';
import { ImageGalleryDetails, ImageGalleryProject } from 'projects';

const CONTENT_TYPE = {
  DETAILS: 'details',
  PROJECT: 'project',
};

const projectsList = [
  {
    groupId: 0,
    items: [
      {
        id: 0,
        title: 'List of projects written while learning JavaScript',
        icon: <HomeIcon />,
        menuText: 'Home',
        content: [
          {
            id: 0,
            type: CONTENT_TYPE.DETAILS,
            to: '/',
            tagName: 'Description',
            component: <HomePageDetails />,
          },
        ],
      },
    ],
  },
  {
    groupId: 1,
    items: [
      {
        id: 0,
        title: 'Project: Image gallery',
        icon: <Diversity1Icon />,
        menuText: 'Image gallery',
        content: [
          {
            id: 1,
            type: CONTENT_TYPE.DETAILS,
            to: '/image-gallery-details',
            tagName: 'Description',
            component: <ImageGalleryDetails />,
          },
          {
            id: 2,
            type: CONTENT_TYPE.PROJECT,
            to: '/image-gallery-project',
            tagName: 'See the project',
            component: <ImageGalleryProject />,
          },
        ],
      },
    ],
  },
];

const getRoutesFromProjectList = () => {
  const result = [];
  projectsList.map(group =>
    group.items.forEach(item =>
      item.content.forEach(cont => {
        result.push({ id: cont.id, path: cont.to, element: cont.component });
      })
    )
  );

  return (
    <>
      {result.map((item, idx) => {
        return (
          <Fragment key={idx}>
            {item.id === 0} &&
            <Route index element={item.element} />
            {item.id !== 0} &&
            <Route path={item.path} element={item.element} />
          </Fragment>
        );
      })}
    </>
  );
};

const getItemFromProjectListByLocation = (path = '') => {
  for (let groupIdx = 0; groupIdx < projectsList.length; groupIdx++) {
    const groupItems = projectsList[groupIdx].items;
    for (let itemIdx = 0; itemIdx < groupItems.length; itemIdx++) {
      const contentItem = groupItems[itemIdx].content;
      for (let contentIdx = 0; contentIdx < contentItem.length; contentIdx++) {
        if (contentItem[contentIdx].to === path) {
          return groupItems[itemIdx];
        }
      }
    }
  }

  return {};
};

export {
  CONTENT_TYPE,
  getItemFromProjectListByLocation,
  getRoutesFromProjectList,
  projectsList,
};
