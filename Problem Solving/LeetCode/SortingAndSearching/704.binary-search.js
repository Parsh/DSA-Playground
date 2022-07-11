/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * note: a comprehensive discussion on Binary Search: https://leetcode.com/problems/binary-search/discuss/423162
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // exits once left === right
  while (left < right) {
    // const mid = Math.floor((lo + hi) / 2) // worst way to calculate mid: very easy to overflow
    const mid = left + Math.floor((right - left) / 2);
    if (target > nums[mid]) left = mid + 1; // exclude mid
    else right = mid;
    // console.log({ left, mid, right });
  }
  return nums[left] === target ? left : -1;
};
// @lc code=end
