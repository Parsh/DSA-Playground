/*
 * @lc app=leetcode id=767 lang=javascript
 *
 * [767] Reorganize String
 */

// @lc code=start

const MODIFIED_BINARY_HEAP_TYPES = {
  MIN: "MIN",
  MAX: "MAX",
};

class HeapElement {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

class ModifiedBinaryHeap {
  constructor(type) {
    this.values = [];
    this.type = type; // MIN or MAX(MODIFIED_BINARY_HEAP_TYPES)
  }

  /**
   * Places the newly inserted element at the proper position
   * by swapping the newly inserted element with its parent, iteratively,
   * if parent's value is smaller than that of the inserted element
   */
  bubbleUp = () => {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (parentIdx < 0) break;
      const parent = this.values[parentIdx];

      if (this.type === MODIFIED_BINARY_HEAP_TYPES.MIN) {
        if (element.val >= parent.val) break;
      } else {
        if (element.val <= parent.val) break;
      }

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  };

  /**
   * sinks down the first element to its correct position by iteratively
   * swapping it with its largest child(if any)
   */
  sinkDown = () => {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild, swapIdx;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (this.type === MODIFIED_BINARY_HEAP_TYPES.MIN) {
          if (leftChild.val < element.val) swapIdx = leftChildIdx;
        } else {
          if (leftChild.val > element.val) swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (this.type === MODIFIED_BINARY_HEAP_TYPES.MIN) {
          if (
            (!swapIdx && rightChild.val < element.val) ||
            (swapIdx && rightChild.val < leftChild.val)
          )
            swapIdx = rightChildIdx;
        } else {
          if (
            (!swapIdx && rightChild.val > element.val) ||
            (swapIdx && rightChild.val > leftChild.val)
          )
            swapIdx = rightChildIdx;
        }
      }

      if (!swapIdx) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }
  };

  /**
   * Inserts an element into the heap at an apt position
   * @param  {number} element
   */
  insert = (key, val) => {
    this.values.push(new HeapElement(key, val));
    this.bubbleUp();
  };

  /**
   * Extracts the top element from the heap and re-adjusts the elements
   * in order to abide by the constraints of the given binary heap
   */
  extractTop = () => {
    const top = this.values[0];
    const lastItem = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = lastItem; // place the last element at the beginning and then sink it down
      this.sinkDown();
    }
    return top;
  };
}

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const frequencyCounter = {};
  for (let char of s)
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;

  const maxHeap = new ModifiedBinaryHeap(MODIFIED_BINARY_HEAP_TYPES.MAX);
  for (let key in frequencyCounter) maxHeap.insert(key, frequencyCounter[key]);

  let rearranged = "";
  let previousChar = null;
  let previousCharFrequencey = null;
  while (maxHeap.values.length) {
    const mostFrequent = maxHeap.extractTop();
    rearranged += mostFrequent.key;

    if (previousChar && previousCharFrequencey > 0)
      maxHeap.insert(previousChar, previousCharFrequencey);

    previousChar = mostFrequent.key;
    previousCharFrequencey = mostFrequent.val - 1;
  }

  return rearranged.length === s.length ? rearranged : "";
};

// @lc code=end
