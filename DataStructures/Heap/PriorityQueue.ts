class QUEUE_NODE {
  public val: string;
  public priority: number;
  constructor(val: string, priority: number) {
    this.val = val;
    this.priority = priority;
  }
}

// Priority queue using min-heap(array implementation)
class PriorityQueue {
  public queue: any;
  constructor() {
    this.queue = [];
  }

  public bubbleUp = () => {
    let idx = this.queue.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (parentIdx < 0) break;

      const parent: QUEUE_NODE = this.queue[parentIdx];
      const child: QUEUE_NODE = this.queue[idx];

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

  public sinkDown() {
    let index = 0;
    const length = this.queue.length;
    while (true) {
      const current: QUEUE_NODE = this.queue[index];
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

  public enqueue = (val: string, priority: number) => {
    const node = new QUEUE_NODE(val, priority);
    this.queue.push(node);
    this.bubbleUp();
    return this.queue;
  };

  public dequeue = () => {
    const priorityNode = this.queue[0];
    const lastNode = this.queue.pop();
    if (this.queue.length > 0) {
      this.queue[0] = lastNode;
      this.sinkDown();
    }
    return priorityNode;
  };
}

// SMOKE TEST
// const pqueue = new PriorityQueue();
// console.log(pqueue.enqueue("Knee injury", 7));
// console.log(pqueue.enqueue("Gun shot", 1));
// console.log(pqueue.enqueue("Cough", 14));
// console.log(pqueue.enqueue("Cold", 10));

// console.log(pqueue.dequeue());
// console.log(pqueue.dequeue());
// console.log(pqueue.dequeue());
