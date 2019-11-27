import React, { useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import calculateWinner from "./win-condition";

const Winner = ({ squares }) => {
  const hasWinner = calculateWinner(squares);
  return hasWinner && <div id="winner">Winner: {hasWinner}</div>;
};

const VerticalSection = styled.div`
  margin-bottom: 10px;
`;

const PlayingArea = styled.div`
  display: grid;
  width: calc(34px * 3);
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
`;

const Board = () => {
  // Do state stuff here
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = index => {
    const myVal = xIsNext ? "X" : "O";

    // get all the squares
    const theSquares = [...squares];
    // Find our square
    // Change it
    theSquares[index] = myVal;

    // set them back
    setSquares(theSquares);

    // Well we know who went last... flip it?
    setXIsNext(!xIsNext);
  };

  return (
    <div id="game-board">
      <VerticalSection>
        <Winner squares={squares} />
      </VerticalSection>
      <VerticalSection id="turn-order">
        Next Player: {xIsNext ? "X" : "O"}
      </VerticalSection>
      <PlayingArea>
        {squares.map((square, index) => (
          <Square
            id={index}
            value={square}
            onClick={() => handleClick(index)}
          />
        ))}
      </PlayingArea>
    </div>
  );
};

export default Board;
