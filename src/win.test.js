// This is our test file for winglobal.fetch = require('node-fetch');
// Get wallaby working with a failing test
// A failing test proves that your test harness
// is even DOING THE THING

// Then happy path a "win"

// Happy path a not-win

// More...?
const win = require("./win");

test("using a string wont win", () => {
  // We would expect win to require an array
  // (Like our squares)

  // Arrange
  const arg = "";
  const expected = false;
  // Act
  const actual = win(arg);
  // assert
  expect(actual).toEqual(expected);
});

// Something to definitely not win
test("The initial gameplay wont win", () => {
  // Arrange
  const squares = Array(9).fill(null);
  // Act
  const actual = win(squares);
  const expected = false;
  // Assert
  expect(actual).toEqual(expected);
});

// We would expect something to win

test("A line of null across the top should not win", () => {
  // Arrange
  const squares = Array(9).fill(null);
  /**
  [][][]
  [X][][X]
  [][][O]
 */
  squares[3] = "X";
  squares[5] = "X";
  squares[8] = "O";
  const expected = false;
  // Act
  const actual = win(squares);

  // Assert
  expect(actual).toEqual(expected);
});
test("A line of X across the top should win", () => {
  //  Arrange
  /**
  [x][x][O]
  [][o][]
  [][][o]
  */
  const squares = Array(9).fill(null);
  squares[0] = "X";
  squares[1] = "X";
  squares[2] = "X";
  squares[4] = "O";
  squares[8] = "O";
  const expected = true;
  // Act
  const actual = win(squares);
  // assert
  expect(actual).toEqual(expected);
});

test("A line of O across the top should win", () => {
  /**
  [o][o][o]
  [][x][x]
  [][x][]
 */

  const squares = Array(9).fill(null);
  squares[0] = "O";
  squares[1] = "O";
  squares[2] = "O";
  squares[4] = "X";
  squares[8] = "O";
  const expected = true;
  // Act
  const actual = win(squares);
  // assert
  expect(actual).toEqual(expected);
});

// Second row should win

// Third row should win

//  columns should win, too

// And a diagonal, bi-directional to win
