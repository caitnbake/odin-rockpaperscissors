// For five rounds

let getComputerChoice = () => {
    let choiceNumber = Math.floor(Math.random()*3 + 1);
    if (choiceNumber === 1) {
        return "rock";
    } else if (choiceNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let getHumanChoice = () => {
    return humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore += 1;
            return console.log("You win! Rock beats scissors.");
        } else if (computerChoice === "paper") {
            computerScore += 1;
            return console.log("You lose! Paper beats rock.");
        } else {
            return console.log ("It's a tie!");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1;
            return console.log("You win! Paper beats rock.");
        } else if (computerChoice === "scissors") {
            computerScore += 1;
            return console.log("You lose! Scissors beats paper.");
        } else {
            return console.log("It's a tie!");
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore += 1;
            return console.log("You win! Scissors beats paper.");
        } else if (computerChoice === "rock") {
            computerScore += 1;
            return console.log("You lose! Rock beats scissors.");
        } else {
            return console.log("It's a tie!");
        }
    } else {
        computerScore += 1;
        return console.log("You entered an invalid answer. You lose.");
    }
}

playRound(getHumanChoice(), getComputerChoice());
    // Decide the winner
    // Add point to winner's score
// Print the winner