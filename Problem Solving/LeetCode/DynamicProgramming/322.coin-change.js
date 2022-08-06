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
//   const ans = helper(coins, amount, dp);
//   return ans === Infinity ? -1 : ans;
// };

// var helper = (coins, amount, dp) => {
//   if (amount === 0) return 0;

//   let answer = Infinity;
//   for (let coin of coins) {
//     const subAmount = amount - coin;
//     if (subAmount < 0) continue;

//     let subAnswer;
//     if (dp[subAmount] !== -1) {
//       subAnswer = dp[subAmount];
//     } else subAnswer = helper(coins, subAmount, dp);

//     answer = Math.min(answer, subAnswer + 1); // +1, as we've used up one coin
//   }
//   dp[amount] = answer;
//   return dp[amount];
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
