import React from "react";
import ReactDOM from "react-dom";
// @TODO: Move stuff to this
// import App from './App';
// @TODO: Use styled components
import "./index.css";
import calculateWinner from "./win-condition.js";

// @TODO: Move it outta here
const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

// @TODO: Make this a function
// @TODO: Move it outta here
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }
  // We need a handle click yo!
  renderSquare(index) {
    return (
      <Square
        value={this.state.squares[index]}
        onClick={() => this.handleClick(index)}
      />
    );
  }
  handleClick(index) {
    const squares = this.state.squares.slice();
    squares[index] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
      // If we are done and have a winner
      status = `Winner: ${winner}`;
    } else {
      // If we are still playing
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// @TODO: Make this a function
// @TODO: Move it outta here
// @TODO: Determine the game win condition
// @TODO: Make a winner
// @TODO: Implement move history
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
