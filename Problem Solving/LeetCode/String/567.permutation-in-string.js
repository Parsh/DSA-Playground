/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * complexity: time O(m+n), where m: s1.length n: s2.length
 *              space: O(m), due to frequencyCounter
 * @param {string} s1 :: pattern(whose permutation we need to find in s2)
 * @param {string} s2 :: string to check inclusion in
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let start = 0;
  let end = 0;
  const frequencyMap = {};
  let distinct = 0;

  // create a frequency map from the pattern(s1)
  for (const element of s1) {
    if (!frequencyMap[element]) {
      frequencyMap[element] = 1;
      distinct++;
    } else frequencyMap[element]++;
  }

  while (end < s2.length) {
    const current = s2[end];

    // decrement the frequency count, of an element which belongs to the pattern, if found within the present window
    if (frequencyMap[current] !== undefined) {
      frequencyMap[current]--;
      if (frequencyMap[current] === 0) distinct--; // an element has been found w/ corresponding frequency from the pattern
    }

    // in the present window(of size s1.length), do we have all the characters from the pattern(s1)?
    if (distinct === 0) return true; // all elements from s1 have been found in s2 with exact frequencies

    const currentWindowSize = end - start + 1;
    if (currentWindowSize >= s1.length) {
      // slide the window forward once it reaches the size of the pattern(s1)
      // (till the window contains all the elements from the pattern(s1) or end pointer reaches to the end of s2)
      const elementAtStart = s2[start];

      // increment the frequency count, of an element which belongs to the pattern, if it exists the window
      if (frequencyMap[elementAtStart] !== undefined) {
        if (frequencyMap[elementAtStart] === 0) distinct++; // element has to be found again in the slided window
        frequencyMap[elementAtStart]++;
      }
      start++;
    }
    end++;
  }

  return false;
};
// @lc code=end
