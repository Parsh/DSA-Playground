/**
 * Problem Statement:
 * In a non-empty array of integers, every number appears twice except for one, find that single number.
 * Example:
 * Input: 1, 4, 2, 1, 3, 2, 3
 * Output: 4
 */

const findSingleNum = (nums) => {
  let x1 = 0;
  for (let i = 0; i < nums.length; i++) {
    x1 = x1 ^ nums[i];
  }
  return x1;
};

// SMOKE TEST
const nums = [1, 4, 2, 1, 3, 2, 3];
console.log(findSingleNum(nums));
