/*
 * @lc app=leetcode id=659 lang=javascript
 *
 * [659] Split Array into Consecutive Subsequences
 */

// @lc code=start
/**
 * explanation: https://www.youtube.com/watch?v=uJ8BAQ8lASE
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  if (nums.length < 3) {
    return false;
  }

  const occurrences = {};
  const existingSequences = {};

  for (const number of nums)
    occurrences[number] = (occurrences[number] || 0) + 1;

  for (const number of nums) {
    if (!occurrences[number]) continue;

    // case: the number could be a part of an existing subsequence
    if (existingSequences[number]) {
      occurrences[number]--;
      existingSequences[number]--;
      existingSequences[number + 1] = (existingSequences[number + 1] || 0) + 1; // flags the next number that could join this subsequence
      continue;
    }

    // case: the number intializes a new subsequence
    if (
      occurrences[number] &&
      occurrences[number + 1] &&
      occurrences[number + 2]
    ) {
      occurrences[number]--;
      occurrences[number + 1]--;
      occurrences[number + 2]--;
      existingSequences[number + 3] = (existingSequences[number + 3] || 0) + 1; // flags the next number that could join this subsequence
      continue;
    }

    return false;
  }

  return true;
};
// @lc code=end
