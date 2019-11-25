import React from "react";
import Board from "./Board";
// @TODO: Implement move history
const Game = () => (
  <>
    <div>
      <Board />
    </div>
    <div className="game-info">
      <p>Game Info</p>
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </>
);

export default Game;
