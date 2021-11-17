/* eslint-disable max-statements */
/* eslint-disable no-lonely-if */
/* eslint-disable max-lines-per-function */
// JS101
// Lesson 6
// Tic Tac Toe

var globalMoves = [];

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MIDDLE_SQUARE = 5;
const MAX_WINS = 1;
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
    board[String(square)] = INITIAL_MARKER;  }
  // board['1'] = HUMAN_MARKER;
  // board['2'] = INITIAL_MARKER;
  // board['3'] = INITIAL_MARKER;
  // board['4'] = INITIAL_MARKER;
  // board['5'] = HUMAN_MARKER;
  // board['6'] = INITIAL_MARKER;
  // board['7'] = COMPUTER_MARKER;
  // board['8'] = INITIAL_MARKER;
  // board['9'] = COMPUTER_MARKER;
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
  // debugger;
  board[move.index2] = COMPUTER_MARKER;
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
    // console.clear();
    displayScoresAndRound(scores);
    displayBoard(board);

    chooseSquare(currentPlayer, board);
    if (someoneWon(board) || boardFull(board)) break;
    currentPlayer = switchPlayer(currentPlayer);
  }

  // console.clear();
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

  // let player;
  let moves = [];
  // if (maximizingPlayer) {
  //   player = COMPUTER_MARKER;
  // } else {
  //   player = HUMAN_MARKER;
  // }

  for (let i = 0; i < movesRemaining.length; i++) {
    let currentMove = {};

    //! needs better naming
    currentMove.index = board[movesRemaining[i]];
    currentMove.index2 = movesRemaining[i];

    if (maximizingPlayer) {
      board[movesRemaining[i]] = COMPUTER_MARKER;
    } else {
      board[movesRemaining[i]] = HUMAN_MARKER;
    }

    //! Combine into 1
    if (maximizingPlayer) {
      let result = minimax(board, depth + 1, false);
      currentMove.score = result.score;
    } else {
      let result = minimax(board, depth + 1, true);
      currentMove.score = result.score;
    }

    board[movesRemaining[i]] = currentMove.index;

    moves.push(currentMove);
  }

  let bestMove;
  if (maximizingPlayer) {
    let bestScore = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = Number.POSITIVE_INFINITY;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}

  // let bestScore = {};
  // let score;

  // if (maximizingPlayer) {
  //   bestScore = Number.NEGATIVE_INFINITY;

  //   for (let i = 0; i < movesRemaining.length; i++) {
  //     let emptySquare = movesRemaining[i];
  //     let childBoard = Object.assign({}, board);
  //     childBoard[emptySquare] = COMPUTER_MARKER;
  //     score = minimax(childBoard, depth + 1, false);
  //     bestScore = Math.max(bestScore, score);

  //     let tempobj = {
  //       move: emptySquare,
  //       depth: depth,
  //       score: score,
  //       maximizingPlayer: maximizingPlayer,
  //       bestScore: bestScore
  //     };
  //     globalMoves.push(tempobj);

  //   }
  //   return bestScore;
  // } else {
  //   bestScore = Number.POSITIVE_INFINITY;

  //   for (let i = 0; i < movesRemaining.length; i++) {
  //     let emptySquare = movesRemaining[i];
  //     let childBoard = Object.assign({}, board);
  //     childBoard[emptySquare] = HUMAN_MARKER;
  //     score = minimax(childBoard, depth + 1, true);
  //     bestScore = Math.max(bestScore, score);

  //     let tempobj = {
  //       move: emptySquare,
  //       depth: depth,
  //       score: score,
  //       maximizingPlayer: maximizingPlayer,
  //       bestScore: bestScore
  //     };
  //     globalMoves.push(tempobj);

  //   }
  //   return bestScore;
  // }
// }


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

function displayBoard2(board) {
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