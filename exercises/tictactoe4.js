// JS101
// Lesson 6
// Tic Tac Toe - Bonus Features
// Minimax Algorithm

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MAX_WINS = 2;
const WINNINGLINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
const FIRST_MOVE = "Player"; // "Player" or "Computer"
const VALID_YES_NO = ['y', 'n', 'yes', 'no'];
const VALID_QUIT = ['q', 'quit'];
const VALID_NO = ['n', 'no'];
const readline = require('readline-sync');


function displayScoresAndRound(scores) {
  console.log(`Round: ${scores.round}`);
  console.log(`Scores: Player has ${scores.human} wins - Computer has ${scores.computer} wins`);
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

    if (board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if ( board[sq1] === COMPUTER_MARKER &&
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


function minimax(board, depth, maximizingPlayer) {
  if (someoneWon(board) || boardFull(board)) {
    return {score: minimaxMoveScore(board, depth)};
  }

  let movesRemaining = getRemainingEmptySpots(board);
  let moves = [];

  for (let idx = 0; idx < movesRemaining.length; idx++) {
    let currentMove = {};

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

function minimaxGetBestMove(maximizingPlayer, moves) {
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
  return bestMove;
}

function refreshScreen(scores, board) {
  console.clear();
  displayScoresAndRound(scores);
  displayBoard(board);
}


function playRound(currentPlayer, board, scores) {
  while (true) {
    refreshScreen(scores, board);
    chooseSquare(currentPlayer, board);

    if (someoneWon(board)) {
      refreshScreen(scores, board);
      console.log(`*** ${detectWinner(board)} won this round! ***\n`);
    } else if (boardFull(board)) {
      refreshScreen(scores, board);
      console.log("*** This round ends in a tie! ***\n");
    }

    if (someoneWon(board) || boardFull(board)) {
      updateScores(scores, board);
      break;
    }

    currentPlayer = switchPlayer(currentPlayer);
  }
}


function playGame(currentPlayer) {
  let scores = initScores();

  while (scores.human < MAX_WINS && scores.computer < MAX_WINS) {
    let board = initializeBoard();

    playRound(currentPlayer, board, scores);

    if (!(scores.computer < MAX_WINS && scores.human < MAX_WINS)) {
      if (scores.player === MAX_WINS) {
        console.log(`*** YOU WON THE GAME!!! ***\n`);
      } else {
        console.log(`*** THE COMPUTER WON THE GAME!!! ***\n`);
      }
    } else {
      let nextRound = readline.question('HIT ENTER/RETURN TO BEGIN NEXT ROUND or ENTER Q TO QUIT CURRENT GAME: ').toLowerCase().trim();
      if (VALID_QUIT.includes(nextRound)) break;
    }
    currentPlayer = switchPlayer(currentPlayer);
  }
}

// Start of main game play loop

while (true) {
  let currentPlayer = FIRST_MOVE;
  playGame(currentPlayer);

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
prompt('Thanks for playing Tic Tac Toe!');