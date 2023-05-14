const landingSection = document.querySelector(".landingSection");
const gameSection = document.querySelector(".gameSectionWrapper");
const replayBtn = document.querySelector("#replay");

const cells = document.querySelectorAll(".cell");
const gameTable = document.querySelector(".gameBoard");
const gameCell = document.querySelector(".cell");
const singlePlayerNameInput = document.querySelector("#playerName");
const multiplayer1NameInput = document.querySelector("#player1");
const multiplayer2NameInput = document.querySelector("#player2");
const Player1Display = document.querySelector(".playerOneName");
const Player2Display = document.querySelector(".playerTwoName");
const player1div = document.querySelector(".playerOne");
const player2div = document.querySelector(".playerTwo");

const gameBoard = (() => {
  var Board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const getBoard = () => Board;
  const dropToken = (cellIndex, player) => {
    if (
      Number.isInteger(Board[cellIndex]) &&
      document.getElementById(cellIndex).textContent === ""
    ) {
      Board[cellIndex] = player.Sign;
      document.getElementById(cellIndex).textContent = player.Sign;
      game.switchPlayer();
      game.showTurn();
    }
  };
  const reset = () => {
    cells.forEach((cell) => {
      cell.textContent = "";
    });
    Board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  };
  return { getBoard, dropToken, reset };
})();

const playerFactory = (Name, Sign) => {
  return { Name, Sign };
};

const game = (() => {
  let Players = [];
  let activePlayer;
  const setMultiplayerMode = (player1, player2) => {
    if (player1 !== "" && player2 !== "") {
      Players[0] = playerFactory(player1, "X");
      Players[1] = playerFactory(player2, "O");
      activePlayer = Players[0];
      Player1Display.textContent = Players[0].Name;
      Player2Display.textContent = Players[1].Name;
    }
  };
  const setSingleMode = (player1) => {
    if (player1 !== "") {
      Players[0] = playerFactory(player1, "X");
      Players[1] = playerFactory("computer", "O");
      activePlayer = Players[0];
      Player1Display.textContent = Players[0].Name;
      Player2Display.textContent = "__bot__";
    }
  };

  const switchPlayer = () => {
    activePlayer = activePlayer === Players[0] ? Players[1] : Players[0];
    showTurn();
  };
  const getActivePlayer = () => activePlayer;

  const showTurn = () => {
    if (activePlayer === Players[0]) {
      player1div.classList.add("turn");
      player2div.classList.remove("turn");
    } else {
      player1div.classList.remove("turn");
      player2div.classList.add("turn");
    }
  };

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
    player1div.classList.remove("turn");
    player2div.classList.remove("turn");
  };
  const playRound = (cellIndex) => {
    gameBoard.dropToken(cellIndex, getActivePlayer());
    renderWinState(gameBoard.getBoard(), Players[0].Sign);
    renderWinState(gameBoard.getBoard(), Players[1].Sign);
    let player1win = winner(gameBoard.getBoard(), Players[0].Sign);
    let player2win = winner(gameBoard.getBoard(), Players[1].Sign);

    if (player1win) {
      stopPlay();
      setTimeout(() => {
        gameTable.classList.add("won");
        replayBtn.style.display = "inline";
      }, 1000);
    } else if (player2win) {
      stopPlay();
      setTimeout(() => {
        gameTable.classList.add("lose");
        replayBtn.style.display = "inline";
      }, 1000);
    } else if (AI.getEmptyCell(gameBoard.getBoard()).length === 0) {
      stopPlay();
      setTimeout(() => {
        gameTable.classList.add("tie");
        replayBtn.style.display = "inline";
      }, 100);
    }
  };
  function play(event) {
    let clickedCell = event.target.closest("td").id;
    let cCell = event.target.closest("td");
    if (game.getActivePlayer() === Players[1]) {
      cCell.classList.add("red");
    } else {
      cCell.classList.add("gold");
    }

    playRound(clickedCell);
    if (Players[1].Name === "computer") {
      gameTable.removeEventListener("click", play, false);
      setTimeout(() => {
        playRound(AI.lazyAI());
        gameTable.addEventListener("click", game.play, false);
      }, 1000);
    }
  }
  const reset = () => {
    Players = [];
    activePlayer = Players[0];
    cells.forEach((cell) => {
      cell.classList.remove("winner");
      cell.classList.remove("gold");
      cell.classList.remove("red");
      cell.classList.remove("loser");
    });
    gameTable.classList.remove("won");
    gameTable.classList.remove("lose");
    gameTable.classList.remove("tie");
    gameTable.addEventListener("click", game.play, false);
    gameBoard.reset();
    showTurn();
    replayBtn.style.display = "none";
  };
  const replay = () => {
    activePlayer = Players[0];
    cells.forEach((cell) => {
      cell.classList.remove("winner");
      cell.classList.remove("gold");
      cell.classList.remove("red");
      cell.classList.remove("loser");
    });
    gameTable.classList.remove("won");
    gameTable.classList.remove("lose");
    gameTable.classList.remove("tie");
    gameTable.addEventListener("click", game.play, false);
    gameBoard.reset();
    showTurn();
    replayBtn.style.display = "none";
  };

  return {
    getActivePlayer,
    switchPlayer,
    winner,
    play,
    setMultiplayerMode,
    showTurn,
    reset,
    replay,
    setSingleMode,
  };
})();

