/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let reversed = 0;
  for (let i = 0; i < 32; i++) {
    const ithBit = (n >> i) & 1;
    reversed = reversed | (ithBit << (31 - i));
  }

  // convert the result to an unsigned 32-bit integer
  return reversed >>> 0;
};
// @lc code=end
