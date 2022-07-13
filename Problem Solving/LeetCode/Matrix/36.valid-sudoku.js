/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const n = board.length;
  const rows = [];
  const cols = [];
  const squares = [];

  for (let i = 0; i < n; i++) {
    rows.push(new Set());
    cols.push(new Set());
    squares.push(new Set());
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      const num = board[row][col];
      if (num === ".") continue;

      // computing square index that would uniquely correspond to array index(0...8)
      const squareIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (
        rows[row].has(num) ||
        cols[col].has(num) ||
        squares[squareIndex].has(num)
      )
        return false;

      rows[row].add(num);
      cols[col].add(num);
      squares[squareIndex].add(num);
    }
  }

  return true;
};
// @lc code=end
