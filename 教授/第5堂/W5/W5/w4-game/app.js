const startGameBtn = document.getElementById("start-game-btn");

// function start() {
//   console.log('Game is staring ...');
// }

// FUNCTION EXPRESSION
// const start = function() {
//   console.log('Game is staring ...');
// };

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN;";

let computerRandom = "ROCK"; //ROCK;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSOR}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    //alert(`Invalid choice. We choose ${DEFAULT_USER_CHOICE} for you.`);
    //return DEFAULT_USER_CHOICE;
    playerRandom = getPlayerRandomSelection();
    return playerRandom;
  }
  return selection;
};

function getPlayerRandomSelection() {
  const rand = Math.floor(Math.random() * 3 + 1);
  console.log("random", rand);
  return rand === 1 ? "ROCK" : rand === 2 ? "PAPER" : "SCISSOR";
  // if (rand == 1) {
  //   return 'ROCK';
  // } else if (rand == 2) {
  //   return 'PAPER';
  // } else {
  //   return 'SCISSOR';
  // }
}

function getComputerSelection() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
}

function getWinner(cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (pChoice === ROCK && cChoice === SCISSOR) ||
    (pChoice === SCISSOR && cChoice === PAPER) ||
    (pChoice === PAPER && cChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else return RESULT_COMPUTER_WIN;
}

// startGameBtn.addEventListener('click', start);
startGameBtn.addEventListener("click", () => {
  console.log("Game is staring ...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerSelection();
  //console.log("player", playerSelection, "computer", computerSelection);
  const winner = getWinner(computerSelection, playerSelection);
  let message = `You picked ${playerSelection}, computer picked ${computerSelection}, therefore you `;
  message +=
    winner === RESULT_DRAW
      ? "had a draw"
      : winner === RESULT_PLAYER_WIN
      ? "won"
      : "lose";
  // if(winner === RESULT_DRAW ){
  //   message += 'had a draw.'
  //}else
  console.log(message);
});
