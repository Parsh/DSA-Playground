/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * approach: recursive
 * complexity: T:O(logN)
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfFour = function(n) {
//     if(n === 0) return false
//     if(n === 1) return true

//     if(n % 4 !== 0) return false // is a multiple of 4
//     return isPowerOfFour(n/4)
// };

/**
 * approach: iterative
 * complexity: T:O(logN)
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfFour = function (n) {
//   if (n > 1) {
//     while (n % 4 === 0) n /= 4;
//   }
//   return n === 1;
// };

/**
 * approach: bit-manipulation
 * complexity: T:O(1)
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  const isPowerOfTwo = n > 0 && (n & (n - 1)) === 0; // all power of four are power of two, therefore only one bit is turned on
  if (isPowerOfTwo) {
    // observation: power of 4 appears at odd positions, thereby, we should elimiate all the cases where the bit is up at even spots
    const x = 0x55555555; // 0x55555555 is a hexametrical number，it is 1010101010101010101010101010101 in binary with a length of 32
    return (n & x) !== 0;
  }
  return false;
};
// @lc code=end
