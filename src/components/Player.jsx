import { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((prevState) => !prevState);
  }

  let editablePlayerName = <span className="player-name">{initialName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        name="playerName"
        id="playerName"
        value={initialName}
        required
      />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
