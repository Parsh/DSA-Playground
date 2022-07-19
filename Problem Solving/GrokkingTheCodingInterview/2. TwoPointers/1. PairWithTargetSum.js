/**
 * Problem Statement:
 * Given an array of sorted numbers and a target sum, find a pair in the array
 * whose sum is equal to the given target.
 *
 * Example:
 * Input: [1, 2, 3, 4, 6], target=6
 * Output: [1, 3]
 * Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
 */

const pairWithTargetSum = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
};

// SMOKE TEST
const array = [1, 2, 3, 4, 6];
const target = 6;
console.log(pairWithTargetSum(array, target));
