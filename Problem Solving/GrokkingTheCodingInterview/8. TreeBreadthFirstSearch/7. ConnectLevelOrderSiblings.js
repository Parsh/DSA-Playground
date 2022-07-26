/**
 * Problem Statement:
 * Given a binary tree, connect each node with its level order successor.
 * The last node of each level should point to a null node.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
}

const connectSiblings = (root) => {
  if (!root) return root;
  const queue = [root];

  while (queue.length) {
    const size = queue.length;

    let previousNode = null;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (previousNode) previousNode.next = node;
      previousNode = node;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
};

// SMOKE TEST
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connectSiblings(root);
root.print_level_order();
