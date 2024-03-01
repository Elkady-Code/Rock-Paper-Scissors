// This function randomly selects a choice for the computer (Rock, Paper, or Scissors)
function getComputerChoice() {
  // Array containing the possible choices for the computer
  const computerChoice = ["Rock", "Paper", "Scissors"];
  // Randomly select an index from the computerChoice array
  const randomPick = Math.floor(Math.random() * computerChoice.length);
  // Convert the chosen choice to lowercase for consistency
  return computerChoice[randomPick].toLowerCase(); 
}

// This function prompts the player to enter their choice (Rock, Paper, or Scissors)
function getPlayerChoice() {
  // Prompt the player to enter their choice
  let playerChoice = prompt("Enter a choice of Rock or Paper or Scissors");
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  return playerChoice.toLowerCase(); 
}
// This function is including two parameters which is to be compared to get an outcome of who wins or if it ties
function playRound(playerSelection, computerSelection) {
  const winningConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  if (computerSelection === playerSelection) {
    return "It's a tie!";
  } else if (computerSelection === winningConditions[playerSelection]) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = getPlayerChoice(); // Get player's choice
const computerSelection = getComputerChoice(); // Get computer's choice
console.log(playRound(playerSelection, computerSelection));


