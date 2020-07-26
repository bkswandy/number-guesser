let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const compareGuesses = (userGuess, cpuGuess, target) => {
    const guessGapUser = getAbsoluteDistance(target, userGuess); 
    const guessGapCpu = getAbsoluteDistance(target, cpuGuess); 
    if (userGuess > 9 || userGuess < 0) {
        alert('Try again!\nYour guess must be between 0 and 9.');
    } else if (guessGapCpu >= guessGapUser) {
        return true; 
    } else {
        return false; 
    }
}

const updateScore = (winner) => {
    if (winner === 'computer') {
        computerScore++; 
    } else if (winner === 'human') {
        humanScore++; 
    }
}

const advanceRound = () => {
    currentRoundNumber++;
} 