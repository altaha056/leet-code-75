var longestSubarray = function (nums) {
  nums = nums.join("").split("0");
  if (nums.length == 1) return nums[0].length - 1;
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i].length + nums[i - 1].length);
  }
  return max;
};

//another option
var longestSubarray2 = function (nums) {
  let left = 0;
  let result = 0;
  let zeroCount = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    if (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    if (zeroCount <= 1) {
      result = Math.max(result, right - left);
    }
  }
  return result;
};
let nums = [1, 1, 0, 0, 1, 1, 1, 0, 1];
console.log(longestSubarray(nums));
