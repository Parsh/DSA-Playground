/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
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
 *     1
 *    / \
 *   2   3
 *      / \
 *     4   5
 * data = [1, 2, null, null, 3, 4, null, null, 5, null, null]
 *
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const encoding = [];

  const encode = (root) => {
    if (root === null) {
      encoding.push("null");
      return;
    }
    encoding.push(root.val);
    encode(root.left);
    encode(root.right);
  };
  encode(root);
  return encoding.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  data = data.split(",");
  const decode = () => {
    if (data.length === 0) return;

    const val = data.shift();
    if (val === "null") return null;

    const node = new TreeNode(val);
    node.left = decode();
    node.right = decode();
    return node;
  };
  return decode();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
