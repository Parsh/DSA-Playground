/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] < arr[mid + 1]) {
      // increasing section
      low = mid + 1;
    } else {
      // decreasing section
      high = mid;
    }
  }

  return high;
};
// @lc code=end
