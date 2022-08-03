/**
 * Problem Statement:
 * Given an array of numbers sorted in ascending order, find the range of a given number ‘key’.
 * The range of the ‘key’ will be the first and last position of the ‘key’ in the array.
 * Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].
 *
 * Example:
 * Input: [4, 6, 6, 6, 9], key = 6
 * Output: [1, 3]
 */

const rangeSearch = (nums, key, findMaxIndex = false) => {
  let keyIndex = -1;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] < key) low = mid + 1;
    else if (nums[mid] > key) high = mid - 1;
    else {
      keyIndex = mid;
      if (findMaxIndex)
        low = mid + 1; // move forward to find the last index of the key
      else high = mid - 1; // slides backward to find the first index of the key
    }
  }
  return keyIndex;
};

const findRange = (nums, key) => {
  const range = [-1, -1];
  range[0] = rangeSearch(nums, key);
  if (range[0] !== -1) range[1] = rangeSearch(nums, key, true);
  return range;
};

// SMOKE TEST
// const nums = [4, 6, 6, 6, 9];
// console.log(findRange(nums, 6));
