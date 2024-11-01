let getComputerChoice = () => {
    let choiceNumber = Math.floor(Math.random()*3);
    if (choiceNumber === 0) {
        return "rock";
    } else if (choiceNumber === 1) {
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
        switch (true) {
            case (humanChoice === "rock" && computerChoice === "scissors") :
            case (humanChoice === "scissors" && computerChoice === "paper") :
            case (humanChoice === "paper" && computerChoice === "rock") :
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);    
                humanScore += 1;
                break;
            case (humanChoice === "rock" && computerChoice === "paper") :
            case (humanChoice === "scissors" && computerChoice === "rock") :
            case (humanChoice === "paper" && computerChoice === "scissors") :
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
                computerScore += 1;
                break;
            default :
                console.log("It's a tie!");
        }
        console.log(`You: ${humanScore} | Computer: ${computerScore}`);
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