/**
 * Problem Statement:
 * Given a string and a pattern, find the smallest substring in the given string
 * which has all the character occurrences of the given pattern.
 *
 * Example:
 * Input: String="aabdec", Pattern="abc"
 * Output: "abdec"
 * Explanation: The smallest substring having all characters of the pattern is "abdec"
 */

/**
 * complexity: time O(m+n), where m: str.length n: pattern.length
 *             space: O(n), due to frequencyCounter
 * @param  {} str
 * @param  {} pattern
 */
const smallestWindowContainingSubString = (str, pattern) => {
  let start = 0;
  let end = 0;
  let smallestSub = "";
  const frequencyCounter = {};
  let distinct = 0;

  for (const element of pattern) {
    if (!frequencyCounter[element]) {
      frequencyCounter[element] = 1;
      distinct++;
    } else frequencyCounter[element]++;
  }

  // extend the window till we've found all the elements from the pattern
  // or the window size exceeds str.length
  while (end < str.length) {
    const current = str[end];

    if (frequencyCounter[current] !== undefined) {
      frequencyCounter[current]--;
      if (frequencyCounter[current] === 0) distinct--;
    }

    // once we've found all the elements from the pattern, shrink the window size to see
    // if there exists a smaller window in which all elements from pattern can still exist
    while (distinct === 0) {
      if (!smallestSub) smallestSub = str.slice(start, end + 1);
      else {
        const currentSubLength = end - start + 1;
        if (currentSubLength < smallestSub.length)
          smallestSub = str.slice(start, end + 1); // found a smaller window with all the elements from the pattern
      }
      const elementAtStart = str[start];
      if (frequencyCounter[elementAtStart] !== undefined) {
        if (frequencyCounter[elementAtStart] === 0) distinct++;
        frequencyCounter[elementAtStart]++;
      }
      start++;
    }
    end++;
  }

  return smallestSub;
};

// SMOKE TEST
// const str = "abdbca";
// const pattern = "abc";
// console.log(smallestWindowContainingSubString(str, pattern));
