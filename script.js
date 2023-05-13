const cells = document.querySelectorAll(".cell");
const gameTable = document.querySelector(".gameBoard");
const gameCell = document.querySelector(".cell");

const gameBoard = (() => {
  var Board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const getBoard = () => Board;
  const dropToken = (cellIndex, player) => {
    if (
      Number.isInteger(Board[cellIndex]) &&
      document.getElementById(cellIndex).textContent === ""
    ) {
      Board[cellIndex] = player.Sign;
      document.getElementById(cellIndex).textContent = player.Sign;
      game.switchPlayer();
    }
  };
  return { getBoard, dropToken };
})();

const playerFactory = (Name, Sign) => {
  return { Name, Sign };
};
let Players = [
  {
    Name: "john",
    Sign: "X",
  },
  {
    Name: "jane",
    Sign: "O",
  },
];
const game = (() => {
  let activePlayer = Players[0];
  const switchPlayer = () => {
    activePlayer = activePlayer === Players[0] ? Players[1] : Players[0];
  };
  const getActivePlayer = () => activePlayer;
  const winner = (board, player) => {
    if (
      (board[0] == player && board[1] == player && board[2] == player) ||
      (board[3] == player && board[4] == player && board[5] == player) ||
      (board[6] == player && board[7] == player && board[8] == player) ||
      (board[0] == player && board[3] == player && board[6] == player) ||
      (board[1] == player && board[4] == player && board[7] == player) ||
      (board[2] == player && board[5] == player && board[8] == player) ||
      (board[0] == player && board[4] == player && board[8] == player) ||
      (board[2] == player && board[4] == player && board[6] == player)
    ) {
      return true;
    } else {
      const gameTable = document.querySelector(".gameBoard");
      const gameCell = document.querySelector(".cell");
      return false;
    }
  };
  const renderWinState = (board, player) => {
    if (board[0] === player && board[1] === player && board[2] === player) {
      if (player === Players[1].Sign) {
        cells[0].classList.add("loser");
        cells[1].classList.add("loser");
        cells[2].classList.add("loser");
      } else {
        cells[0].classList.add("winner");
        const gameTable = document.querySelector(".gameBoard");
        const gameCell = document.querySelector(".cell");
        cells[1].classList.add("winner");
        cells[2].classList.add("winner");
      }
    } else if (board[3] == player && board[4] == player && board[5] == player) {
      if (player === Players[1].Sign) {
        cells[3].classList.add("loser");
        cells[4].classList.add("loser");
        cells[5].classList.add("loser");
      } else {
        cells[3].classList.add("winner");
        cells[4].classList.add("winner");
        cells[5].classList.add("winner");
      }
    } else if (board[6] == player && board[7] == player && board[8] == player) {
      if (player === Players[1].Sign) {
        cells[6].classList.add("loser");
        cells[7].classList.add("loser");
        cells[8].classList.add("loser");
      } else {
        cells[6].classList.add("winner");
        cells[7].classList.add("winner");
        cells[8].classList.add("winner");
      }
    } else if (board[0] == player && board[3] == player && board[6] == player) {
      if (player === Players[1].Sign) {
        cells[0].classList.add("loser");
        cells[3].classList.add("loser");
        cells[6].classList.add("loser");
      } else {
        cells[0].classList.add("winner");
        cells[3].classList.add("winner");
        cells[6].classList.add("winner");
      }
    } else if (board[1] == player && board[4] == player && board[7] == player) {
      if (player === Players[1].Sign) {
        cells[1].classList.add("loser");
        cells[4].classList.add("loser");
        cells[7].classList.add("loser");
      } else {
        cells[1].classList.add("winner");
        cells[4].classList.add("winner");
        cells[7].classList.add("winner");
      }
    } else if (board[2] == player && board[5] == player && board[8] == player) {
      if (player === Players[1].Sign) {
        cells[2].classList.add("loser");
        cells[5].classList.add("loser");
        cells[8].classList.add("loser");
      } else {
        cells[2].classList.add("winner");
        cells[5].classList.add("winner");
        cells[8].classList.add("winner");
      }
    } else if (board[0] == player && board[4] == player && board[8] == player) {
      if (player === Players[1].Sign) {
        cells[0].classList.add("loser");
        cells[4].classList.add("loser");
        cells[8].classList.add("loser");
      } else {
        cells[0].classList.add("winner");
        cells[4].classList.add("winner");
        cells[8].classList.add("winner");
      }
    } else if (board[2] == player && board[4] == player && board[6] == player) {
      if (player === Players[1].Sign) {
        cells[2].classList.add("loser");
        cells[4].classList.add("loser");
        cells[6].classList.add("loser");
      } else {
        cells[2].classList.add("winner");
        cells[4].classList.add("winner");
        cells[6].classList.add("winner");
      }
    }
  };
  const stopPlay = () => {
    gameTable.removeEventListener("click", play, false);
  };
  const playRound = (cellIndex) => {
    gameBoard.dropToken(cellIndex, getActivePlayer());
    renderWinState(gameBoard.getBoard(), Players[0].Sign);
    renderWinState(gameBoard.getBoard(), Players[1].Sign);
    let player1win = winner(gameBoard.getBoard(), Players[0].Sign);
    let player2win = winner(gameBoard.getBoard(), Players[1].Sign);

    if (player1win || player2win) stopPlay();
  };
  function play(event) {
    let clickedCell = event.target.closest("td").id;
    let cCell = event.target.closest("td");
    if (game.getActivePlayer() === Players[1]) {
      cCell.classList.add("red");
    } else {
      cCell.classList.add("gold");
    }
    game.playRound(clickedCell);
  }

  return { winner, getActivePlayer, playRound, switchPlayer, play, stopPlay };
})();

gameTable.addEventListener("click", game.play, false);

const multiplayerBtn = document.querySelector("#multiPlayer");
const multiplayerForm = document.querySelector(".doubleFormModal");
const modal2backBtn = multiplayerForm.querySelector(".modalBackButton");
const singlePlayerBtn = document.querySelector("#singlePlayer");
const singlePlayerForm = document.querySelector(".singleFormModal");
const modal1backBtn = singlePlayerForm.querySelector(".modalBackButton");

multiplayerBtn.addEventListener("click", () => {
  multiplayerForm.showModal();
});
modal2backBtn.addEventListener("click", () => {
  multiplayerForm.close();
});
singlePlayerBtn.addEventListener("click", () => {
  singlePlayerForm.showModal();
});
modal1backBtn.addEventListener("click", () => {
  singlePlayerForm.close();
});
