/**
 * Problem:
 * We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
 * The array has only one duplicate but it can be repeated multiple times.
 * Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.
 *
 * Example:
 * Input: [1, 4, 4, 3, 2]
 * Output: 4
 */

const findDuplicate = (arr) => {
  let i = 0;
  while (i < arr.length) {
    const sequenceNum = arr[i];
    if (sequenceNum - 1 === i || arr[i] === arr[sequenceNum - 1]) i++;
    else [arr[i], arr[sequenceNum - 1]] = [arr[sequenceNum - 1], arr[i]]; // swap
  }

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] !== idx + 1) return arr[idx];
  }
};

// SMOKE TEST
const arr = [1, 4, 4, 3, 2];
console.log(findDuplicate(arr));
