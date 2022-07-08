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
// @lc code=end
