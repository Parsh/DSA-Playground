/**
 * Problem statement:
 * Given a sorted array of numbers, find if a given number ‘key’ is present
 * in the array. Though we know that the array is sorted, we don’t know if
 * it’s sorted in ascending or descending order.
 * You should assume that the array can have duplicates.
 *
 * Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.
 */

const orderAgnosticBinarySearch = (nums, key) => {
  let low = 0;
  let high = nums.length - 1;

  const isAscending = nums[low] < nums[high];
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === key) return mid;
    if (nums[mid] < key) {
      if (isAscending) low = mid + 1;
      else high = mid - 1;
    } else {
      if (isAscending) high = mid - 1;
      else low = mid + 1;
    }
  }
  return -1;
};

// SMOKE TEST
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const key = 5;
// console.log(orderAgnosticBinarySearch(nums, key));
