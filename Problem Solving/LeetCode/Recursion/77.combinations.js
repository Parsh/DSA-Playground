/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * concept: backtracking, approx complexity: O(n^k)
 * reference: https://www.youtube.com/watch?v=q0s6m7AiM7o
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  const backTrack = (start, comb) => {
    if (comb.length === k) {
      // k acts as the depth of the decision tree
      result.push([...comb]);
      return;
    }

    for (let i = start; i <= n; i++) {
      // for each iteration we can go k steps down into the decision tree before back tracking
      comb.push(i);
      backTrack(i + 1, comb);
      comb.pop();
    }
  };
  backTrack(1, []);
  return result;
};
// @lc code=end
