/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  // approach: brute force, T:O(n^3), would lead to TLE
  //   for (let start = 0; start < nums.length; start++) {
  //     for (let end = start; end < nums.length; end++) {
  //       let sum = 0;
  //       for (let idx = start; idx <= end; idx++) {
  //         sum += nums[idx];
  //       }
  //       if (sum === k) count++;
  //     }
  //   }

  // approach: prefix sum, T:O(n^2) S:O(n), leads to TLE
  //   const PF = Array(nums.length);
  //   for (let i = 0; i < nums.length; i++) {
  //     PF[i] = (PF[i - 1] || 0) + nums[i]; // 0; when start - 1 < 0(out of bounds)
  //   }

  //   for (let start = 0; start < nums.length; start++) {
  //     for (let end = start; end < nums.length; end++) {
  //       const sum = PF[end] - (PF[start - 1] || 0); // 0; when start - 1 < 0(out of bounds)
  //       if (sum === k) count++;
  //     }
  //   }

  // approach: prefix sum with hashmap: https://www.youtube.com/watch?v=fFVZt-6sgyo
  let prefixSum = 0;
  const prefixCount = {};
  prefixCount[0] = 1;
  for (let num of nums) {
    prefixSum += num;
    if (prefixCount[prefixSum - k]) count += prefixCount[prefixSum - k];
    prefixCount[prefixSum] = (prefixCount[prefixSum] || 0) + 1;
  }
  return count;
};
// @lc code=end
