/**
 * Problem Statement:
 * Given a binary tree and a number ‘S’, find all paths in the tree such that
 * the sum of all the node values of each path equals ‘S’.
 * Please note that the paths can start or end at any node but all paths must
 * follow direction from parent to child (top to bottom).
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * note:
 * As -ve values are allowed, therefore, even tho the current path total is greater than the target value,
 * that doesn't nullify the case that we can still find the case where current path total is equal to target
 * as the current path expands
 *
 * complexity:
 * - time: O(n^2) for skewed tree, O(nlogn) for balanced tree
 * - space: O(n); recursion stack
 * @param  {} node
 * @param  {} targetSum
 * @param  {} currentPath=[]
 */
const countPathsForASum = (node, targetSum, currentPath = []) => {
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

  pathCount += countPathsForASum(node.left, targetSum, currentPath); // traverse the left sub-tree
  pathCount += countPathsForASum(node.right, targetSum, currentPath); // traverse the right sub-tree

  // backtracking
  currentPath.pop();
  return pathCount;
};

// SMOKE TEST

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${countPathsForASum(root, 11)}`);
