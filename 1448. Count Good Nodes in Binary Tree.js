/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  var count = 0;
  const countLeaves = (root, max) => {
    if (!root) return;
    if (root.val >= max) {
      count++;
    }
    countLeaves(root.left, Math.max(root.val, max));
    countLeaves(root.right, Math.max(root.val, max));
  };
  countLeaves(root, root.val);
  return count;
};
