import React from "react";

const color = value => {
  return value === "X" ? "rebeccapurple" : "black";
};

const Square = ({ value, onClick, id }) => (
  <button
    className="square"
    onClick={onClick}
    id={id}
    style={{ color: color(value) }}
  >
    {value}
  </button>
);

export default Square;
