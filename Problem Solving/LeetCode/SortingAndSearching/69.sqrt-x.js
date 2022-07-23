/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * note:
 * remember that the square root of each X must happen within [1, x/2 + 1]
 * also, the tricky point is that we will return right if there is no integer square root found
 * reason being that the square root is between [n-1, n] and we know that when while loop exhausts then right must be n-1
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = Math.floor(x / 2) + 1;
  let mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    const square = mid * mid;
    if (square === x) return mid;
    else if (square < x) left = mid + 1;
    else right = mid - 1;
  }

  return right; // as if mid x mid > x, and (mid - 1) * (mid - 1) < x,
  // we would like to return mid-1, which right gets equated to
};
// @lc code=end
