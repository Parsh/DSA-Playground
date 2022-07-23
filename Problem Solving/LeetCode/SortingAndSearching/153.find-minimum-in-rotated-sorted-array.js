/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length;
  let minimum = Infinity;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] >= nums[left]) {
      // left side is sorted
      minimum = Math.min(minimum, nums[left]);
      left = mid + 1;
    } else {
      // right side is sorted
      minimum = Math.min(minimum, nums[mid]);
      right = mid;
    }
  }

  return minimum;
};
// @lc code=end
