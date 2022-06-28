function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log("You tied, you both chose " + playerSelection + "!");
        return null;
    }

    if (playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "rock") {
            console.log("You lose, " + computerSelection + " beats " + playerSelection + "!");
            return false;
        }
    
    console.log("You win, " + playerSelection + " beats " + computerSelection + "!");
    return true;
}

function game() {
    let numGames = 5;
    let pScore = 0, cScore = 0;

    for (let i = 0; i < numGames; i++) {
        let currRound = playRound(prompt(), computerPlay());
        if (currRound === null) continue;
        if (currRound) pScore++;
        else cScore++;
    }

    if (pScore == cScore) console.log("You tied! You both won " + pScore + " games!");
    else if (pScore > cScore) console.log("You won! You won " + pScore + " games, while the computer won " + cScore + " games!");
    else console.log("You lost! You won " + pScore + " games, while the computer won " + cScore + " games!");
}

game();