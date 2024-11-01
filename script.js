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

let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore += 1;
                console.log("You win! Rock beats scissors.");
            } else if (computerChoice === "paper") {
                computerScore += 1;
                console.log("You lose! Paper beats rock.");
            } else {
                console.log ("It's a tie!");
            }
            console.log(`Your score: ${humanScore} | Computer: ${computerScore}`);
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore += 1;
                console.log("You win! Paper beats rock.");
            } else if (computerChoice === "scissors") {
                computerScore += 1;
                console.log("You lose! Scissors beats paper.");
            } else {
                console.log("It's a tie!");
            }
            console.log(`Your score: ${humanScore} | Computer: ${computerScore}`);
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                humanScore += 1;
                console.log("You win! Scissors beats paper.");
            } else if (computerChoice === "rock") {
                computerScore += 1;
                console.log("You lose! Rock beats scissors.");
            } else {
                console.log("It's a tie!");
            }
            console.log(`Your score: ${humanScore} | Computer: ${computerScore}`);
        } else {
            computerScore += 1;
            console.log("You entered an invalid answer. You lose.");
            console.log(`Your score: ${humanScore} | Computer: ${computerScore}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("Final results: You win!!")
    } else if (computerScore > humanScore) {
        console.log("Final results: You lose!!")
    } else {
        console.log("Final results: Tie!")
    }
}

playGame();