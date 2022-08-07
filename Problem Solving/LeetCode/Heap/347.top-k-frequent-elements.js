/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * approach: sorted map
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function (nums, k) {
//   const frequencyCounter = {};
//   for (const num of nums) {
//     frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
//   }

//   const sortedList = Object.entries(frequencyCounter).sort(
//     (a, b) => b[1] - a[1]
//   );
//   const res = [];
//   for (let i = 0; i < k; i++) {
//     res.push(sortedList[i][0]);
//   }
//   return res;
// };
class QUEUE_NODE {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// Priority queue using min-heap(array implementation)
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  bubbleUp = () => {
    let idx = this.queue.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (parentIdx < 0) break;

      const parent = this.queue[parentIdx];
      const child = this.queue[idx];

      if (child.priority < parent.priority) {
        // swap: lowest priority number is served first
        [this.queue[parentIdx], this.queue[idx]] = [
          this.queue[idx],
          this.queue[parentIdx],
        ];
      } else break;
      idx = parentIdx;
    }
  };

  sinkDown() {
    let index = 0;
    const length = this.queue.length;
    while (true) {
      const current = this.queue[index];
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild, swapIdx;

      if (leftChildIndex < length) {
        leftChild = this.queue[leftChildIndex];
        if (leftChild.priority < current.priority) swapIdx = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.queue[rightChildIndex];

        if (
          (!swapIdx && rightChild.priority < current.priority) ||
          (swapIdx !== null && rightChild.priority < leftChild.priority)
        )
          swapIdx = rightChildIndex;
      }

      if (!swapIdx) break;

      [this.queue[swapIdx], this.queue[index]] = [
        this.queue[index],
        this.queue[swapIdx],
      ];
      index = swapIdx;
    }
  }

  enqueue = (val, priority) => {
    const node = new QUEUE_NODE(val, priority);
    this.queue.push(node);
    this.bubbleUp();
    return this.queue;
  };

  dequeue = () => {
    const priorityNode = this.queue[0];
    const lastNode = this.queue.pop();
    if (this.queue.length > 0) {
      this.queue[0] = lastNode;
      this.sinkDown();
    }
    return priorityNode;
  };
}

/**
 * approach: binary heap
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequencyCounter = {};
  for (let num of nums)
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;

  const frequencyArray = Object.entries(frequencyCounter);
  const priorityQueue = new PriorityQueue();
  for (let i = 0; i < frequencyArray.length; i++) {
    if (i < k) {
      priorityQueue.enqueue(frequencyArray[i][0], frequencyArray[i][1]);
    } else {
      if (frequencyArray[i][1] > priorityQueue.queue[0].priority) {
        priorityQueue.enqueue(frequencyArray[i][0], frequencyArray[i][1]);
        priorityQueue.dequeue();
      }
    }
  }

  return priorityQueue.queue.map((x) => x.val);
};
// @lc code=end
