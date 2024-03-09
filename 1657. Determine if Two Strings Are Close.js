var closeStrings = function (word1, word2) {
  if (word1.length != word2.length) return false;
  let wordA = {};
  let wordB = {};
  for (let i = 0; i < word1.length; i++) {
    wordA[word1[i]] > 0 ? wordA[word1[i]]++ : (wordA[word1[i]] = 1);
    wordB[word2[i]] > 0 ? wordB[word2[i]]++ : (wordB[word2[i]] = 1);
  }
  if (
    Object.keys(wordA).sort().toString() ==
      Object.keys(wordB).sort().toString() &&
    Object.values(wordA).sort().toString() ==
      Object.values(wordB).sort().toString()
  )
    return true;
  return false;
};
let word1 = "a";
let word2 = "aa";
console.log(closeStrings(word1, word2));
