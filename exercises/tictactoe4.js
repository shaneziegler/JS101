/* eslint-disable max-statements */
/* eslint-disable no-lonely-if */
/* eslint-disable max-lines-per-function */
// JS101
// Lesson 6
// Tic Tac Toe - Bonus Features
// Minimax Algorithm

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MAX_WINS = 3;
const WINNINGLINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
const FIRST_MOVE = "Computer"; // "Player" or "Computer"
const VALID_YES_NO = ['y', 'n', 'yes', 'no'];
const VALID_YES = ['y', 'yes'];
const VALID_NO = ['n', 'no'];
const readline = require('readline-sync');


function displayScoresAndRound(scores) {
  console.log(`Round: ${scores.round}`);
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

function computerChoosesSquare(board) {
  let move = minimax(board, 0, true);
  board[move.boardSpot] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNINGLINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNINGLINES[line];

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
  scores.round += 1;
  if (detectWinner(board) === 'Player') {
    scores.human += 1;
  } else if (detectWinner(board) === 'Computer') {
    scores.computer += 1;
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
  return player === 'Player' ? 'Computer' : 'Player';
}

function getRemainingEmptySpots(board) {
  let emptySpots = [];
  for (let spot in board) {
    if (board[spot] === INITIAL_MARKER) {
      emptySpots.push(spot);
    }
  }
  return emptySpots;
}

function minimax(board, depth, maximizingPlayer) {
  if (someoneWon(board) || boardFull(board)) {
    return {score: minimaxMoveScore(board, depth)};
  }

  let movesRemaining = getRemainingEmptySpots(board);
  let moves = [];

  for (let idx = 0; idx < movesRemaining.length; idx++) {
    let currentMove = {
      boardSpot: undefined,
      score: undefined
    };

    currentMove.boardSpot = movesRemaining[idx];

    if (maximizingPlayer) {
      board[movesRemaining[idx]] = COMPUTER_MARKER;
    } else {
      board[movesRemaining[idx]] = HUMAN_MARKER;
    }

    let result = minimax(board, depth + 1, !maximizingPlayer);
    currentMove.score = result.score;
    board[movesRemaining[idx]] = INITIAL_MARKER;
    moves.push(currentMove);
  }

  let bestMove;
  if (maximizingPlayer) {
    let bestScore = Number.NEGATIVE_INFINITY;
    for (let idx = 0; idx < moves.length; idx++) {
      if (moves[idx].score > bestScore) {
        bestScore = moves[idx].score;
        bestMove = idx;
      }
    }
  } else {
    let bestScore = Number.POSITIVE_INFINITY;
    for (let idx = 0; idx < moves.length; idx++) {
      if (moves[idx].score < bestScore) {
        bestScore = moves[idx].score;
        bestMove = idx;
      }
    }
  }

  return moves[bestMove];
}


function minimaxMoveScore(board, depth) {
  if (someoneWon(board)) {
    if (detectWinner(board) === 'Computer') {
      return 10 - depth;
    } else {
      return depth - 10;
    }
  } else {
    return 0;
  }
}

// Start of main program loop

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

