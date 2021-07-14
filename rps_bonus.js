const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

const SCORES = {
  playerScore: 0,
  computerScore: 0
};

const NUMBER_OF_ROUND_WINS = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  if (playerWins(choice, computerChoice)) {
    prompt('You win this round!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins this round!");
  }
}

function updateScores(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    SCORES.playerScore += 1;
  } else if (playerWins(computerChoice, choice)) {
    SCORES.computerScore += 1;
  }
}

function playRound(roundNumber) {
  prompt(`ROUND ${roundNumber} - First to ${NUMBER_OF_ROUND_WINS} wins the match.`);
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  updateScores(choice, computerChoice, SCORES);
}

function displayScore() {
  prompt(`Player Score: ${SCORES.playerScore}`);
  prompt(`Computer Score: ${SCORES.computerScore}\n`);
}


while (true) {
  console.clear();
  let currentRound = 1;
  SCORES.playerScore = 0;
  SCORES.computerScore = 0;

  while (SCORES.playerScore < NUMBER_OF_ROUND_WINS
    && SCORES.computerScore < NUMBER_OF_ROUND_WINS) {
    playRound(currentRound);
    displayScore();
    currentRound += 1;
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}