/**
 * Given an infinite sorted array (or an array with unknown size), find if a given number ‘key’ is present in the array.
 * Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.
 * Since it is not possible to define an array with infinite (unknown) size, you will be provided with an interface
 * ArrayReader to read elements of the array. ArrayReader.get(index) will return the number at index; if the array’s
 * size is smaller than the index, it will return Integer.MAX_VALUE.
 *
 * Example 1:
 * Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 16
 * Output: 6
 * Explanation: The key is present at index '6' in the array.
 */

class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) {
      return Infinity;
    }
    return this.arr[index];
  }
}

const binarySearch = (reader, start, end, key) => {
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (reader.get(mid) === key) return mid;
    if (reader.get(mid) < key) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};

const searchInInfiniteArray = (reader, key) => {
  let start = 0;
  let end = 1;

  while (reader.get(end) < key) {
    const newStart = end + 1;
    end += (end - start + 1) * 2;
    start = newStart;
  }
  return binarySearch(reader, start, end, key);
};

// SMOKE TEST
// const reader = new ArrayReader([
//   4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
// ]);
// const key = 16;
// console.log(searchInInfiniteArray(reader, key));
