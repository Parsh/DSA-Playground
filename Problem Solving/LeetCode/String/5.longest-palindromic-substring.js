/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * note: brute force solution would be to iterate over all the
 * sub-strings which would render time complexity O(n^3),  n(palindrome check) * n^2 (num of substring: n(n+1)/2)
 *
 * side note: Given a string of n elements,
 * If you start with 1st element, you can form n sub-strings
 * If you start with 2nd element, you can form n-1 sub-strings .... so on...
 * As you can see, the total is n + (n-1) + (n-2) ...1 i.e. sum of n elements which is n(n+1)/2
 *
 * Reference Video: https://www.youtube.com/watch?v=XYQecbcd6_c, expanding from center(taking of the advantage of the symmetry of palindrome from the center)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestPalin = "";
  for (let i = 0; i < s.length; i++) {
    // case: odd(number of char) palindrome
    // begin both the pointer at the center and expand outwards
    let left = i;
    let right = i;
    longestPalin = expandOut(s, longestPalin, left, right);

    // case: even(number of char) palindrome
    left = i;
    right = i + 1;
    longestPalin = expandOut(s, longestPalin, left, right);
  }
  return longestPalin;
};

var expandOut = (s, longestPalin, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    const currentPalindromeLength = right - left + 1;
    if (currentPalindromeLength > longestPalin.length)
      longestPalin = s.slice(left, right + 1);

    // expand outwards
    left--;
    right++;
  }
  return longestPalin;
};
// @lc code=end
