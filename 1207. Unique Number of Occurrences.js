var uniqueOccurrences = function (arr) {
  const freq = new Map();
  for (const x of arr) {
    freq.set(x, (freq.get(x) || 0) + 1);
  }
  console.log(freq);
  const s = new Set(freq.values());
  console.log(s);
  return freq.size === s.size;
};

let arr = [1, 2, 2, 1, 1, 2, 3];
console.log(uniqueOccurrences(arr));
