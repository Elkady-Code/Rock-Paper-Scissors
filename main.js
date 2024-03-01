function getComputerChoice() {
  const computerOutput = ["Rock", "Paper", "Scissors"];
  const randomOutput = Math.floor(Math.random() * computerOutput.length);
  return computerOutput[randomOutput];
}

const computerOutput = getComputerChoice;
console.log("Computer's choice:", computerOutput);
