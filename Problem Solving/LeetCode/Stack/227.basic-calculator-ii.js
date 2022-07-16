/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 */

// @lc code=start
/**
 * complexity:
 * time: O(n), where n is the length of the string s. We iterate over the string s at most twice.
 * space:O(n), where n is the length of the string s.
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  if (s === null || s.length === 0) return null;

  const availableOperator = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
  };
  let previousOperator = "+"; // safe to initalize the previous operator as +

  const stack = [];
  let currentOperand = 0;
  for (let i = 0; i < s.length; i++) {
    const token = s[i];
    const regExForDigit = /\d/; // /\d/ or /[0-9]/ checks whether the token is a digit b/w 0-9
    if (regExForDigit.test(token))
      currentOperand = currentOperand * 10 + parseInt(token); // iteratively builds multi digit number(operand) using tokens

    // if token is an operator or is the last operand of the expression s
    if (availableOperator[token] || i == s.length - 1) {
      // execute the previous operator w/ current operand
      switch (previousOperator) {
        // addition and substraction are executed at the very end(as per operator precedence)
        case "+":
          stack.push(currentOperand);
          break;

        case "-":
          stack.push(-currentOperand);
          break;

        // multiplication and division are executed instantaneously(as per operator precedence)
        case "*":
          stack.push(stack.pop() * currentOperand);
          break;

        case "/":
          stack.push(Math.trunc(stack.pop() / currentOperand));
          break;
      }

      previousOperator = token; // update the previous operator w/ latest
      currentOperand = 0; // reset the current operand
    }
  }

  return stack.reduce((a, b) => a + b);
};
// @lc code=end
