/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * note: The intuition is that we store the information about our previous maximum product, 
 * and as we iterate through the array, we keep using our previous maximum to calculate the new maximum product. 
 * The tricky part of this problem is that negative numbers exist in the input array. 
 * This causes situations where the smallest previous product (a negative number) can become the largest product if the next number in line is also a negative number. 
 * Since the minimum product may have a chance to become the maximum, we need to store the information about the previous minimum as well and take it into account when we are calculating our maximum product
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prevMax = 1
    let prevMin = 1
    let maxProd = -Infinity

    for(let i = 0; i < nums.length; i++){

        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        const currentMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i])
        const currentMin = Math.min(prevMin * nums[i], nums[i], prevMax * nums[i])

        maxProd = Math.max(currentMax, maxProd)
        prevMax = currentMax
        prevMin = currentMin
    }
    return maxProd
};
// @lc code=end

