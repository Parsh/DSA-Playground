/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * complexity: time O(n), space O(n)
 * hash-map solution
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function (nums) {
//   let hashMap = {};
//   let positives = []; // list of positive, non-duplicate, elements
//   for (const num of nums) {
//     if (num > 0 && !hashMap[num]) {
//       hashMap[num] = true;
//       positives.push(num);
//     }
//   }

//   // for index < positives.length, if the element is not present in the hash map, then it is the smallest missing positive number
//   // when index === positives.length => smallest missing positive is effectively the largest positive number in the array
//   for (var index = 0; index <= positives.length; index++) {
//     if (!hashMap[index + 1]) return index + 1;
//   }
// };

/**
 * complexity: time O(n), space O(1)
 * in-place, constant space, solution
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // We will position every positive integer in the array at its corresponding index
  // ex) 1 at index 0, 2 at index 1, 3 at index 2
  // In this way, the array can position all integers that are less than or equal to n at their corresponding indices without changing the size of given array.
  // Therefore, we can find the first missing positive integer by scanning through the array.
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const correspondingIndex = element - 1; // ex: 3 gets positioned at index 3 - 1: 2

    if (i == correspondingIndex || nums[i] == nums[correspondingIndex])
      continue; // already positioned or nums[i] is a duplicate as the the same value is also present at the correspondingIndex

    if (correspondingIndex >= 0 && correspondingIndex < nums.length) {
      // place the element at the corresponding index by swapping with the element originally present at the corresponding index
      [nums[correspondingIndex], nums[i]] = [nums[i], nums[correspondingIndex]];
      i--; // re-run the loop for the same index to check whether the newly swapped number is at its correct corresponding index
    }
  }

  for (var index = 0; index < nums.length; index++) {
    if (index + 1 !== nums[index]) return index + 1;
  }
  return index + 1;
};
// @lc code=end
