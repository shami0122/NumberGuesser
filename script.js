let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9 + 1);
}

const compareGuesses = (humGuess, compGuess, target) => {
    const humDiff = Math.abs(target - humGuess);
    const compDiff = Math.abs(target - compGuess);

   return humDiff <= compDiff
}

const updateScore = (winner) => {
    switch (winner.toLowerCase()){
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    }
}

const advanceRound = () => currentRoundNumber++;
