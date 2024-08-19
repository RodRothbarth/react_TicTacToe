import { useState } from "react";

export function Player({ initialName, playerSymbol }) {
  const [isEdit, setIsEdit] = useState(false);
  const [player, setPlayer] = useState(initialName);
  function editHandler() {
    setIsEdit((prevState) => !prevState);
  }

  function chanceHandler(event) {
    setPlayer(event.target.value);
  }

  let playerNameEdit = <span className="player-name">{player}</span>;

  if (isEdit)
    playerNameEdit = (
      <input type="text" required value={player} onChange={chanceHandler} />
    );

  return (
    <li>
      <span className="player">
        {playerNameEdit}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={editHandler}> {isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
