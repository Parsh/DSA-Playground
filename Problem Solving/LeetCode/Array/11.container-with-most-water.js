/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * complexity: O(n^2), brute force solution
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   let max_area = -Infinity;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       // lowest height of the two would become the length
//       const length = height[i] < height[j] ? height[i] : height[j];
//       // index difference acts as the distance between the two heights
//       const width = j - i;
//       const currentArea = length * width;
//       max_area = Math.max(currentArea, max_area);
//     }
//   }

//   return max_area;
// };

/**
 * complexity: O(n), two pointers
 * note: The first thing we should realize is that the amount of water contained is always going
 * to be a rectangle whose area is defined as length * width. The width of any container will be
 * the difference between the index of the two lines (i and j), and the height will be whichever
 * of the two sides is the lowest (min(H[i], H[j])).
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max_area = 0;

  while (left < right) {
    const length = height[left] < height[right] ? height[left] : height[right];
    const width = right - left;
    const currentArea = length * width;
    max_area = Math.max(currentArea, max_area);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return max_area;
};
// @lc code=end
