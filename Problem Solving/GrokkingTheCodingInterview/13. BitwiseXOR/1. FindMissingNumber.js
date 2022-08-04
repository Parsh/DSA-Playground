/**
 * Problem Statement:
 * Given an array of n-1 integers in the range from 1 to n, find the one number that is missing from the array.
 *
 * Example:
 * Input: 1, 5, 2, 6, 4
 * Answer: 3
 */

/**
 * approach, summing up the numbers from 1 to n and then subtracting the array sum from it
 * drawback: summing up numbers could lead to Integer overflow for large numbers
 * @param  {} nums
 */
// const findMissingNumber = (nums) => {
//   const n = nums.length + 1;
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }

//   nums.forEach((num) => {
//     sum -= num;
//   });
//   return sum;
// };

/**
 * approach:
 * XOR all the numbers from 1 to n, let’s call it x1.
 * XOR all the numbers in the input array, let’s call it x2.
 * The missing number can be found by x1 XOR x2.
 * complexity: T:O(n) S:O(1), doesn't suffer from integer overflow
 * @param  {} nums
 */
const findMissingNumber = (nums) => {
  const n = nums.length + 1;
  let x1 = 0;
  for (let i = 0; i <= n; i++) x1 = x1 ^ i;

  let x2 = 0;
  for (let i = 0; i < nums.length; i++) x2 = x2 ^ nums[i];

  return x1 ^ x2;
};

// SMOKE TEST
const nums = [1, 5, 2, 6, 4];
console.log(findMissingNumber(nums));
