/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * approach: https://www.youtube.com/watch?v=ihj4IQGZ2zc
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;

  const node = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);
  node.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  node.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return node;
};
// @lc code=end
