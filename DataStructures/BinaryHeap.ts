//  Max Binary Heap
//  - O to 2 child per parent
//  - parent is always greater than the child(smaller in case of Min Binary Heap),
//    siblings have no relationship tho(unlike binary search tree)
//  - densly packed, insertion happens from left to right

// Max Binary Heap :: Array Implementation
// - Childs for a particular parent at index n exists at 2n+1, 2n+2
// - Parent for a particular child at index n is located at Math.floor((n-1)/2)

class MaxBinaryHeap {
  public values: number[];
  constructor() {
    this.values = [];
  }

  /**
   * Places the newly inserted element at the proper position
   * by swapping the newly inserted element with its parent, iteratively,
   * if parent's value is smaller than that of the inserted element
   */
  public bubbleUp = () => {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (parentIdx < 0) break;
      const parent = this.values[parentIdx];

      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  };

   
  /**
   * sinks down the first element to its correct position by iteratively
   * swapping it with its largest child(if any)
   */
  public sinkDown = () => {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild, swapIdx;
    
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) swapIdx = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (!swapIdx && rightChild > element) ||
          (swapIdx && rightChild > (leftChild as number))
        )
          swapIdx = rightChildIdx;
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
  public insert = (element: number) => {
    this.values.push(element);
    this.bubbleUp();
  };

  /**
   * Extracts the max element from the heap and re-adjusts the elements
   * in order to abide by the constraints of the max binary heap
   */
  public extractMax = () => {
    const max = this.values[0];
    const lastItem = this.values.pop()
    if(this.values.length > 0){
        this.values[0] = lastItem as number; // place the last element at the beginning and then sink it down
        this.sinkDown();
    }
    return max;
  };
}

// SMOKE TEST
// const heap = new MaxBinaryHeap();
// heap.insert(10);
// heap.insert(20);
// heap.insert(30);
// heap.insert(40);
// heap.insert(1);
// heap.insert(25);

// console.log(heap.values);
// heap.extractMax()
// console.log(heap.values);
// heap.extractMax()
// console.log(heap.values);

