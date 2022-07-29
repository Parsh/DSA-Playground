/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
var preorderTraversal = function (root) {
  const stack = [];
  const visited = [];
  if (!root) return stack;

  while (root || stack.length) {
    if (root) {
      visited.push(root.val); // add before going to children
      stack.push(root);
      root = root.left;
    } else {
      const node = stack.pop();
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
// var preorderTraversal = function (root, preorder = []) {
//   if (!root) return preorder;

//   preorder.push(root.val);
//   preorderTraversal(root.left, preorder);
//   preorderTraversal(root.right, preorder);
//   return preorder;
// };
// @lc code=end
