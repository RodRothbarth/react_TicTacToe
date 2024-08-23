import { Player } from "./components/Player.jsx";
import { GameBoard } from "./components/GameBoard.jsx";
import { useState } from "react";
import { Log } from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import { Winner } from "./components/Winner.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") currentPlayer = "O";
  return currentPlayer;
}

function derivedWinner(board, playerName) {
  let winner = null;

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquare = board[combinations[0].row][combinations[0].column];
    const secondSquare = board[combinations[1].row][combinations[1].column];
    const thirdSquare = board[combinations[2].row][combinations[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = playerName[firstSquare];
    }
  }
  return winner;
}

function derivedBoard(gameTurns) {
  let board = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    board[row][col] = player;
  }
  return board;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurns);

  const board = derivedBoard(gameTurns);
  const winner = derivedWinner(board, playerName);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerName(symbol, name) {
    setPlayerName((prevState) => {
      return { ...prevState, [symbol]: [name] };
    });
  }

  function handlePlay(rowN, colN) {
    setGameTurns((prevTurn) => {
      let currentPlayer = deriveActivePlayer(prevTurn);
      return [
        { square: { row: rowN, col: colN }, player: currentPlayer },
        ...prevTurn,
      ];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            playerSymbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerName}
          />
          <Player
            initialName={PLAYERS.O}
            playerSymbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <Winner winner={winner} onRematch={handleRematch} />
        )}
        <GameBoard onSelectPlay={handlePlay} board={board} />
      </div>
      <Log info={gameTurns} />
    </main>
  );
}

export default App;
