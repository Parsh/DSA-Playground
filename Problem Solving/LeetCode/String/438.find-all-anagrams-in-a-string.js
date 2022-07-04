/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * complexity: O(n^2), strategy: brute force
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function (s, p) {
//   let start = 0;
//   const anagramIndexes = [];

//   while (start <= s.length - p.length) {
//     const sub_s = s.slice(start, start + p.length);
//     let isAnagram = true;

//     // check whether sub_s and p are anagrams
//     const frequencyCounter = {};
//     for (const char of p) {
//       frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
//     }

//     for (const char of sub_s) {
//       if (!frequencyCounter[char]) {
//         isAnagram = false;
//         break;
//       } else frequencyCounter[char]--;
//     }

//     if (isAnagram) anagramIndexes.push(start);

//     start++;
//   }
//   return anagramIndexes;
// };

/**
 * complexity: O(n), strategy: sliding window
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const anagramIndexes = [];
  const neededChars = {};
  for (const char of p) {
    neededChars[char] = (neededChars[char] || 0) + 1;
  }

  // initialize window pointers and the total number of chars needed to form an anagram.
  let left = 0;
  let right = 0;
  let count = p.length;

  while (right < s.length) {
    const currentChar = s[right];
    // if the current char is found in p and is currently needed (meaning that its value in neededChars is bigger than 0),
    // then decrease the count which is the total number of chars that are needed and that still haven't been found.
    if (neededChars[currentChar] > 0) {
      // (>0) ensures that count decreases only by the number of times a particular char is required(if the same char appears
      // more than needed times within the window, the count is not decreased further). Ex: if s='aaabccba' p = 'abc'
      count--;
    }

    // note: puts the needed chars which appears more than needed times, within the window, into -ve territory
    // therefore, -ve => char present more than required times in the window
    neededChars[currentChar]--;

    // decrease the needed amount for the current char and move the window's right end one step forward.
    right++;

    // if the count is 0, this means that there is an anagram starting at the left index so push left into the output array.
    if (count === 0) anagramIndexes.push(left);

    const currentWindowSize = right - left;
    // at first, the window will increase its length by taking steps forward with its right end.
    // after the window length reaches p's length for the first time,
    // the window will start moving forward like a caterpillar with the left end moving first.
    if (currentWindowSize === p.length) {
      const leavingElement = s[left];
      // if the char left behind was a needed char(and is not appearing more than required times within the window, non -ve number), increase the total number of chars currently needed to form an anagram.
      if (neededChars[leavingElement] >= 0) count++;
      // every time a needed char is left behind (outside the window) as the window moves forward to search the rest of the string,
      // increment that char's value in the neededChars object (restore the need for that char for the window's future reference).
      neededChars[leavingElement]++;
      left++;
    }
  }
  return anagramIndexes;
};
// @lc code=end
