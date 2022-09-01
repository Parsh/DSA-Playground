/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const neededChars = {};
  for (let char of p) neededChars[char] = (neededChars[char] || 0) + 1;
  let count = p.length;

  const anagrams = [];
  let start = 0;
  let end = 0;
  while (end < s.length) {
    const current = s[end];
    if (neededChars[current] !== undefined) {
      if (neededChars[current] > 0) count--;
      neededChars[current]--;
    }

    if (count === 0) anagrams.push(start);

    const windowSize = end - start + 1;
    if (windowSize === p.length) {
      // move the window forward
      const leaving = s[start];
      if (neededChars[leaving] !== undefined) {
        if (neededChars[leaving] >= 0) count++;
        neededChars[leaving]++;
      }
      start++;
    }
    end++;
  }
  return anagrams;
};
// @lc code=end
