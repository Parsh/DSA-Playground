/**
 * Problem Statement:
 * Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.
 *
 * Example 1:
 * Input: "aappp"
 * Output: "papap"
 * Explanation: In "papap", none of the repeating characters come next to each other.
 */

// const canRearrangeString = (str) => {
//   const threshold = Math.ceil(str.length / 2);
//   const frequencyCounter = {};
//   for (let char of str) {
//     frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
//     if (frequencyCounter[char] > threshold) return false; // if a particular letter occurs more than half of the times, then we can definitely not construct a string
//   }

//   return true;
// };

const {
  ModifiedBinaryHeap,
  MODIFIED_BINARY_HEAP_TYPES,
} = require("./utils/ModifiedBinaryHeap");

const rearrangeString = (str) => {
  const frequencyCounter = {};
  for (let char of str)
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;

  const maxHeap = new ModifiedBinaryHeap(MODIFIED_BINARY_HEAP_TYPES.MAX);
  for (let key in frequencyCounter) maxHeap.insert(key, frequencyCounter[key]);

  let rearranged = "";
  let previousChar = null;
  let previousCharFrequencey = null;
  while (maxHeap.values.length) {
    const mostFrequent = maxHeap.extractTop();
    rearranged += mostFrequent.key;

    if (previousChar && previousCharFrequencey > 0)
      maxHeap.insert(previousChar, previousCharFrequencey);

    previousChar = mostFrequent.key;
    previousCharFrequencey = mostFrequent.val - 1;
  }

  return rearranged.length === str.length ? rearranged : "";
};

// SMOKE TEST
const str = "Programming";
// console.log(canRearrangeString(str));
console.log(rearrangeString(str));
