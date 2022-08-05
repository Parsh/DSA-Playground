/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * approach: brute force: leads to TLE
 * TODO: DP Top-Down(memoised)
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//   let minimumNumber = Infinity;

//   const backTrack = (coinsCount, target) => {
//     if (target <= 0) {
//       if (target === 0) minimumNumber = Math.min(minimumNumber, coinsCount);
//       return;
//     }

//     for (const coin of coins) {
//       backTrack(coinsCount + 1, target - coin);
//     }
//   };
//   backTrack(0, amount);

//   return minimumNumber === Infinity ? -1 : minimumNumber;
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
