import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let videoplayer_current_time = localStorage.getItem('videoplayer_current_time');

player.setCurrentTime(videoplayer_current_time);

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer_current_time', `${Math.floor(seconds)}`);
};

const onTrottledPlay = throttle(onPlay, 1000, { trailing: true });
player.on('timeupdate', onTrottledPlay);
