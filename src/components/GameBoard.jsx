export function GameBoard({ onSelectPlay, board }) {
  return (
    <ol id="game-board">
      {board.map((item, indexRow) => (
        <li key={indexRow}>
          <ol>
            {item.map((playerSymbol, indexCol) => (
              <li key={indexCol}>
                <button
                  onClick={() => onSelectPlay(indexRow, indexCol)}
                  disabled={playerSymbol}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
