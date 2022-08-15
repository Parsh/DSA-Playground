/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
const romanToInteger = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let integer = 0;

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = s[i + 1];

    if (romanToInteger[current] < romanToInteger[next]) {
      integer += romanToInteger[next] - romanToInteger[current];
      i++;
    } else integer += romanToInteger[current];
  }
  return integer;
};
// @lc code=end
