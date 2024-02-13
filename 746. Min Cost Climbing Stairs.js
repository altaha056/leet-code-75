var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  let first = cost[0];
  let second = cost[1];
  console.log(first, second);
  if (n <= 2) return Math.min(first, second);
  for (let i = 2; i < n; i++) {
    let cur = cost[i] + Math.min(first, second);
    first = second;
    second = cur;
    console.log(first, second);
  }
  return Math.min(first, second);
};

let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost));
