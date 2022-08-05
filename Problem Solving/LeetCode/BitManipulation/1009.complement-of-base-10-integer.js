/*
 * @lc app=leetcode id=1009 lang=javascript
 *
 * [1009] Complement of Base 10 Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var bitwiseComplement = function (n) {
//   let complement = "";
//   for (let bit of n.toString(2)) {
//     if (bit === "1") complement += "0";
//     else complement += "1";
//   }

//   return parseInt(complement, 2);
// };

/**
 * explanation: https://designgurus.org/path-player?courseid=grokking-the-coding-interview&unit=grokking-the-coding-interview_1628744246711_90Unit
 * @param  {} num
 */
var bitwiseComplement = function (num) {
  let bit_count = 0;
  let n = num;
  if (num === 0) bit_count = 1;
  else
    while (n > 0) {
      bit_count++;
      n = n >> 1;
    }

  let all_bits_set = Math.pow(2, bit_count) - 1;
  return num ^ all_bits_set;
};
// @lc code=end
