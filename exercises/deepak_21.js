const readline = require('readline-sync');

const LINE_LENGTH = 80;

const LINE_MARKER = '-';

const WINS_NEEDED = 3;

const STARTING_HAND = 2; // at least 2

const CARDS_DEALT_PER_HIT = 1;

const COMPUTER_HIT_LIMIT = 17;

const MAX_TOTAL = 21;

const HIT_CHOICES = ['h', 'hit'];

const STAY_CHOICES = ['s', 'stay'];

const VALID_PLAYER_CHOICES = HIT_CHOICES.concat(STAY_CHOICES);

const PLAY_AGAIN_CHOICES_YES = ['y', 'yes'];

const PLAY_AGAIN_CHOICES_NO = ['n', 'no'];

const VALID_PLAY_AGAIN_CHOICES = (
  PLAY_AGAIN_CHOICES_YES.concat(PLAY_AGAIN_CHOICES_NO)
);

const SUITS = {
  heart: '\u2665',
  clubs: '\u2663',
  spaces: '\u2660',
  diamonds: '\u2666',
};

const CARDS_AND_VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 11, // or 1. This is accounted for in `correctForAces()`
};

const RULES = {
  1: `Every round you and the computer get ${cardOrCards(STARTING_HAND)}.`,
  2: "You will only be able to see one of the computer's cards.",
  3: 'You can either hit or stay.',
  4: `If you hit, you will be dealt ${cardOrCards(CARDS_DEALT_PER_HIT)}.`,
  5: 'The face values of your cards are added together. J, Q, and K are worth 10.',
  6: 'Ace is worth either 1 or 11.',
  7: `The closest to ${MAX_TOTAL} without going over wins.`,
  8: "If both hands are equal, it's a tie.",
  9: "You always go first.",
  10: `The computer will hit until its hand value is at least ${COMPUTER_HIT_LIMIT}.`,
  11: `First to win ${roundOrRounds(WINS_NEEDED)} wins the match.`,
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayLine() {
  console.log(LINE_MARKER.repeat(LINE_LENGTH));
}

function displayWelcomeMessage() {
  displayGameTitle();
  displayRules();
  displayLine();
  pressEnterToContinue();
}

function displayGameTitle() {
  console.clear();
  displayLine();
  console.log(centerText(MAX_TOTAL, LINE_LENGTH));
  displayLine();
}

function centerText(text, lineLength) {
  let numberOfSpaces = (lineLength - text.toString().length) / 2;
  return ' '.repeat(numberOfSpaces) + text.toString();
}

function displayRules() {
  console.log(`Rules:\n`);
  for (let ruleNumber in RULES) {
    console.log(`${ruleNumber}. ${RULES[ruleNumber]}`);
  }
}

function cardOrCards(numberOfCards) {
  return numberOfCards === 1 ? `${numberOfCards} card` : `${numberOfCards} cards`;
}

function roundOrRounds(numberOfRounds) {
  return numberOfRounds === 1 ? `${numberOfRounds} round` : `${numberOfRounds} rounds`;
}

function pressEnterToContinue() {
  readline.question('=> Press Enter/Return to continue...');
}

function initializeScoreBoard() {
  return {
    roundsPlayed: 0,
    playerWins: 0,
    computerWins: 0,
    ties: 0,
  };
}

function initializeDeck() {
  let deck = [];
  Object.keys(SUITS).forEach(suit => {
    Object.keys(CARDS_AND_VALUES).forEach (card => {
      deck.push({face: card, suit: SUITS[suit]});
    });
  });
  return deck;
}

function shuffleDeck(deck) {
  for (let currentIndex = 0; currentIndex < deck.length; currentIndex += 1) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    [deck[currentIndex], deck[randomIndex]] =
    [deck[randomIndex], deck[currentIndex]];
  }
}

