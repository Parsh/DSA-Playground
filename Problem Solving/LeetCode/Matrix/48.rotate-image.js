/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * complexity: time O(n*n), space: O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    // as this is a nxn matrix(square), therefore,
    // top and bottom are going to be same as left and right
    let top = left;
    let bottom = right;

    for (let i = 0; i < right - left; i++) {
      // assigning in anti-clockwise direction, (won't have to swap values in
      // and out of temp variable repeatedly which is the case for clockwise rotation)

      // save the top left
      const topLeft = matrix[top][left + i];

      // move bottom left into top left
      matrix[top][left + i] = matrix[bottom - i][left];

      // move bottom right into bottom left
      matrix[bottom - i][left] = matrix[bottom][right - i];

      // move top right into bottom right
      matrix[bottom][right - i] = matrix[top + i][right];

      // move top left into top right
      matrix[top + i][right] = topLeft;
    }
    right -= 1;
    left += 1;
  }
};
// @lc code=end
