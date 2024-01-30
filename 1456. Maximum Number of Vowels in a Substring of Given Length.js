var maxVowels = function (s, k) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > k - 1 && s[i - k].match(/[aeiou]/gi) != null) {
      count--;
    }
    if (s[i].match(/[aeiou]/gi)) {
      count++;
    }
    max = Math.max(max, count);
  }
  return max;
};

let s = "aeiou";
let k = 2;
console.log(maxVowels(s, k));
