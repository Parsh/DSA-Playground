/**
 * Problem Statement
 * Given ‘N’ ropes with different lengths, we need to connect these ropes into one
 * big rope with minimum cost. The cost of connecting two ropes is equal to the sum of their lengths.
 *
 * Example 1:
 * Input: [1, 3, 11, 5]
 * Output: 33
 * Explanation: First connect 1+3(=4), then 4+5(=9), and then 9+11(=20). So the total cost is 33 (4+9+20)
 */

const { BinaryHeap, BINARY_HEAP_TYPES } = require("./utils/BinaryHeap");

const connectRopes = (ropes) => {
  const minHeap = new BinaryHeap(BINARY_HEAP_TYPES.MIN);
  for (let rope of ropes) minHeap.insert(rope);

  let costToConnect = 0;
  while (minHeap.values.length > 1) {
    const firstSmallest = minHeap.extractTop();
    const secondSmallest = minHeap.extractTop();
    costToConnect += firstSmallest + secondSmallest;
    minHeap.insert(firstSmallest + secondSmallest);
  }
  return costToConnect;
};

// SMOKE TEST
// const ropes = [1, 3, 11, 5, 2];
// console.log(connectRopes(ropes));
