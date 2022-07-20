/*
 * @lc app=leetcode id=713 lang=javascript
 *
 * [713] Subarray Product Less Than K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let start = 0;
  let end = 0;
  let count = 0;
  let product = 1;

  if (k <= 1) return count;

  while (end < nums.length) {
    product *= nums[end];
    while (product >= k) {
      product /= nums[start];
      start++;
    }

    const windowSize = end - start + 1;
    count += windowSize;
    end++;
  }

  return count;
};

// @lc code=end
