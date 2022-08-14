/*
 * @lc app=leetcode id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */

// @lc code=start
/**
 * approach: cross-map w/ multiple-pass
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// var getHint = function (secret, guess) {
//   let bulls = 0;
//   let cows = 0;
//   const secretCounter = {};
//   const guessCounter = {};
//   for (let i = 0; i < secret.length; i++) {
//     if (secret[i] === guess[i]) bulls++;
//     else {
//       secretCounter[secret[i]] = (secretCounter[secret[i]] || 0) + 1;
//       guessCounter[guess[i]] = (guessCounter[guess[i]] || 0) + 1;
//     }
//   }

//   for (let digit in secretCounter) {
//     if (guessCounter[digit] !== undefined) {
//       cows += Math.min(secretCounter[digit], guessCounter[digit]);
//     }
//   }

//   return `${bulls}A${cows}B`;
// };

/**
 * approach: single pass
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0;
  let cows = 0;
  const numbers = Array(10).fill(0);
  for (let i = 0; i < secret.length; i++) {
    const s = parseInt(secret[i]);
    const g = parseInt(guess[i]);
    if (s === g) bulls++;
    else {
      if (numbers[s] < 0) cows++; // found a decremented slot(g was here)
      if (numbers[g] > 0) cows++; // found an incremented slot(s was here)
      numbers[s]++; // increments the slot
      numbers[g]--; // decrements the slot
    }
  }

  return `${bulls}A${cows}B`;
};

// @lc code=end
