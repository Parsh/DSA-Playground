/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * time complexity: O(n^2), lesser space complexity
 */
//  var twoSum = function(nums, target) {
//      for(let i = 0; i< nums.length; i++){
//         for(let j = i+1; j< nums.length; j++) {
//             if(nums[i] + nums[j] === target) return [i, j]
//         }
//      }
//  }

/**
 * time complexity: O(n), more space complexity
 */
var twoSum = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] !== undefined) {
      return [hashMap[nums[i]], i];
    } else hashMap[target - nums[i]] = i;
  }
};
// @lc code=end
