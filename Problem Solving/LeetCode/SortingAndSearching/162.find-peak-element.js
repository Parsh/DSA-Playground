/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * reference: https://leetcode.com/problems/find-peak-element/discuss/1290642/Intuition-behind-conditions-or-Complete-Explanation-or-Diagram-or-Binary-Search
 * @param {number[]} nums
 * @return {number}
 */
// var findPeakElement = function (nums) {
//   let n = nums.length;
//   if (!nums || n === 1) return 0;

//   // check if edge elements are peak elements
//   if (nums[0] > nums[1]) return 0;
//   if (nums[n - 1] > nums[n - 2]) return n - 1;

//   // search for peak in the remaining elements
//   let left = 1;
//   let right = n - 2;

//   while (left <= right) {
//     let mid = left + Math.floor((right - left) / 2);
//     const current = nums[mid];
//     const leftNeighbour = nums[mid - 1];
//     const rightNeighbour = nums[mid + 1];

//     if (leftNeighbour < current && current > rightNeighbour)
//       return mid; // mid is at peak
//     else if (leftNeighbour > current) right = mid - 1; // peak is towards left
//     else if (nums[mid] < nums[mid + 1]) left = mid + 1; // peak is towards right
//   }
//   return -1;
// };

var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[mid + 1]) right = mid;
    else left = mid + 1;
  }
  return left;
};
// @lc code=end
