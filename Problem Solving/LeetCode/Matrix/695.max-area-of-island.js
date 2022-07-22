/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start

/**
 * @param  {character[][]} grid
 * @param  {number[]} node
 */
const visitIslandBFS = (grid, node) => {
  const neighbours = [node];
  let area = 0;
  while (neighbours.length) {
    const node = neighbours.shift();
    const [row, col] = node;

    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      continue;

    if (grid[row][col] === 0) continue;

    grid[row][col] = 0;
    area++;

    neighbours.push([row + 1, col]);
    neighbours.push([row - 1, col]);
    neighbours.push([row, col + 1]);
    neighbours.push([row, col - 1]);
  }
  return area;
};

/**
 * @param  {character[][]} grid
 * @param  {number[]} node
 */
const visitIslandDFS = (grid, node) => {
  const [row, col] = node;

  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
    return 0;
  if (grid[row][col] === 0) return 0;

  grid[row][col] = 0;
  area = 1;

  area += visitIslandDFS(grid, [row + 1, col]);
  area += visitIslandDFS(grid, [row - 1, col]);
  area += visitIslandDFS(grid, [row, col + 1]);
  area += visitIslandDFS(grid, [row, col - 1]);
  return area;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let maxArea = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, visitIslandDFS(grid, [i, j]));
      }
    }
  }

  return maxArea;
};
// @lc code=end
