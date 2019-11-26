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

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
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
      <BoardRow>
        <Square id="0" value={squares[0]} onClick={() => handleClick(0)} />
        <Square id="1" value={squares[1]} onClick={() => handleClick(1)} />
        <Square id="2" value={squares[2]} onClick={() => handleClick(2)} />
      </BoardRow>
      <BoardRow>
        <Square id="3" value={squares[3]} onClick={() => handleClick(3)} />
        <Square id="4" value={squares[4]} onClick={() => handleClick(4)} />
        <Square id="5" value={squares[5]} onClick={() => handleClick(5)} />
      </BoardRow>
      <BoardRow>
        <Square id="6" value={squares[6]} onClick={() => handleClick(6)} />
        <Square id="7" value={squares[7]} onClick={() => handleClick(7)} />
        <Square id="8" value={squares[8]} onClick={() => handleClick(8)} />
      </BoardRow>
    </div>
  );
};

export default Board;
