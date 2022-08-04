/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let x1 = 0;
  for (let i = 0; i < nums.length; i++) {
    x1 = x1 ^ nums[i];
  }
  return x1;
};
// @lc code=end
