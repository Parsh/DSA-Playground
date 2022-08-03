/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftToRight = 0;
  const sum = [];
  for (let i = 0; i < nums.length; i++) {
    leftToRight += nums[i];
    sum.push(leftToRight);
  }

  let rightToLeft = 0;
  let leftMostPivot = -1;
  for (let j = nums.length - 1; j >= 0; j--) {
    rightToLeft += nums[j];
    if (rightToLeft === sum[j]) leftMostPivot = j;
  }
  return leftMostPivot;
};
// @lc code=end
