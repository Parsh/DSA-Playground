/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * reference: https://www.youtube.com/watch?v=s9fokUqJ76A
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const stack = [];
  const results = [];

  const backTrack = (open, close) => {
    // console.log({ open, close });
    // console.log({ stack });
    if (open === n && close === n) {
      return results.push(stack.join(""));
    }

    if (open < n) {
      stack.push("(");
      backTrack(open + 1, close);
      stack.pop();
      // console.log({ popped_open: open + 1 });
    }

    if (close < open) {
      stack.push(")");
      backTrack(open, close + 1);
      stack.pop();
      // console.log({ popped_close: close + 1 });
    }
  };
  backTrack(0, 0);
  return results;
};
// @lc code=end
