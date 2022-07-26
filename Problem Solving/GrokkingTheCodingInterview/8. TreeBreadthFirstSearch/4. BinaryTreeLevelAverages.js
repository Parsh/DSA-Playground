/**
 * Problem Statement:
 * Given a binary tree, populate an array to represent the averages of all of its levels
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelAverages = (root) => {
  if (!root) return [];

  const averages = [];
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    let levelTotal = 0;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      levelTotal += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    averages.push(levelTotal / size);
  }

  return averages;
};

// SMOKE TEST
// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.left.right = new TreeNode(2);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Level averages are: ${levelAverages(root)}`);
