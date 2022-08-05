/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * approach: https://www.youtube.com/watch?v=cOFAmaMBVps&t=574s
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ones = 0;
  let doubles = 0;

  nums.forEach((num) => {
    ones = (ones ^ num) & ~doubles; // xor the num with one's value and bitwise & it with the complement of double's value
    doubles = (doubles ^ num) & ~ones; // xor the num with double's value and bitwise & it with the complement of one's value
  });
  return ones;
};
// @lc code=end
