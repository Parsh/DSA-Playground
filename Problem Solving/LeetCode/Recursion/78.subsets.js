/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * reference: https://www.youtube.com/watch?v=REOH22Xwdkk
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const powerset = [];

  const dfs = (index, subset) => {
    if (index >= nums.length) {
      powerset.push([...subset]);
      return;
    }

    // decision to include nums[index]
    subset.push(nums[index]);
    dfs(index + 1, subset);

    // decision to note include nums[index]
    subset.pop();
    dfs(index + 1, subset);
  };
  dfs(0, []);
  return powerset;
};

/**
 * approach BFS
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function (nums) {
//   const subsets = [[]]; // initialize with an empty subset

//   for (const num of nums) {
//     // take all existing subsets and insert the current number
//     // in them to create new subsets
//     subsets.forEach((existingSubset) => {
//       subsets.push([...existingSubset, num]);
//     });
//   }
//   return subsets;
// };
// @lc code=end
