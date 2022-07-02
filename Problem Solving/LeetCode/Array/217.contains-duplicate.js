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
        // solution pattern 1
        if(frequencyCounter[nums[i]]) return true
        else frequencyCounter[nums[i]] = true

        // solution pattern 2
        // frequencyCounter[nums[i]] = ( frequencyCounter[nums[i]] || 0) + 1
        // if(frequencyCounter[nums[i]] > 1) return true
    }
    return false
};
// @lc code=end

