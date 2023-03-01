let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
};

function compareGuesses(human, computer, generateTarget) {
    if (Math.abs(human - generateTarget) < Math.abs(computer - generateTarget)) {
        return true;
    } else if (Math.abs(human - generateTarget) === Math.abs(computer - generateTarget)) {
        return true;
    } else {
        return false;
    }
};

const updateScore = winner => {
    if (winner === "human") {
        return humanScore + 1;
    } else {
        return computerScore + 1;
    }
};