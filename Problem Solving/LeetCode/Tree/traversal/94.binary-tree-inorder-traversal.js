/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * approach: iterative stack
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const stack = [];
  const visited = [];
  if (!root) return stack;

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      const node = stack.pop();
      visited.push(node.val); // add after all left children
      root = node.right;
    }
  }
  return visited;
};

/**
 * approach: recursive
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function (root, inorder = []) {
//   if (!root) return inorder;

//   inorderTraversal(root.left, inorder);
//   inorder.push(root.val);
//   inorderTraversal(root.right, inorder);
//   return inorder;
// };
// @lc code=end
