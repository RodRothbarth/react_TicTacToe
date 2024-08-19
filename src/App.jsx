import { Player } from "./components/Player.jsx";
import { GameBoard } from "./components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" playerSymbol="X" />
          <Player initialName="Player 2" playerSymbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
