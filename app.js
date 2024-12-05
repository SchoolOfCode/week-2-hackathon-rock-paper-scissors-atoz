function compare(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 0;
  } else if (
    (playerMove === "rock"     && computerMove === "scissors") ||
    (playerMove === "scissors" && computerMove === "paper") ||
    (playerMove === "paper"    && computerMove === "rock")
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

let playerName;
let isNameCorrect = false;

while (isNameCorrect === false) {
  playerName = prompt("What is your name?");
  let firstLetter = playerName.slice(0, 1);
  if (
    (playerName.length <= 10) &&
    (firstLetter.toLowerCase() != firstLetter.toUpperCase()) &&
    (firstLetter == firstLetter.toUpperCase())
  ) {
    isNameCorrect = true;
  } else {
    alert("Error in name!\nName must be no more than 10 characters,\nmust start with a letter and be capitalised!");
  }
}
  
alert (`Hello ${playerName}, wanna play?`);

let scores = {
  gamesPlayed: 0,
  win:  0,
  lose: 0,
  draw: 0,
};
let playAgain = true;

while (playAgain === true) {
  const playerMove = prompt("Make your move - rock, paper or scissors:");
  const computerMove = getComputerMove();
  const result = compare(playerMove, computerMove);

  scores.gamesPlayed++;
  if (result === 1) {
    scores.win++;
    alert("YOU WON!");  
  } else if (result === -1) {
    scores.lose++;
    alert("YOU LOSE!");
  } else { 
    scores.draw++;
    alert("IT WAS A DRAW!");
  }

  alert(`${playerName}: ${playerMove}\nComputer: ${computerMove}\nWins: ${scores.win}\nLosses: ${scores.lose}\nDraws: ${scores.draw}\nGames Played: ${scores.gamesPlayed}`);
  playAgain = confirm("Would you like to play again?");
}

alert(`Game over!\nGood bye!`);
