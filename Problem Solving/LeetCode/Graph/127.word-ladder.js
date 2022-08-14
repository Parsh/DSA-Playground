/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * approach: Graph-BFS
 * explanation: https://www.youtube.com/watch?v=h9iTnkgv05E
 * alternate approach: https://leetcode.com/problems/word-ladder/discuss/1764371/A-very-highly-detailed-EXPLANATION
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  // if the end word does not exist in the word list, return zero
  if (!wordList.includes(endWord)) return 0;
  wordList.push(beginWord);

  const adjacencyList = []; // pattern to words
  for (word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      if (adjacencyList[pattern]) adjacencyList[pattern].push(word);
      else adjacencyList[pattern] = [word];
    }
  }

  // perform BFS on the adjaceny list
  const visited = new Set([beginWord]);
  const queue = [beginWord];
  let count = 1;
  console.log({ adjacencyList });
  while (queue.length) {
    // iterate over each word in the queue
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const word = queue.shift();

      // found the end word
      if (word === endWord) return count;

      // for all the patterns for the current word, find the neighbours and add them to queue
      for (let i = 0; i < word.length; i++) {
        const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
        for (let neighbour of adjacencyList[pattern]) {
          if (!visited.has(neighbour)) {
            visited.add(neighbour);
            queue.push(neighbour);
          }
        }
      }
    }
    count++;
  }

  return 0;
};
// @lc code=end
