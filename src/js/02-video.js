/* =====================================================
=============Imports
========================================================*/
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
/* =====================================================
=============Initial variables
========================================================*/
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let videoplayer_current_time =
  localStorage.getItem('videoplayer_current_time') || 0;
player.setCurrentTime(videoplayer_current_time);
/* =====================================================
=============Function declare
========================================================*/
const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer_current_time', `${Math.floor(seconds)}`);
};

const onTrottledPlay = throttle(onPlay, 1000, { trailing: true });
/* =====================================================
=============Update time 
========================================================*/
player.on('timeupdate', onTrottledPlay);
