/**
 * Problem Statement:
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 *
 * Example:
 * Input: [-3, 0, 1, 2, -1, 1, -2]
 * Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
 * Explanation: There are four unique triplets whose sum is equal to zero.
 */

const tripletSum = (arr) => {
  const target = 0; // could be any number, for this question it is zero
  const triplets = [];
  // we can sort the array O(nlogn), as the BTTC for this problem is O(n^2)
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) break; // if the first element itself is greater than target value, then adding in bigger elements won't help
    if (i > 0 && arr[i] === arr[i - 1]) continue; // skipping the same element, to avoid duplicate triplets

    // for each iteration, we re-adjust the target which reduces the problem to two sum
    const twoSumTarget = target - arr[i];

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum === twoSumTarget) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;

        while (left < right && arr[left] === arr[left - 1]) {
          left += 1; // skip same element to avoid duplicate triplets
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right -= 1; // skip same element to avoid duplicate triplets
        }
      } else if (currentSum < twoSumTarget) left++;
      else right--;
    }
  }
  return triplets;
};

// SMOKE TEST
// const arr = [-3, 0, 1, 2, -1, 1, -2];
// console.log(tripletSum(arr));
