/**
 * Problem Statement:
 * Given an array of points in a 2D2D plane, find ‘K’ closest points to the origin.
 *
 * Input: points = [[1,2],[1,3]], K = 1
 * Output: [[1,2]]
 * Explanation: The Euclidean distance between (1, 2) and the origin(0, 0) is sqrt(5).
 * The Euclidean distance between (1, 3) and the origin is sqrt(10).
 * Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.
 */

const {
  ModifiedBinaryHeap,
  MODIFIED_BINARY_HEAP_TYPES,
} = require("./utils/ModifiedBinaryHeap");

const findKClosestPointToOrigin = (points, k) => {
  const x = 0;
  const y = 1;
  const origin = [0, 0]; // can be easily changed to other targets

  const maxHeap = new ModifiedBinaryHeap(MODIFIED_BINARY_HEAP_TYPES.MAX);
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    // euclidean distance formula: √(x1 - x2)^2 + (y1 - y2)^2)
    const distance = Math.sqrt(
      (point[x] - origin[x]) ** 2 + (point[y] - origin[y]) ** 2
    );

    if (i < k) maxHeap.insert(point, distance);
    else {
      if (distance < maxHeap.values[0].val) {
        maxHeap.insert(point, distance);
        maxHeap.extractTop();
      }
    }
  }

  return maxHeap.values.map((element) => element.key);
};

// SMOKE TEST
// const points = [
//   [1, 3],
//   [3, 4],
//   [2, -1],
// ];
// const k = 2;
// console.log(findKClosestPointToOrigin(points, k));
