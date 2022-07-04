/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramGroup = {};

  for (const str of strs) {
    const letters = str.split("").sort().join("");
    anagramGroup[letters]
      ? anagramGroup[letters].push(str)
      : (anagramGroup[letters] = [str]);
  }

  return Object.values(anagramGroup);
};

// @lc code=end
