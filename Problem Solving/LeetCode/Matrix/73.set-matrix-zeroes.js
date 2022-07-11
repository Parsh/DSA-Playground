/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * reference(check it out for approach): https://www.youtube.com/watch?v=T41rL0L3Pnw
 * (optimal solution) complexity: time: O(3mn) ~ O(mn); space: O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let firstRowZero = false;

  // using the first row(accounts for columns to be zeroed) and first column
  // (accounts for rows to be zeroed, for first row zeroing accounting we'll use firstRowZero flag)
  // for accounting
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 0) {
        // set the first row's corresponding col to zero
        matrix[0][col] = 0;

        // set the first column's corresponding row to zero
        if (row === 0) firstRowZero = true;
        else matrix[row][0] = 0;
      }
    }
  }

  // based on accounting zero the rows and cloumns(except the one's used for accounting(first) for now,
  // otherwise the whoe matrix would zero out)
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) matrix[row][col] = 0;
    }
  }

  // zero out the accounting column and then the accounting row(first one's)
  if (matrix[0][0] === 0) for (let row = 0; row < m; row++) matrix[row][0] = 0; // zeroing first col

  // zeroing first row at last using firstRowZero flag, otherwise if done first it will overwrite matrix[0][0]
  // to zero while it may not be zero which would cause the whole column to wrongly go zero
  if (firstRowZero) for (let col = 0; col < n; col++) matrix[0][col] = 0;
};
// @lc code=end
