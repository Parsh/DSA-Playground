/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */

// @lc code=start
/**
 * explanation: https://www.youtube.com/watch?v=pnx5JA9LNM4
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // calculate the collective XOR of the nums array
  // it would be equal to the xor of the two single numbers(n1 and n2), as all others would cancel out themselves
  let n1XORn2 = 0;
  nums.forEach((num) => {
    n1XORn2 = n1XORn2 ^ num;
  });

  // calculate the mask
  const rsbm = n1XORn2 & -n1XORn2;

  // filter the numbers based on mask and XOR them
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
// @lc code=end
