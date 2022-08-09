/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 */

// @lc code=start
/**
 * approach: DP Top-Down
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var combinationSum4 = function (nums, target) {
//   const dp = Array(target + 1).fill(-1);

//   var helper = (nums, target, dp) => {
//     if (target < 0) return 0;
//     if (target === 0) return 1;

//     if (dp[target] !== -1) return dp[target];

//     let ans = 0;
//     for (let i = 0; i < nums.length; i++) {
//       ans += helper(nums, target - nums[i], dp);
//     }
//     dp[target] = ans;
//     return ans;
//   };

//   return helper(nums, target, dp);
// };

/**
 * approach: DP Bottom-Up
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    let ans = 0;
    for (let num of nums) {
      if (i - num < 0) continue;
      ans += dp[i - num];
    }
    dp[i] = ans;
  }
  return dp[target];
};
// @lc code=end
