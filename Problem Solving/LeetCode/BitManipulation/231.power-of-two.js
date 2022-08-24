/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * approach bit-manipulation
 * complexity: T:O(1), S:O(1)
 * observation: https://leetcode.com/problems/power-of-two/discuss/1638704/C%2B%2B-EASY-TO-SOLVE-oror-All-INTERVIEW-APPROACHES-with-Detailed-Explanations
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // every number which is power of two has only one bit turned on(ex: 8 > 1000)
  // performing bitwise AND of this number(n) with n-1 would yield zero(ex: 8 > 1000, 7 > 0111, 8 & 7 > 0000)
  if (n > 0 && (n & (n - 1)) === 0) return true;
  return false;
};

/**
 * approach: iterative(division and remainder)
 * complexity: T:O(logN), S:O(1)
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n > 1) {
    while (n % 2 === 0) n /= 2;
  }
  return n === 1;
};
// @lc code=end
