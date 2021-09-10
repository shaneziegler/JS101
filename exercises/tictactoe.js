/* eslint-disable max-statements */
/* eslint-disable no-lonely-if */
/* eslint-disable max-lines-per-function */
// JS101
// Lesson 6
// Tic Tac Toe

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MAX_WINS = 5;
const WINNINGLINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];


function displayScoresAndRound(scores) {
  console.log(`Round: ${scores.round}`);
  console.log(`Player ${scores.human}  Computer ${scores.computer}`);
}

function displayBoard(board) {
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function prompt(str) {
  console.log('=> ' + str);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesRandomSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function computerChoosesSquare(board) {
  let possibleWin = findOffensiveMove(board);
  if (possibleWin) {
    board[possibleWin] = COMPUTER_MARKER;
  } else {
    if (findImmediateThreat(board)) {
      board[findImmediateThreat(board)] = COMPUTER_MARKER;
    } else {
      computerChoosesRandomSquare(board);
    }
  }
}

function findImmediateThreat(board) {


  for (let line = 0; line < WINNINGLINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNINGLINES[line];
    let numHumanSpots = 0;
    let numEmptySpots = 0;

    if (board[sq1] === HUMAN_MARKER) numHumanSpots += 1;
    if (board[sq2] === HUMAN_MARKER) numHumanSpots += 1;
    if (board[sq3] === HUMAN_MARKER) numHumanSpots += 1;
    if (board[sq1] === INITIAL_MARKER) numEmptySpots += 1;
    if (board[sq2] === INITIAL_MARKER) numEmptySpots += 1;
    if (board[sq3] === INITIAL_MARKER) numEmptySpots += 1;

    if (numHumanSpots === 2 && numEmptySpots === 1) {
      return WINNINGLINES[line].find(sq => board[sq] === INITIAL_MARKER);
    }
  }
  return null;
}

function findOffensiveMove(board) {
  for (let line = 0; line < WINNINGLINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNINGLINES[line];
    let numComputerSpots = 0;
    let numEmptySpots = 0;

    if (board[sq1] === HUMAN_MARKER) numComputerSpots += 1;
    if (board[sq2] === HUMAN_MARKER) numComputerSpots += 1;
    if (board[sq3] === HUMAN_MARKER) numComputerSpots += 1;
    if (board[sq1] === INITIAL_MARKER) numEmptySpots += 1;
    if (board[sq2] === INITIAL_MARKER) numEmptySpots += 1;
    if (board[sq3] === INITIAL_MARKER) numEmptySpots += 1;

    if (numComputerSpots === 2 && numEmptySpots === 1) {
      return WINNINGLINES[line].find(sq => board[sq] === INITIAL_MARKER);
    }
  }
  return null;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

// at bottom of program

let readline = require('readline-sync');

let scores = initScores();

while (scores.human < MAX_WINS && scores.computer < MAX_WINS) {
  let board = initializeBoard();

  while (true) {
    displayScoresAndRound(scores);
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);

    if (someoneWon(board) || boardFull(board)) break;
  }

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    updateScores(scores, board);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');



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

function resetScores(scores) {
  scores.human = 0;
  scores.computer = 0;
}

function initScores() {
  return {
    human: 0,
    computer: 0,
    round: 1
  };
}

function updateScores(scores, board) {
  if (detectWinner(board) === 'Player') {
    scores.human += 1;
    scores.round += 1;
  } else if (detectWinner(board) === 'Computer') {
    scores.computer += 1;
    scores.round += 1;
  }
}