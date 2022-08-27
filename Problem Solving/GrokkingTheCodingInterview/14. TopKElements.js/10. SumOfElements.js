/**
 * Problem Statement:
 * Given an array, find the sum of all numbers between the K1’th and K2’th smallest elements of that array
 *
 * Example:
 * Input: [1, 3, 12, 5, 15, 11], and K1=3, K2=6
 * Output: 23
 * Explanation: The 3rd smallest number is 5 and 6th smallest number 15.
 * The sum of numbers coming between 5 and 15 is 23 (11+12).
 */

const { BINARY_HEAP_TYPES, BinaryHeap } = require("./utils/BinaryHeap");

const sumofElements = () => {
  const minHeap = new BinaryHeap(BINARY_HEAP_TYPES.MIN);
  for (let num of nums) minHeap.insert(num);

  let sum = 0;
  let smallest = 1;
  while (smallest <= k1) {
    minHeap.extractTop();
    smallest++;
  }
  while (smallest < k2) {
    sum += minHeap.extractTop();
    smallest++;
  }
  return sum;
};

// SMOKE TEST
// const nums = [3, 5, 8, 7];
// const k1 = 1;
// const k2 = 4;
// console.log(sumofElements(nums, k1, k2));
