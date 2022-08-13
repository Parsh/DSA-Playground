/**
 * Problem Statement:
 * Given a string, sort it based on the decreasing frequency of its characters.
 *
 * Example 1:
 * Input: "Programming"
 * Output: "rrggmmPiano"
 * Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.
 */

const {
  ModifiedBinaryHeap,
  MODIFIED_BINARY_HEAP_TYPES,
} = require("./utils/ModifiedBinaryHeap");

const frequencySort = (str) => {
  const frequencyCounter = {};
  for (const char of str)
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;

  const maxHeap = new ModifiedBinaryHeap(MODIFIED_BINARY_HEAP_TYPES.MAX);
  for (const char in frequencyCounter)
    maxHeap.insert(char, frequencyCounter[char]); // key, val

  let frequencyStr = "";
  while (maxHeap.values.length) {
    const { key, val } = maxHeap.extractTop();
    for (let i = 0; i < val; i++) frequencyStr += key;
  }
  return frequencyStr;
};

// SMOKE TEST
// const str = "Programming";
// console.log(frequencySort(str));
