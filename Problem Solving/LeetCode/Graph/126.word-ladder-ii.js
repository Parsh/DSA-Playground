/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */

// @lc code=start
/**
 * approach: Graph BFS + DFS
 * issue: DFS leads to TLE when wordList is large
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
// var findLadders = function (beginWord, endWord, wordList) {
//   if (!wordList.includes(endWord)) return [];
//   wordList.push(beginWord);

//   // form the adjacency list
//   const adjacencyList = {};
//   for (let word of wordList) {
//     for (let i = 0; i < word.length; i++) {
//       const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
//       if (adjacencyList[pattern]) adjacencyList[pattern].push(word);
//       else adjacencyList[pattern] = [word];
//     }
//   }

//   // find length of the shortest path from begin to end using BFS
//   const shortestPathLength = getShortestPathLength(
//     beginWord,
//     endWord,
//     adjacencyList
//   );

//   // find all the paths using DFS, where maximum depth is equal to the shortest path length
//   return getShortestPaths(
//     beginWord,
//     endWord,
//     [],
//     adjacencyList,
//     shortestPathLength
//   );
// };

// const getShortestPathLength = (beginWord, endWord, adjacencyList) => {
//   const visited = new Set([beginWord]);
//   const queue = [beginWord];
//   let smallestPathLength = 1;
//   while (queue.length) {
//     const size = queue.length;
//     for (let i = 0; i < size; i++) {
//       const word = queue.shift();
//       if (word === endWord) return smallestPathLength; // return count as soon as we find the smallest path to endword

//       for (let i = 0; i < word.length; i++) {
//         const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
//         for (let neighbour of adjacencyList[pattern]) {
//           if (!visited.has(neighbour)) {
//             visited.add(neighbour);
//             queue.push(neighbour);
//           }
//         }
//       }
//     }
//     smallestPathLength++;
//   }
//   return -1;
// };

// const getShortestPaths = (
//   currentWord,
//   endWord,
//   path,
//   adjacencyList,
//   shortestPathLength,
//   ladders = []
// ) => {
//   path.push(currentWord);
//   if (path.length === shortestPathLength) {
//     if (currentWord === endWord) ladders.push(path);
//     return;
//   }

//   for (let i = 0; i < currentWord.length; i++) {
//     const pattern = currentWord.slice(0, i) + "*" + currentWord.slice(i + 1);
//     for (const word of adjacencyList[pattern]) {
//       if (path.includes(word)) continue;
//       getShortestPaths(
//         word,
//         endWord,
//         [...path],
//         adjacencyList,
//         shortestPathLength,
//         ladders
//       );
//     }
//   }

//   return ladders;
// };

/**
 * alternative approach(TLE Free): https://leetcode.com/problems/word-ladder-ii/discuss/2424910/Explanation-with-Animation
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  // to check if two words can connect; two words are considered connected only if they differ by one char
  let connected = (a, b) => {
    let diff = 0;
    for (let i = 0; i < a.length && diff < 2; i++) {
      if (a[i] !== b[i]) diff++;
    }
    return diff == 1;
  };

  // dictionary to help us search words faster
  // and to trackback what word was used
  let dict = new Set(wordList);
  if (dict.has(endWord) == false) return [];

  dict.delete(beginWord);
  let queue = [beginWord];
  let nodes = [];

  // find all ways from beginning
  // level by level, until reach end at a level
  let reached = false;
  while (queue.length && !reached) {
    // update nodes of paths for this level
    nodes.push(queue.slice());

    // access whole level
    let qlen = queue.length;
    for (let i = 0; i < qlen && !reached; i++) {
      let from = queue.shift();

      // find all nodes that connect to the nodes of this level
      for (let to of dict) {
        if (connected(from, to) == false) continue;

        // if connect
        // - and one of them is end word
        // - then we can stop moving forward
        if (to == endWord) {
          reached = true;
          break;
        }

        // - otherwise,
        // - add all connected nodes to the record for the next level
        // - and delete them from dict to prevent revisiting to form cycles
        queue.push(to);
        dict.delete(to);
      }
    }
  }

  // try but did not find endWord
  if (!reached) return [];

  // move backward to construct paths
  // add nodes to paths in reverse order to have paths from begin to end
  let ans = [[endWord]];
  for (let level = nodes.length - 1; level >= 0; level--) {
    let alen = ans.length;
    for (let a = 0; a < alen; a++) {
      let p = ans.shift();
      let last = p[0];
      for (let word of nodes[level]) {
        if (!connected(last, word)) continue;
        ans.push([word, ...p]);
      }
    }
  }

  return ans;
};

// @lc code=end
