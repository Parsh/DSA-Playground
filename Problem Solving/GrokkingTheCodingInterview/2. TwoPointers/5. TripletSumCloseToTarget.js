/**
 * Problem Statement:
 * Given an array of unsorted numbers and a target number, find a triplet in the array
 * whose sum is as close to the target number as possible, return the sum of the triplet.
 * If there are more than one such triplet, return the sum of the triplet with the smallest sum.
 *
 * Example:
 * Input: [-2, 0, 1, 2], target=2
 * Output: 1
 * Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
 */

const tripletSumClose = (arr, target) => {
  let minimumTargetDifference = Infinity;
  // we can sort the array O(nlogn), as the BTTC for this problem is O(n^2)
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue; // skipping the same element, to avoid duplicate triplets

    // for each iteration, we re-adjust the target which reduces the problem to two sum
    const twoSumTarget = target - arr[i];

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[left] + arr[right];
      const targetDifference = twoSumTarget - currentSum;
      if (currentSum === twoSumTarget) {
        return targetDifference;
      }

      // the second part of the following 'if' is to handle the smallest sum when we
      // have more than one solution, we'll select the one where triplet sum is smaller(therefore targetDifference: twoSumTarget - currentSum being +ve)
      if (
        Math.abs(targetDifference) < Math.abs(minimumTargetDifference) ||
        (Math.abs(targetDifference) === Math.abs(minimumTargetDifference) &&
          targetDifference > minimumTargetDifference)
      ) {
        minimumTargetDifference = targetDifference;
      }

      if (currentSum < twoSumTarget) left++;
      else right--;
    }
  }
  return minimumTargetDifference;
};

// SMOKE TEST
const arr = [-2, 0, 1, 2];
const target = 2;
console.log(tripletSumClose(arr, target));
