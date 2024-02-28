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
var maxLevelSum = function (root) {
  let curMax = -Infinity;
  let level = 0;
  let ans = 0;
  const queue = [root];
  while (queue.length > 0) {
    const qLen = queue.length;
    level++;
    let curSum = 0;
    for (let i = 0; i < qLen; i++) {
      const curNode = queue.shift();
      curSum += curNode.val;
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }
    if (curSum > curMax) {
      curMax = curSum;
      ans = level;
    }
  }
  return ans;
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

console.log(maxLevelSum(root));
