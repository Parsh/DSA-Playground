/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start

const operator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.trunc(a / b),
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (const token of tokens) {
    if (operator[token]) {
      const operand2 = parseInt(stack.pop());
      const operand1 = parseInt(stack.pop());
      const result = operator[token](operand1, operand2);
      stack.push(result);
    } else stack.push(token);
  }
  return stack.pop();
};
// @lc code=end
