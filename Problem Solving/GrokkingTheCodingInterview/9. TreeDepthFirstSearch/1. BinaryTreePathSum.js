/**
 * Problem Statement:
 * Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf
 * such that the sum of all the node values of that path equals ‘S’.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * complexity:
 * - time: O(n)
 * - space: O(n), in worst case(when tree is a linked list)
 * @param  {TreeNode} root
 * @param  {number} sum
 */
function hasPath(node, sum) {
  if (node === null) {
    return false;
  }

  //if the current node is a leaf and its value is equal to the sum, we've found a path
  const isLeaf = !node.left && !node.rigth;
  if (isLeaf && node.val === sum) return true;

  // recursively call to traverse the left and right sub-tree
  //return true if any of the two recursive call return true
  return (
    hasPath(node.left, sum - node.val) || hasPath(node.right, sum - node.val)
  );
}

/**
 * complexity:
 * - time: O(n)
 * - space: O(n)
 * @param  {TreeNode} root
 * @param  {number} S
 */
// const hasPathSum = (root, targetSum) => {
//   if (!root) return false;

//   let hasPath = false;
//   const binaryTreePathSum = (node, sum) => {
//     const currentSum = sum + node.val;

//     const isLeaf = !node.left && !node.right;
//     if (isLeaf) {
//       if (currentSum === targetSum) hasPath = true;
//       return;
//     }

//     if (node.left) binaryTreePathSum(node.left, currentSum);
//     if (node.right) binaryTreePathSum(node.right, currentSum);
//   };
//   binaryTreePathSum(root, 0);
//   return hasPath;
// };

// SMOKE TEST
// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Tree has path: ${hasPath(root, 23)}`);
// console.log(`Tree has path: ${hasPath(root, 16)}`);
