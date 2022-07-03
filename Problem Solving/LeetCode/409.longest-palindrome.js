/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const frequencyCounter = {};
  let longest = 0;
  for (const char of s) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    if (frequencyCounter[char] % 2 === 0) longest += 2;
  }

  return s.length > longest ? longest + 1 : longest;
};
// @lc code=end
