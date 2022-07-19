/**
 * Problem Statement:
 * Given an array of sorted numbers, remove all duplicate number instances from it in-place,
 * such that each element appears only once. The relative order of the elements should be kept
 * the same and you should not use any extra space so that that the solution have a space complexity of O(1).
 *
 * Example:
 * Input: [2, 3, 3, 3, 6, 9, 9]
 * Output: 4
 * Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
 */

const removeDuplicates = (arr) => {
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left++;
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    right++;
  }

  return left + 1;
};

// SMOKE TEST
// const array = [2, 3, 3, 3, 6, 9, 9];
// console.log(removeDuplicates(array));
