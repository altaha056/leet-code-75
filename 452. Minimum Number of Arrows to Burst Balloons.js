var findMinArrowShots = function (points) {
  let ans = [];
  let p = points.sort((a, b) => a[0] - b[0]);
  for (const range of p) {
    if (ans.length > 0 && ans[ans.length - 1][1] >= range[0]) {
      const topStack = ans.pop();
      ans.push([
        Math.max(topStack[0], range[0]),
        Math.min(topStack[1], range[1]),
      ]);
    } else {
      ans.push(range);
    }
  }
  console.log(ans);
  return ans.length;
};
let points = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
console.log(findMinArrowShots(points));
