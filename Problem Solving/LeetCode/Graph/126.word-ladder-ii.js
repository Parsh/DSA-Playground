/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */

// @lc code=start
/**
 * approach: https://leetcode.com/problems/word-ladder-ii/discuss/2424910/Explanation-with-Animation
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  // to check if two words can connect
  let connected = (a, b) => {
    let c = 0;
    for (let i = 0; i < a.length && c < 2; i++) {
      if (a[i] !== b[i]) c++;
    }
    return c == 1;
  };

  // dictionary to help us search words faster
  // and to trackback what word was used
  let dict = new Set(wordList);
  if (dict.has(endWord) == false) return [];

  dict.delete(beginWord);
  let queue = [beginWord];
  let paths = [];

  // find all ways from beginning
  // level by level, until reach end at a level
  let reached = false;
  while (queue.length && !reached) {
    // update points of paths for this level
    paths.push(queue.slice());

    // access whole level
    let qlen = queue.length;
    for (let i = 0; i < qlen && !reached; i++) {
      // get the words in the record from the previous level
      let from = queue.shift();
      for (let to of dict) {
        // check if those word can connect to any word in dict
        if (connected(from, to) == false) continue;

        // if yes,
        // and one of them is endWord then we can stop from here
        if (to == endWord) {
          reached = true;
          break;
        }

        // otherwise,
        // update words for this level
        queue.push(to);

        // and delete "to" from dict to prevent a cycle
        dict.delete(to);
      }
    }
  }

  // scanned all but did not see endWord in paths
  if (!reached) return [];

  // now, every path we choose in the paths
  // will lead us back to the beginning
  // so just try to traverse backward from end to begin
  // via the connected words
  let ans = [[endWord]];
  for (let level = paths.length - 1; level >= 0; level--) {
    let alen = ans.length;
    for (let a = 0; a < alen; a++) {
      let p = ans.shift();
      let last = p[0];
      for (let word of paths[level]) {
        if (!connected(last, word)) continue;
        ans.push([word, ...p]);
      }
    }
  }

  return ans;
};
// @lc code=end
