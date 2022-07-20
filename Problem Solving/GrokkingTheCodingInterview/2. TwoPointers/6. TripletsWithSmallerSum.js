/**
 * Problem Statement:
 * Given an array arr of unsorted numbers and a target sum, count all triplets in it
 * such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different
 * indices. Write a function to return the count of such triplets
 *
 * Example:
 * Input: [-1, 0, 2, 3], target=3
 * Output: 2
 * Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2].
 */

const tripletSmallerSum = (arr, target) => {
  let count = 0;
  // we can sort the array O(nlogn), as the BTTC for this problem is O(n^2)
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue; // skipping the same element, to avoid duplicate triplets

    // for each iteration, we re-adjust the target which reduces the problem to two sum
    const twoSumTarget = target - arr[i];

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum < twoSumTarget) {
        // found the triplet

        // since arr[right] >= arr[left], therefore, we can replace arr[right] by any
        // number between left and right to get a sum less than the target sum
        count += right - left;
        left++;
      } else right--; // we need a pair with a smaller sum
    }
  }
  return count;
};

// SMOKE TEST
// const arr = [-1, 4, 2, 1, 3];
// const target = 5;
// console.log(tripletSmallerSum(arr, target));
