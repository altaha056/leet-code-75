var decodeString = function (s) {
  let stack = [];
  let count = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let cur = "";
      while (stack.length > 0 && stack[stack.length - 1] !== "[") {
        cur = stack.pop() + cur;
      }
      stack.pop();
      while (!isNaN(stack[stack.length - 1]) && stack.length > -1) {
        count = stack.pop() + count;
      }
      let repeated = multiply(count, cur);
      count = "";
      stack.push(repeated);
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

let multiply = (count, sentence) => {
  let ans = "";
  for (let i = 0; i < count; i++) {
    ans += sentence;
  }
  return ans;
};

let s = "100[leetcode]";
console.log(decodeString(s));

// awal = 0, start-1
//'['== start
//']'==end+1
//akhir = end+2, s.length
