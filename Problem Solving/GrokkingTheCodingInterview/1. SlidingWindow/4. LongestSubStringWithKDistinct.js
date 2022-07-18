/**
 * Problem Statement:
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 * You can assume that K is less than or equal to the length of the given string.
 *
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2' distinct characters is "araa".
 */

/**
 * complexity: time O(n); space O(n)
 * explanation: The outer for loop runs for all characters, and the inner while loop processes each character only once;
 * therefore, the time complexity of the algorithm will be O(N+N), which is asymptotically equivalent to O(N)
 *
 * concept: dynamic sliding window w/ frequency counter
 */
const longestSubStringWithKDistinct = (str, k) => {
  let maxLength = 0;
  const frequencyCounter = {};
  let distinct = 0;

  let start = 0;
  let end = 0;

  while (end < str.length) {
    const current = str[end];

    if (!frequencyCounter[current]) {
      frequencyCounter[current] = 1;
      distinct++;
    } else frequencyCounter[current]++;

    while (distinct > k) {
      // shrink the sliding window, until we are left with 'k' distinct characters
      frequencyCounter[str[start]]--;
      if (frequencyCounter[str[start]] === 0) distinct--;
      start++; // shrink the window
    }

    maxLength = Math.max(maxLength, end - start + 1);
    end++;
  }

  return maxLength;
};

// SMOKE TEST
// const str = "abcbbc";
// const K = 3;
// console.log(longestSubStringWithKDistinct(str, K));
