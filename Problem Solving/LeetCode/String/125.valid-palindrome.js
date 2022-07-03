/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * complexity O(n), two pointers and reg-ex(for string processing)
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // process the string
  s = s.toLowerCase().replace(/[^0-9a-z]/gi, "");

  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
};

/**
 * alternate approach: using charCodes
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (input) {
//   var start = 0;
//   var end = input.length - 1;
//   while (start < end) {
//     var s = input.charCodeAt(start);
//     var e = input.charCodeAt(end);

//     if (!isLetter(s)) {
//       start++;
//       continue;
//     }
//     if (!isLetter(e)) {
//       end--;
//       continue;
//     }

//     if (toLowerCase(s) !== toLowerCase(e)) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true;
// };

// var isLetter = function (code) {
//   if (
//     (code >= 48 && code <= 57) || // numbers
//     (code >= 65 && code <= 90) || // uppercase
//     (code >= 97 && code <= 122)
//   ) {
//     // lowercase
//     return true;
//   } else {
//     return false;
//   }
// };

// var toLowerCase = function (code) {
//   if (code >= 65 && code <= 90) {
//     return code + 32;
//   } else {
//     return code;
//   }
// };

// @lc code=end
