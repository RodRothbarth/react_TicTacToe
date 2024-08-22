import { Player } from "./components/Player.jsx";
import { GameBoard } from "./components/GameBoard.jsx";
import { useState } from "react";
import { Log } from "./components/Log.jsx";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X")
    currentPlayer = "O";

  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

const activePlayer = deriveActivePlayer(gameTurns)

  function handlePlay(rowN, colN) {
    setGameTurns((prevTurn) => {
      let currentPlayer = deriveActivePlayer(prevTurn)
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
            initialName="Player 1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectPlay={handlePlay} turns={gameTurns} />
      </div>
      <Log info={gameTurns} />
    </main>
  );
}

export default App;
