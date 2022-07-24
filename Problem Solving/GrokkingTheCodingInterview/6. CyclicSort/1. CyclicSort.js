/**
 * Problem Statemnt:
 *
 * We are given an array containing n objects. Each object, when created, was assigned a unique number
 * from the range 1 to n based on their creation sequence. This means that the object with sequence number 3
 * was created just before the object with sequence number 4.
 *
 * Write a function to sort the objects in-place on their creation sequence number
 * in O(n) and without using any extra space
 *
 * Example:
 * Input: [3, 1, 5, 4, 2]
 * Output: [1, 2, 3, 4, 5]
 */

/**
 * complexity:
 * - time: O(n); space: O(1)
 * @param  {number[]} arr
 */
const cyclicSort = (arr) => {
  let i = 0;
  while (i < arr.length) {
    const sequenceNum = arr[i];
    if (sequenceNum - 1 === i) i++; // the number is at the appropriate index
    else [arr[i], arr[sequenceNum - 1]] = [arr[sequenceNum - 1], arr[i]]; // place the number at the corresponding index
  }
  return arr;
};

// SMOKE TEST
// const arr = [3, 1, 5, 4, 2];
// console.log(cyclicSort(arr));
