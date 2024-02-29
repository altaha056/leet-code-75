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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root || root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  return searchBST(root.right, val);
};

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Example binary tree
const root = new TreeNode(
  3,
  new TreeNode(9, new TreeNode(25), new TreeNode(-7)),
  new TreeNode(
    18,
    new TreeNode(15),
    new TreeNode(
      -6,
      new TreeNode(17),
      new TreeNode(-10, new TreeNode(9), new TreeNode(14))
    )
  )
);

console.log(searchBST(root));
