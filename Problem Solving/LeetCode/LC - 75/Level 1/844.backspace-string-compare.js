/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return reduce(s) === reduce(t);
};

var reduce = (str) => {
  const stack = [];
  for (let char of str) {
    if (char === "#") stack.pop();
    else stack.push(char);
  }
  return stack.join("");
};
// @lc code=end
