/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * complexity: O(n^2), space O(1), strategy: brute force
 * note: breakdown the complex problem into a simpler problem, for ex:
 * here we can simply begin by writing the code for counting longest repeated
 * character substring, once that's functional, we can plug in the logic for replacement
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var characterReplacement = function (s, k) {
//   let longest = 0;

//   for (let i = 0; i < s.length; i++) {
//     const letter = s[i];
//     let replacable = k;
//     let currentLongest = 1;
//     for (j = i + 1; j < s.length; j++) {
//       const nextLetter = s[j];
//       if (nextLetter === letter) currentLongest++;
//       else if (replacable) {
//         // handles forward replacability
//         currentLongest++;
//         replacable--;
//       } else break;
//     }

//     // handles backward replacability, ex: 'ABBB', k = 1, the above logic would make currentLongest come to 3, the logic below would increment it to 4(accounting for replacability of the back element A)
//     while (currentLongest < s.length) {
//       // currentLongest < s.length: prevents execution for cases: s = 'AAAA' k = 2, currentLongest can be s.length at max
//       if (replacable) {
//         currentLongest++;
//         replacable--;
//       } else break;
//     }

//     longest = Math.max(currentLongest, longest);
//   }
//   return longest;
// };

/**
 * complexity: O(n), space complexit: O(n), strategy: sliding window
 * note: logic available under solution tag(tip: use pen and paper to visualize the sliding window)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let longest = 0;
  const visited = {};
  while (right < s.length) {
    const letter = s[right];
    visited[letter] = (visited[letter] || 0) + 1;
    longest = Math.max(visited[letter], longest);

    const currentWindowSize = right - left + 1;
    if (currentWindowSize - longest > k) {
      visited[s[left]]--;
      left++;
    }
    right++;
  }

  return right - left; // right = s.length
};
// @lc code=end
