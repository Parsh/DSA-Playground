/**
 * Problem Statement:
 * Any image can be represented by a 2D integer array (i.e., a matrix) where each cell represents the pixel value of the image.
 * Flood fill algorithm takes a starting cell (i.e., a pixel) and a color.
 * The given color is applied to all horizontally and vertically connected cells with the same color as that of the starting cell.
 * Recursively, the algorithm fills cells with the new color until it encounters a cell with a different color than the starting cell.
 *
 * Given a matrix, a starting cell, and a color, flood fill the matrix.
 */

const floodFillBFS = (matrix, node, color) => {
  const neighbours = [node];
  while (neighbours.length) {
    const node = neighbours.shift();
    const [row, col] = node;

    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
      continue;
    if (matrix[row][col] !== 1) continue;

    matrix[row][col] = color;

    neighbours.push([row + 1, col]);
    neighbours.push([row - 1, col]);
    neighbours.push([row, col + 1]);
    neighbours.push([row, col - 1]);
  }
  return matrix;
};

const floodFillDFS = (matrix, node, color) => {
  const [row, col] = node;

  if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
    return;
  if (matrix[row][col] !== 1) return;

  matrix[row][col] = color;
  floodFillDFS(matrix, [row + 1, col], color);
  floodFillDFS(matrix, [row - 1, col], color);
  floodFillDFS(matrix, [row, col + 1], color);
  floodFillDFS(matrix, [row, col - 1], color);
  return matrix;
};

// SMOKE TEST
// console.log(
//   floodFillBFS(
//     [
//       [0, 1, 1, 1, 0],
//       [0, 0, 0, 1, 1],
//       [0, 1, 1, 1, 0],
//       [0, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0],
//     ],
//     [1, 3],
//     2
//   )
// );

// console.log(
//   floodFillDFS(
//     [
//       [0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 0],
//       [0, 0, 1, 0, 0],
//       [0, 0, 1, 0, 0],
//     ],
//     [3, 2],
//     5
//   )
// );
