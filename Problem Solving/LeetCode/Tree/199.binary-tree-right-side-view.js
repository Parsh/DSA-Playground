/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * approach: BFS
 * complexity: T:O(n), S:O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const sideView = [];
  if (!root) return sideView;

  const queue = [root];
  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (i == 0) sideView.push(node.val);

      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
  }
  return sideView;
};

/**
 * approach: DFS
 * complexity: T:O(n), S:O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
// var rightSideView = function (root) {
//   const sideView = [];
//   if (!root) return sideView;

//   // the right-most node overwrites the sideView element at a given index(depth), i.e, sideView[depth] = right-most node at that level
//   const generateRightSideView = (node, sideView, depth) => {
//     if (!node) return;
//     sideView[depth] = node.val;
//     generateRightSideView(node.left, sideView, depth + 1);
//     generateRightSideView(node.right, sideView, depth + 1);
//   };

//   generateRightSideView(root, sideView, 0);
//   return sideView;
// };
// @lc code=end
