/* eslint-disable max-statements */
/* eslint-disable no-lonely-if */
/* eslint-disable max-lines-per-function */
// JS101
// Lesson 6
// Tic Tac Toe

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MIDDLE_SQUARE = 5;
const MAX_WINS = 5;
const WINNINGLINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
const FIRST_MOVE = "Player"; // "Player", "Computer", or "Choose"
const VALID_YES_NO = ['y', 'n', 'yes', 'no'];
const VALID_YES = ['y', 'yes'];
const VALID_NO = ['n', 'no'];
const readline = require('readline-sync');


function displayScoresAndRound(scores) {
  console.log(`Round: ${scores.round}`);
  // console.log('SCORE');
  console.log(`Scores: Player ${scores.human} wins - Computer ${scores.computer} wins`);
  console.log(`The game continues until either have ${MAX_WINS} wins.`);
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
  let possibleWinSquare = findOffensiveMove(board);
  if (possibleWinSquare) {
    board[possibleWinSquare] = COMPUTER_MARKER;
  } else {
    let immediateThreatSquare = findImmediateThreat(board);
    if (immediateThreatSquare) {
      board[immediateThreatSquare] = COMPUTER_MARKER;
    } else if (board[MIDDLE_SQUARE] === INITIAL_MARKER) {
      board[MIDDLE_SQUARE] = COMPUTER_MARKER;
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
  } else {
    scores.round += 1;
  }
}

function chooseSquare(player, board) {
  if (player === 'Player') {
    playerChoosesSquare(board);
  } else if (player === 'Computer') {
    computerChoosesSquare(board);
  }
}

function switchPlayer(player) {
  return (player === 'Player' ? player = 'Computer' : player = 'Player');
}

// at bottom of program

let scores = initScores();

while (scores.human < MAX_WINS && scores.computer < MAX_WINS) {
  let board = initializeBoard();
  let currentPlayer = FIRST_MOVE;

  while (true) {
    console.clear();
    displayScoresAndRound(scores);
    displayBoard(board);

    chooseSquare(currentPlayer, board);
    if (someoneWon(board) || boardFull(board)) break;
    currentPlayer = switchPlayer(currentPlayer);
  }

  console.clear();
  displayScoresAndRound(scores);
  displayBoard(board);

  if (someoneWon(board)) {
    console.log(`*** ${detectWinner(board)} won this round! ***\n`);
    updateScores(scores, board);
    readline.question('HIT ENTER TO BEGIN NEXT ROUND');
  } else {
    console.log("*** This round ends in a tie! ***\n");
    updateScores(scores, board);
    readline.question('HIT ENTER TO BEGIN NEXT ROUND');
  }

  if (!(scores.computer < 5 && scores.human < 5)) {
    let playAgainAnswer;

    do {
      prompt('Play again? (y or n)');
      playAgainAnswer = readline.question().toLowerCase().trim();

      if (!VALID_YES_NO.includes(playAgainAnswer)) {
        console.log('That is not a valid response, please try again...');
      }
    } while (!VALID_YES_NO.includes(playAgainAnswer));

    if (VALID_NO.includes(playAgainAnswer)) break;
  }
}

prompt('Thanks for playing Tic Tac Toe!');