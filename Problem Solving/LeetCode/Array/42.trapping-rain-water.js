/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * approach 1: auxilary memory, max-left & max-right arrays
 * complexity: T:O(N), S:O(N)
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   let maxLeft = [];
//   let currentMaxLeft = 0;
//   for (let i = 0; i < height.length; i++) {
//     maxLeft[i] = currentMaxLeft;
//     currentMaxLeft = Math.max(currentMaxLeft, height[i]);
//   }

//   let maxRight = [];
//   let currentMaxRight = 0;
//   for (let i = height.length - 1; i >= 0; i--) {
//     maxRight[i] = currentMaxRight;
//     currentMaxRight = Math.max(currentMaxRight, height[i]);
//   }

//   let trappedWater = 0;
//   for (let i = 0; i < height.length; i++) {
//     const blocksOfWater = Math.min(maxLeft[i], maxRight[i]) - height[i];
//     if (blocksOfWater > 0) trappedWater += blocksOfWater;
//   }
//   return trappedWater;
// };

/**
 * approach 2: two-pointers: https://www.youtube.com/watch?v=ZI2z5pq0TqA
 * complexity: T:O(N), S:O(1)
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];

  let trappedWater = 0;
  while (left < right) {
    // we'll be shifting the minimum pointer,
    // the intuition is that we've to look at the minimum of two maxes, so it doesn't matter what the absolute max for a given index is
    if (leftMax <= rightMax) {
      left++;

      const blocksOfWater = leftMax - height[left];
      if (blocksOfWater > 0) trappedWater += blocksOfWater;

      leftMax = Math.max(leftMax, height[left]);
    } else {
      right--;
      const blocksOfWater = rightMax - height[right];
      if (blocksOfWater > 0) trappedWater += blocksOfWater;

      rightMax = Math.max(rightMax, height[right]);
    }
  }

  return trappedWater;
};

// @lc code=end
