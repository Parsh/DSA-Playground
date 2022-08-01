/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * approach: Memoised DFS(un-memoised solution leads to Time Limit Exceeded)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//   const memo = Array(m).fill(-1);
//   for (let i = 0; i < memo.length; i++) {
//     memo[i] = Array(n).fill(-1);
//   }
//   return helper(m, n, 0, 0, memo);
// };

// var helper = (m, n, row, col, memo) => {
//   if (row === m - 1 && col === n - 1) return 1; // reached target(found path)
//   if (row >= m || col >= n) return 0; // out of bounds
//   if (memo[row][col] === -1) {
//     const pathsRight = helper(m, n, row, col + 1, memo); // go right
//     const pathsDown = helper(m, n, row + 1, col, memo); // go down
//     memo[row][col] = pathsRight + pathsDown;
//   }
//   return memo[row][col];
// };

/** approach: DP, bottom-up tabular
 * explanation: https://www.youtube.com/watch?v=IlEsdxuD4lY
 * for further optimization: https://leetcode.com/problems/unique-paths/discuss/511059/javascript-from-naive-recursive-to-dp-bottom-up
 * @param  {} m
 * @param  {} n
 */
var uniquePaths = function (m, n) {
  const dp = Array(m).fill(1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(n).fill(1);
  }

  for (let row = m - 2; row >= 0; row--) {
    for (let col = n - 2; col >= 0; col--) {
      dp[row][col] = dp[row + 1][col] + dp[row][col + 1];
    }
  }

  return dp[0][0];
};

// @lc code=end
