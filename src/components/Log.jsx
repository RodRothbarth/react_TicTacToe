export function Log({ info }) {
  return (
    <ol id="log">
      {info.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Player {turn.player === "X" ? 1 : 2} selected {turn.square.row},{" "}
          {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
