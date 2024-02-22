var pathSum = function (root, targetSum) {
  let count = 0;
  const findTarget = (root, totalCurrent) => {
    if (totalCurrent + root.val === targetSum) {
      count++;
    }
    if (totalCurrent + root.val > targetSum) {
      totalCurrent = root.val;``
    }
  };
  findTarget(root, count);
  return count;
};
