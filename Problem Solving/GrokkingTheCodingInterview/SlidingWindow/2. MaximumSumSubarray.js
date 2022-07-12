/**
 * Problem Statement:
 * Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 *
 * Example:
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 */

/**
 * complexity: time O(n), space O(1)
 * concept: sliding window w/ window size fixed
 */
const maxSumSubArray = (array, k) => {
  let currentSum = 0;
  let maxSum = -Infinity;
  let start = 0;
  let end = 0;

  while (end < array.length) {
    currentSum += array[end];

    // starts to execute once the specified window size is attained
    if (end - start === k - 1) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= array[start];
      start++;
    }
    end++;
  }

  return maxSum;
};

// SMOKE TEST
// const array = [2, 1, 5, 1, 3, 2];
// const k = 3;

// const array = [2, 3, 4, 1, 5];
// const k = 2;

// console.log(maxSumSubArray(array, k));
