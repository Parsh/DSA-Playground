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
  let right = nums.length - 1;
  let minimum = Infinity;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // search for the smallest element in the sorted half first
    // (and then look into the unsorted half, if there exist a relatively smaller element in that half)
    if (nums[left] <= nums[mid]) {
      // left is sorted, therefore, the left most element(at index: left) is the smallest element in this half
      minimum = Math.min(minimum, nums[left]);
      left = mid + 1; // let's search the remaining right half in the next round
    } else {
      // right half is sorted, therefore, the left most element(at index: mid) is the smallest element in this half
      minimum = Math.min(minimum, nums[mid]);
      right = mid - 1; // let's search the remaining left half in the next round
    }
  }

  return minimum;
};
// @lc code=end
