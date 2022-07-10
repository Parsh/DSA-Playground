/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start
/**
 * complexity: time and space O(n^2) :: naive iterative solution
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function (matrix, k) {
//   const array = [];
//   for (const row of matrix) {
//     array.push(...row);
//   }
//   array.sort((a, b) => a - b);
//   return array[k - 1];
// };

/**
 * Concept: binary search on nxn matrix
 * When we have a regular sorted 2d array, we use range of index to find our target. for example, lo = 0, hi = length-1, mid = (lo+hi)/2.
 * if the target is greater than the number at index mid, then we search the right portion, if it’s smaller, we search the left.
 * However, in this 2d matrix sorted array, it is impossible to find such mid index. The intuition here is to use a range of numbers to test
 * against our k. We know the first number is the smallest and the last number is the largest, this means our target number must be something in between.
 * We can use those two numbers as our lo and hi, and set our mid to be the number in between, and check how many of the numbers in the matrix
 * are smaller than that number and adjust lo and hi accordingly. When we get exactly k numbers, we know we have found our answer.
 * The extremely tricky part here is that just by looking at how we calculate mid, a lot of times the number we are testing agaist may not even in the matrix,
 * because in the end, the numbers we are using are just arbitrary numbers. To explain this we need to imagine that our program is at a stage where lo and hi
 * are almost going to hit each other. if we counted less numbers than expected, we will set lo=mid+1, this potentially just increment our mid by 1(as lo and hi are going to hit and are roughly the same numbers).
 * And by increment our mid 1 by 1, We can make sure the numbers is included in the matrix.
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length - 1;
  let matrix_min = matrix[0][0]; // first row's first element is the smallest in the matrix(as the matrix is sorted in ascending order in both dimensions)
  let matrix_high = matrix[n][n]; // last row's last element is the largest in the matrix(as the matrix is sorted in ascending order in both dimensions)

  // iterate till matrix_min and matrix_high hit one another
  while (matrix_min < matrix_high) {
    const mid = Math.floor((matrix_min + matrix_high) / 2);
    // console.log({ matrix_min, mid, matrix_high });

    const count = getCount(mid, matrix);
    // console.log({ count });
    if (count < k) matrix_min = mid + 1;
    else matrix_high = mid;
  }
  return matrix_high; // or return matrix_low or mid
};

const getCount = (mid, matrix) => {
  let count = 0;
  // iterate over the matrix, finding the number of elements smaller than mid
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix.length; column++) {
      if (matrix[row][column] <= mid) count++;
      else break; // jump to next row(as all the elements in this row would be > mid)
    }
  }
  return count;
};
// @lc code=end
