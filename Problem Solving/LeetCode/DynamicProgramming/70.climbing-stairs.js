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

// var climbStairs = function (n, memo = {}) {
//   if (n <= 1) return 1; // there's only one way to reach staircase 1 or staircase 0
//   if (memo[n]) return memo[n];

//   memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//   return memo[n];
// };

var climbStairs = function (n) {
  const dp = [1, 1]; // one way to climb stair one and zero
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// @lc code=end
