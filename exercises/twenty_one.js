// JS101
// Twenty One

const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const FACE_CARDS = ['Jack', 'Queen', 'King'];
const ACE = ['Ace'];
const NUMERAL_CARDS = ['2', '3', '4', '5', '6' ,'7', '8', '9'];

let readline = require('readline-sync');
const SUITS_SYMBOLS = {
  H: '♥',
  D: '♦',
  C: '♣',
  S: '♠',
};

function initializeDeck() {
  let deck = [];

  let allCards = [...NUMERAL_CARDS, ...FACE_CARDS, ...ACE];

  SUITS.forEach(suit => allCards.forEach(card => {
    deck.push({card: card, suit: suit});
  }));

  shuffle(deck);

  console.log(deck);
}

function shuffle(deck) {
  for (let idx = deck.length - 1; idx > 0; idx--) {
    let randomIndex = Math.floor(Math.random() * (idx + 1)); // 0 to current index
    [deck[idx], deck[randomIndex]] = [deck[randomIndex], deck[idx]]; // swap cards
  }
}

initializeDeck();
