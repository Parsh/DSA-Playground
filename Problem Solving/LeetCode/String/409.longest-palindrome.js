/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * complexity O(n)
 * note: longest Palindrome = letter pairs + single letter(at center, if available)
 * ex: 'ababc', there are two letter pairs aa, bb plus we also have a single letter c
 * therefore, longest palindrome: 4(aabb) + 1(c) = 5, one formation could be abcba
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
