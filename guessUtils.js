//Function compareNumbers needs to return -1 for a low guess, 0 for a correct guess, 1 for a high guess

export function compareNumbers(guess, correctNumber) {
    const guessedNumber = Number(guess);
    if (guessedNumber === correctNumber) return 0;
    if (guessedNumber > correctNumber) return 1;
    if (guessedNumber < correctNumber) return -1;
}

export function generateNumber() {
    return Math.ceil(Math.random() * 20);
}
