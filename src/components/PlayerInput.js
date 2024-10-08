import React, { useState } from "react";
import "../App.css";

const PlayerInput = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className="player-input">
      <h1> ✨ Enter your name to join the game ✨</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit"> 🎮 Join Game 🎮</button>
      </form>
    </div>
  );
};

export default PlayerInput;
