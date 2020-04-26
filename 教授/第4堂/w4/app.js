const startGameBtn = document.getElementById('start-game-btn');

// function start() {
//   console('Game is starting ...');
// }

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = 'ROCK';

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK},${PAPER} or ${SCISSOR}?`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(`Invalid choice. we choose ${DEFAULT_USER_CHOUCE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener('click', function() {
  console.log('Game is starting ...');
  const playSelection = getPlayerChoice();
  console.log(playSelection);
});
