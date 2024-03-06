/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  const recursive = (start, end) => {
    const mid = Math.floor((start + end) / 2);
    if (guess(mid) === 0) return mid;
    if (guess(mid) === 1) return recursive(mid + 1, end);
    if (guess(mid) === -1) return recursive(start, mid - 1);
  };
  return recursive(0, n);
};