function dealCards(targetHand, cardsToDeal, deck) {
  while (cardsToDeal > 0) {
    targetHand.push(deck.pop());
    cardsToDeal -= 1;
  }
}

function displayScoreBoard(scoreBoard) {
  displayGameTitle();
  console.log(`Player Wins: ${scoreBoard.playerWins}`);
  console.log(`Computer Wins: ${scoreBoard.computerWins}`);
  console.log(`Ties: ${scoreBoard.ties}`);
  displayLine();
}

function displayPlayersHand(playersHand) {
  let totalPlayersHand = total(playersHand);
  playersHand = playersHand.map(card => `${card.face}${card.suit}`);
  console.log(`Your hand: ${joinOr(playersHand)} (total: ${totalPlayersHand})`);
}

function displayComputersHand(computersHand, status) {
  let totalComputersHand = total(computersHand);
  computersHand = computersHand.map(card => `${card.face}${card.suit}`);
  if (status === 'hidden') {
    computersHand[computersHand.length - 1] = 'unknown';
    console.log(`Computer's hand: ${joinOr(computersHand)}`);
  } else {
    console.log(`Computer's hand: ${joinOr(computersHand)} (total: ${totalComputersHand})`);
  }
}

function joinOr(array) {
  if (array.length === 0 ) return '';
  if (array.length === 1) return array[0];
  if (array.length === 2) return `${array[0]} and ${array[1]}`;

  let firstPart = array.slice(0, array.length - 1).join(', ');
  let secondPart = array.slice(array.length - 1, array.length);

  return `${firstPart} and ${secondPart}`;
}

function total(hand) {
  let arrayOfCards = hand.map(card => card.face);
  let numberOfAces = arrayOfCards.filter(card => card === 'A').length;
  let arrayOfValues = arrayOfCards.map(card => CARDS_AND_VALUES[card]);
  let sum = arrayOfValues.reduce((sum, currentValue) => sum + currentValue);
  return correctForAces(sum, numberOfAces);
}

function correctForAces(sum, numberOfAces) {
  while (sum > MAX_TOTAL && numberOfAces > 0) {
    sum -= 10;
    numberOfAces -= 1;
  }
  return sum;
}

function displayBustedMessage(whoseTurn) {
  if (whoseTurn === 'player') {
    prompt(`You busted...`);
  } else {
    prompt(`The computer busted!`);
  }
}

function getPlayerChoice() {
  let playerChoice;
  while (!validPlayerChoice(playerChoice)) {
    prompt(`Would you like to hit or stay? h or hit to hit, s or stay to stay.`);
    playerChoice = readline.question().toLowerCase();
  }
  return playerChoice;
}

function validPlayerChoice(playerChoice) {
  return VALID_PLAYER_CHOICES.includes(playerChoice);
}

function displayGameBoard(playersHand, computersHand, scoreBoard, whoseTurn) {
  displayScoreBoard(scoreBoard);
  if (whoseTurn === 'player') {
    displayComputersHand(computersHand, 'hidden');
  } else {
    displayComputersHand(computersHand, 'shown');
  }
  displayPlayersHand(playersHand);
  displayLine();
}

function playersTurn(playersHand, computersHand, deck, scoreBoard) {
  while (true) {
    displayGameBoard(playersHand, computersHand, scoreBoard, 'player');
    if (total(playersHand) > MAX_TOTAL) {
      displayBustedMessage('player');
      break;
    }
    let playerChoice = getPlayerChoice();
    if (STAY_CHOICES.includes(playerChoice)) break;
    dealCards(playersHand,CARDS_DEALT_PER_HIT, deck);
  }
}

function computersTurn(playersHand, computersHand, deck, scoreBoard) {
  while (true) {
    displayGameBoard(playersHand, computersHand, scoreBoard, 'computer');
    if (total(computersHand) > MAX_TOTAL) {
      displayBustedMessage('computer');
      break;
    }
    let computersChoice = computeComputersChoice(computersHand);
    displayComputersChoice(computersChoice);
    if (computersChoice === 'stay') break;
    dealCards(computersHand, CARDS_DEALT_PER_HIT, deck);
    pressEnterToContinue();
  }
}

