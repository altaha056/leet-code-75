var longestOnes = function (nums, k) {
  let max = 0;
  let stage = [];
  let l = k;
  for (let i = 0; i < nums.length; i++) {
    stage.push(nums[i]);
    if (nums[i] === 0) {
      l--;
      if (l === -1) {
        stage.splice(0, stage.indexOf(0) + 1);
        l++;
      }
    }
    max = Math.max(max, stage.length);
  }
  return max;
};
let nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
let k = 3;
console.log(longestOnes(nums, k));
