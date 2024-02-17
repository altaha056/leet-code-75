var dailyTemperatures = function (temperatures) {
  let ans = Array(temperatures.length).fill(0);
  let qq = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (qq.length > 0 && temperatures[qq[qq.length - 1]] < temperatures[i]) {
      ans[qq[qq.length - 1]] = i - qq[qq.length - 1];
      qq.pop();
    }
    if (temperatures[i] < temperatures[i + 1]) {
      ans[i] = 1;
    } else {
      qq.push(i);
    }
  }
  return ans;
};

let temperatures = [77, 77, 77, 77, 77, 41, 77, 41, 41, 77];
console.log(dailyTemperatures(temperatures));

//another option
var dailyTemperatures2 = function (temperatures) {
  let curCheck = 0;
  let ans = new Array(temperatures.length).fill(0);
  ans[temperatures.length - 1] = 0;
  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[curCheck] < temperatures[i]) {
      ans[curCheck] = i - curCheck;
      curCheck++;
      i = curCheck;
    }
    if (i == temperatures.length - 1 && curCheck < i) {
      curCheck++;
      i = curCheck;
    }
  }
  return ans;
};
