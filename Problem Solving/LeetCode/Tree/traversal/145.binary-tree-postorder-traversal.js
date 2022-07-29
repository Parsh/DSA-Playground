/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function (root) {
  const stack = [];
  const visited = [];
  if (!root) return stack;

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      visited.unshift(root.val); // reverse the process of preorder
      root = root.right; // reverse the process of preorder
    } else {
      const node = stack.pop();
      root = node.left; // reverse the process of preorder
    }
  }
  return visited;
};

/*
 * approach: recursive
 * @param {TreeNode} root
 * @return {number[]}
 */
// var postorderTraversal = function (root, postorder = []) {
//   if (!root) return postorder;

//   postorderTraversal(root.left, postorder);
//   postorderTraversal(root.right, postorder);
//   postorder.push(root.val);
//   return postorder;
// };
// @lc code=end