gameTable.addEventListener("click", game.play, false);

replayBtn.addEventListener("click", () => {
  game.replay();
});

const multiplayerBtn = document.querySelector("#multiPlayer");
const multiplayerForm = document.querySelector(".doubleFormModal");
const modal2backBtn = multiplayerForm.querySelector(".modalBackButton");
const singlePlayerBtn = document.querySelector("#singlePlayer");
const singlePlayerForm = document.querySelector(".singleFormModal");
const modal1backBtn = singlePlayerForm.querySelector(".modalBackButton");
const singleModeEnter = singlePlayerForm.querySelector("#sModeEnterBtn");
const multiplayerModeEnter = multiplayerForm.querySelector("#mModeEnterBtn");
const gameBackBtn = document.querySelector(".gameBackButton");

const botBackBtn = document.querySelector(".botBackButton");
const botSection = document.querySelector(".botSection");
const easyBotMode = document.querySelector(".easyBot");
const difficultBotMode = document.querySelector(".difficultBot");

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

multiplayerModeEnter.addEventListener("click", () => {
  game.setMultiplayerMode(
    multiplayer1NameInput.value,
    multiplayer2NameInput.value
  );
  landingSection.style.display = "none";
  gameSection.style.display = "block";
});

gameBackBtn.addEventListener("click", () => {
  landingSection.style.display = "flex";
  gameSection.style.display = "none";
  game.reset();
});
singleModeEnter.addEventListener("click", () => {
  game.setSingleMode(singlePlayerNameInput.value);
  landingSection.style.display = "none";
  gameSection.style.display = "block";
});
/*botBackBtn.addEventListener("click", () => {
  botSection.close();
});
easyBotMode.addEventListener("click", () => {
  botSection.close();
  landingSection.style.display = "none";
  gameSection.style.display = "block";
});
difficultBotMode.addEventListener("click", () => {
  botSection.close();
  landingSection.style.display = "none";
  gameSection.style.display = "block";
});*/

game.showTurn();

/****************
 *******************
 *   AI
 * *****************
 * ****************/

const AI = (() => {
  const getEmptyCell = (board) => {
    return board.filter((cell) => cell != "X" && cell != "O");
  };

  const lazyAI = () => {
    let emptyCell = getEmptyCell(gameBoard.getBoard());
    var lazyMove;
    let random = Math.ceil(Math.random() * 100);
    console.log(random);
    if (random < 51) {
      lazyMove = emptyCell[0];
    } else {
      lazyMove = emptyCell[emptyCell.length - 1];
    }
    console.log(emptyCell);
    return lazyMove;
  };
  let emptyCell = getEmptyCell(gameBoard.getBoard());
  /*
  const smartAI = (board, player) => {
    if (game.winner(board, game.Players[0].Sign)) {
      return { score: -10 };
    } else if (game.winner(board, game.Players[1].Sign)) {
      return { score: 10 };
    } else if (emptyCell.length === 0) {
      return { score: 0 };
    }

    let choices = [];
    for (let i = 0; i < emptyCell.length; i++) {
      let choice = {};
      choice.index = board[emptyCell[i]];
      board[emptyCell[i]] = player;
      if (player === game.Players[1].Sign) {
        let result = smartAI(board, game.Players[0].Sign);
        choice.score = result.score;
      } else {
        let result = smartAI(board, game.Players[1].Sign);
        choice.score = result.score;
      }
      board[emptyCell[i]] = choice.index;
      choices.push(choice);
    }
    let bestChoice;
    if (player === game.Players[1].Sign) {
      let bestScore = -100000;
      for (let i = 0; i < choices.length; i++) {
        if (choices[i].score > bestScore) {
          bestScore = choices[i].score;
          bestChoice = i;
        }
      }
    } else {
      let bestScore = 100000;
      for (let i = 0; i < choices.length; i++) {
        if (choices[i].score < bestScore) {
          bestScore = choices[i].score;
          bestChoice = i;
        }
      }
    }
    return choices[bestChoice];
  };*/
  return { getEmptyCell, lazyAI };
})();
