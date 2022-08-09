/*
 * @lc app=leetcode id=823 lang=javascript
 *
 * [823] Binary Trees With Factors
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  const dp = {}; // hosts the number of possible trees for a given num
  const mod = 10 ** 9 + 7;
  arr.sort((a, b) => a - b); // sorting the nums is increasing order
  for (let num of arr) dp[num] = 1; // every num would at least have a tree with itself as the root and nothing else

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    // for a given num, we'll try to find the factor pairs which are present in the arr
    for (let j = i - 1; j >= 0; j--) {
      if (num % arr[j] === 0) {
        // found first factor
        const firstFactor = arr[j];
        const secondFactor = num / firstFactor;
        if (dp[secondFactor])
          // second factor exists as well
          dp[num] += dp[firstFactor] * dp[secondFactor]; // adding the combination of trees of both the factors
      }
    }
  }
  return Object.values(dp).reduce((acc, val) => acc + val) % mod;
};
// @lc code=end
