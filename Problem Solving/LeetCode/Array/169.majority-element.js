/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * time complexity: O(nlogn): sorting, space complexity: O(1)
 * note: sort the array and we'll find the majority element at num.length/2
 * @param {number[]} nums
 * @return {number}
 */
//  var majorityElement = function(nums) {
//     return nums.sort()[Math.floor(nums.length/2)]
// };

/**
 * time complexity: O(n), space complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const frequencyCounter = {}
    const majorityElementThreshold = Math.floor(nums.length / 2)
    for(let i = 0; i < nums.length; i++){
        const element = nums[i]
        frequencyCounter[element] = (frequencyCounter[element] || 0) + 1
        if(frequencyCounter[element] > majorityElementThreshold) return element
    }
};
// @lc code=end

