/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * note: a comprehensive guide on Binary Search(w/ templates): https://leetcode.com/explore/learn/card/binary-search/136/template-analysis/935/
 * binary search application on different problems: https://leetcode.com/problems/first-bad-version/discuss/769685/Python-Clear-explanation-Powerful-Ultimate-Binary-Search-Template.-Solved-many-problems
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // exits once left === right
  while (left < right) {
    // const mid = Math.floor((lo + hi) / 2) // worst way to calculate mid: very easy to overflow
    const mid = left + Math.floor((right - left) / 2);

    if (target > nums[mid])
      left = mid + 1; // exclude mid(already smaller than target)
    else right = mid; // include mid(it could be the possible solution)
    // console.log({ left, mid, right });
  }
  return nums[left] === target ? left : -1;
};
// @lc code=end
