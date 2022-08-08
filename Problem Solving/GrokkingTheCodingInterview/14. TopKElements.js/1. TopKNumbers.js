/**
 * Problem Statement:
 * Given an unsorted array of numbers, find the ‘K’ largest numbers in it.
 * Example 1:
 * Input: [3, 1, 5, 12, 2, 11], K = 3
 * Output: [5, 12, 11]
 */

const { BINARY_HEAP_TYPES, BinaryHeap } = require("./utils/BinaryHeap");

const topKNumbers = (nums, k) => {
  const minHeap = new BinaryHeap(BINARY_HEAP_TYPES.MIN);
  for (let i = 1; i <= nums.length; i++) {
    if (i <= k) minHeap.insert(nums[i]); // add the first k numbers in the heap
    else {
      if (nums[i] > minHeap.values[0]) {
        // case: if the current number is greater than the smallest number in minHeap
        //       remove the smallest number and insert the current number into the heap
        minHeap.insert(nums[i]);
        minHeap.extractTop();
      }
    }
  }
  return minHeap.values;
};

// SMOKE TEST
// const nums = [3, 1, 5, 12, 2, 11];
// const k = 3;
// console.log(topKNumbers(nums, k));
