/**
 * Problem Statement:
 * Given a binary tree and a number ‘S’, find all paths from root-to-leaf
 * such that the sum of all the node values of each path equals ‘S’.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * note: not optimal
 * @param  {} root
 * @param  {} targetSum
 */
// var pathSum = function (root, targetSum) {
//   if (!root) return [];

//   const allPaths = [];
//   const binaryTreePathSum = (node, path) => {
//     path.push(node.val);
//     const isLeaf = !node.left && !node.right;
//     if (isLeaf) {
//       const total = path.reduce((a, b) => a + b);
//       if (total === targetSum) allPaths.push(path);
//       return;
//     }
//     if (node.left) binaryTreePathSum(node.left, [...path]);
//     if (node.right) binaryTreePathSum(node.right, [...path]);
//   };

//   binaryTreePathSum(root, []);
//   return allPaths;
// };

const findPathsRecursively = (node, target, allPaths, currentPath = []) => {
  if (!node) return;

  // add the current node to the path
  currentPath.push(node.val);

  // if the current node is a leaf and its value is equal to target, save the current path
  const isLeaf = !node.left && !node.right;
  if (isLeaf && target === node.val) allPaths.push([...currentPath]);
  else {
    // traverse the left sub-tree
    if (node.left)
      findPathsRecursively(node.left, target - node.val, allPaths, currentPath);
    // traverse the right sub-tree
    if (node.right)
      findPathsRecursively(
        node.right,
        target - node.val,
        allPaths,
        currentPath
      );
  }

  // remove the current node from the path to backtrack,
  // we need to remove the current node while we are going up the recursive call stack
  currentPath.pop();
};

/**
 * complexity: https://designgurus.org/path-player?courseid=grokking-the-coding-interview&unit=grokking-the-coding-interview_1628743930963_55Unit
 * - time: O(nlogn)
 * - space: O(nlogn)
 * @param  {} root
 * @param  {} target
 */
const findAllPaths = (root, target) => {
  const allPaths = [];
  findPathsRecursively(root, target, allPaths);
  return allPaths;
};

// SMOKE TEST
// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(4);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(findAllPaths(root, 23));
