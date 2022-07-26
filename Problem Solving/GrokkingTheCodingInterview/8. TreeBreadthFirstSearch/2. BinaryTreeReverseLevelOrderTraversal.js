/**
 * Problem Statement:
 * Given a binary tree, populate an array to represent its level-by-level traversal
 * in reverse order, i.e., the lowest level comes first. You should populate the values
 * of all nodes in each level from left to right in separate sub-arrays.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const reverseLevelOrderTraversal = (root) => {
  if (!root || root.length === 0) return [];

  const result = [];
  const queue = [root];
  while (queue.length) {
    const currentSize = queue.length;
    const currentLevelValues = [];

    for (let i = 0; i < currentSize; i++) {
      const node = queue.shift();
      currentLevelValues.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.unshift(currentLevelValues);
  }
  return result;
};

// SMOKE TEST
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(reverseLevelOrderTraversal(root));
