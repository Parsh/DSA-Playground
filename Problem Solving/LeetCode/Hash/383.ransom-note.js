/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const requiredChars = {};
  let requiredCount = 0;
  for (const char of ransomNote) {
    requiredChars[char] = (requiredChars[char] || 0) + 1;
    requiredCount++;
  }

  for (const char of magazine) {
    if (requiredChars[char]) {
      requiredChars[char]--;
      requiredCount--;

      if (requiredCount === 0) break;
    }
  }

  if (requiredCount === 0) return true;
  else return false;
};
// @lc code=end
