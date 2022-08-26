/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */

// @lc code=start
/**
 * approach: https://leetcode.com/problems/word-ladder-ii/discuss/2424910/Explanation-with-Animation
 * issue: DFS leads to TLE when wordList is large
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return [];
  wordList.push(beginWord);

  // form the adjacency list
  const adjacencyList = {};
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      if (adjacencyList[pattern]) adjacencyList[pattern].push(word);
      else adjacencyList[pattern] = [word];
    }
  }

  // find length of the shortest path from begin to end using BFS
  const shortestPathLength = getShortestPathLength(
    beginWord,
    endWord,
    adjacencyList
  );

  // find all the paths using DFS, where maximum depth is equal to the shortest path length
  return getShortestPaths(
    beginWord,
    endWord,
    [],
    adjacencyList,
    shortestPathLength
  );
};

const getShortestPathLength = (beginWord, endWord, adjacencyList) => {
  const visited = new Set([beginWord]);
  const queue = [beginWord];
  let smallestPathLength = 1;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const word = queue.shift();
      if (word === endWord) return smallestPathLength; // return count as soon as we find the smallest path to endword

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
    smallestPathLength++;
  }
  return -1;
};

const getShortestPaths = (
  currentWord,
  endWord,
  path,
  adjacencyList,
  shortestPathLength,
  ladders = []
) => {
  path.push(currentWord);
  if (path.length === shortestPathLength) {
    if (currentWord === endWord) ladders.push(path);
    return;
  }

  for (let i = 0; i < currentWord.length; i++) {
    const pattern = currentWord.slice(0, i) + "*" + currentWord.slice(i + 1);
    for (const word of adjacencyList[pattern]) {
      if (path.includes(word)) continue;
      getShortestPaths(
        word,
        endWord,
        [...path],
        adjacencyList,
        shortestPathLength,
        ladders
      );
    }
  }

  return ladders;
};
// @lc code=end
