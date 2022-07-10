/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * time complexity: O(m*n) w/ column linear search, O(m*logn) w/ column binary search
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//   let found = false;
//   for (let m = 0; m < matrix.length; m++) {
//     const currentRow = matrix[m];
//     const n = currentRow.length - 1;
//     if (currentRow[n] >= target) {
//       // linearly search the element in the given row
//       for (let col = n; col >= 0; col--) {
//         if (currentRow[col] === target) {
//           found = true;
//           break;
//         }
//       }
//       break;

//       // perform binary search on the current row
//       // return binarySearch()
//     }
//   }
//   return found;
// };
/**
 * complexity: O(m+n)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = 0;
  let col = matrix[row].length - 1;

  while (row < matrix.length && col >= 0) {
    const current = matrix[row][col];
    if (current === target) return true;
    else if (current < target) row++; // search in next row
    else if (current > target) col--; // search the present row, previous column
  }
  return false;
};
// @lc code=end