function computeComputersChoice(computersHand) {
  return total(computersHand) < COMPUTER_HIT_LIMIT ? 'hit' : 'stay';
}

function displayComputersChoice(computersChoice) {
  prompt(`The computer is choosing to ${computersChoice}.`);
}

function detectWinner(playersHand, computersHand) {
  let playersHandTotal = total(playersHand);
  let computersHandTotal = total(computersHand);

  if (playersHandTotal > MAX_TOTAL) return 'computer';
  if (computersHandTotal > MAX_TOTAL) return 'player';
  if (playersHandTotal > computersHandTotal) return 'player';
  if (computersHandTotal > playersHandTotal) return 'computer';
  return 'tie';
}

function displayRoundWinner(roundWinner) {
  if (roundWinner === 'player') {
    prompt(`Congratulations, you won this round!`);
  } else if (roundWinner === 'computer') {
    prompt(`The computer won this round.`);
  } else {
    prompt("It's a tie.");
  }
}

function iterateScoreBoard(roundWinner, scoreBoard) {
  switch (roundWinner) {
    case 'player':
      scoreBoard.playerWins += 1;
      break;
    case 'computer':
      scoreBoard.computerWins += 1;
      break;
    case 'tie':
      scoreBoard.ties += 1;
      break;
  }
  scoreBoard.roundsPlayed += 1;
}

function displayMatchWinner(scoreBoard) {
  displayGameTitle();
  if (scoreBoard.playerWins === WINS_NEEDED) {
    prompt(`Congratulations, you won the match in ${roundOrRounds(scoreBoard.roundsPlayed)}!`);
  } else {
    prompt(`The computer won the match in ${roundOrRounds(scoreBoard.roundsPlayed)}.`);
  }
}

function getPlayAgain() {
  let playAgain;
  while (!validPlayAgain(playAgain)) {
    prompt('Would you like to play again? y or yes for yes, n or no for no.');
    playAgain = readline.question().toLowerCase();
  }
  return playAgain;
}

function validPlayAgain(playAgain) {
  return VALID_PLAY_AGAIN_CHOICES.includes(playAgain);
}

function displayGoodbyeMessage(matchesPlayed) {
  prompt(`Thank you for playing ${MAX_TOTAL}! You played ${matchOrMatches(matchesPlayed)}.`);
}

function matchOrMatches(matchesPlayed) {
  return (matchesPlayed === 1) ? `${matchesPlayed} match` : `${matchesPlayed} matches`;
}

displayWelcomeMessage();
let matchesPlayed = 0;
let playAgain = 'yes';

while (PLAY_AGAIN_CHOICES_YES.includes(playAgain)) {

  let scoreBoard = initializeScoreBoard();

  while (scoreBoard.playerWins < WINS_NEEDED &&
         scoreBoard.computerWins < WINS_NEEDED) {

    let deck = initializeDeck();
    shuffleDeck(deck);

    let playersHand = [];
    let computersHand = [];
    dealCards(playersHand, STARTING_HAND, deck);
    dealCards(computersHand, STARTING_HAND, deck);

    do {
      playersTurn(playersHand, computersHand, deck, scoreBoard);
      if (total(playersHand) > MAX_TOTAL) break;
      computersTurn(playersHand, computersHand, deck, scoreBoard);
    } while (false);

    let roundWinner = detectWinner(playersHand, computersHand);
    displayRoundWinner(roundWinner);
    iterateScoreBoard(roundWinner, scoreBoard);
    pressEnterToContinue();
  }

  displayMatchWinner(scoreBoard);
  matchesPlayed += 1;
  playAgain = getPlayAgain();
}

displayGoodbyeMessage(matchesPlayed);