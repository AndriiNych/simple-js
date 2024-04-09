import * as React from 'react';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import LanguageIcon from '@mui/icons-material/Language';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

import { HomePageDetails, Page404 } from 'pages';
import {
  ImageGalleryDetails,
  ImageGalleryProject,
  CountdownDetails,
  CountdownProject,
  PromiseDetails,
  PromiseProject,
  CountryDetails,
  CountryProject,
  WeatherDetails,
  WeatherProject,
  VideoPlayerDetails,
  VideoPlayerProject,
  SimpleGalleryDetails,
  SimpleGalleryProject,
} from 'projects';

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
        icon: <CollectionsIcon />,
        menuText: 'Image gallery',
        content: [
          {
            id: 1,
            type: CONTENT_TYPE.DETAILS,
            to: '/ImageGalleryDetails',
            tagName: 'Description',
            component: <ImageGalleryDetails />,
          },
          {
            id: 2,
            type: CONTENT_TYPE.PROJECT,
            to: '/ImageGalleryProject',
            tagName: 'See the project',
            component: <ImageGalleryProject />,
          },
        ],
      },
      {
        id: 1,
        title: 'Project: Simple image gallery',
        icon: <AutoAwesomeMotionIcon />,
        menuText: 'Simple gallery',
        content: [
          {
            id: 1,
            type: CONTENT_TYPE.DETAILS,
            to: '/simple-gallery-details',
            tagName: 'Description',
            component: <SimpleGalleryDetails />,
          },
          {
            id: 2,
            type: CONTENT_TYPE.PROJECT,
            to: '/simple-gallery-project',
            tagName: 'See the project',
            component: <SimpleGalleryProject />,
          },
        ],
      },
      {
        id: 2,
        title: 'Project: Video player',
        icon: <VideoCameraBackIcon />,
        menuText: 'Video player',
        content: [
          {
            id: 1,
            type: CONTENT_TYPE.DETAILS,
            to: '/video-player-details',
            tagName: 'Description',
            component: <VideoPlayerDetails />,
          },
          {
            id: 2,
            type: CONTENT_TYPE.PROJECT,
            to: '/video-player-project',
            tagName: 'See the project',
            component: <VideoPlayerProject />,
          },
        ],
      },
    ],
  },
  {
    groupId: 2,
    items: [
      {
        id: 0,
        title: 'Project: Countdown timer',
        icon: <AvTimerIcon />,
        menuText: 'Countdown',
        content: [
          {
            id: 1,
            type: CONTENT_TYPE.DETAILS,
            to: '/countdown-details',
            tagName: 'Description',
            component: <CountdownDetails />,
          },
          {
            id: 2,
            type: CONTENT_TYPE.PROJECT,
            to: '/countdown-project',
            tagName: 'See the project',
            component: <CountdownProject />,
          },
        ],
      },
      {
        id: 1,
        title: 'Project: Promise generator',
        icon: <PublishedWithChangesIcon />,
        menuText: 'Promise',
        content: [
          {
            id: 1,
            type: CONTENT_TYPE.DETAILS,
            to: '/promise-details',
            tagName: 'Description',
            component: <PromiseDetails />,
          },
          {
            id: 2,
            type: CONTENT_TYPE.PROJECT,
            to: '/promise-project',
            tagName: 'See the project',
            component: <PromiseProject />,
          },
        ],
      },
    ],
  },
  {
    groupId: 3,
    items: [
      {
        id: 0,
        title: 'Project: View info about country',
        icon: <LanguageIcon />,
        menuText: 'Search country',
        content: [
          {
            id: 1,
            type: CONTENT_TYPE.DETAILS,
            to: '/country-details',
            tagName: 'Description',
            component: <CountryDetails />,
          },
          {
            id: 2,
            type: CONTENT_TYPE.PROJECT,
            to: '/country-project',
            tagName: 'See the project',
            component: <CountryProject />,
          },
        ],
      },
      {
        id: 1,
        title: 'Project: Weather forecast',
        icon: <CloudQueueIcon />,
        menuText: 'Weather forecast',
        content: [
          {
            id: 1,
            type: CONTENT_TYPE.DETAILS,
            to: '/weather-details',
            tagName: 'Description',
            component: <WeatherDetails />,
          },
          {
            id: 2,
            type: CONTENT_TYPE.PROJECT,
            to: '/weather-project',
            tagName: 'See the project',
            component: <WeatherProject />,
          },
        ],
      },
    ],
  },
];

const itemError = {
  id: 0,
  title: 'Project: Weather forecast',
  icon: <CloudQueueIcon />,
  menuText: 'Weather forecast',
  content: [
    {
      id: 1,
      type: CONTENT_TYPE.DETAILS,
      to: '/error',
      tagName: 'ERROR',
      component: <Page404 />,
    },
  ],
};

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

  return itemError;
};

export {
  CONTENT_TYPE,
  getItemFromProjectListByLocation,
  getRoutesFromProjectList,
  projectsList,
};
