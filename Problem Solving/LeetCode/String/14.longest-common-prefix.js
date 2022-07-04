/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longestPrefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    let matchCount = 0;
    for (let j = 0; j < longestPrefix.length; j++) {
      if (longestPrefix[j] !== str[j]) break;
      matchCount++;
    }
    longestPrefix = longestPrefix.slice(0, matchCount);
  }
  return longestPrefix;
};
// @lc code=end
