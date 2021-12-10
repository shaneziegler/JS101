// JS101
// Twenty One

const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const FACE_CARDS = ['J', 'Q', 'K'];
const ACE = ['A'];
const NUMERAL_CARDS = ['2', '3', '4', '5', '6' ,'7', '8', '9'];
const SUIT_SYMBOLS = {
  Clubs: '♣',
  Diamonds: '♦',
  Hearts: '♥',
  Spades: '♠'
};
const MAX_SCORE = 21;
const DEALER_STAY = 17;
const readline = require('readline-sync');

function initializeDeck() {
  let deck = [];
  let allCards = [...NUMERAL_CARDS, ...FACE_CARDS, ...ACE];

  SUITS.forEach(suit => allCards.forEach(card => {
    let cardValue = ACE.includes(card) ? 11 : Number(card) || 10; // Set Ace value to 11 to begin with
    deck.push({card: card, symbol: SUIT_SYMBOLS[suit],
      value: cardValue, hidden: false});
  }));

  shuffle(deck);
  return deck;
}

function shuffle(deck) {
  for (let idx = deck.length - 1; idx > 0; idx--) {
    let randomIndex = Math.floor(Math.random() * (idx + 1)); // From 0 to current index
    [deck[idx], deck[randomIndex]] = [deck[randomIndex], deck[idx]]; // swap cards
  }
}

function dealCard(deck) {
  return deck.shift();
}

function displayHand(hand) {
  let cardCount = hand.length;
  const CARD_SPACER = '    ';

  let displayBuffer = ['','','','','','',''];

  for (let idx = 0; idx < cardCount; idx++) {
    displayBuffer[0] += ('-------' + CARD_SPACER);
    displayBuffer[1] += (`|${hand[idx].hidden ? ' ' : hand[idx].card}    |` + CARD_SPACER);
    displayBuffer[2] += (`|${hand[idx].hidden ? ' ' : hand[idx].symbol}    |` + CARD_SPACER);
    displayBuffer[3] += ('|     |' + CARD_SPACER);
    displayBuffer[4] += (`|    ${hand[idx].hidden ? ' ' : hand[idx].symbol}|` + CARD_SPACER);
    displayBuffer[5] += (`|    ${hand[idx].hidden ? ' ' : hand[idx].card}|` + CARD_SPACER);
    displayBuffer[6] += ('-------' + CARD_SPACER);
  }

  displayBuffer.forEach(line => console.log(line));
}

function possibleBusted(score) {
  return score > MAX_SCORE;
}

function calculateTotal(hand) {
  let total = hand.filter(card => !card.hidden)
    .reduce((acc, elm) => acc + elm.value, 0);

  if (possibleBusted(total)) {
    let aces = hand.filter(card => card.card === 'A');
    while (total > MAX_SCORE && aces.length > 0) { // Lower any Ace values from 11 to 1 as needed
      total -= 10;
      aces.pop();
    }
  }
  return total;
}

function displayTable(playerHand, dealerHand) {
  console.clear();

  console.log('\n---=== Welcome to 21! ===---');

  console.log('\n*** Dealer Hand ***');
  displayHand(dealerHand);
  console.log(`Dealer Total: ${calculateTotal(dealerHand)}`);

  console.log('\n\n*** Player Hand ***');
  displayHand(playerHand);
  console.log(`Player Total: ${calculateTotal(playerHand)}\n\n`);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function joinOr(arr, delimiter = ', ', conjunction = 'or') {
  switch (arr.length) {
    case 0: return "";
    case 1: return String(arr[0]);
    case 2: return arr.join(` ${conjunction} `);
    default: {
      return `${arr.slice(0, arr.length - 1).join(delimiter)}, ${conjunction} ${arr[arr.length - 1]}`;
    }
  }
}

function playerInput(text, options) {
  prompt(text + ' ' + joinOr(options));
  let response = readline.question().toLowerCase().trim();

  while (!options.includes(response)) {
    prompt(`Invalid input.  Please enter ${joinOr(options)}:`);
    response = readline.question().toLowerCase().trim();
  }
  return response;
}

function sleep(milliseconds) {
  let date = Date.now();
  let currentDate;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function playerTurn(playerHand, dealerHand, deck) {
  while (true) {
    let hitOrStay = playerInput('Would you like to hit or stay?', ['h', 's']);

    if (hitOrStay === 'h') {
      playerHand.push(dealCard(deck));
      displayTable(playerHand, dealerHand);
    }
    if (hitOrStay === 's' || possibleBusted(calculateTotal(playerHand))) break;
  }
}

function dealerTurn(dealerHand, playerHand, deck) {
  sleep(1000);
  while (calculateTotal(dealerHand) < DEALER_STAY) {
    sleep(2000);
    dealerHand.push(dealCard(deck));
    console.log('The dealer hits.\n');
    sleep(2000);
    displayTable(playerHand, dealerHand);
  }

  if (possibleBusted(calculateTotal(dealerHand))) {
    console.log('The dealer has busted!\n');
  } else {
    console.log('The dealer stays.\n');
  }
}

function displayWinner(playerHand, dealerHand) {
  if (possibleBusted(calculateTotal(playerHand))) {
    console.log('You lose!\n');
    return;
  }

  if (possibleBusted(calculateTotal(dealerHand))) {
    console.log('You Win!\n');
    return;
  }

  if (calculateTotal(playerHand) > calculateTotal(dealerHand)) {
    console.log('You Win!\n');
  } else if (calculateTotal(playerHand) < calculateTotal(dealerHand)) {
    console.log('You Lose!\n');
  } else {
    console.log("It's a tie!\n");
  }
}


// Main program start

while (true) {
  let deck = initializeDeck();

  let playerHand = [dealCard(deck), dealCard(deck)];
  let dealerHand = [dealCard(deck), dealCard(deck)];
  // Card obj looks like: { card: 'J', symbol: '♠', value: 10, hidden: false }

  dealerHand[1].hidden = true; // Hide second card from player

  displayTable(playerHand, dealerHand);

  playerTurn(playerHand, dealerHand, deck);
  if (possibleBusted(calculateTotal(playerHand))) {
    console.log('Player busted!\n');
  } else {
    dealerHand[1].hidden = false;
    displayTable(playerHand, dealerHand);
    dealerTurn(dealerHand, playerHand, deck);
  }

  displayWinner(playerHand, dealerHand);

  let playAgain = playerInput('Would you like to play again?', ['y', 'n']);
  if (playAgain === 'n') break;
}

console.log('\nThanks for playing, Goodbye!\n\n');