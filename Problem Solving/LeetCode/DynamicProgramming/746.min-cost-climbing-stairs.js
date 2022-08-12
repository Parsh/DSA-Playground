/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * approach: DP - tabular(bottom up)
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function (cost) {
//   const top = cost.length;
//   const dp = [cost[0], cost[1]];
//   for (let i = 2; i < top; i++) {
//     dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
//   }
//   return Math.min(dp[top - 1], dp[top - 2]);
// };

/**
 * approach: DP - recursive(top down)
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const memo = {};
  const top = cost.length;
  const minCost = (index) => {
    if (index <= 1) return cost[index];
    if (memo[index] !== undefined) return memo[index];

    memo[index] =
      cost[index] + Math.min(minCost(index - 1), minCost(index - 2));
    return memo[index];
  };
  return Math.min(minCost(top - 1), minCost(top - 2));
};
// @lc code=end
