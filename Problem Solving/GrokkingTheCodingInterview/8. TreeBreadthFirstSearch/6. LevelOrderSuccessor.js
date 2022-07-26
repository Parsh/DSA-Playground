/**
 * Problem Statement:
 * Given a binary tree and a node, find the level order successor of the given node
 * in the tree. The level order successor is the node that appears right after the
 * given node in the level order traversal.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const findLevelOrderSuccessor = (root, searchVal) => {
  if (!root) return root;
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    if (node.val === searchVal) break;
  }
  return queue.shift();
};

// SMOKE TEST
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// console.log(findLevelOrderSuccessor(root, 3));
