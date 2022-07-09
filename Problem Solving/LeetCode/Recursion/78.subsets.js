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

// @lc code=end
