/**
 * Problem Statemnt:
 *
 * We are given an array containing n distinct numbers taken from the range 0 to n.
 * Since the array has only n numbers out of the total n+1 numbers, find the missing number.
 *
 * Example:
 * Input: [8, 3, 5, 2, 4, 6, 0, 1]
 * Output: 7
 */

/**
 * complexity:
 * - time: O(n); space: O(n)
 * @param  {number[]} arr
 */
// const findMissingNumber = (arr) => {
//   let sorted = new Array(arr.length + 1);

//   arr.forEach((num) => (sorted[num] = num));
//   for (let idx = 0; idx < sorted.length; idx++) {
//     if (sorted[idx] === undefined) return idx;
//   }
// };

/**
 * complexity:
 * - time: O(n); space: O(1)
 * @param  {number[]} arr
 */
const findMissingNumber = (arr) => {
  let i = 0;
  const n = arr.length;
  while (i < n) {
    const sequencNum = arr[i];
    if (sequencNum === i || sequencNum === n)
      i++; // skip, if the number is at correct position or if it is out of range(equal to n)
    else [arr[i], arr[sequencNum]] = [arr[sequencNum], arr[i]]; // swap
  }

  // find the first number missing from its index, that will be our required number
  for (let idx = 0; idx < n; idx++) {
    if (arr[idx] !== idx) return idx; // the out of range number would be at this index
  }
  return n;
};

// SMOKE TEST
// const arr = [8, 3, 5, 2, 4, 6, 0, 1];
// console.log(findMissingNumber(arr));
