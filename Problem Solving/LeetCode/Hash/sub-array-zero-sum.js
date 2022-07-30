/**
 * Problem Statement:
 * Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.
 * If the given array contains a sub-array with sum zero return 1, else return 0.
 */

const hasZeroSum = (arr) => {
  let currentSum = 0;
  const allSums = new Map();
  for (let idx = 0; idx < arr.length; idx++) {
    currentSum += arr[idx];

    // return 1; if either the current sum builds upto zero
    // or we refind the currrent sum in the allSums map, which implies that there
    // was a subarray of elements in between these two occurences of current sum which summed to zero
    if (currentSum === 0 || allSums.has(currentSum)) return 1;
    allSums.set(currentSum); // record the current sum
  }
  return 0;
};
