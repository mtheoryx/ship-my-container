import React from "react";
import styled from "styled-components";

const xcolor = value => (value === "X" ? "rebeccapurple" : "black");

const SquareStyle = styled.button`
  color: ${props => xcolor(props.value)};
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  &:focus {
    outline: none;
    background: #ddd;
  }
`;

const Square = ({ value, onClick, id }) => (
  <SquareStyle onClick={onClick} id={id} value={value}>
    {value}
  </SquareStyle>
);

export default Square;
