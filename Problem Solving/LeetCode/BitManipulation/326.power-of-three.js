/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * approach: mathematics(log)
 * complexity: T:O(1), S:O(1)
 * explanation: approach-3: https://leetcode.com/problems/power-of-three/solution/
 * issue: precision pitfall
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return (Math.log10(n) / Math.log10(3)) % 1 === 0; // we check if a number is an integer by taking the decimal part (using % 1) and checking if it is 0.
};

/**
 * approach: iterative remainder & division
 * complexity: T:O(logN), S:O(1)
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfThree = function (n) {
//   if (n > 1) {
//     while (n % 3 === 0) n /= 3;
//   }
//   return n === 1;
// };
// @lc code=end
