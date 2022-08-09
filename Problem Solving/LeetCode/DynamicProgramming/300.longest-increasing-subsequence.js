/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * approach: DP-tabular
 * complexity: O(n^2), better than brute force DFS(2^n)
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const LIS = Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        LIS[i] = Math.max(LIS[i], LIS[j] + 1);
      }
    }
  }

  return Math.max(...LIS);
};
// @lc code=end
