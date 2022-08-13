/**
 * Problem Statement
 * Design a class to efficiently find the Kth largest element in a stream of numbers.
 * The class should have the following two things:
 * - The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
 * - The class should expose a function add(int num) which will store the given number and return the Kth largest number.
 */

const { BinaryHeap, BINARY_HEAP_TYPES } = require("./utils/BinaryHeap");

class KthLargestNumberInStream {
  constructor(array, k) {
    this.minHeap = new BinaryHeap(BINARY_HEAP_TYPES.MIN);
    this.k = k;
    array.forEach((num) => this.add(num));
  }

  add = (num) => {
    this.minHeap.insert(num);
    if (this.minHeap.values.length > this.k) this.minHeap.extractTop();
    return this.minHeap.values[0];
  };
}

// SMOKE TEST
// const kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
// console.log(`4th largest number is: ${kthLargestNumber.add(6)}`);
// console.log(`4th largest number is: ${kthLargestNumber.add(13)}`);
// console.log(`4th largest number is: ${kthLargestNumber.add(4)}`);
