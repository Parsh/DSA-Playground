/**
 * Problem Statement:
 * Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.
 *
 * Example 1:
 * Input: [1, 3, 5, 12, 11, 12, 11], K = 2
 * Output: [12, 11]
 * Explanation: Both '11' and '12' apeared twice.
 */

const {
  ModifiedBinaryHeap,
  MODIFIED_BINARY_HEAP_TYPES,
} = require("./utils/ModifiedBinaryHeap");

var topKFrequent = function (nums, k) {
  const frequencyCounter = {};
  for (let num of nums)
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;

  const minHeap = new ModifiedBinaryHeap(MODIFIED_BINARY_HEAP_TYPES.MIN);

  let i = 0;
  for (let num in frequencyCounter) {
    const frequency = frequencyCounter[num];
    if (i < k) minHeap.insert(num, frequency);
    else {
      if (frequency > minHeap.values[0].val) {
        minHeap.insert(num, frequency);
        minHeap.extractTop();
      }
    }
    i++;
  }

  return minHeap.values.map((element) => element.key);
};

// SMOKE TEST
// const nums = [1, 3, 5, 12, 11, 12, 11];
// const K = 2;
// console.log(topKFrequent(nums, K));
