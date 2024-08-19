import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export function GameBoard() {
  const [board, setBoard] = useState(initialGameBoard);

  function handlePlay(rowIndex, colIndex) {
    setBoard((prev) => {
      const play = [...prev.map((item) => [...item])];
      play[rowIndex][colIndex] = "X";
      return play;
    });
  }
  return (
    <ol id="game-board">
      {board.map((item, indexRow) => (
        <li key={indexRow}>
          <ol>
            {item.map((playerSymbol, indexCol) => (
              <li key={indexCol}>
                <button onClick={() => handlePlay(indexRow, indexCol)}>
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
