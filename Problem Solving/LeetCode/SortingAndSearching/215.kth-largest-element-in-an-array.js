/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * complexity: O(nlogn),
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   nums = nums.sort((a, b) => a - b); // underlying sort: merge sort
//   return nums[nums.length - k];
// };

/**
 * complexity: average case O(n), worst case O(n^2)
 * reference: https://www.youtube.com/watch?v=XEmy13g1Qxc
 * strategy: quick select(based on quick sort)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const kthLargestIndex = nums.length - k;
  // console.log({ kthLargestIndex });

  const quickSelect = (left, right) => {
    const pivot = nums[right];
    let swapIndex = left;
    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        // collect all the numbers smaller than the pivot at the beginning of the array
        [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
        swapIndex++;
      }
    }

    // swap the pivot element w/ the swap index(now the right side of the array is greater than pivot and the left smaller)
    [nums[swapIndex], nums[right]] = [nums[right], nums[swapIndex]];
    // console.log({ left, right, swapIndex, nums });

    // kth largest is in the left half
    if (swapIndex > kthLargestIndex) return quickSelect(left, swapIndex - 1);
    // kth largest is in the right half
    else if (swapIndex < kthLargestIndex)
      return quickSelect(swapIndex + 1, right);
    else return nums[swapIndex];
  };

  return quickSelect(0, nums.length - 1);
};
// @lc code=end
