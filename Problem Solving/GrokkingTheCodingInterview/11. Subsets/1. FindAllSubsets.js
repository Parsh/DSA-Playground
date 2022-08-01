/**
 * Problem Statement:
 * Given a set with distinct elements, find all of its distinct subsets.
 *
 * Example:
 * Input: [1, 5, 3]
 * Output: [], [1], [5], [1,5], [3], [1,3], [5,3], [1,5,3]
 */

const findSubsets = (nums) => {
  const subsets = [[]]; // initialize with an empty subset

  for (const num of nums) {
    // take all existing subsets and insert the current number
    // in them to create new subsets

    const n = subsets.length;
    for (let i = 0; i < n; i++) {
      const newSub = subsets[i].slice(0);
      newSub.push(num);
      subsets.push(newSub);
    }
  }
  return subsets;
};

// SMOKE TEST
const arr = [1, 5, 3];
console.log(findSubsets(arr));
