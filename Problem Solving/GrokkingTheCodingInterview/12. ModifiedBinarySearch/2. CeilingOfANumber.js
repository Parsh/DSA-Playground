/**
 * Problem Statement:
 * Given an array of numbers sorted in an ascending order, find the ceiling
 * of a given number ‘key’. The ceiling of the ‘key’ will be the smallest
 * element in the given array greater than or equal to the ‘key’.
 *
 * Write a function to return the index of the ceiling of the ‘key’.
 * If there isn’t any ceiling return -1.
 *
 * Example:
 * Input: [1, 3, 8, 10, 15], key = 12
 * Output: 4
 * Explanation: The smallest number greater than or equal to '12' is '15' having index '4'.
 */

const findCeiling = (nums, key) => {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] < key) low = mid + 1;
    else high = mid;
  }
  return high === nums.length ? -1 : high;
};

// SMOKE TEST
const nums = [1, 3, 8, 10, 15];
const key = 12;
console.log(findCeiling(nums, key));
