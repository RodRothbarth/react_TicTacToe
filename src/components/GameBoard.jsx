const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export function GameBoard({ onSelectPlay, turns }) {
  let board = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    board[row][col] = player;
  }
  return (
    <ol id="game-board">
      {board.map((item, indexRow) => (
        <li key={indexRow}>
          <ol>
            {item.map((playerSymbol, indexCol) => (
              <li key={indexCol}>
                <button onClick={() => onSelectPlay(indexRow, indexCol)}>
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
