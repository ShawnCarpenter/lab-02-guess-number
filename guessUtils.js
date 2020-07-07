//Function compareNumbers needs to return -1 for a low guess, 0 for a correct guess, 1 for a high guess

export function compareNumbers(guess, correctNumber) {
    
    if (guess === correctNumber) return 0;
    if (guess > correctNumber) return 1;
    if (guess < correctNumber) return -1;
}