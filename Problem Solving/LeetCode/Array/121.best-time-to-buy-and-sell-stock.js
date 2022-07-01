/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start

/**
 * complexity: O(n^2)
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       maxProfit = Math.max(prices[j] - prices[i], maxProfit);
//     }
//   }
//   return maxProfit;
// };

/**
 * complexity: O(n)
 * note: i keeps track of the smallest element, while j iterates
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let i = 0, j = 1;
    let maxProfit = 0
    while(j < prices.length){
        if(prices[i] < prices[j]){
            maxProfit = Math.max(prices[j] - prices[i], maxProfit)
        } else i = j
        j++
    }
    return maxProfit
  };
// @lc code=end
