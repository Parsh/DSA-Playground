/**
 * Problem Statement:
 * Find the maximum value in a given Bitonic array. An array is considered bitonic
 * if it is monotonically increasing and then monotonically decreasing.
 * Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].
 *
 * Example 1:
 * Input: [1, 3, 8, 12, 4, 2]
 * Output: 12
 */

const findMax = (nums) => {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] < nums[mid + 1]) {
      // increasing section
      low = mid + 1;
    } else {
      // decreasing section
      high = mid;
    }
  }

  return nums[high];
};

// SMOKE TEST
// const nums = [1, 3, 8, 12, 4, 2];
// console.log(findMax(nums));
