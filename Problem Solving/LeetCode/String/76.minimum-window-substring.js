/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * complexity: time O(m+n), where m: s.length n: t.length
 *             space: O(n), due to frequencyCounter
 * @param {string} s :: string to search in
 * @param {string} t :: pattern
 */
var minWindow = function (s, t) {
  let start = 0;
  let end = 0;
  let smallestSub = "";
  const frequencyCounter = {};
  let distinct = 0;

  for (const element of t) {
    if (!frequencyCounter[element]) {
      frequencyCounter[element] = 1;
      distinct++;
    } else frequencyCounter[element]++;
  }

  // extend the window till we've found all the elements from t(the pattern)
  // or the window size exceeds s.length
  while (end < s.length) {
    const current = s[end];

    if (frequencyCounter[current] !== undefined) {
      frequencyCounter[current]--;
      if (frequencyCounter[current] === 0) distinct--;
    }

    // once we've found all the elements, shrink the window size to see
    // if there exists a smaller window in which all elements from t can still exist
    while (distinct === 0) {
      if (!smallestSub) smallestSub = s.slice(start, end + 1);
      else {
        const currentSubLength = end - start + 1;
        if (currentSubLength < smallestSub.length)
          smallestSub = s.slice(start, end + 1); // found a smaller window with all the elements from t
      }

      const elementAtStart = s[start];
      if (frequencyCounter[elementAtStart] !== undefined) {
        if (frequencyCounter[elementAtStart] === 0) distinct++;
        frequencyCounter[elementAtStart]++;
      }
      start++;
    }
    end++;
  }

  return smallestSub;
};
// @lc code=end
