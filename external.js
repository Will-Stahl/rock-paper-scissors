/* external.js */
function computerPlay() {
    let res = Math.floor(Math.random()*3);
    if (res === 0) {
        return "rock";
    }
    else if (res === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You're winner! Rock beats scissors!");
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You're winner! Scissors beats paper!");
        return 1;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You're winner! Paper beats rock!");
        return 1;
    }
    else {
        console.log("You did lose!");
        return 0;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter \"rock, paper, or scissors\".", null);
        // playRound() is case insensitive
        result = playRound(playerSelection, computerPlay());
        if (result) {
            playerWins++;
        } else {
            computerWins++;
        }
    }
    console.log("Game complete.\nPlayer wins: " + playerWins.toString())
    console.log("Computer wins: " + computerWins.toString())
    if (playerWins > computerWins) {
        console.log("You won all!");
    } else {
        console.log("You had big lose...");
    }
}

game();