/**
 * Problem Statement:
 * Given a sorted number array and two integers ‘K’ and ‘X’,
 * find ‘K’ closest numbers to ‘X’ in the array. Return the numbers in the sorted order.
 * ‘X’ is not necessarily present in the array.
 * Example 1:
 * Input: [5, 6, 7, 8, 9], K = 3, X = 7
 * Output: [6, 7, 8]
 */
const {
  ModifiedBinaryHeap,
  MODIFIED_BINARY_HEAP_TYPES,
} = require("./utils/ModifiedBinaryHeap");

const closestIndexToX = (nums, x) => {
  let low = 0;
  let high = nums.length;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === x) return mid;

    if (nums[mid] < x) low = mid + 1;
    else high = mid;
  }
  return high;
};

const kClosestNumbers = (nums, k, x) => {
  const closestIndex = closestIndexToX(nums, x);
  const minHeap = new ModifiedBinaryHeap(MODIFIED_BINARY_HEAP_TYPES.MIN);

  const startIndex = Math.max(closestIndex - k, 0); // k elements to left
  const endIndex = Math.min(closestIndex + k, nums.length); // k elements to right
  for (let i = startIndex; i < endIndex; i++)
    minHeap.insert(nums[i], Math.abs(nums[i] - x));

  const results = [];
  for (let i = 0; i < k; i++) results.push(minHeap.extractTop().key);
  return results.sort((a, b) => a - b);
};

// SMOKE TEST
console.log(
  `'K' closest numbers to 'X' are: ${kClosestNumbers([5, 6, 7, 8, 9], 3, 7)}`
);
console.log(
  `'K' closest numbers to 'X' are: ${kClosestNumbers([2, 4, 5, 6, 9], 3, 6)}`
);
console.log(
  `'K' closest numbers to 'X' are: ${kClosestNumbers([2, 4, 5, 6, 9], 3, 10)}`
);
