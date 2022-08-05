/**
 * Problem Statement:
 * In a non-empty array of numbers, every number appears exactly twice except
 * two numbers that appear only once. Find the two numbers that appear only once.
 *
 * Example 1:
 * Input: [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]
 * Output: [4, 6]
 */

/**
 * explanation: https://www.youtube.com/watch?v=pnx5JA9LNM4
 * @param  {} nums
 */
const findNumbers = (nums) => {
  // calculate the collective XOR of the nums array
  // it would be equal to the xor of the two single numbers(n1 and n2), as all others would cancel out themselves
  let n1XORn2 = 0;
  nums.forEach((num) => {
    n1XORn2 = n1XORn2 ^ num;
  });

  // calculate the mask(right significant bit), this is where the two numbers have their first different bit
  const rsbm = n1XORn2 & -n1XORn2;

  // filter the numbers based on mask into two lists and XOR them to find the two numbers
  let n1 = 0;
  let n2 = 0;
  nums.forEach((num) => {
    if ((num & rsbm) === 0) {
      n1 = n1 ^ num;
    } else {
      n2 = n2 ^ num;
    }
  });

  return [n1, n2];
};

// SMOKE TEST
// const nums = [1, 4, 2, 1, 3, 5, 6, 2, 3, 5];
// console.log(findNumbers(nums));
