/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start

/**
 * complexity O(n)
 * note: 
 *  prevSum: keep tracks of the sum of the current sub array
 *  prevSum reassignement: when prevSum + currentElementValue < currentElementValue, which implies prevSum is -ve
 *  max sum: holds the largest prevSum across all the subarrays
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity
    let prevSum = 0

    for(let i = 0; i < nums.length; i++){
        const currentSum = Math.max(prevSum + nums[i], nums[i])
        maxSum = Math.max(currentSum, maxSum)
        prevSum = currentSum
    }
    
    return maxSum
};
// @lc code=end

