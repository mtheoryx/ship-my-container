import React from "react";
import { createGlobalStyle } from "styled-components";
import Board from "./Board";
// @TODO: Implement move history

const GlobalStyle = createGlobalStyle`
  body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }
`;

const Game = () => (
  <>
    <GlobalStyle />
    <Board />
  </>
);

export default Game;
