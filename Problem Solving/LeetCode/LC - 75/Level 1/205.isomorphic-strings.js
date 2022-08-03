/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * approach: character cross mapping
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isIsomorphic = function (s, t) {
//   const string1To2 = {};
//   const string2To1 = {};

//   for (let i = 0; i < s.length; i++) {
//     const char1 = s[i];
//     const char2 = t[i];

//     if (string1To2[char1]) {
//       if (string1To2[char1] !== char2) return false;
//     } else {
//       if (string2To1[char2] !== undefined) return false; // another element in string1 mapping to the same element in string2

//       string1To2[char1] = char2;
//       string2To1[char2] = char1;
//     }
//   }
//   return true;
// };

/**
 * approach: string transformation
 * explanation: https://leetcode.com/problems/isomorphic-strings/solution/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  return transform(s) === transform(t);
};

var transform = (str) => {
  // for each character in the given string, we replace it with the
  // index of that character's first occurence in the string.

  let transformation = [];
  const indexMap = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (indexMap[char] === undefined) {
      indexMap[char] = i;
    }
    transformation.push(indexMap[char]);
  }

  return transformation.join(" ");
};
// @lc code=end
