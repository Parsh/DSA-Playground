/**
 * Problem Statement:
 * You are given a 2D matrix containing only 1s (land) and 0s (water).
 * An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water).
 * Each cell is considered connected to other cells horizontally or vertically (not diagonally).
 * A closed island is an island that is totally surrounded by 0s (i.e., water). This means all
 * horizontally and vertically connected cells of a closed island are water. This also means that,
 * by definition, a closed island can't touch an edge (as then the edge cells are not connected to any water cell).
 *
 * Write a function to find the number of closed islands in the given matrix.
 */

const visitIslandBFS = (matrix, node) => {
  const neighbours = [node];
  let isClosed = true;
  while (neighbours.length) {
    const node = neighbours.shift();
    const [row, col] = node;

    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) {
      isClosed = false;
      continue;
    }

    if (matrix[row][col] === 0) continue;

    matrix[row][col] = 0;

    neighbours.push([row + 1, col]);
    neighbours.push([row - 1, col]);
    neighbours.push([row, col + 1]);
    neighbours.push([row, col - 1]);
  }
  return isClosed;
};

const visitIslandDFS = (matrix, node) => {
  const [row, col] = node;

  if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
    return false;
  if (matrix[row][col] === 0) return true;

  matrix[row][col] = 0;
  return (
    visitIslandDFS(matrix, [row + 1, col]) &&
    visitIslandDFS(matrix, [row - 1, col]) &&
    visitIslandDFS(matrix, [row, col + 1]) &&
    visitIslandDFS(matrix, [row, col - 1])
  );
};

const findCloseIslands = (matrix) => {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let closeIslands = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        if (visitIslandDFS(matrix, [i, j])) closeIslands++;
      }
    }
  }

  return closeIslands;
};

// SMOKE TEST
// console.log(
//   findCloseIslands([
//     [1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0],
//     [0, 0, 1, 1, 0],
//     [0, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0],
//   ])
// );

// console.log(
//   findCloseIslands([
//     [0, 0, 0, 0],
//     [0, 1, 0, 0],
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 0],
//   ])
// );
