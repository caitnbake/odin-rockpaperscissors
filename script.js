// For five rounds
    // Get random computer choice
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

    console.log(getHumanChoice());
    // Get user's choice
    // Decide the winner
    // Add point to winner's score
// Print the winner