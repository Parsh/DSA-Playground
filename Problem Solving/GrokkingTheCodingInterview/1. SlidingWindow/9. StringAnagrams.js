/**
 * Problem Statement:
 * Given a string and a pattern, find all anagrams of the pattern in the given string
 *
 * Example:
 * Input: String="ppqp", Pattern="pq"
 * Output: [1, 2]
 * Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
 */

const stringAnagrams = (str, pattern) => {
  let start = 0;
  let end = 0;
  let distinct = 0;
  let anagramIndexes = [];
  const frequecyCounter = {};

  for (let element of pattern) {
    if (!frequecyCounter[element]) {
      frequecyCounter[element] = 1;
      distinct++;
    } else frequecyCounter[element]++;
  }

  while (end < str.length) {
    const current = str[end];

    if (frequecyCounter[current] !== undefined) {
      frequecyCounter[current]--;
      if (frequecyCounter[current] === 0) distinct--;
    }

    if (distinct === 0) anagramIndexes.push(start);

    const currentWindowSize = end - start + 1;
    if (currentWindowSize === pattern.length) {
      const elementAtStart = str[start];
      if (frequecyCounter[elementAtStart] !== undefined) {
        if (frequecyCounter[elementAtStart] === 0) distinct++;
        frequecyCounter[elementAtStart]++;
      }
      start++;
    }
    end++;
  }
  return anagramIndexes;
};

// SMOKE TEST
const str = "abbcabc";
const pattern = "abc";
console.log(stringAnagrams(str, pattern));
