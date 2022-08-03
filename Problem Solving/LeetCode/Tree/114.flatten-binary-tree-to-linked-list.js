/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * approach: https://www.youtube.com/watch?v=rKnD7rLT0lI
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const dfs = (root) => {
    if (!root) return null;

    const leftTail = dfs(root.left);
    const rightTail = dfs(root.right);

    if (leftTail) {
      leftTail.right = root.right;
      root.right = root.left;
      root.left = null;
    }

    return rightTail || leftTail || root;
  };
  dfs(root);
};
// @lc code=end
