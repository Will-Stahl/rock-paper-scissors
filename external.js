/* external.js */

let rounds = 0;
let playerWins = 0;
let computerWins = 0;

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

function addLine(message) {
    const body = document.querySelector("#main");
    const paragraph = document.createElement("par");
    const line_break = document.createElement("br");
    paragraph.textContent = message;
    body.appendChild(paragraph);
    body.appendChild(line_break);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    rounds++;
    if (playerSelection === "rock" && computerSelection === "scissors") {
        addLine("You're winner! Rock beats scissors!");
        playerWins++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        addLine("You're winner! Scissors beats paper!");
        playerWins++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        addLine("You're winner! Paper beats rock!");
        playerWins++;
    }
    else {
        addLine("You did lose!");
        computerWins++;
    }
    addLine("Round " + rounds.toString() + ". " + "Player: " +
            playerWins.toString() + ", Computer: " + computerWins.toString());
    if (rounds === 5) {
        if (playerWins > 2) {
            addLine("Game complete. You win!");
        }
        else {
            addLine("Game complete. You had big lose...");
        }
    }
}

function game() {
    // let playerWins = 0;
    // let computerWins = 0;
    // for (let i = 0; i < 5; i++) {
    //     let playerSelection = prompt("Enter \"rock, paper, or scissors\".", null);
    //     // playRound() is case insensitive
    //     result = playRound(playerSelection, computerPlay());
    //     if (result) {
    //         playerWins++;
    //     } else {
    //         computerWins++;
    //     }
    // }
    // console.log("Game complete.\nPlayer wins: " + playerWins.toString())
    // console.log("Computer wins: " + computerWins.toString())
    // if (playerWins > computerWins) {
    //     console.log("You won all!");
    // } else {
    //     console.log("You had big lose...");
    // }
    let playerSelection = prompt("Enter \"rock, paper, or scissors\".", null);
    playRound(playerSelection, computerPlay());
}

// game();

// event listeners
const rock_btn = document.querySelector('#rock');
rock_btn.addEventListener('click', () => {
    playRound("rock", computerPlay());
});

const paper_btn = document.querySelector('#paper');
paper_btn.addEventListener('click', () => {
    playRound("paper", computerPlay());
});

const scissors_btn = document.querySelector('#scissors');
scissors_btn.addEventListener('click', () => {
    playRound("scissors", computerPlay());
});
