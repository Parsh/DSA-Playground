/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const backTrack = (permutations, elements) => {
    if (permutations.length === nums.length) {
      result.push([...permutations]);
      return;
    }

    for (const current of elements) {
      permutations.push(current);
      backTrack(
        permutations,
        elements.filter((element) => element !== current)
      );
      permutations.pop();
    }
  };
  backTrack([], nums);
  return result;
};

/**
 * approach: BFS
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const permutations = [];
  const candidates = [[]];
  const permutationSize = nums.length;
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    // we will take all existing candidates and
    // add the current number to create new candidates
    const numberOfCandidates = candidates.length;
    for (let j = 0; j < numberOfCandidates; j++) {
      const oldCandidate = candidates.shift();

      // create a new permutation by adding the current number at every position
      for (let k = 0; k <= oldCandidate.length; k++) {
        const newCandidate = oldCandidate.slice(0);
        newCandidate.splice(k, 0, currentNum);
        if (newCandidate.length === permutationSize)
          permutations.push(newCandidate);
        else candidates.push(newCandidate);
      }
    }
  }
  return permutations;
};
// @lc code=end
