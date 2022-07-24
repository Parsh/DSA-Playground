/**
 * Problem Statement:
 * Given two lists of intervals, find the intersection of these two lists.
 * Each list consists of disjoint intervals sorted on their start time.
 *
 * Example:
 * Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
 * Output: [2, 3], [5, 6], [7, 7]
 * Explanation: The output list contains the common intervals between the two lists.
 */

const intervalIntersection = (intervals1, intervals2) => {
  let startIndex = 0;
  let endIndex = 1;
  let overlaps = [];
  let i = 0;
  let j = 0;

  while (i < intervals1.length && j < intervals2.length) {
    const currentInterval1 = intervals1[i];
    const currentInterval2 = intervals2[j];

    // check whether the start of the interavls falls into each others interval range
    const interval1OverlapsInterval2 =
      currentInterval2[startIndex] <= currentInterval1[startIndex] && // is interval1's start in the range of interval2?
      currentInterval1[startIndex] <= currentInterval2[endIndex];

    const interval2OverlapsInterval1 =
      currentInterval1[startIndex] <= currentInterval2[startIndex] && // is interval2's start in the range of interval1?
      currentInterval2[startIndex] <= currentInterval1[endIndex];

    if (interval1OverlapsInterval2 || interval2OverlapsInterval1) {
      const overlapStart = Math.max(
        currentInterval1[startIndex],
        currentInterval2[startIndex]
      );
      const overlapEnd = Math.min(
        currentInterval1[endIndex],
        currentInterval2[endIndex]
      );
      overlaps.push([overlapStart, overlapEnd]);
    }

    // move next from the interval which is finishing first
    if (currentInterval1[endIndex] < currentInterval2[endIndex]) {
      i++;
    } else {
      j++;
    }
  }
  return overlaps;
};

// SMOKE TEST
const intervals1 = [
  [1, 3],
  [5, 6],
  [7, 9],
];
const intervals2 = [
  [2, 3],
  [5, 7],
];
console.log(intervalIntersection(intervals1, intervals2));
