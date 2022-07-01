/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start

/**
 * complexity O(n)
 * note: 
 *  currentSum: keep tracks of the sum of the current sub array
 *  currentSum reassignement: when currentSum + currentElementValue < currentElementValue, which implies currentSum is -ve
 *  max sum: holds the largest currenSum across all the subarrays
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity
    let currentSum = 0

    for(let i = 0; i < nums.length; i++){
        currentSum = Math.max(currentSum + nums[i], nums[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    
    return maxSum
};
// @lc code=end

