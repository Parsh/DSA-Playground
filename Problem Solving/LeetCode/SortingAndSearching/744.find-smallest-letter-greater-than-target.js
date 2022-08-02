/*
 * @lc app=leetcode id=744 lang=javascript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let low = 0;
  let high = letters.length;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);

    // even if mid === target(jumps over duplicates as well),
    // we would like to skip ahead to the next greater character
    if (letters[mid] <= target) low = mid + 1;
    else high = mid;
  }
  return letters[high % letters.length];
};
// @lc code=end
