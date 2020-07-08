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
let gameOver = false;
// set event listeners to update state and DOM

playButton.addEventListener('click', ()=> {
    let lastGuess = '';
    if (!gameOver) {
        const guessedNumber = Number(guess.value);
        switch (compareNumbers(guessedNumber, correctNumber)) {
            case 1 :
                triesRemaining--;
                lastGuess = 'too high';
                break;
            case 0 :
                wonGames++;
                lastGuess = 'correct';
                gameOver = true;
                break;
            case -1 :
                triesRemaining--;
                lastGuess = 'too low';
                break;
        }
    } else {
        triesRemaining = 4;
        gameOver = false;
        correctNumber = generateNumber();
        playButton.textContent = 'Try your luck';
    }
    
    // make sure we aren't out of guesses.
    if (triesRemaining === 0) {
        lostGames++;
        gameOver = true;
    }
    //update the scoreboard
    scoreboardLastGuess.textContent = lastGuess;
    scoreboardTriesRemaining.textContent = triesRemaining;
    scoreboardWins.textContent = wonGames;
    scoreboardLosses.textContent = lostGames;
    //reset the game
    if (gameOver) {
        playButton.textContent = 'Restart';
    }



    
});