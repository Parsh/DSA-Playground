/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const frequencyCounter = {};
  for (const word of words) {
    frequencyCounter[word] = (frequencyCounter[word] || 0) + 1;
  }

  // sort in decreasing order by frequency
  const sortedList = Object.entries(frequencyCounter).sort((a, b) => {
    if (b[1] > a[1]) return 1;
    else if (b[1] < a[1]) return -1;
    else {
      // sort lexiographically(ascending)
      if (a[0] > b[0]) return 1;
      else return -1;
    }
  });
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(sortedList[i][0]);
  }
  return res;
};
// @lc code=end
