/*
 * @lc app=leetcode id=1220 lang=javascript
 *
 * [1220] Count Vowels Permutation
 */

// @lc code=start
const vowels = ["a", "e", "i", "o", "u"];
const rules = {
  a: ["e"],
  e: ["a", "i"],
  i: ["a", "e", "o", "u"],
  o: ["i", "u"],
  u: ["a"],
};
/**
 * approach: brute force recursion: leads to TLE
 * @param {number} n
 * @return {number}
 */
// var countVowelPermutation = function (n, permutations = []) {
//   if (permutations.length === n) return 1;

//   let count = 0;
//   for (let vowel of vowels) {
//     if (permutations.length) {
//       const lastElement = permutations[permutations.length - 1];
//       if (!rules[lastElement].includes(vowel)) continue;
//     }

//     permutations.push(vowel);
//     count += countVowelPermutation(n, permutations);
//     permutations.pop();
//   }
//   return count % (10 ** 9 + 7);
// };

/**
 * approach: DP bottom-up
 * explanation: https://www.youtube.com/watch?v=VUVpTZVa7Ls
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n, permutations = []) {
  const dp = [[], [1, 1, 1, 1, 1]];
  const [a, e, i, o, u] = [0, 1, 2, 3, 4];
  const mod = 10 ** 9 + 7;

  for (let idx = 2; idx <= n; idx++) {
    dp[idx] = [0, 0, 0, 0, 0];
    dp[idx][a] = (dp[idx - 1][e] + dp[idx - 1][i] + dp[idx - 1][u]) % mod;
    dp[idx][e] = (dp[idx - 1][a] + dp[idx - 1][i]) % mod;
    dp[idx][i] = (dp[idx - 1][e] + dp[idx - 1][o]) % mod;
    dp[idx][o] = dp[idx - 1][i];
    dp[idx][u] = (dp[idx - 1][i] + dp[idx - 1][o]) % mod;
  }

  return dp[n].reduce((a, b) => a + b) % mod;
};
// @lc code=end
