/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start

/**
 * complexity: O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxSubLength = 0;
  let start = 0;
  let end = 0;
  let charCache = {};

  while (end < s.length) {
    const char = s[end];
    if (charCache[char] !== undefined) {
      start = Math.max(charCache[char] + 1, start); // ensures that the start index doesn't move back
    }
    maxSubLength = Math.max(end - start + 1, maxSubLength);
    charCache[char] = end;
    end++;
  }
  return maxSubLength;
};
// @lc code=end
