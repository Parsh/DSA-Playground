/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start

/**
 * complexity O(n^2)
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//     const answers = []
//     for(let i = 0; i< nums.length; i++){
//         let product = 1
//         for(let j = 0; j< nums.length; j++){
//             if(i !== j) product = product * nums[j]
//         }
//         answers[i] = product
//     }
//     return answers
// };

/**
 * complexity O(n)
 * note: calcuate both the left product for a given index and
 * then the right product(and multiply them together)
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answers = [];
    let leftProduct = 1; // holds the product of elements left of a given index
    let rightProduct = 1; // holds the product of elements right of a given index

    for(let i = 0; i < nums.length; i++){
        answers[i] = leftProduct
        leftProduct = leftProduct * nums[i]
    }

    for(let j = nums.length - 1; j >= 0; j--){
        answers[j] = answers[j] * rightProduct
        rightProduct = rightProduct * nums[j]
    }

    return answers;
};
// @lc code=end

