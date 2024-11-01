// For five rounds
    // Get random computer choice
    let getComputerChoice = () => {
        let choiceNumber = Math.floor(Math.random()*3 + 1);
        if (choiceNumber === 1) {
            return "Rock";
        } else if (choiceNumber === 2) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    // Get user's choice
    // Decide the winner
    // Add point to winner's score
// Print the winner