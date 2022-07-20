/**
 * Problem Statement:
 * Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers
 * of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.s
 *
 * Example:
 * Input: [1, 0, 2, 1, 0]
 * Output: [0 0 1 1 2]
 */

/**
 * concept:
 * We can use a Two Pointers approach while iterating through the array.
 * Let’s say the two pointers are called low and high which are pointing to the first
 * and the last element of the array respectively. So while iterating, we will move all
 * 0s before low and all 2s after high so that in the end, all 1s will be between low and high
 */
const dutchFlagSort = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  let i = low;

  while (i < high) {
    switch (arr[i]) {
      case 0:
        [arr[i], arr[low]] = [arr[low], arr[i]];
        low++;
        i++;
        break;

      case 1:
        i++;
        break;

      case 2:
        [arr[i], arr[high]] = [arr[high], arr[i]];
        high--;
        break;
    }
  }
  return arr;
};

// SMOKE TEST
const arr = [1, 0, 2, 1, 0];
console.log(dutchFlagSort(arr));
