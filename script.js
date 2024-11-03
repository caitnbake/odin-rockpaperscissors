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

let playRound = (input) => {
    let humanChoice = input;
    let computerChoice = getComputerChoice();

    switch (true) {
        case (humanChoice === "rock" && computerChoice === "scissors") :
        case (humanChoice === "scissors" && computerChoice === "paper") :
        case (humanChoice === "paper" && computerChoice === "rock") :
            humanScore += 1;
            roundResults.innerText = `You win! ${humanChoice} beats ${computerChoice}.`;
            break;
        case (humanChoice === "rock" && computerChoice === "paper") :
        case (humanChoice === "scissors" && computerChoice === "rock") :
        case (humanChoice === "paper" && computerChoice === "scissors") :
            computerScore += 1;
            roundResults.innerText = `You lose! ${computerChoice} beats ${humanChoice}.`
            break;
        default :
            roundResults.innerText = "It's a tie!";
    }
    score.innerText = `You: ${humanScore} | Computer: ${computerScore}`;
    checkForWinner(humanScore, computerScore);
}

let reset = () => {
    humanScore = 0;
    computerScore = 0;
    rockBtn.style.display = "inline";
    paperBtn.style.display = "inline";
    scissorsBtn.style.display = "inline";
    resetBtn.style.display = "none";
    gameResults.innerText = "";
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");

const container = document.querySelector("#output");
const roundResults = document.createElement("p");
container.appendChild(roundResults);

const scoreContainer = document.querySelector("#score");
const score = document.createElement("p");
scoreContainer.appendChild(score);

const gameResults = document.createElement("h2");
scoreContainer.appendChild(gameResults);

let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
resetBtn.addEventListener("click", reset);

let checkForWinner = (humanScore, computerScore) => {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            gameResults.innerText = `You won!`;
        } else {
            gameResults.innerText = `You lost.`;
        }
        gameResults.innerText += ` You: ${humanScore} | Computer: ${computerScore}`;
        roundResults.innerText = "";
        score.innerText = "";
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";
        scissorsBtn.style.display = "none";
        resetBtn.style.display = "block";
    } 
}