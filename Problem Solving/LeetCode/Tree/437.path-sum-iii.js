/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * complexity:
 * - time: O(n^2) for skewed tree, O(nlogn) for balanced tree
 * - space: O(n); recursion stack
 * @param {TreeNode} node
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (node, targetSum, currentPath = []) {
  if (!node) return 0;
  currentPath.push(node.val);

  let pathCount = 0;
  let total = 0;
  // check whether with the newly pushed node there exists a subpath which equates to the target value
  for (let i = currentPath.length - 1; i >= 0; i--) {
    // starting the subPath hunt from the newly added node
    total += currentPath[i];
    // console.log({ total, currentPath });
    if (total === targetSum) {
      pathCount++;
    }
  }

  pathCount += pathSum(node.left, targetSum, currentPath); // traverse the left sub-tree
  pathCount += pathSum(node.right, targetSum, currentPath); // traverse the right sub-tree

  // backtracking
  currentPath.pop();
  return pathCount;
};
// @lc code=end
