/**
 * Problem Statement:
 * Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.
 *
 * Example:
 * Input: Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
 * Output: [2.2, 2.8, 2.4, 3.6, 2.8]
 */

/**
 * time complexity: O(n)
 * concept: sliding window w/ window size fixed
 */
const findSubArrayAverage = (array, k) => {
  const averages = [];
  let currentSum = 0;

  // intialize the start and end pointers of the window
  let start = 0;
  let end = 0;

  // start expanding the window by moving its end till it reaches the size k
  while (end < array.length) {
    currentSum += array[end];

    // slide the window(?), no need to slide if we've not hit the window size of 'k'
    if (end >= k - 1) {
      // or (end - start === k - 1)
      averages.push(currentSum / k);
      currentSum -= array[start]; // subtract the element going out
      start++; // slide the window ahead
    }

    end++;
  }
  return averages;
};

// SMOKE TEST
// const array = [1, 3, 2, 6, -1, 4, 1, 8, 2];
// const k = 5;
// console.log(findSubArrayAverage(array, k));
