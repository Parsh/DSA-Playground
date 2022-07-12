/**
 * Problem statement:
 * Given an array of positive numbers and a positive number ‘S,’
 * find the length of the smallest contiguous subarray whose sum
 * is greater than or equal to ‘S’. Return 0 if no such subarray exists.
 *
 * Example:
 * Input: [2, 1, 5, 2, 3, 2], S=7
 * Output: 2
 * Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
 */

/**
 * complexity: time O(n); space O(1)
 * note: The outer for loop runs for all elements,
 * and the inner while loop processes each element only once; therefore,
 * the time complexity of the algorithm will be O(n+n) or O(2n), which is asymptotically equivalent to O(n).
 *
 *  concept: sliding window w/ window size not fixed
 */
const smallestSubArraySum = (array, s) => {
  let smallestSubArrayLength = Infinity;
  let currentSum = 0;
  let start = 0;
  let end = 0;

  while (end < array.length) {
    currentSum += array[end]; // expand the window; till currentSum >= s

    while (currentSum >= s) {
      const currentSubArrayLength = end - start + 1;
      smallestSubArrayLength = Math.min(
        smallestSubArrayLength,
        currentSubArrayLength
      );

      // shrink the window, till current becomes smaller than s
      currentSum -= array[start];
      start++; // if start === end; current sum would become zero; and the inner loop would exit(therefore start can't surpass end)
    }
    end++;
  }
  return smallestSubArrayLength === Infinity ? 0 : smallestSubArrayLength;
};

// SMOKE TEST
// const array = [2, 1, 5, 2, 8];
// const S = 7;
// console.log(smallestSubArraySum(array, S));
