/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root || root.length === 0) return [];

  const result = [];
  const queue = [[root]];
  while (queue.length) {
    const siblings = queue.shift(); // siblings at current level

    const currentLevelValues = []; // values of the current level siblings
    const nextLevel = []; // nodes at next level

    for (let i = 0; i < siblings.length; i++) {
      // iterate over each sibling node, push in the values and gather its child for the next stage
      const node = siblings[i];
      currentLevelValues.push(node.val);

      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    result.push(currentLevelValues);
    if (nextLevel.length) queue.push(nextLevel);
  }
  return result;
};
// @lc code=end
