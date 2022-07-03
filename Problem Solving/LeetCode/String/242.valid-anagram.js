/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start

/**
 * complexity O(nlong)
 * @param  {} s
 * @param  {} t
 */
// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('');
// };

/**
 * complexity O(n)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const frequencyCounter1 = {};

  for (const char of s) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  // pattern 1 :: uses extra space(additional hashmap) O(n^2)
  //   const frequencyCounter2 = {};
  //   for (const char of t) {
  //     frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  //   }

  //   for (const key in frequencyCounter1) {
  //     if (
  //       !frequencyCounter2[key] ||
  //       frequencyCounter1[key] !== frequencyCounter2[key]
  //     )
  //       return false;
  //   }

  // pattern 2: better space complexity: O(n)
  for (const char of t) {
    if (!frequencyCounter1[char]) return false;
    frequencyCounter1[char]--;
  }

  return true;
};
// @lc code=end
