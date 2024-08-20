import { Player } from "./components/Player.jsx";
import { GameBoard } from "./components/GameBoard.jsx";
import { useState } from "react";
import { Log } from "./components/Log.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function handlePlay(rowN, colN) {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurn) => {
      let currentPlayer = "X";
      if (prevTurn.length > 0 && prevTurn[0].player === "X")
        currentPlayer = "O";
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
