var longestZigZag = function (root) {
  let max = 0;
  const traverse = (root, streak, direction) => {
    if (!root) return;
    max = Math.max(max, streak);
    if (direction) {
      traverse(root.left, streak + 1, !direction);
      traverse(root.right, 1, direction);
    } else {
      traverse(root.left, 1, direction);
      traverse(root.right, streak + 1, !direction);
    }
  };
  if (!root) return 0;
  traverse(root.right, 1, true);
  traverse(root.left, 1, false);
  return max;
};
