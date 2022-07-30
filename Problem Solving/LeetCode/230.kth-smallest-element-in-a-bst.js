/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * approach: perform inorder traversal, k times(iterative stack)
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      const node = stack.pop();
      k--;
      if (k === 0) return node.val;
      root = node.right;
    }
  }
};

/**
 * approach: perform inorder traversal, k times(recursively)
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function (root, k) {
//   let number;
//   const helper = (node) => {
//     if (!node) return null;
//     helper(node.left);
//     k--;
//     if (k == 0) number = node.val;
//     helper(node.right);
//   };
//   helper(root);
//   return number;
// };
// @lc code=end
