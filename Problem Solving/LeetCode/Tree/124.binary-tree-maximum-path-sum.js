/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let result = root.val;

  const depthFirstSearch = (root) => {
    if (root === null) return 0;

    // compute left/right max, include only if they are non-negative
    const leftMax = Math.max(0, depthFirstSearch(root.left));
    const rightMax = Math.max(0, depthFirstSearch(root.right));

    // computes max path sum with the split
    result = Math.max(result, root.val + leftMax + rightMax);
    // returns max path sum without split(so that it can be consumed by the parent node)
    const nonSplitSum = Math.max(root.val + leftMax, root.val + rightMax);
    return nonSplitSum;
  };
  depthFirstSearch(root);
  return result;
};
// @lc code=end
