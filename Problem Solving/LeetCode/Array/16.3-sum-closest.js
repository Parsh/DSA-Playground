/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let minimumTargetDifference = Infinity;
  let minimumTargetTripletSum = 0;
  // we can sort the array O(nlogn), as the BTTC for this problem is O(n^2)
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skipping the same element, to avoid duplicate triplets

    // for each iteration, we re-adjust the target which reduces the problem to two sum
    const twoSumTarget = target - nums[i];

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[left] + nums[right];
      const targetDifference = twoSumTarget - currentSum;

      if (Math.abs(targetDifference) < Math.abs(minimumTargetDifference)) {
        minimumTargetDifference = targetDifference;
        minimumTargetTripletSum = nums[i] + currentSum;
      }

      if (currentSum < twoSumTarget) left++;
      else right--;
    }
  }
  return minimumTargetTripletSum;
};
// @lc code=end
