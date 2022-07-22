/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start

/**
 * @param  {character[][]} grid
 * @param  {number[]} node
 */
const visitIslandBFS = (grid, node) => {
  const neighbours = [node]; // queue
  while (neighbours.length > 0) {
    const node = neighbours.shift();
    const [row, col] = node;

    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      continue; // continue; out of bounds(invalid cell)
    if (grid[row][col] === "0") continue; // continue; found water cell

    grid[row][col] = "0"; // found land cell; turn the land cell into water cell

    // insert all neighboring cells to the queue for traversal
    neighbours.push([row - 1, col]); // upper cell
    neighbours.push([row + 1, col]); // lower cell
    neighbours.push([row, col + 1]); // right cell
    neighbours.push([row, col - 1]); // left cell
  }
};

/**
 * @param  {character[][]} grid
 * @param  {number[]} node
 */
const visitIslandDFS = (grid, node) => {
  const [row, col] = node;

  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return; // return; out of bounds(invalid cell)
  if (grid[row][col] === "0") return; // return; found water cell

  grid[row][col] = "0"; // found land cell; turn the land cell into water cell

  // search for adjacent land cells :: recursively visit all neighboring cells (horizontally & vertically)
  visitIslandDFS(grid, [row - 1, col]); // upper cell
  visitIslandDFS(grid, [row + 1, col]); // lower cell
  visitIslandDFS(grid, [row, col + 1]); // right cell
  visitIslandDFS(grid, [row, col - 1]); // left cell
};

/**
 * approach:
 * - while iterating over the grid, whenever we find a land cell '1', we've basically found an island
 * - using this land cell as the root node, we will perform DFS or BFS in order to find all the other land cells of this island
 * - during our DFS or BFS traversal, we will as we find the land cells(horizontally and vertically), we'll turn them into water cells
 *
 * complextiy:
 * - time : O(M*N) :: Because we have to traverse the whole matrix to find the islands.
 * - space: O(M*N) :: the size of the queue can grow up to min(M*N) || DFS recursion stack can go M*N deep when the whole matrix is filled with '1's(worst case)
 *   where: where ‘M’ is the number of rows and 'N' is the number of columns of the input grid
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        // we have found an island
        islandCount++;
        const root = [i, j]; // with this cell as the root node we'll traverse/visit the whole island(either usring BFS or DFS)
        visitIslandBFS(grid, root); // visitIslandDFS(grid, root)|| visitIslandBFS(grid, root)
      }
    }
  }

  return islandCount;
};
// @lc code=end
