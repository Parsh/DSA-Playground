/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * reference: https://www.youtube.com/watch?v=BJnMZNwUk1M
 * complexity: time O(mxn) and space O(1)
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length; // instead of matrix[0].length - 1; to avoid left and right collapse before visiting the elements b/w the boundaries
  let top = 0;
  let bottom = matrix.length; // instead of matrix.length - 1; to avoid top and bottom collapse before visiting the elements b/w the boundaries

  const result = [];
  while (left < right && top < bottom) {
    // iterate over the top row :: going left to right
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }
    top = top + 1;

    // iterate over the right column: top to bottom
    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1]);
    }
    right = right - 1;

    // case: single row matrix(top would already be equal to bottom)
    // case: single column matrix(right would already be equal to left)
    if (!(left < right && top < bottom)) break;

    // iterate over the bottom row :: going right to left
    for (let i = right - 1; i >= left; i--) {
      result.push(matrix[bottom - 1][i]);
    }
    bottom = bottom - 1;

    // iterate over the left column: bottom to top
    for (let i = bottom - 1; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left = left + 1;
  }
  return result;
};
// @lc code=end
