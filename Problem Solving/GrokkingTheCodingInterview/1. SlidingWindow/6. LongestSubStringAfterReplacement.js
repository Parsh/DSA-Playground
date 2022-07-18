/**
 * Problem Statement:
 * Given a string with lowercase letters only, if you are allowed to replace
 * no more than ‘k’ letters with any letter, find the length of the longest
 * substring having the same letters after replacement.
 *
 * Example:
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
 */

/**
 * complexity: time O(n); space: O(1)
 * explanation:
 * As we expect only the lower case letters in the input string, we can conclude that
 * the space complexity will be O(26) to store each letter’s frequency in the HashMap,
 * which is asymptotically equal to O(1).
 */
const longestSubStringAfterReplacement = (str, k) => {
  let maxRepeatLetter = 0;
  let start = 0;
  let end = 1;
  const frequencyCounter = {};

  while (end < str.length) {
    const current = str[end];
    frequencyCounter[current] = (frequencyCounter[current] || 0) + 1;

    maxRepeatLetter = Math.max(maxRepeatLetter, frequencyCounter[current]);
    const currentWindowSize = end - start + 1;

    // if the window sizes grows to the point that even with k replacements
    // there would be an other character within the window,
    // then we start to move the window forward in search of a character which
    // can expand the window further than the current size
    if (currentWindowSize - maxRepeatLetter > k) {
      frequencyCounter[str[start]]--;
      start++;
    }

    end++; // expand the window till current window size <= maxRepeatLetter + k
  }
  return end - start;
};

// SMOKE TEST
// const string = "aabccbb";
// const k = 2;
// console.log(longestSubStringAfterReplacement(string, k));
