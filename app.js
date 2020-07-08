// import functions and grab DOM elements
import { compareNumbers, generateNumber } from './guessUtils.js';
const playButton = document.getElementById('play-button');
const guess = document.getElementById('guess');
const scoreboardWins = document.getElementById('wins');
const scoreboardLosses = document.getElementById('losses');
const scoreboardLastGuess = document.getElementById('hi-low');
const scoreboardTriesRemaining = document.getElementById('tries-remaining');

// initialize state
let correctNumber = generateNumber();
let wonGames = 0;
let lostGames = 0;
let triesRemaining = 4;
let lastGuess = '';
let gameOver = false;


// set event listeners to update state and DOM

function updateScoreboard(triesRemaining, lastGuess, wonGames, lostGames) {
    scoreboardTriesRemaining.textContent = triesRemaining;
    scoreboardLastGuess.textContent = lastGuess;
    scoreboardWins.textContent = wonGames;
    scoreboardLosses.textContent = lostGames;
    guess.value = '';
}

function restartGame() {
    triesRemaining = 4;
    gameOver = false;
    lastGuess = '';
    correctNumber = generateNumber();
    playButton.textContent = 'Pick a number';
}

function playGame(guessedNumber) {
    switch (compareNumbers(guessedNumber, correctNumber)) {
        case 1 :
            triesRemaining--;
            lastGuess = 'too high';
            break;
        case 0 :
            wonGames++;
            triesRemaining--;
            lastGuess = 'correct';
            gameOver = true;
            break;
        case -1 :
            triesRemaining--;
            lastGuess = 'too low';
            break;
    }
}

playButton.addEventListener('click', ()=> {
    if (!gameOver) {
        const guessedNumber = Number(guess.value);
        playGame(guessedNumber);
    } else {
        restartGame();
    }
    
    // make sure we aren't out of guesses.
    if (triesRemaining === 0 && lastGuess !== 'correct') {
        lostGames++;
        gameOver = true;
    }
    //update the scoreboard
    updateScoreboard (triesRemaining, lastGuess, wonGames, lostGames);
    //If the game is finished change the button from pick a number to resets
    if (gameOver) {
        playButton.textContent = 'Restart';
    } 
});