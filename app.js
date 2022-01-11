let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const choice = (["rock", "paper", "scissors"])

let computerPlay = (choice) => {
    return choice[Math.floor(Math.random() * choice.length)] 
}
    
   
    
    
let playRound = (playerSelection, computerSelection) => {

    if(playerSelection === null || playerSelection === "") {
        alert("Bye!")
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("Rock beats scissors! You win!")
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("Paper beats rock! You loose!")
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        alert("It's a tie!")
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("Scissors beats paper. You loose!")
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        alert("It's a tie!")
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("Rock beats paper. You loose.")
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert("It's a tie!")
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("Scissors beats paper. You win!")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("Rock beats scissors. You loose.")
    }    
}
let playerSelection = prompt("rock, paper or scissors?")
let computerSelection = computerPlay(choice)
console.log("player: " + playerSelection + " computer: " + computerSelection)
playRound(playerSelection, computerSelection)
