/**
 * Problem Statement:
 * Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’.
 *
 * Example 1:
 * Input: [4, 6, 10], key = 7
 * Output: 6
 * Explanation: The difference between the key '7' and '6' is minimum than any other number in the array
 */

const minimumDifference = (nums, key) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === key) return nums[mid]; // return if key exists in the list

    if (nums[mid] < key) left = mid + 1;
    else right = mid - 1;
  }

  // at the end of the loop, left = right + 1
  const leftDiff = Math.abs(key - nums[left]);
  const rightDiff = Math.abs(key - nums[right]);
  if (leftDiff < rightDiff) return nums[left];
  else return nums[right];
};

// SMOKE TEST
// const nums = [1, 3, 8, 10, 15];
// const key = 12;
// console.log(minimumDifference(nums, key));
