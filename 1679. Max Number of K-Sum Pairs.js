var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  while (nums.length > 1) {
    if (nums[0] + nums[nums.length - 1] === k) {
      ans++;
      nums.pop();
      nums.shift();
    }
    if (nums[0] + nums[nums.length - 1] > k) {
      nums.pop();
    }
    if (nums[0] + nums[nums.length - 1] < k) {
      nums.shift();
    }
  }
  return ans;
};
let nums = [3, 5, 1, 5];
let k = 2;
console.log(maxOperations(nums, k));
