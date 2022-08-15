/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  // integer to roman letter lookup(decreasing order)
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let romanStr = "";
  let i = 0;
  while (num !== 0) {
    while (num >= values[i]) {
      romanStr += romans[i];
      num -= values[i];
    }
    i++;
  }
  return romanStr;
};
// @lc code=end
