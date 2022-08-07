//  Binary Heap
//  - O to 2 child per parent
//  - parent is always smaller than the child(greater in case of Max Binary Heap),
//    siblings have no relationship tho(unlike binary search tree)
//  - densly packed, insertion happens from left to right

//  Binary Heap :: Array Implementation
// - Childs for a particular parent at index n exists at 2n+1, 2n+2
// - Parent for a particular child at index n is located at Math.floor((n-1)/2)

const BINARY_HEAP_TYPES = {
  MIN: "MIN",
  MAX: "MAX",
};

class BinaryHeap {
  constructor(type) {
    this.values = [];
    this.type = type; // MIN or MAX(BINARY_HEAP_TYPES)
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

      if (this.type === BINARY_HEAP_TYPES.MIN) {
        if (element >= parent) break;
      } else {
        if (element <= parent) break;
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

        if (this.type === BINARY_HEAP_TYPES.MIN) {
          if (leftChild < element) swapIdx = leftChildIdx;
        } else {
          if (leftChild > element) swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (this.type === BINARY_HEAP_TYPES.MIN) {
          if (
            (!swapIdx && rightChild < element) ||
            (swapIdx && rightChild < leftChild)
          )
            swapIdx = rightChildIdx;
        } else {
          if (
            (!swapIdx && rightChild > element) ||
            (swapIdx && rightChild > leftChild)
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
  insert = (element) => {
    this.values.push(element);
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

module.exports = {
  BINARY_HEAP_TYPES,
  BinaryHeap,
};
