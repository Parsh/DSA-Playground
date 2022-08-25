/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * approach: https://www.youtube.com/watch?v=HAgLH58IgJQ
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  const isNegative = x < 0;

  let reversed = 0;
  while (x) {
    const digit = x % 10; // if the number is negative, the result of % operation would also be(ex: -132 % 10 = -2)
    x = !isNegative ? Math.floor(x / 10) : Math.ceil(x / 10); // for -ve integer division, Math.ceil take the division towards zero

    if (
      reversed > Math.floor(MAX / 10) ||
      (reversed === Math.floor(MAX / 10) && digit >= MAX % 10)
    )
      return 0;

    if (
      reversed < Math.ceil(MIN / 10) ||
      (reversed === Math.ceil(MIN / 10) && digit <= MIN % 10)
    )
      return 0;
    reversed = reversed * 10 + digit;
  }
  return reversed;
};
// @lc code=end
