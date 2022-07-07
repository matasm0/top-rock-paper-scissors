let announcer = document.querySelector(".announcer");
let pScoreDiv = document.querySelector(".pscore");
let cScoreDiv = document.querySelector(".cscore");

let pScore = 0, cScore = 0;

let button = document.querySelectorAll(".playerside button");

button.forEach((x) => {x.addEventListener('click', function(e){
    game(e.target.classList[0]);
    button.forEach((y) => {y.classList.remove('selected')});
    e.target.classList.add('selected');
})});


function displayComputerSelection(computerSelection) {
    let cbuttons = document.querySelectorAll('.computerside button')
    cbuttons.forEach((x) => {
        x.classList.remove('selected');
        if (x.classList.contains(computerSelection)) x.classList.add('selected');
    });
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);

    displayComputerSelection(choices[choice]);

    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        announcer.textContent = "You tied!";
        return null;
    }

    if (playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "rock") {
            announcer.textContent = "You lost!"
            return false;
        }
    
    announcer.textContent = "You won!";
    return true;
}

function game(playerSelection) {
    let currRound = playRound(playerSelection, computerPlay());
    
    if (currRound === null) return;
    if (currRound) pScore++;
    else cScore++;

    pScoreDiv.textContent = pScore;
    cScoreDiv.textContent = cScore;
}


