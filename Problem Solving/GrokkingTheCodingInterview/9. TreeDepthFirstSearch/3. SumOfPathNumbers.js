/**
 * Problem Statement:
 * Given a binary tree where each node can only have a digit (0-9) value,
 * each root-to-leaf path will represent a number. Find the total sum of
 * all the numbers represented by all paths.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * note: non optimal approach, complexity(S-T): nlogn
 * @param  {} node
 * @param  {} allPathNumbers
 * @param  {} currentPath=[]
 */
// const findPathNumbersRecursively = (node, allPathNumbers, currentPath = []) => {
//   if (!node) return;
//   currentPath.push(node.val);

//   const isLeaf = !node.left && !node.right;
//   if (isLeaf) allPathNumbers.push(currentPath.join(""));
//   else {
//     if (node.left)
//       findPathNumbersRecursively(node.left, allPathNumbers, currentPath);
//     if (node.right)
//       findPathNumbersRecursively(node.right, allPathNumbers, currentPath);
//   }

//   currentPath.pop();
// };

// const sumOfPathNumbers = (root) => {
//   const allPathNumbers = [];
//   findPathNumbersRecursively(root, allPathNumbers);
//   return allPathNumbers.reduce((a, b) => parseInt(a) + parseInt(b));
// };

/**
 * complexity: T:O(n) S:O(n)
 * @param  {} node
 * @param  {} number=0
 */
const sumOfPathNumbers = (node, number = 0) => {
  if (!node) return 0;

  // recursively construct the number corresponding to the path under traversal
  number = 10 * number + node.val;

  // return the number, once we reach the leaf(path end)
  const isLeaf = !node.left && !node.right;
  if (isLeaf) return number;

  // return the addition the sum of the left subtree and the right subtree
  return (
    sumOfPathNumbers(node.left, number) + sumOfPathNumbers(node.right, number)
  );
};

// SMOKE TEST
// const root = new TreeNode(1);
// root.left = new TreeNode(0);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(1);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(5);
// console.log(`Total Sum of Path Numbers: ${sumOfPathNumbers(root)}`);
