function compare(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 0;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "scissors" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "rock")
  ) {
    return 1;
  } else {
    return -1;
  }
}

function getComputerMove() {
  const options = ["rock", "scissors", "paper"];
  const randomOption = Math.floor(Math.random() * options.length);
  return options[randomOption];
}

const playerMove = prompt("Make your move - rock, paper or scissors:");
const computerMove = getComputerMove();
const result = compare(playerMove, computerMove);

alert(
  `You chose: ${playerMove}, Computer chose: ${computerMove} Result: ${result}`
);
