/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * approach: DFS
 * reference: https://www.youtube.com/watch?v=s9fokUqJ76A
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const stack = [];
  const results = [];

  const backTrack = (open, close) => {
    // console.log({ open, close });
    // console.log({ stack });
    if (open === n && close === n) {
      return results.push(stack.join(""));
    }

    if (open < n) {
      stack.push("(");
      backTrack(open + 1, close);
      stack.pop();
      // console.log({ popped_open: open + 1 });
    }

    if (close < open) {
      stack.push(")");
      backTrack(open, close + 1);
      stack.pop();
      // console.log({ popped_close: close + 1 });
    }
  };
  backTrack(0, 0);
  return results;
};

// class ParenthesisString {
//   constructor(str, open, close) {
//     this.str = str;
//     this.open = open;
//     this.close = close;
//   }
// }

/**
 * approach: BFS
 * @param  {} n
 */
// const generateParenthesis = (n) => {
//   const results = [];
//   const queue = [new ParenthesisString("", 0, 0)];
//   while (queue.length) {
//     const ps = queue.shift();
//     if (ps.open === n && ps.close === n) {
//       results.push(ps.str);
//     } else {
//       if (ps.open < n) {
//         queue.push(new ParenthesisString(ps.str + "(", ps.open + 1, ps.close));
//       }
//       if (ps.close < ps.open) {
//         queue.push(new ParenthesisString(ps.str + ")", ps.open, ps.close + 1));
//       }
//     }
//   }
//   return results;
// };

// @lc code=end
