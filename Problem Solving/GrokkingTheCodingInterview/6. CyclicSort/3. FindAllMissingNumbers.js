/**
 * Problem Statemnt:
 *
 * We are given an unsorted array containing numbers taken from the range 1 to ‘n’.
 * The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.
 * Example:
 * Input: [2, 3, 1, 8, 2, 3, 5, 1]
 * Output: [4, 6, 7]
 */

/**
 * complexity:
 * - time: O(n); space: O(1)
 * @param  {number[]} arr
 */
const findAllMissingNumber = (arr) => {
  let i = 0;
  while (i < arr.length) {
    const sequenceNum = arr[i];

    // continue if the element is at its aprropriate index or is a duplicate
    if (sequenceNum - 1 === i || arr[i] === arr[sequenceNum - 1]) i++;
    else [arr[i], arr[sequenceNum - 1]] = [arr[sequenceNum - 1], arr[i]]; // swap
  }

  const missingNumbers = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] - 1 !== idx) missingNumbers.push(idx + 1);
  }
  return missingNumbers;
};

// SMOKE TEST
// const arr = [2, 3, 1, 8, 2, 3, 5, 1];
// console.log(findAllMissingNumber(arr));
