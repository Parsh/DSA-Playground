/**
 * Problem Statement:
 * Given an array of numbers and a number ‘K’, we need to remove ‘K’ numbers
 * from the array such that we are left with maximum distinct numbers.
 *
 * Example:
 * Input: [7, 3, 5, 8, 5, 3, 3], and K=2
 * Output: 3
 * Explanation: We can remove two occurrences of 3 to be left with 3 distinct numbers [7, 3, 8], we have
 * to skip 5 because it is not distinct and occurred twice.
 */

const {
  MODIFIED_BINARY_HEAP_TYPES,
  ModifiedBinaryHeap,
} = require("./utils/ModifiedBinaryHeap");

const maximumDistinctElements = (nums, k) => {
  if (nums.length <= k) return 0;

  const frequencyCounter = {};
  for (let num of nums)
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;

  const heap = new ModifiedBinaryHeap(MODIFIED_BINARY_HEAP_TYPES.MIN);
  let distinct = 0;
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) heap.insert(key, frequencyCounter[key]);
    else distinct++;
  }

  // remove duplicate numbers
  while (k > 0 && heap.values.length) {
    const { val } = heap.extractTop();
    if (k < val - 1) break; // insufficient k to make remaining duplciate elements distinct
    k -= val - 1;
    distinct++;
  }

  distinct -= k; // if k still not equal to zero, then we'll have to remove distinct numbers

  return distinct;
};

// SMOKE TEST
// const nums = [3, 5, 12, 11, 12];
// const k = 3;
// console.log(maximumDistinctElements(nums, k));
