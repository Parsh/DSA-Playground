/**
 * Problem Statement:
 * Given a sorted array, create a new array containing squares of all
 * the numbers of the input array in the sorted order.
 *
 * Example:
 * Input: [-2, -1, 0, 2, 3]
 * Output: [0, 1, 4, 4, 9]
 */

const square = (array) => {
  const squared = new Array(array.length);
  let squareIndex = squared.length - 1;
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const leftSquare = array[left] * array[left];
    const rightSquare = array[right] * array[right];
    if (leftSquare >= rightSquare) {
      squared[squareIndex] = leftSquare;
      left++;
    } else {
      squared[squareIndex] = rightSquare;
      right--;
    }
    squareIndex--;
  }

  return squared;
};

// SMOKE TEST
const array = [-2, -1, 0, 2, 3];
console.log(square(array));
