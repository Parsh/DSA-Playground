/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n, memo = {}) {
//     if(n <= 1) return n // base case: fib(0) = 0 and fib(1) = 1
//     if(memo[n] !== undefined) return memo[n]
//     memo[n] = fib(n-1) + fib(n-2)
//     return memo[n]
// };

/**
 * approach: DP: Tabularised
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// @lc code=end
