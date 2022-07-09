/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  const combinations = [];
  if (!digits) return combinations;

  const digitToLetters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const backtrack = (index, current) => {
    if (current.length === digits.length) {
      combinations.push(current.join(""));
      return;
    }

    const letters = digitToLetters[digits[index]];
    for (const letter of letters) {
      current.push(letter);
      backtrack(index + 1, current);
      current.pop();
    }
  };
  backtrack(0, []);
  return combinations;
};
// @lc code=end
