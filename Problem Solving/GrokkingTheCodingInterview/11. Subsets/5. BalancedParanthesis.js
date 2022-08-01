/**
 * Problem Statement:
 * For a given number ‘N’, write a function to generate all combination
 * of ‘N’ pairs of balanced parentheses.
 *
 * Example:
 * Input: N=3
 * Output: ((())), (()()), (())(), ()(()), ()()()
 */

class ParenthesisString {
  constructor(str, open, close) {
    this.str = str;
    this.open = open;
    this.close = close;
  }
}

const generateParenthesis = (n) => {
  const results = [];
  const queue = [new ParenthesisString("", 0, 0)];
  while (queue.length) {
    const ps = queue.shift();
    if (ps.open === n && ps.close === n) {
      results.push(ps.str);
    } else {
      if (ps.open < n) {
        queue.push(new ParenthesisString(ps.str + "(", ps.open + 1, ps.close));
      }
      if (ps.close < ps.open) {
        queue.push(new ParenthesisString(ps.str + ")", ps.open, ps.close + 1));
      }
    }
  }
  return results;
};

// SMOKE TEST
// const n = 3;
// console.log(generateParenthesis(n));
