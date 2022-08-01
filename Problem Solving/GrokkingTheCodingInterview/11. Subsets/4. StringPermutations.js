/**
 * Problem Statement:
 * Given a string, find all of its permutations preserving
 * the character sequence but changing case.
 *
 * Example:
 * Input: "ad52"
 * Output: "ad52", "Ad52", "aD52", "AD52"
 */

/**
 * complexity: T:O(N * 2^N) S:O(N * 2^N)
 * explanation: https://designgurus.org/path-player?courseid=grokking-the-coding-interview&unit=grokking-the-coding-interview_1628744066603_70Unit
 */
const stringPermutations = () => {
  const permutations = [str];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!/[a-zA-Z]/.test(char)) continue; // skip numbers
    const n = permutations.length;
    for (let idx = 0; idx < n; idx++) {
      const newPermutation = permutations[idx].split("");
      const changeCaseChar = newPermutation[i];
      if (changeCaseChar === changeCaseChar.toLowerCase())
        newPermutation[i] = changeCaseChar.toUpperCase();
      else newPermutation[i] = changeCaseChar.toLowerCase();

      permutations.push(newPermutation.join(""));
    }
  }
  return permutations;
};

// SMOKE TEST
// const str = "ad52";
// console.log(stringPermutations(str));
