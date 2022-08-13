/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 */

// @lc code=start
var findClosestElements = function (arr, k, x) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (rightPointer - leftPointer >= k) {
    if (Math.abs(arr[leftPointer] - x) <= Math.abs(arr[rightPointer] - x))
      rightPointer--;
    else leftPointer++;
  }
  return arr.slice(leftPointer, rightPointer + 1);
};
// @lc code=end
