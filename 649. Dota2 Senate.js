var predictPartyVictory = function (senate) {
  let dTotal = 0;
  let rTotal = 0;
  const sArr = senate.split("");
  for (let i = 0; i < sArr.length; i++) {
    sArr[i] === "D" ? dTotal++ : rTotal++;
  }
  let start = 0;
  let end = 1;
  while (rTotal > 0 && dTotal > 0) {
    while (sArr[start] === "-" || start >= sArr.length) {
      start++;
      if (start >= sArr.length) start = 0;
    }
    while (
      sArr[end] === "-" ||
      end >= sArr.length ||
      sArr[start] === sArr[end]
    ) {
      end++;
      if (end >= sArr.length) end = 0;
    }
    sArr[start] === "D" ? rTotal-- : dTotal--;
    sArr[end] = "-";
    start++;
    end++;
  }
  return rTotal > dTotal ? "Radiant" : "Dire";
};
