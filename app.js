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

function showAsciiArtForMove(move) {
  const asciiArt = {
    rock: `
    _______
---'   ____)__
      (_____)
      (_____)
      (____)
---.__(___)
`,
    paper: `
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
`,
    scissors: `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`,
  };

  console.log(`Computer chose ${move}:\n${asciiArt[move]}`);
}

function showAsciiArt() {
  const asciiArt = `
    ROCK          PAPER          SCISSORS
    _______       _______             _______
---'   ____)    ---'   ____)____    ---'   ____)____
      (_____)             ______)            ______)
      (_____)             _______)         _______)
      (____)             _______)         (____)
---.__(___)       ---.__________)   ---.__(___)
  `;
  console.log(asciiArt);
}

showAsciiArt();

let playerName;
let isNameCorrect = false;

while (!isNameCorrect) {
  playerName = prompt("What is your name?");
  let firstLetter = playerName.slice(0, 1);
  if (
    playerName.length <= 10 &&
    firstLetter.toLowerCase() != firstLetter.toUpperCase() &&
    firstLetter === firstLetter.toUpperCase()
  ) {
    isNameCorrect = true;
  } else {
    alert(
      "Error in name!\nName must be no more than 10 characters,\nmust start with a letter and be capitalised!"
    );
  }
}

alert(`Hello ${playerName}, Let's play!`);

let scores = {
  gamesPlayed: 0,
  win: 0,
  lose: 0,
  draw: 0,
};
let playAgain = true;

const taunts = {
  win: [
    "Ha! I knew you'd pick that! 🤖",
    "Too easy for me! 😏",
    "Better luck next time, human! 🧠",
  ],
  lose: [
    "You got lucky this time! 😤",
    "Nooo! I demand a rematch! 😭",
    "How did you outsmart me? 😣",
  ],
  draw: [
    "A draw? Is that all you've got? 😜",
    "Great minds think alike! 🤝",
    "Stalemate! Try harder next time! 🦾",
  ],
};

while (playAgain) {
  const playerMove = prompt(
    "Make your move - rock, paper or scissors:"
  ).toLowerCase();

  if (!["rock", "paper", "scissors"].includes(playerMove)) {
    alert("Invalid move! Please choose rock, paper, or scissors.");
    continue;
  }

  const computerMove = getComputerMove();
  showAsciiArtForMove(computerMove);
  const result = compare(playerMove, computerMove);

  scores.gamesPlayed++;
  if (result === 1) {
    scores.win++;
    alert(
      `YOU WON! 🎉\n${
        taunts.lose[Math.floor(Math.random() * taunts.lose.length)]
      }`
    );
  } else if (result === -1) {
    scores.lose++;
    alert(
      `YOU LOSE! 💀\n${
        taunts.win[Math.floor(Math.random() * taunts.win.length)]
      }`
    );
  } else {
    scores.draw++;
    alert(
      `IT WAS A DRAW! 🤔\n${
        taunts.draw[Math.floor(Math.random() * taunts.draw.length)]
      }`
    );
  }

  alert(
    `${playerName}: ${playerMove}\nComputer: ${computerMove}\nWins: ${scores.win}\nLosses: ${scores.lose}\nDraws: ${scores.draw}\nGames Played: ${scores.gamesPlayed}`
  );
  playAgain = confirm("Would you like to play again?");
}

alert(`Aww.. You are leaving?\nGood bye, ${playerName}! 👋`);
