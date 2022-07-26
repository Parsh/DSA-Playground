/*
 * @lc app=leetcode id=1161 lang=javascript
 *
 * [1161] Maximum Level Sum of a Binary Tree
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
var maxLevelSum = function (root) {
  if (!root) return [];
  const queue = [root];
  let currentLevel = 1;

  let maximumVal = root.val;
  let maxValLevel = currentLevel;

  while (queue.length) {
    const size = queue.length;
    let levelTotal = 0;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      levelTotal += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (levelTotal > maximumVal) {
      maximumVal = levelTotal;
      maxValLevel = currentLevel;
    } else if (levelTotal === maximumVal) {
      maxValLevel = Math.min(maxValLevel, currentLevel);
    }

    currentLevel++;
  }
  return maxValLevel;
};
// @lc code=end
