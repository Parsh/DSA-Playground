/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * approach: DP Top-Down(memoised); brute force: leads to TLE
 * explanation: https://www.youtube.com/watch?v=-NTaXJ7BBXs
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//   const dp = Array(amount + 1).fill(-1);
//   dp[0] = 0;

//   var helper = (coins, amount, dp) => {
//     if (amount === 0) return 0;
//     if (dp[amount] !== -1) return dp[amount];

//     let answer = Infinity;
//     for (let coin of coins) {
//       if (amount - coin < 0) continue;
//       answer = Math.min(answer, helper(coins, amount - coin, dp) + 1); // +1, as we've used up one coin
//     }
//     dp[amount] = answer;
//     return dp[amount];
//   };
//   const ans = helper(coins, amount, dp);
//   return ans === Infinity ? -1 : ans;
// };

/**
 * approach: DP: BOTTOM-UP(Tabular)
 * explanation: https://www.youtube.com/watch?v=H9bfqozjoqs
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const defaultValue = amount + 1;
  const dp = Array(defaultValue).fill(defaultValue);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] !== defaultValue ? dp[amount] : -1;
};

// @lc code=end
