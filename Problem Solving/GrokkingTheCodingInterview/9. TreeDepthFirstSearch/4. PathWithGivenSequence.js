/**
 * Problem Statement:
 * Given a binary tree and a number sequence, find if the sequence is present
 * as a root-to-leaf path in the given tree.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// const findPathWithGivenSequence = (node, sequence, number = 0) => {
//   if (!node) return false;

//   number = 10 * number + node.val;
//   const isLeaf = !node.left && !node.right;
//   if (isLeaf) {
//     const sequenceNum = parseInt(sequence.join(""));
//     if (number === sequenceNum) return true;
//   }

//   return (
//     findPathWithGivenSequence(node.left, sequence, number) ||
//     findPathWithGivenSequence(node.right, sequence, number)
//   );
// };

const findPathWithGivenSequence = (node, sequence, sequenceIndex = 0) => {
  if (!node) return false;
  if (sequenceIndex >= sequence.length && node.val !== sequence[sequenceIndex])
    return false;

  const isLeaf = !node.left && !node.right;
  if (isLeaf && sequenceIndex === sequence.length - 1) return true;

  return (
    findPathWithGivenSequence(node.left, sequence, sequenceIndex + 1) ||
    findPathWithGivenSequence(node.right, sequence, sequenceIndex + 1)
  );
};

// SMOKE TEST
// const root = new TreeNode(1);
// root.left = new TreeNode(0);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(1);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(5);

// console.log(
//   `Tree has path sequence: ${findPathWithGivenSequence(root, [1, 0, 7])}`
// );
// console.log(
//   `Tree has path sequence: ${findPathWithGivenSequence(root, [1, 1, 6])}`
// );
