// Global variables

let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Player selection

rock.addEventListener("click", function(){
  document.getElementById("result").innerHTML = (playRound("rock", computerPlay()));
  document.getElementById("playerscore").innerHTML = playerScore;
  document.getElementById("computerscore").innerHTML = computerScore;
  if ((playerScore >= 5) || (computerScore >= 5)) {
    announceWinner();
  }
})

paper.addEventListener("click", function(){
  document.getElementById("result").innerHTML = (playRound("paper", computerPlay()));
  document.getElementById("playerscore").innerHTML = playerScore;
  document.getElementById("computerscore").innerHTML = computerScore;
  if ((playerScore >= 5) || (computerScore >= 5)) {
    announceWinner();
  }
})

scissors.addEventListener("click", function(e){
  document.getElementById("result").innerHTML = (playRound("scissors", computerPlay()));
  document.getElementById("playerscore").innerHTML = playerScore;
  document.getElementById("computerscore").innerHTML = computerScore;
  if ((playerScore >= 5) || (computerScore >= 5)) {
    announceWinner();
  }
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
// then returns a string with the result back to the calling function.

function playRound(playerSelection, computerSelection) {
  if ((playerSelection == "rock") && (computerSelection == "paper")) {
    computerScore++;
    return "You played rock. Computer played paper. Computer wins the round!";
  } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
    playerScore++;
    return "You played paper. Computer played rock. You win the round!";
  } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
    computerScore++;
    return "You played scissors. Computer played rock. Computer wins the round!";
  } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    playerScore++;
    return "You played rock. Computer played scissors. You win the round!";
  } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
    computerScore++;
    return "You played paper. Computer played scissors. Computer wins the round!";
  } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    playerScore++;
    return "You played scissors. Computer played paper. You win the round!";
  } else if ((playerSelection == "rock") && (computerSelection == "rock")) {
    return "You played rock. Computer played rock. Round is a tie!";
  } else if ((playerSelection == "paper") && (computerSelection == "paper")) {
    return "You played paper. Computer played paper. Round is a tie!";
  } else if ((playerSelection == "scissors") && (computerSelection == "scissors")) {
    return "You played scissors. Computer played scissors. Round is a tie!";
  }
}

// To do: Change console logs to DOM methods. Change buttons to a single 'Play Again' button.
  
function announceWinner() {
  if (playerScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("Computer wins!");
  }
}


