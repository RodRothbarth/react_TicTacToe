export function Winner({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>Winner is {winner} !</p> : <p>Draw !</p>}
      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
}
