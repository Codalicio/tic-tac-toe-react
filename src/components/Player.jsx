import { useEffect, useState } from "react";

const Player = ({ initialName, symbol, isActive, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  useEffect(() => {
    setPlayerName(initialName);
  }, [initialName]);

  function handleEditClick() {
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        name="playerName"
        id="playerName"
        value={playerName}
        onChange={handleChange}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
