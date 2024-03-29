import { Spinner } from 'spin.js';
import { getRefs } from './refs';

const refs = getRefs();
const opts = {
  lines: 18, // The number of lines to draw
  length: 13, // The length of each line
  width: 22, // The line thickness
  radius: 0, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 0.5, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 90, // The rotation offset
  animation: 'spinner-line-shrink', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#59cf86', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '48%', // Top position relative to parent
  left: '48%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
const spinner = new Spinner(opts);

export function spinnerPlay() {
  spinner.spin(refs.loader);
  refs.loader.classList.remove('is-hidden');
}
export function spinnerStop() {
  spinner.stop();
  refs.loader.classList.add('is-hidden');
}
