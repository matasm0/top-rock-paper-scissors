function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "You tied, you both chose " + playerSelection + "!";
    }

    if (playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "rock") {
            return "You lose, " + computerSelection + " beats " + playerSelection + "!";
        }
    
    return "You win, " + playerSelection + " beats " + computerSelection + "!";
}

const playerSelection = prompt();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));