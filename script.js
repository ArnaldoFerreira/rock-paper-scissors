function computerPlay(){ // notice = no parameters
    const random = Math.random();
    if (random < 0.34) {
        return "rock"; 
    } else if (random <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}
    console.log(computerPlay());

function playRound(playerSelection, computerSelection) {// 2 parameters
    if (playerSelection.toLowerCase() === "rock") { //.toLowerCase missing below in "paper"
        if (computerSelection === "rock") {
            return "Tie";
        } else if (computerSelection === "paper") {
            computerScore++;
            return "Computer Wins";
        } else {
            playerScore++;
            return "Player Wins";
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "Player Wins";
        } else if ( computerSelection === "scissors") {
            computerScore++;
            return "Computer Wins"
        } else {
            return "Tie";
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return "Computer Wins"
        } else if (computerSelection === "paper") {
            playerSelection++;
            return "Player Wins"
        } else {
            return "Tie";
        }
    }
} 

playerScore = parseInt(0);
computerScore = parseInt(0);

function game() {
    for (let i = 0; i < 5; i++) { //let step = 0; step < 5; step++) { // Runs 5 times, with values of step 0 through 4
        let playerSelection = prompt("Make your move");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player score = " + playerScore);
        console.log("Computer score = " + computerScore);
    }
}

game();