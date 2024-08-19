import { Player } from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" playerSymbol="X" />
          <Player initialName="Player 2" playerSymbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
