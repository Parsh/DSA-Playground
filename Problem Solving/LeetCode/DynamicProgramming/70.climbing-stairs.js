/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number}
 * @return {number}
 */

var climbStairs = function (n, memo = {}) {
  if (n <= 1) return 1; // there's only one way to reach staircase 1 or staircase 0
  if (memo[n]) return memo[n];

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};
// @lc code=end
