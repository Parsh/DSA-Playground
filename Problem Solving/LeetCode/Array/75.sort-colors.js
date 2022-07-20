/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * approach: two pointers
 * while iterating through the array,
 * - we'll move all 0s before low, and
 * - all 2s after high, so that in the end
 * - all 1s will be between low and high
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let i = low;

  while (i <= high) {
    switch (nums[i]) {
      case 0:
        [nums[i], nums[low]] = [nums[low], nums[i]]; // swap zero w/ the element at index:low
        low++;
        i++;
        break;

      case 1:
        i++;
        break;

      case 2:
        [nums[i], nums[high]] = [nums[high], nums[i]]; // swap two w/ the element at index:high
        // after the swap the number at index 'i' could be 0, 1, or 2
        // therefore we only decrement high and not i
        high--;
        break;
    }
  }
};
// @lc code=end
