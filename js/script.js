// Define global variables

let userPoints = 0;
let computerPoints = 0;
let round = 1;
const results = document.querySelector('#results');

// Player selection

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", function(e){
  let playerSelection = "rock";
  let computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  const rockResult = document.createElement('p');
  rockResult.textContent = (playRound(playerSelection, computerSelection));
  results.appendChild(rockResult);
})

paper.addEventListener("click", function(e){
  let playerSelection = "paper";
  let computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  const paperResult = document.createElement('p');
  paperResult.textContent = (playRound(playerSelection, computerSelection));
  results.appendChild(paperResult);
})

scissors.addEventListener("click", function(e){
  let playerSelection = "scissors";
  let computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  const scissorsResult = document.createElement('p');
  scissorsResult.textContent = (playRound(playerSelection, computerSelection));
  results.appendChild(scissorsResult);
})
  
// Randomly generate the computer's play 

function computerPlay() {
  let play = Math.floor(Math.random() * 3) + 1;
  if (play == 1) {
    return "rock";
  } else if (play == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Compares the player's selection with the computer's selection, increments the points accordingly, 
// then returns a string with the result back to the calling function. If the player cancels their
// turn, or makes an invalid entry, the computer wins the round

function playRound(playerSelection, computerSelection) {
  if (playerSelection == null) {
    computerPoints++;
    return "You cancelled your turn. Computer wins the round!";
  } else if ((playerSelection.toUpperCase() == "ROCK") && (computerSelection == "paper")) {
    computerPoints++;
    return "You played rock. Computer played paper. Computer wins the round!";
  } else if ((playerSelection.toUpperCase() == "PAPER") && (computerSelection == "rock")) {
    userPoints++;
    return "You played paper. Computer played rock. You win the round!";
  } else if ((playerSelection.toUpperCase() == "SCISSORS") && (computerSelection == "rock")) {
    computerPoints++;
    return "You played scissors. Computer played rock. Computer wins the round!";
  } else if ((playerSelection.toUpperCase() == "ROCK") && (computerSelection == "scissors")) {
    userPoints++;
    return "You played rock. Computer played scissors. You win the round!";
  } else if ((playerSelection.toUpperCase() == "PAPER") && (computerSelection == "scissors")) {
    computerPoints++;
    return "You played paper. Computer played scissors. Computer wins the round!";
  } else if ((playerSelection.toUpperCase() == "SCISSORS") && (computerSelection == "paper")) {
    userPoints++;
    return "You played scissors. Computer played paper. You win the round!";
  } else if ((playerSelection.toUpperCase() == "ROCK") && (computerSelection == "rock")) {
    return "You played rock. Computer played rock. Round is a tie!";
  } else if ((playerSelection.toUpperCase() == "PAPER") && (computerSelection == "paper")) {
    return "You played paper. Computer played paper. Round is a tie!";
  } else if ((playerSelection.toUpperCase() == "SCISSORS") && (computerSelection == "scissors")) {
    return "You played scissors. Computer played scissors. Round is a tie!";
  } else {
    computerPoints++;
    return "Sorry, your entry was not valid. Computer wins the round!";
  }
}

// Prints the user's points, the computer's points, and the result of the game
  
function endReport() {
  console.log("You scored " + userPoints);
  console.log("Computer scored " + computerPoints);
  if (userPoints < computerPoints) {
    console.log("Computer wins!");
  } else if (userPoints > computerPoints) {
    console.log("You win!");
  } else console.log("Game tied!");
}

// Starts the game

// game();

