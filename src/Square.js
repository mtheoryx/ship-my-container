// @TODO: Move it outta here
import React from "react";
const Square = ({ value, onClick, id }) => (
  <button className="square" onClick={onClick} id={id}>
    {value}
  </button>
);
export default Square;
