/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
// JS101
// Twenty One

const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const FACE_CARDS = ['J', 'Q', 'K'];
const ACE = ['A'];
const NUMERAL_CARDS = ['2', '3', '4', '5', '6' ,'7', '8', '9'];
const SUITS_SYMBOLS = {
  Clubs: '♣',
  Diamonds: '♦',
  Hearts: '♥',
  Spades: '♠'
};
const MAX_SCORE = 21;

const readline = require('readline-sync');
function initializeDeck() {
  let deck = [];
  let allCards = [...NUMERAL_CARDS, ...FACE_CARDS, ...ACE];

  SUITS.forEach(suit => allCards.forEach(card => {
    let cardValue = ACE.includes(card) ? 11 : Number(card) || 10; // set Ace value to 11 to begin with
    deck.push({card: card, suit: suit, symbol: SUITS_SYMBOLS[suit], value: cardValue, hidden: false});
  }));

  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (let idx = deck.length - 1; idx > 0; idx--) {
    let randomIndex = Math.floor(Math.random() * (idx + 1)); // 0 to current index
    [deck[idx], deck[randomIndex]] = [deck[randomIndex], deck[idx]]; // swap cards
  }
}

function dealCard(deck) {
  return deck.shift();
}

function displayCard(card) {

  console.log('-------');
  console.log(`|${card.card}    |`);
  console.log(`|${card.symbol}    |`);
  console.log('|     |');
  console.log(`|    ${card.symbol}|`);
  console.log(`|    ${card.card}|`);
  console.log('-------');
}

function displayHand(hand) {
  let cardCount = hand.length;
  const CARD_SPACER = '    ';
  let line1 = '', line2 = '', line3 = '', line4 = '', line5 = '', line6 = '', line7 = '';

  for (let idx = 0; idx < cardCount; idx++) {
    line1 += ('-------' + CARD_SPACER);
    line2 += (`|${hand[idx].hidden ? ' ' : hand[idx].card}    |` + CARD_SPACER);
    line3 += (`|${hand[idx].hidden ? ' ' : hand[idx].symbol}    |` + CARD_SPACER);
    line4 += ('|     |' + CARD_SPACER);
    line5 += (`|    ${hand[idx].hidden ? ' ' : hand[idx].symbol}|` + CARD_SPACER);
    line6 += (`|    ${hand[idx].hidden ? ' ' : hand[idx].card}|` + CARD_SPACER);
    line7 += ('-------' + CARD_SPACER);
  }

  console.log(line1);
  console.log(line2);
  console.log(line3);
  console.log(line4);
  console.log(line5);
  console.log(line6);
  console.log(line7);
}

function possibleBusted(score) {
  return score > MAX_SCORE;
}

function calculateTotal(hand) {
  let total = hand.reduce((acc, elm) => acc + elm.value, 0);
  if (possibleBusted(total)) {

  }
  return total;
}

let deck = initializeDeck();

let playerHand = [dealCard(deck), dealCard(deck)];
let dealerHand = [dealCard(deck), dealCard(deck)];
// dealerHand[1].hidden = true;

console.clear();
console.log('Dealer Hand');
displayHand(dealerHand);
console.log(calculateTotal(dealerHand));

console.log('\n\nPlayer Hand');
displayHand(playerHand);
console.log(calculateTotal(playerHand));

