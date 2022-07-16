/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */

// @lc code=start
/**
 * 
 * Approach:
 * Simple iterative solution by identifying characters one by one. One important thing is that the input is valid, which means the parentheses are always paired and in order.
 * Only 5 possible input we need to pay attention:

 * 1. digit: it should be one digit from the current number
 * 2. '+': number is over, we can add the previous number and start a new number
 * 3. '-': same as above
 * 4. '(': push the previous result and the sign into the stack, set result to 0, just calculate the new result within the parenthesis.
 * 5. ')': pop out the top two numbers from stack, first one is the sign before this pair of parenthesis, second is the temporary result before this pair of parenthesis. We add them together.
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const availableOperator = {
    "+": true,
    "-": true,
    "(": true,
    ")": true,
  };

  const stack = [];
  let result = 0;
  let currentOperand = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    const token = s[i];
    const regExForDigit = /\d/; // /\d/ or /[0-9]/ checks whether the token is a digit b/w 0-9
    if (regExForDigit.test(token))
      currentOperand = currentOperand * 10 + parseInt(token); // iteratively builds multi digit number(operand) using tokens

    if (availableOperator[token]) {
      switch (token) {
        case "+":
          result += sign * currentOperand;
          sign = 1;
          break;

        case "-":
          result += sign * currentOperand;
          sign = -1;
          break;

        case "(":
          // push the result, upto this point, followed by the sign
          stack.push(result);
          stack.push(sign);

          //reset the sign and result for the upcoming parenthesis value
          result = 0;
          sign = 1;
          break;

        case ")":
          result += sign * currentOperand;
          result *= stack.pop(); // first stack.pop() is the sign before the parenthesis
          result += stack.pop(); //second stack.pop() is the result calculated before the parenthesis
          sign = 1;
          break;
      }
      currentOperand = 0; // reset the current operand
    }
  }

  if (currentOperand) result += sign * currentOperand;
  return result;
};
// @lc code=end
