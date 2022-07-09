/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * Approach
 * Find the first decreasing index moving from end to start.
 *      e.g. [7, 2, 3, 1, 5, 4, 3, 2, 0] num 1 is the first decreasing index going from the end backwards
 * Swap num 1 with the next large num to its right which is 2
 *      [7, 2, 3, 2, 5, 4, 3, 1, 0]
 * Reverse/sort nums to the right (from decending to ascending order)
 * If there is no next permutation reverse the array
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    // find the first decending index from right
    if (nums[i - 1] < nums[i]) {
      // find the next large b/w nums.length - 1 and i-1
      const nextLargeIndex = findNextLargest(i - 1, nums);
      // swap the i-1 and nextLargeIndex
      [nums[i - 1], nums[nextLargeIndex]] = [nums[nextLargeIndex], nums[i - 1]];
      // reverse the rest of the array (post i - 1), which is right now sorted in decending order from i to n
      reverse(i, nums);
      return;
    }
  }
  nums.reverse();
};

const findNextLargest = (idx, nums) => {
  for (let j = nums.length - 1; j > idx; j--) {
    if (nums[j] > nums[idx]) return j;
  }
};

const reverse = (idx, nums) => {
  let left = idx;
  let right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};
// @lc code=end
//  [7, 2, 3, 1, 5, 4, 3, 2, 0]
