/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * complexity: time O(n); space O(n)
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openToClose = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (const bracket of s) {
    switch (bracket) {
      case "(":
      case "{":
      case "[":
        // push in the open brackets
        stack.push(bracket);
        break;

      default:
        // case: close bracket
        // pop out the latest open bracket from stack
        const open = stack.pop();
        const correspondingClosing = openToClose[open];
        if (bracket !== correspondingClosing) return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end
