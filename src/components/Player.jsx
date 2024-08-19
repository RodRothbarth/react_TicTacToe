import { useState } from "react";

export function Player({ playerName, playerSymbol }) {
  const [isEdit, setIsEdit] = useState(false);
  function editHandler() {
    setIsEdit(!isEdit);
  }

  let playerNameEdit = <span className="player-name">{playerName}</span>;

  if (isEdit) playerNameEdit = <input type="text" required />;

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
