// IMPORT MODULES under test here:
// import example from '../example.js';
import { compareNumbers } from '../guessUtils.js';
const test = QUnit.test;

test('compareNumbers should take two numbers and return -1, 0, or 1 depending on whether the number is too low, equal or too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedlow = -1;
    const expectedEqual = 0;
    const expectedHigh = 1;

    const lowGuess = 5;
    const equalGuess = 10;
    const highGuess = 15;
    const correctNumber = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualLow = compareNumbers(lowGuess, correctNumber);
    const actualEqual = compareNumbers(equalGuess, correctNumber);
    const actualHigh = compareNumbers(highGuess, correctNumber);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualLow, expectedlow);
    expect.equal(actualEqual, expectedEqual);
    expect.equal(actualHigh, expectedHigh);
});
