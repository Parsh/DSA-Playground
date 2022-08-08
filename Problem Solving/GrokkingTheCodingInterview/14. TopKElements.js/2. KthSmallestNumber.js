/**
 * Problem Statement
 * Given an unsorted array of numbers, find Kth smallest number in it.
 * Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.
 *
 * Example:
 * Input: [1, 5, 12, 2, 11, 5], K = 3
 * Output: 5
 * Explanation: The 3rd smallest number is '5', as the first two smaller numbers are [1, 2].
 */

const { BinaryHeap, BINARY_HEAP_TYPES } = require("./utils/BinaryHeap");

const findKthSmallestNumber = (nums, k) => {
  const maxHeap = new BinaryHeap(BINARY_HEAP_TYPES.MAX);
  for (let i = 0; i < nums.length; i++) {
    if (i < k) maxHeap.insert(nums[i]);
    else {
      if (nums[i] < maxHeap.values[0]) {
        maxHeap.insert(nums[i]);
        maxHeap.extractTop();
      }
    }
  }
  return maxHeap.values[0];
};

// SMOKE TEST
const nums = [1, 5, 12, 2, 11, 5];
const K = 4;
console.log(findKthSmallestNumber(nums, K));
