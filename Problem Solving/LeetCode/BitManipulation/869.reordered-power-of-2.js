/*
 * @lc app=leetcode id=869 lang=javascript
 *
 * [869] Reordered Power of 2
 */

// @lc code=start
/**
 * approach: permutation + set of power of two
 * https://leetcode.com/problems/reordered-power-of-2/discuss/1121867/JavaScript-Easy-to-understand-4-solutions
 * @param {number} n
 * @return {boolean}
 */
// var reorderedPowerOf2 = function (n) {
//   const set = new Set();
//   for (let i = 1; i < 10 ** 9; i <<= 1) set.add(String(i)); // store all the powers of two in the set
//   return permute(String(n), "", set);
// };

// const permute = (elements, current, set) => {
//   if (elements.length === 1) {
//     return set.has(current + elements[0]);
//   }

//   for (let i = 0; i < elements.length; i++) {
//     if (elements[i] === "0" && current.length === 0) continue; // skip 0 as the first element
//     const next = elements.slice(0, i) + elements.slice(i + 1); // construct the next list of elements: current list of elements - ith element
//     if (permute(next, current + elements[i], set)) return true; // if any of the permutation returns true, we exit
//   }
//   return false;
// };

/**
 * approach: permutation + bit-manipulation power of two
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  return permute(String(n), "");
};

const permute = (elements, current) => {
  if (elements.length === 1) {
    const number = Number(current + elements[0]);
    return (number & (number - 1)) === 0; // is power of two?
  }

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === "0" && current.length === 0) continue; // skip 0 as the first element
    const next = elements.slice(0, i) + elements.slice(i + 1); // construct the next list of elements: current list of elements - ith element
    if (permute(next, current + elements[i])) return true; // if any of the permutation returns true, we exit
  }
  return false;
};
// @lc code=end
