/**
 * Problem Statement:
 *
 * Given a binary tree, populate an array to represent its zigzag level order
 * traversal. You should populate the values of all nodes of the first level
 * from left to right, then right to left for the next level and keep alternating
 * in the same manner for the following levels.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const zigZagTraversal = (root) => {
  if (!root || root.length === 0) return [];

  const result = [];
  const queue = [root];

  let leftToRight = true;
  while (queue.length) {
    const currentSize = queue.length;
    const currentLevelValues = [];

    for (let i = 0; i < currentSize; i++) {
      const node = queue.shift();

      if (leftToRight) currentLevelValues.push(node.val);
      else currentLevelValues.unshift(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevelValues);
    leftToRight = !leftToRight;
  }
  return result;
};

// SMOKE TEST
// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(zigZagTraversal(root));
