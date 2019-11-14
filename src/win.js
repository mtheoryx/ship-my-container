const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const win = theSquid => {
  // theSquid is an array of arrays of values
  /**
    [0][1][2][3][4][5][6][7][8]
   */
  /**
    [0][1][2]
    [3][4][5]
    [6][7][8]
   */
  if (typeof theSquid !== "object") {
    return false;
  }
  if (theSquid.filter(squid => squid !== null).length === 0) {
    return false;
  }
  // Top row
  const topRow = theSquid.slice(0, 3);
  const topRowNotNull = topRow.filter(item => item !== null);
  if (topRowNotNull.length === 0) {
    return false;
  }
  // Okay, we have some top row, are they all the same?
  // Loop through each item, are they all the same?
  return topRow.every((item, index, array) => {
    return item === array[0];
  });

  return true;
};

module.exports = win;
