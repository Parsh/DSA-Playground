/**
 * Problem Statement:
 *
 * Given a binary tree, populate an array to represent its level-by-level traversal.
 * You should populate the values of all nodes of each level from left to right in separate sub-arrays.
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

    result.unshift(currentLevelValues);
    if (nextLevel.length) queue.push(nextLevel);
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
// console.log(reverseLevelOrderTraversal(root));
