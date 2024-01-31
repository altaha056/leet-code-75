var canBeEqual = function (target, arr) {
  arr.sort((a, b) => a - b);
  target.sort((a, b) => a - b);
  for (let i = 0; i < target.length; i++) {
    if (arr[i] != target[i]) return false;
  }
  return true;
};
let target = [1, 2, 3, 4];
let arr = [2, 4, 1, 3];
console.log(canBeEqual(target, arr));
