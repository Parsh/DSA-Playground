/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (let char of s) {
    if (char === "]") {
      // found a closing bracket, lets decode the part till now

      // first let's build the encoded str(characters in b/w the brackets)
      let encodedStr = "";
      while (true) {
        const item = stack.pop(); // items popping in reverse order
        if (item === "[") break;
        encodedStr = item + encodedStr; // plug the items in the front
      }

      // now we'll construct the multiplier
      let multiplier = "";
      while (!isNaN(stack[stack.length - 1]))
        multiplier = stack.pop() + multiplier;

      // repeat the encoded str <multiplier> times
      let decoded = "";
      for (let i = 0; i < parseInt(multiplier); i++) decoded += encodedStr;

      // push the result back into stack
      stack.push(decoded);
    } else stack.push(char);
  }

  return stack.join("");
};
// @lc code=end
