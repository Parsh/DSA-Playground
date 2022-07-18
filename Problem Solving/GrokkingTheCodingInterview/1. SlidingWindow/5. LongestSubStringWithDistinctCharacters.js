/**
 * Problem Statement:
 * Given a string, find the length of the longest substring,
 * which has all distinct characters.
 *
 * Example:
 * Input: String="aabccbb"
 * Output: 3
 * Explanation: The longest substring with distinct characters is "abc".
 */

/**
 * concept: sliding window w/ hashmap
 */
const longestSubStringWithDistinctCharacters = (str) => {
  let maxLength = 0;
  let start = 0;
  let end = 0;
  const lastSeenIndex = {};

  while (end < str.length) {
    const current = str[end];
    if (lastSeenIndex[current] !== undefined) {
      start = Math.max(start, lastSeenIndex[current] + 1);
    }

    lastSeenIndex[current] = end;
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
  }
  return maxLength;
};

// SMOKE TEST
// const string = "aabccbb";
// console.log(longestSubStringWithDistinctCharacters(string));
