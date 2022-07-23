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
 * two pointer solution: when all the two sum pairs needs to be collected,
 * independent of their order of appearance(sorting allowed)
 * time complexity: O(nlogn)
 */
// var twoSum = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   nums.sort((a, b) => a - b); // O(nlogn)

//   while (left < right) {
//     const sum = nums[left] + nums[right];
//     if (sum === target) {
//       return [left, right];
//     } else if (sum < target) left++;
//     else right--;
//   }
// };

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
