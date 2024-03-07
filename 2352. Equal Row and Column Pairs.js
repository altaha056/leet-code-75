var equalPairs = function (grid) {
  if (grid[0].length != grid.length) return null;
  let count = 0;
  let rows = {};
  let cols = {};
  grid.forEach((v, i) => {
    rows[i] = v.toString();
  });
  for (let i = 0; i < grid.length; i++) {
    let cur = "";
    for (let j = 0; j < grid.length; j++) {
      cur += j === grid.length - 1 ? grid[j][i] : grid[j][i] + ",";
    }
    cols[i] = cur;
  }
  for (let r in rows) {
    for (let c in cols) {
      if (rows[r] === cols[c]) {
        count++;
      }
    }
  }
  return count;
};
let grid = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];
console.log(equalPairs(grid));
