// import functions and grab DOM elements
import { compareNumbers } from './guessUtils.js';
const playButton = document.getElementById('play-button');

// initialize state

let wonGames = 0;
let lostGames = 0;
let triesRemaining = 4;

// set event listeners to update state and DOM