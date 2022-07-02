/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * complexity: O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const frequencyCounter = {}
    for(let i = 0; i < nums.length; i++){
        if(frequencyCounter[nums[i]]) return true
        else frequencyCounter[nums[i]] = true
    }
    return false
};
// @lc code=end

