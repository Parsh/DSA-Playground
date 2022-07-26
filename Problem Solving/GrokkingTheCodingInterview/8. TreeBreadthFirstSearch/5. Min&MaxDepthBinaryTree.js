/**
 * Problem Statement:
 * Find the minimum depth of a binary tree. The minimum depth is the number of nodes
 * along the shortest path from the root node to the nearest leaf node.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param  {TreeNode} root
 */
const minimumDepth = (root) => {
  if (!root) return [];

  const queue = [root];
  let minimumDepth = 0;

  while (queue.length) {
    const size = queue.length;
    minimumDepth++;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (!node.left && !node.right) return minimumDepth;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
};

/**
 * note: maximum depth of a tree is also known as height of the tree
 * @param  {TreeNode} root
 */
var maximumDepth = function (root) {
  if (!root) return [];

  const queue = [root];
  let maximumDepth = 0;

  while (queue.length) {
    const size = queue.length;
    maximumDepth++;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return maximumDepth;
};

// SMOKE TEST
// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Tree Minimum Depth: ${minimumDepth(root)}`);
// root.left.left = new TreeNode(9);
// root.right.left.left = new TreeNode(11);
// console.log(`Tree Minimum Depth: ${minimumDepth(root)}`);

/**
 * Problem Statement:
 * Find the maximum depth of a binary tree. The maximum depth is the number of nodes
 * along the path from the root node to the farthest leaf node.
 */
