/**
 * Problem Statement:
 * Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water), find the biggest island in it. Write a function to return the area of the biggest island.
 * An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other cells horizontally or vertically (not diagonally).
 */

const visitIslandBFS = (matrix, node) => {
  const neighbours = [node];
  let area = 0;
  while (neighbours.length) {
    const node = neighbours.shift();
    const [row, col] = node;

    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
      continue;

    if (matrix[row][col] === 0) continue;

    matrix[row][col] = 0;
    area++;

    neighbours.push([row + 1, col]);
    neighbours.push([row - 1, col]);
    neighbours.push([row, col + 1]);
    neighbours.push([row, col - 1]);
  }
  return area;
};

const visitIslandDFS = (matrix, node) => {
  const [row, col] = node;

  if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
    return 0;
  if (matrix[row][col] === 0) return 0;

  matrix[row][col] = 0;
  area = 1;
  area += visitIslandDFS(matrix, [row + 1, col]);
  area += visitIslandDFS(matrix, [row - 1, col]);
  area += visitIslandDFS(matrix, [row, col + 1]);
  area += visitIslandDFS(matrix, [row, col - 1]);
  return area;
};

const findBiggestIsland = (matrix) => {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let maxArea = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        maxArea = Math.max(maxArea, visitIslandDFS(matrix, [i, j]));
      }
    }
  }

  return maxArea;
};

// SMOKE TEST
// const matrix = [
//   [1, 1, 1, 0, 0],
//   [0, 1, 0, 0, 1],
//   [0, 0, 1, 1, 0],
//   [0, 1, 1, 0, 0],
//   [0, 0, 1, 0, 0],
// ];
// console.log(findBiggestIsland(matrix));
