/**
 * Problem Statement:
 * We are given an unsorted array containing n numbers taken from the range 1 to n.
 * The array has some numbers appearing twice, find all these duplicate numbers using constant space.
 *
 * Example:
 * Input: [3, 4, 4, 5, 5]
 * Output: [4, 5]
 */

/** complexity:
 * - time: O(n)
 * - space: O(1)
 * @param  {} arr
 */
const findAllDuplicates = (arr) => {
  let i = 0;
  while (i < arr.length) {
    const sequenceNum = arr[i];
    if (sequenceNum - 1 === i || arr[i] === arr[sequenceNum - 1])
      i++; // skip; in case of correct index or duplicates
    else [arr[i], arr[sequenceNum - 1]] = [arr[sequenceNum - 1], arr[i]]; //swap
  }
  const duplicates = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] !== idx + 1) duplicates.push(arr[idx]); // all the elements which are not at their respective indexes are duplicates
  }

  return duplicates;
};

// SMOKE TEST
const arr = [3, 4, 4, 5, 5];
console.log(findAllDuplicates(arr));
