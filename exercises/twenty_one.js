// JS101
// Twenty One

const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const FACE_CARDS = ['Jack', 'Queen', 'King'];
const ACE = ['Ace'];
const NUMERAL_CARDS = ['2', '3', '4', '5', '6' ,'7', '8', '9'];
const SUITS_SYMBOLS = {
  Clubs: '♣',
  Diamonds: '♦',
  Hearts: '♥',
  Spades: '♠'
};

const readline = require('readline-sync');
function initializeDeck() {
  let deck = [];
  let allCards = [...NUMERAL_CARDS, ...FACE_CARDS, ...ACE];

  SUITS.forEach(suit => allCards.forEach(card => {
    let cardValue = ACE.includes(card) ? 11 : Number(card) || 10; // set Ace value to 11 to begin with
    deck.push({card: card, suit: suit, symbol: SUITS_SYMBOLS[suit], value: cardValue});
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

}


let deck = initializeDeck();
console.log(deck);

