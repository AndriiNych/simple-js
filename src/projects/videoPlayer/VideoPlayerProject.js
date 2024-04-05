import * as React from 'react';
import Player from '@vimeo/player';

import './sass/index.scss';

const throttle = require('lodash.throttle');

const PARAM_CURRENT_TIME = 'videoplayer-current-time';

function onPlayerTimeUpdate(event) {
  localStorage.setItem(PARAM_CURRENT_TIME, JSON.stringify(event));
}

function initvideoPlayer() {
  const startTime = localStorage.getItem(PARAM_CURRENT_TIME);
  const player = new Player('vimeo-player', {
    id: 236203659,
  });

  player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));

  try {
    if (startTime) {
      player.setCurrentTime(JSON.parse(startTime).seconds);
    }
  } catch {
    player.setCurrentTime(0);
  }
}

export default function VideoPlayerProject() {
  React.useEffect(() => {
    initvideoPlayer();
  }, []);

  return (
    <iframe
      title="video-player"
      id="vimeo-player"
      src="https://player.vimeo.com/video/236203659"
      allow="autoplay; encrypted-media"
      className="video"
    ></iframe>
  );
}
