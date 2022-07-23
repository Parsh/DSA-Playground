/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const neighbours = [[sr, sc]];
  const visited = {};
  const startingPixelColor = image[sr][sc];

  while (neighbours.length) {
    const node = neighbours.shift();
    const [row, col] = node;
    if (visited[`${row}${col}`]) continue;

    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length)
      continue;

    visited[`${row}${col}`] = true;
    if (image[row][col] !== startingPixelColor) continue;

    image[row][col] = color;
    neighbours.push([row + 1, col]);
    neighbours.push([row - 1, col]);
    neighbours.push([row, col + 1]);
    neighbours.push([row, col - 1]);
  }
  return image;
};
// @lc code=end
