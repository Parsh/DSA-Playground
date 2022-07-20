/**
 * NOTE: This problem is a replica of LeetCode:713, and isn't as per grokking due to deque issue
 * Problem Statement:
 * Given an array with positive numbers and a positive target number,
 * find the number of contiguous subarrays whose product is less than the target number.
 *
 * Example:
 * Input: [8, 2, 6, 5], target=8
 * Output: 3
 * Explanation: There are six contiguous subarrays whose product is less than the target.
 */

const subArraysWithSmallerProduct = (arr, target) => {
  let start = 0;
  let end = 0;
  let product = 1;
  let count = 0;

  while (end < arr.length) {
    product *= arr[end];
    while (product >= target && start < arr.length) {
      product /= arr[start];
      start++;
    }

    const windowSize = end - start + 1;
    count += windowSize;
    end++;
  }

  return count;
};

// SMOKE TEST
// const arr = [8, 2, 6, 5];
// const target = 8;
// console.log(subArraysWithSmallerProduct(arr, target));
