var eraseOverlapIntervals = function (intervals) {
  let ans = 0;
  let a = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {}
  return ans;
};
let intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];

console.log(eraseOverlapIntervals(intervals));
