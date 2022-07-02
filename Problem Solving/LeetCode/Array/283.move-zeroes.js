/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt] = nums[i];
      lastNonZeroFoundAt++;
    }
  }
  for (i = lastNonZeroFoundAt; i < nums.length; i++) nums[i] = 0;
};
// @lc code=end
