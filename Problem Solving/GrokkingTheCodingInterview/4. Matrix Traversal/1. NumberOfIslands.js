/**
 * Problem Solving:
 * Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water), count the number of islands in it.
 * An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water).
 * Each cell is considered connected to other cells horizontally or vertically (not diagonally).
 */

const visitIslandBFS = (matrix, node) => {
  const neighbours = [node]; // queue
  while (neighbours.length > 0) {
    const node = neighbours.shift();
    const [row, col] = node;

    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
      continue; // continue; out of bounds(invalid cell)
    if (matrix[row][col] === 0) continue; // continue; found water cell

    matrix[row][col] = 0; // found land cell; turn the land cell into water cell

    // insert all neighboring cells to the queue for traversal
    neighbours.push([row - 1, col]); // upper cell
    neighbours.push([row + 1, col]); // lower cell
    neighbours.push([row, col + 1]); // right cell
    neighbours.push([row, col - 1]); // left cell
  }
};

const visitIslandDFS = (matrix, node) => {
  const [row, col] = node;

  if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
    return; // return; out of bounds(invalid cell)
  if (matrix[row][col] === 0) return; // return; found water cell

  matrix[row][col] = 0; // found land cell; turn the land cell into water cell

  // search for adjacent land cells :: recursively visit all neighboring cells (horizontally & vertically)
  visitIslandDFS(matrix, [row - 1, col]); // upper cell
  visitIslandDFS(matrix, [row + 1, col]); // lower cell
  visitIslandDFS(matrix, [row, col + 1]); // right cell
  visitIslandDFS(matrix, [row, col - 1]); // left cell
};

const countIslands = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let islandCount = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        // we have found an island
        islandCount++;
        const root = [i, j]; // with this cell as the root node we'll traverse/visit the whole island(either usring BFS or DFS)
        visitIslandDFS(matrix, root); // visitIslandDFS(matrix, root)|| visitIslandBFS(matrix, root)
      }
    }
  }

  return islandCount;
};

// SMOKE TEST
// const matrix = [
//   [0, 1, 1, 1, 0],
//   [0, 0, 0, 1, 1],
//   [0, 1, 1, 1, 0],
//   [0, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0],
// ];
// const matrix2 = [
//   [1, 1, 1, 0, 0],
//   [0, 1, 0, 0, 1],
//   [0, 0, 1, 1, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 1, 0, 0],
// ];
// console.log(countIslands(matrix));
// console.log(countIslands(matrix2));
