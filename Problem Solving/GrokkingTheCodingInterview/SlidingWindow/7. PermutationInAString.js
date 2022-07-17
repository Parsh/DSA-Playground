/**
 * Problem Statement:
 * Given a string and a pattern, find out if the string contains any permutation of the pattern.
 *
 * Example:
 * Input: String="oidbcaf", Pattern="abc"
 * Output: true
 * Explanation: The string contains "bca" which is a permutation of the given pattern
 */

/**
 * @param  {string} str
 * @param  {string} pattern
 */
const permutationInAString = (str, pattern) => {
  let start = 0;
  let end = 0;
  const frequencyMap = {};
  let distinct = 0;

  for (const element of pattern) {
    if (!frequencyMap[element]) {
      frequencyMap[element] = 1;
      distinct++;
    } else frequencyMap[element]++;
  }

  while (end < str.length) {
    const current = str[end];

    if (frequencyMap[current] !== undefined) {
      frequencyMap[current]--;
      if (frequencyMap[current] === 0) distinct--;
    }

    // in the present window(of size pattern.length), do we have all the characters from the pattern?
    if (distinct === 0) return true;

    const currentWindowSize = end - start + 1;
    if (currentWindowSize >= pattern.length) {
      // slide the window forward once it reaches the size of the pattern
      // (till the window contains all the elements from the pattern or end reaches to the end)
      const elementAtStart = str[start];
      if (frequencyMap[elementAtStart] !== undefined) {
        if (frequencyMap[elementAtStart] === 0) distinct++;
        frequencyMap[elementAtStart]++;
      }
      start++;
    }
    end++;
  }

  return false;
};

// SMOKE TEST
const str = "aaacb";
const pattern = "aac";
console.log(permutationInAString(str, pattern));
