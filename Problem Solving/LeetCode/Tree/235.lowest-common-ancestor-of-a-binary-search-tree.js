/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * approach: iterative
 * compleixty: T: O(logN/H), S: O(1), where H is height of the tree
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function (root, p, q) {
//   let current = root;
//   while (current) {
//     if (p.val < current.val && q.val < current.val)
//       // case: both the values exist on the left subtree
//       current = current.left;
//     else if (p.val > current.val && q.val > current.val)
//       // case: both the values exist on the right subtree
//       current = current.right;
//     else return current; // case: both values diverge into different subtress, therefore, current is the LCA
//   }
// };

/**
 * approach: recursive
 * compleixty: T: O(logN/H), S: O(logN/H)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val)
    // case: both the values exist on the left subtree
    return lowestCommonAncestor(root.left, p, q);
  else if (p.val > root.val && q.val > root.val)
    // case: both the values exist on the right subtree
    return lowestCommonAncestor(root.right, p, q);

  return root; // case: both values diverge into different subtress, therefore, current is the LCA
};
// @lc code=end
