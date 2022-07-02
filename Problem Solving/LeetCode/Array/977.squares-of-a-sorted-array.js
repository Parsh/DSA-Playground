/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // trivial solution, O(nlogn)
  //   const squareNums = nums.map((num) => num * num); // O(n)
  //   return squareNums.sort((a, b) => a - b); // O(nlogn)

  // two pointer solution, time complexity O(n) - space complexity O(n)
  // Since we know that the source array is sorted,
  // it is obvious that the largest numbers (by absolute value) are at the edges of the array,
  // gradually decreasing towards the middle. So two pointers technique is ideal here.

  let squared = [];
  let left = 0;
  let right = nums.length - 1;
  let squaredIndex = right;

  while (left <= right) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      squared[squaredIndex] = leftSquare;
      left++;
    } else {
      squared[squaredIndex] = rightSquare;
      right--;
    }
    squaredIndex--;
  }

  return squared;
};
// @lc code=end
