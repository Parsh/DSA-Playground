/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * complexity: O(n*2^n)
 * reference: https://www.youtube.com/watch?v=Vn2v6ajA7U0
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const powerset = [];
  nums.sort((a, b) => a - b);

  const backtrack = (index, subset) => {
    if (index === nums.length) {
      powerset.push([...subset]);
      return;
    }

    // all subset that include nums[index]
    subset.push(nums[index]);
    backtrack(index + 1, subset);

    // all subsets that do not include nums[index]
    subset.pop();
    // increment index, till we skip all the duplicates(for why? checkout the decision tree visualization in the reference video)
    // basically, we want to skip the duplicates in the non-inclusion branch as it would collide with the inclusion branch
    while (index < nums.length && nums[index + 1] === nums[index]) index++;
    backtrack(index + 1, subset);
  };
  backtrack(0, []);
  return powerset;
};
// @lc code=end
