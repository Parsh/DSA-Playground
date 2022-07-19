/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted numsay
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++;
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    right++;
  }

  return left + 1;
};
// @lc code=end
